import React from 'react';
import Data from '../Data/Table';
import Table from '../Table/Table';
import TransactionTable from '../TransactionTable/TransactionTable'

class PlayerSearch extends React.Component {
   
   constructor(props){
      super(props)
      this.state = {leaderboardrecords: [],
                    isLoaded:false,
                    playerId:"",
                    contestNumber:"",
                    tournamentNumber:"",
                    title:{
                     "player Id": 1,
                     "player Name" : "Vincent Achilarre",
                     "Winnings" : 5940,
                     "Position" : 1,
                     "mandatory Count" : 2,
                     "optional Count" : 3,
                     "previous position":0
                   }
                  };       
                }  

  renderTableData() {
    return this.state.leaderboardrecords.map((leaderboardrecord, index) => {
       const {playerId ,playerName ,winnings,position,mandatoryCount,optionalCount,previousPosition} = leaderboardrecord //destructuring
       return (
         
          <tr key={playerId}>
             <td>{playerId}</td>
             <td>{playerName}</td>
             <td>{winnings}</td>
             <td>{position}</td>
             <td>{mandatoryCount}</td>
             <td>{optionalCount}</td>
             <td>{previousPosition}</td>
          </tr>
       )
    })
 }

 renderTableHeader() {
         
    let header = Object.keys(this.state.title)
    return header.map((key, index) => {
       return <th key={index}>{key.toUpperCase()}</th>
    })

   
   //    return <tr>
   //    <th>Player Name</th>
   //    <th>Total Bets</th>
   //    <th>Winnings</th>
   //    <th>Mandatory Count</th>
   //    <th id="last-column">Optional Count</th>
   //  </tr>
  
  
 }

 refreshPage = ()=>{
   window.location.reload()
}

  handleChange = (event) => {
   this.setState({[event.target.name]: event.target.value});
 }

 contestForm = (contest) =>{
   
   let api_string = `https://fplajyoxsj.execute-api.eu-west-2.amazonaws.com/alpha/leaderboard?contestNumber=${contest}`
    fetch(api_string)
   .then(res => res.json())
   .then(json =>{
        this.setState({
            isLoaded: true,
            leaderboardrecords: json.records,
        }) 
   })
   console.log("Contest Form")
}


  handleSubmit = (event) => {
   

   // let apiUrl = 'https://fplajyoxsj.execute-api.eu-west-2.amazonaws.com/alpha/leaderboard?contestNumber=1&offset=0'
   
   // let query = this.setState({[event.target.name]: event.target.value});
   
   //  fetch(apiUrl)
   // .then(res => res.json())
   // .then(json =>{
   //      this.setState({
   //          isLoaded: true,
   //         leaderboardrecords: json.records,   
   //      })
   // });
   // if (this.state.contestNumber) {
   //    this.contestForm(this.state.contestNumber)
   //   }

  let   api_string = 'https://fplajyoxsj.execute-api.eu-west-2.amazonaws.com/alpha/leaderboard'
   let  query_spacer = '?'
  let   query_string = ""
     
     let contestNumber = this.state.constestNumber;
     let tournamentNumber = this.state.tournamentNumber;
     console.log(contestNumber)
     
     if (this.state.contestNumber) {
       query_string += query_spacer + "contestNumber="+ this.state.contestNumber;
       query_spacer = "&"
       console.log('hello world')
     }
     if (this.state.tournamentNumber) {
       query_string += query_spacer + "tournamentNumber="+ tournamentNumber;
       query_spacer = "&"
       console.log('hello')
     }
     
     
     fetch(api_string + query_string)
     .then(res => res.json())
     .then(json =>{
          this.setState({
              isLoaded: true,
              leaderboardrecords: json.records,
          }) 
     })
     console.log("Contest Form")

   
  this.setState ({
   contestNumber:'',
   tournamentNumber:"",
   playerName:'',
   playerId: '',
   totalBets:'',
   winnings:'',
   mandatoryCount:'',
   optionalCount:''
  })
   
   
   // {
   //    .then(res => res.json())
   //    .then(json =>{
   //         this.setState({
   //             isLoaded: true,
   //             records: json.records,
   //         })  
 
 
 
   //     method: 'GET',
      
   //     // We convert the React state to JSON and send it as the POST body
   //     // body: JSON.stringify(this.state)
   //   }).then(function(response) {
   //     console.log(response)
   //     return response.json();
   //   });

   event.preventDefault();
}

    render(){
       return (

         
      <React.Fragment>

         <div className="exceptions">
        <h2><strong>Leaderboards</strong></h2> 
         </div>

         <div className="exceptions">
        <h2><strong>Overall</strong></h2> 
         </div> 

       <div className="exceptions-search" >
         <form>
            <div className="top-row">
            <input className= "exceptions-search1" type="text" value={this.state.contestNumber} name="contestNumber" onChange={this.handleChange} placeholder="Contest"/>
            <input className= "exceptions-search1" type="text" value={this.state.tournamentNumber} name="tournamentNumber" onChange={this.handleChange} placeholder="Tournament"/>            
            </div>
     
            <div>
            <button className="search-button"  type="submit"onClick={event=>this.handleSubmit(event)} >Search</button>
            </div>
            <button className="clear-button"  type="submit" onClick={event=>this.refreshPage(event)}>Clear Table Data</button>
         </form>
        </div>          

       <div>
        <table id='students'>
           <tbody>
           <tr>{this.renderTableHeader()}</tr>
              {this.renderTableData()}
           </tbody>
       </table>
     </div>
      
  
                          
                
                

                
         
                 
             
          

           
      
      </React.Fragment>
       )
       
   }
  }

export default PlayerSearch

    
    
  



