import React, {Component} from  'react'

class Fetch extends Component {
     constructor(props){
         super(props)
         this.state = {records: [] };
     }

     handleChange = (event) => {
      this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit = (event) => {
      alert('A form was submitted: ' + this.state);

    fetch('https://fplajyoxsj.execute-api.eu-west-2.amazonaws.com/dev/playerSummaries', {
    credentials: 'include',
    method: 'POST',
      headers: {'Content-Type': 'application/json', },
      body: JSON.stringify(this.state)
    }).then(function(response) {
      console.log(response)
      return response.json();
    });
     event.preventDefault();
   }
     
   render(){
   return (
    <form onSubmit={this.handleSubmit}>
    <label>
      Name:
      <input type="text" value={this.state.value} name="name" onChange={this.handleChange} />
    </label>
    <input type="submit" value="Submit" />
  </form>
           
        );
        }
    }

export default Fetch
