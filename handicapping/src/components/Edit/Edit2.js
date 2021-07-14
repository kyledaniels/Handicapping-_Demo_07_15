import React from 'react';

class Edit2 extends React.Component {
   constructor(props){
      super(props)
      this.state = {  
        "playerId": null,
        "pool": "",
        "betType": "",
        "betAmount": null,
        "winnings": null,
        "refunds": null,
        "runners": null,
        "status": "",
        "card": "",
        "race": null,
        "performance": null,
        "transactionType": "",
        "contestNumber": null,
        "tournamentNumber": null
                  };
                   
        handleChange = (event) => {
        this.setState({
            [event.target.name]:event.target.value
            });
        }

        handleSubmit = (event) =>{
            event.preventDefault()
            console.log("submit")
        }

        changeText = (text)=>{
            this.setState({text})
            this.getInputValue()
            console.log('change text')
                     }
        
        getInputValue = ()=>{
        this.setState({editing:true})
        console.log('get Input Value')
                    } 

        submitForm = (event,text)=>{
            event.preventDefault()
            this.setState({editing:false})
            this.setState({text})
        
            
            
            this.setState ({
                number:''
                })
            console.log('submit form')
            }
                  
}
    render(){
        if(this.state.editing){
            return (
               <div>
               <div><form onSubmit={this.handleSubmit}><div><input type="text" value={this.state.refunds} name="refunds"onChange={event=>this.handleChange(event)} placeholder="$0"/></div> 
               <div><button type="submit" onClick={this.submitForm}>Save</button></div>
               </form>
               
               
               </div>
   
               </div>
            )
        } 

       return (
      <React.Fragment>
        <button onClick={()=>{this.changeText('save')}}>{this.state.text}</button>        
      </React.Fragment>
       )
       
   }
  }

export default Edit2

    
    
  



