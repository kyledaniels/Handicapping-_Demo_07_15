import React, {Component} from  'react'

class Fetch extends Component {
     constructor(props){
         super(props)
         this.state = {
            records: [],
            isLoaded: false
         }
     }

     componentDidMount(){

       fetch('https://fplajyoxsj.execute-api.eu-west-2.amazonaws.com/dev/playerSummaries')
            .then(res => res.json())
            .then(json =>{
                 this.setState({
                     isLoaded: true,
                     records: json.records,
                 })
            });
     }


    render(){

        var { isLoaded,records} = this.state;
        
        
        if (!isLoaded){
          return <div>Loading...</div>
        }else{

        return (
           <div>
           <h1>This is the data from the API</h1>
             {
               this.state.records.map((item)=>
               <div>Name:{item.playerName} | Total Bets:{item.totalBets} | Winnings:{item.winnings}
                | Mandatory Count:{item.mandatoryCount} | Optional Count:{item.optionalCount} </div>)
             }
           </div>
        )
        }
    }

}

export default Fetch
