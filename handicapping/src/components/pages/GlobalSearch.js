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
                     "player Name":"Johnny Acct12",
                     "player Id":288426,
                     "Total Bets":"",
                     "winnings":"114.60",
                     "mandatory Count":4,
                     "optional  Count":6,
                     "View Profile":"" 
                   }
                  };       
                } 
               
  renderTableData() {

    return this.state.records.map((record, index) => {
       const {playerName, playerId, totalBets, winnings,mandatoryCount,optionalCount} = record //destructuring
       return (
         
          <tr key={playerId}>
             <td>{playerName}</td>
             <td>{playerId}</td>
             <td>{totalBets}</td>
             <td>{winnings}</td>
             <td>{mandatoryCount}</td>
             <td>{optionalCount}</td>
             <td><a>View Transactions</a></td>
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


  handleSubmit = (event) => {
   event.preventDefault();

   
let query_string = "";
let spacer = "?";

if (this.state.playerId) {
  query_string += spacer + "playerId=" + this.state.playerId;
  spacer = "&";
 }

if(this.state.contestNumber){
   query_string += spacer + "contestNumber=" + this.state.contestNumber;
   spacer = "&";
}


let api_string = `https://fplajyoxsj.execute-api.eu-west-2.amazonaws.com/alpha/playerSummaries`
fetch(api_string + query_string)
.then(res => res.json())
.then(json =>{
    this.setState({
        isLoaded: true,
        records: json.records,
    }) 
})

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
            <button className="clear-button"  type="submit" onClick={event=>this.refreshPage(event)}>Clear Table</button>
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

    
    
  



