import React from 'react';
import { FaInfoCircle, FaWindows } from 'react-icons/fa';
import Data from '../Data/Table';
import Table from '../Table/Table';
import TransactionTable from '../TransactionTable/TransactionTable'
import Edit2 from '../Edit/Edit'
import Edit from '../Edit/Edit';

class PlayerSearch extends React.Component {
   constructor(props){
      super(props)
      this.state = {records: [],                                                                                      
                    isLoaded:false,
                    playerId: "",
                    pool : "",
                    betType : "",
                    betAmount: "",
                    winnings: "",
                    refunds: "",
                    runners: "",
                    status: "",
                    track: "",
                    raceNumber : "",
                    performance: "",
                    transactionType: "",
                    contestNumber: "",
                    tournamentNumber: "",
                    title:{
                     "player      Id" : 288426,
                     "pool" : "WIN", 
                     "bet   Type" : "WP",
                     "bet   Amount" : "1.00",
                     "winnings" : "3.20",
                     "refunds" : "0.00",
                     "runners" : "1",
                     "status" : "Active",
                     "card" : "Kentucky",
                     "race" : 1,
                     "performance" : 42,
                     "transaction Type" : "optional",
                     "contest Number" : 1,
                     "tournament Number" : 0
                   },
                    text:'Edit',
                    editing:false,
                    input:false, 
                    player1:'playerId',
                    transaction1:'transactionType'     
                  };
                   
                }  
 
  renderTableData() {

    return this.state.records.map((record, index) => {
       const {playerId, pool, betType,betAmount,winnings,refunds,runners,status,card,race,performance,transactionType,contestNumber,tournamentNumber} = record //destructuring
       return (
        
          <tr key={playerId}>
             <td>{playerId}</td>
             <td>{pool}</td>
             <td>{betType}</td>
             <td>{betAmount}</td>
             <td>{winnings}<Edit/></td>
             <td>{refunds}<Edit/></td>
             <td>{runners}</td>
             <td>{status}</td>
             <td>{card}</td>
             <td>{race}</td>
             <td>{performance}</td>
             <td>{transactionType}</td>
             <td>{contestNumber}</td>
             <td>{tournamentNumber}</td>
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

   this.setState({
     [event.target.name]:event.target.value
   }); 
  }

handleSubmit = (event) => {
    event.preventDefault()
   

let query_string = "";
let spacer = "?";

if (this.state.playerId) {
  query_string += spacer + "playerId=" + this.state.playerId;
  spacer = "&";
 }

if(this.state.transactionType){
   query_string += spacer + "transactionType=" + this.state.transactionType;
   spacer = "&";
}

if(this.state.contestNumber){
   query_string += spacer + "contestNumber=" + this.state.contestNumber;
   spacer = "&";
 }

if(this.state.track){
   query_string += spacer + "Track=" + this.state.track;
   spacer = "&";
}

if(this.state.raceNumber){
   query_string += spacer + "raceNumber=" + this.state.raceNumber;
   spacer = "&";
}


let api_string = `https://fplajyoxsj.execute-api.eu-west-2.amazonaws.com/alpha/transactions`;
let call_string = api_string + query_string;
fetch(call_string)
.then(res => res.json())
.then(json =>{
    this.setState({
        isLoaded: true,
        records: json.records,
    })
});

   // fetch(api_string)
   // .then(res => res.json())
   // .then(json =>{
   //      this.setState({
   //          isLoaded: true,
   //          records: json.records,
   //      }) 
   //  })

  this.setState ({
   playerId: '',
   transactionType: '',
   contestNumber: '',
   track: '',
   race:''
  })
 
}
    render(){
      
       return (
      <React.Fragment>

         <div className="exceptions">
        <h2><strong>Transactions Search</strong></h2> 
         </div>

       <div className="exceptions-search" >
         <form >
            <div className="top-row">
            <input className= "exceptions-search1" type="text" value={this.state.playerId} name="playerId" onChange={event=>this.handleChange(event)} placeholder="Player ID"/>
            <input className= "exceptions-search1" type="text" value={this.state.transactionType} name="transactionType" onChange={event=>this.handleChange(event)} placeholder="Transaction Type"/>            
            <input className= "exceptions-search1" type="text" value={this.state.contestNumber} name="contestNumber" onChange={event=>this.handleChange(event)} placeholder="Contest"/> 
           </div> 

            <div className="bottom-row" >            
            <input className= "exceptions-search1" type="text" value={this.state.track} name="track" onChange={event=>this.handleChange(event)} placeholder="Track"/>           
            <input className= "exceptions-search1" type="text" value={this.state.raceNumber} name="raceNumber" onChange={event=>this.handleChange(event)} placeholder="Race"/>
            </div> 
             <div>
            <button className="search-button"  type="submit"   onClick={event=>this.handleSubmit(event)}>Search</button>
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

    
    
  



