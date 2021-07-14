import React from 'react';
import Data from '../Data/Table';
import Table from '../Table/Table';

class PlayerSearch extends React.Component {
   
   constructor(props){
      super(props)
      this.state = {records: [],
                    isLoaded:false};
  }  

  handleChange = (event) => {
   this.setState({[event.target.name]: event.target.value});
 }

  handleSubmit = (event) => {
   alert('A form was submitted: ' + this.state);

   

   fetch('https://fplajyoxsj.execute-api.eu-west-2.amazonaws.com/dev/playerSummaries')
   .then(res => res.json())
   .then(json =>{
        this.setState({
            isLoaded: true,
            records: json.records,   

        })
   });

   
   
   
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
        <h2><strong>Transactions Search</strong>  </h2> 
         </div>

       <div className="exceptions-search" >
         <form onSubmit={this.handleSubmit}>
            <div className="top-row">
            <input className= "exceptions-search1" type="text" value={this.state.value} name="name" onChange={this.handleChange} placeholder="ID,Name,Nickname"/>
            <input className= "exceptions-search1" type="text" value={this.state.value} name="name" onChange={this.handleChange} placeholder="Contest"/>            
            <input className= "exceptions-search1" type="text" value={this.state.value} name="name" onChange={this.handleChange} placeholder="Tournament"/> 
            </div>

            <div className="bottom-row" >             
            <input className= "exceptions-search1" type="text" value={this.state.value} name="name" onChange={this.handleChange} placeholder="Track"/>           
            <input className= "exceptions-search1" type="text" value={this.state.value} name="name" onChange={this.handleChange} placeholder="Race"/>
            </div> 
            <div>
            <button className="search-button"  type="submit">Search</button>
            </div>
         </form>
       </div>  
           
       <div>
           <h1>This is the data from the API { this.state.records.length}</h1>
             {
               this.state.records.map((item)=>
               <div>
                  
                  {/* Name:{item.playerName} | Total Bets:{item.totalBets} | Winnings:{item.winnings}
                | Mandatory Count:{item.mandatoryCount} | Optional Count:{item.optionalCount} */
              
                <table>
  <tr>
    <th>{item.playerName}</th>
    <th>{item.totalBets}</th>
    <th>{item.winnings}</th>
  </tr>
  {/* <tr>
    <td>{item.playerName}</td>
    <td>{item.totalBets}</td>
    <td>{item.winnings}</td>
  </tr> */}
 
</table>
                          
                
                }

                
                
                 </div>)
             }
           </div>

           
      
      </React.Fragment>
       )
       
   }

}

export default PlayerSearch

    
    
  



