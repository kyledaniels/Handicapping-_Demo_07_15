import React from 'react';
import Data from '../Data/Table';
import Table from '../Table/Table';
import TransactionTable from '../TransactionTable/TransactionTable'

class PlayerSearch extends React.Component {
   
   constructor(props){
      super(props)
      this.state = {leaderboardrecords: [],
                    isLoaded:false,
                    playerId: "",
                    playerName : "",
                    Winnings : "",
                    Position : "",
                    mandatoryCount : "",
                    optionalCount : "",
                    previousposition:"",
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

  handleChange = (event) => {
   this.setState({[event.target.name]: event.target.value});
 }

  handleSubmit = (event) => {
   

   let apiUrl = `https://fplajyoxsj.execute-api.eu-west-2.amazonaws.com/alpha/leaderboard`
   
   // let query = this.setState({[event.target.name]: event.target.value});
   
    fetch(apiUrl)
   .then(res => res.json())
   .then(json =>{
        this.setState({
            isLoaded: true,
           leaderboardrecords: json.records,   
        })
   });

   this.setState ({
     
     })


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
         <form onSubmit={this.handleSubmit}>
            <div className="top-row">
            <input className= "exceptions-search1" type="text" value={this.state.value} name="name" onChange={this.handleChange} placeholder="Player ID"/>
            <input className= "exceptions-search1" type="text" value={this.state.value} name="name" onChange={this.handleChange} placeholder="Contest"/>            
            </div>
     
            <div>
            <button className="search-button"  type="submit">Search</button>
            </div>
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

    
    
  




