import React from  'react';
import axios from 'axios';

class Edit extends React.Component {
   constructor(props) {
      super(props);
      this.state.record = props.record;
      this.state.value = props.value;
   }
    state = {
       record:[
         {
            "playerId":"",
            "pool": "",
            "betType": "",
            "betAmount": "",
            "winnings": "",
            "refunds": "",
            "runners": "",
            "status": "",
            "card": "",
            "race":"" ,
            "performance":"" ,
            "transactionType": "",
            "contestNumber":"" ,
            "tournamentNumber": ""
      }
       ],
        text:'Edit',
        editing:false,
        input:false,
        number:" ",
        playerId:"",
        pool:"",
        betType: "",
        betAmount:"",
        winnings:"",
        refunds: "",
        runners: "",
        status: "",
        card: "",
   //      record:{
   //       "playerId":"",
   //       "pool": "",
   //       "betType": "",
   //       "betAmount": "",
   //       "winnings": "",
   //       "refunds": "",
   //       "runners": "",
   //       "status": "",
   //       "card": "",
   //       "race":"" ,
   //       "performance":"" ,
   //       "transactionType": "",
   //       "contestNumber":"" ,
   //       "tournamentNumber": ""
   // }

   }
     handleChange = (event) => {
      this.setState({
         [event.target.name]:event.target.value
       });

       this.setState({
         message: event.target.value
       });
      }

      

     changeText = (text)=>{
      this.setState({text})
      this.getInputValue()
               }
               
     getInputValue = ()=>{
      this.setState({editing:true})
                 } 

      
   
     submitForm = (event,text)=>{
      

      event.preventDefault()
     console.log(this.state.record)
      this.setState({editing:false})
      this.setState({text})
      this.setState ({
        number:'',
        playerId:"",
        pool:"",
        betType: "",
        betAmount:"",
        winnings: "",
        refunds: "",
        runners: "",
        status: "",
        card: "",
       })

      let newRecord = this.state.record 
      if(this.state.value==="winnings"){
      newRecord.winnings = this.state.number
      // newRecord = this.state.record
      }
      

      if(this.state.value==="refunds"){
      newRecord.refunds = this.state.number
      }

      console.log(newRecord)
   


      axios.put(`https://w5fsmkk86g.execute-api.eu-west-2.amazonaws.com/dev/transactions/${newRecord.id}`, newRecord)
      .then(response=>console.log(response))
      
     }
        render(){
        if(this.state.editing){
            return (
               <div>
               <div><form onSubmit={this.submitForm}><div><input type="text" value={this.state.number} name="number"onChange={event=>this.handleChange(event)} placeholder="$0"/></div> 
               <div><button type="submit" onClick={this.submitForm}>Save</button></div>
               </form>
               </div>
               </div>
            )
        } 

      //   if(!this.state.editing){
      //      this.submitForm()  
      //   }
            return (
                <React.Fragment>
                <button onClick={()=>{this.changeText('save')}}>{this.state.text}</button>
               </React.Fragment>
            )
        }

}

export default Edit

{/* <div className="input">{this.state.editing?<form onSubmit={this.submitForm}><input></input></form>:null}</div><button className="edit-button" onClick={this.getInputValue} onClick={()=>{this.changeText('save')}}>{this.state.text}</button> */}