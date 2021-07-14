import React, {Component} from  'react'

class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = { records: [],
                     isLoaded:false};
    }
  
    handleChange = (event) => {
      this.setState({[event.target.name]: event.target.value});
    }
  
    handleSubmit = (event) => {
      alert('A form was submitted: ' + this.state);

      const data = {foo:1, bar:2};
  
      fetch('https://fplajyoxsj.execute-api.eu-west-2.amazonaws.com/dev/playerSummaries?foo=${encodeURIComponent(data.foo)}&bar=${encodeURIComponent(data.bar)}', {
          method: 'GET',
          headers: data
          // We convert the React state to JSON and send it as the POST body
          // body: JSON.stringify(this.state)
        }).then(function(response) {
          console.log(response)
          return response.json();
        });
  
      event.preventDefault();
  }
  
    render() {
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

  export default NameForm