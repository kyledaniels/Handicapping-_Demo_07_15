import React from  'react';

class Post extends React.Component {

    constructor(props){
           super(props)

           this.state = {
               player:'',
               contest:''
           }
    }

    changeHandler= (e)=>{
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = (e)=>{
        e.preventDefault()
        console.log(this.state)
        console.log('This data is coming through')

    }

        render(){
            return (
                <React.Fragment>
                <div className = "exceptions-search">
                    <form onSubmit={this.submitHandler}>
                        <div>
                            <input type="text" name="player" placeholder="player" value={this.state.player} onChange={this.changeHandler}/>
                        </div>
                        <div>
                            <input type="text" name="contest" placeholder="contest" value={this.state.contest} onChange={this.changeHandler}/>
                        </div>
                        <button type="submit">Search</button>
                    </form>
                </div>
               </React.Fragment>
            )
        }

}

export default Post