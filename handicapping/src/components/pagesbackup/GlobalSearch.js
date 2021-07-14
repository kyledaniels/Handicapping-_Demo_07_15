import React from 'react';
import Data from '../Data/Table';
import Table from '../Table/Table';
import TransactionTable from '../TransactionTable/TransactionTable'


class PlayerSearch extends React.Component {
   constructor(props){
      super(props)
      this.state = {records: [],
                    isLoaded:false,
                    playerId:"",
                    playerName:"",
                    firstName:" ",
                    lastName:"",
                    Acct12:" ",
                    winnings:"",
                    alias:"",
                    mandatoryCount:"",
                    optionalCount:"",
                    contestNumber:"",
                    tournamentNumber:"",
                    title:{
                     "player Id":288426,
                     "player Name":"Johnny Acct12",
                     "firs tName":"Johnny",
                     "last Name":"Acct12",
                     "email":"acct12@gmail.com",
                     "winnings":"114.60",
                     "alias":"diggler12",
                     "mandatory Count":4,
                     "optional  Count":6
                   }
                  };       
                } 
               
  renderTableData() {

    return this.state.records.map((record, index) => {
       const {playerId ,playerName ,firstName ,lastName,email,winnings,alias,mandatoryCount,optionalCount} = record //destructuring
       return (
         
          <tr key={playerId}>
             <td>{playerId}</td>
             <td>{playerName}</td>
             <td>{firstName}</td>
             <td>{lastName}</td>
             <td>{email}</td>
             <td>{winnings}</td>
             <td>{alias}</td>
             <td>{mandatoryCount}</td>
             <td>{optionalCount}</td>
         </tr>
       )
    })
 }

 renderTableHeader() {

    let header = Object.keys(this.state.title)
    return header.map((key, index) => {
       return <th key={index}>{key.toUpperCase()}</th>
    })

   
  
 }

  refreshPage = ()=>{
      window.location.reload()
   }

   handleChange = (event) => {
   this.setState({[event.target.name]: event.target.value});
 }

 playerForm = (player) =>{
 
   let api_string = `https://fplajyoxsj.execute-api.eu-west-2.amazonaws.com/alpha/playerSummaries?playerId=${player}`
    fetch(api_string)
   .then(res => res.json())
   .then(json =>{
        this.setState({
            isLoaded: true,
            records: json.records,
        }) 
   })
   console.log('playerForm')
}

contestForm = (contest) =>{
   
   let api_string = `https://fplajyoxsj.execute-api.eu-west-2.amazonaws.com/alpha/playerSummaries?contestNumber=${contest}`
    fetch(api_string)
   .then(res => res.json())
   .then(json =>{
        this.setState({
            isLoaded: true,
            records: json.records,
        }) 
   })
   console.log("Contest Form")
}


  handleSubmit = (event) => {
   event.preventDefault();

   // let apiUrl = 'https://fplajyoxsj.execute-api.eu-west-2.amazonaws.com/alpha/playerSummaries?contestNumber=1'
   
   
   
   //  fetch(apiUrl)
   // .then(res => res.json())
   // .then(json =>{
   //      this.setState({
   //          isLoaded: true,
   //          records: json.records,   

   //      })
        
   // });
   
   if (this.state.playerId) {
      this.playerForm(this.state.playerId)
     }

     if (this.state.contestNumber) {
      this.contestForm(this.state.contestNumber)
     }
  



   this.setState ({
      playerId:"",
      playerName:"",
      firstName:" ",
      lastName:"",
      Acct12:" ",
      winnings:"",
      alias:"",
      mandatoryCount:"",
      optionalCount:"",
     })
   
   
    
}

    render(){
       const {currentSort} = this.state;
       return (

         
      <React.Fragment>

         <div className="exceptions">
        <h2><strong>Summary</strong></h2> 
         </div>

       <div className="summary-search" >
         <form onSubmit={this.handleSubmit}>
            <div className="summarytop-row">
            <input className= "exceptions-search1" type="text" value={this.state.playerId} name="playerId" onChange={this.handleChange} placeholder="Player ID"/>
            <input className= "exceptions-search1" type="text" value={this.state.contestNumber} name="contestNumber" onChange={this.handleChange} placeholder="Contest"/>            
            <input className= "exceptions-search1" type="text" value={this.state.value} name="name" onChange={this.handleChange} placeholder="Tournament"/> 
            </div>

            <div>
            <button className="search-button"  type="submit">Search</button>
            </div>
            <button className="summaryClear-button"  type="submit" onClick={event=>this.refreshPage(event)}>Clear Table Data</button>
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

    
    
  



