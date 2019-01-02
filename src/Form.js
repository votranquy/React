import React, {Component} from 'react';
import './App.css';
class Form extends Component {
    constructor(props){
        super(props);

        this.initialState = {
            name: '',
            job: ''
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]:value
        });
    }



    submitForm = () => {
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render(){
        const {name,job} = this.state;
        return(
            // <form>
            //     <label>Your Name</label>
            //     <input 
            //         type="text"
            //         name="name"
            //         value={name}
            //         onChange={this.handleChange} />
            //     <label>Your Job</label>
            //     <input 
            //         type="text"
            //         name="job"
            //         value={job}
            //         onChange={this.handleChange} />
            // </form>
            <form>
            <label>Name</label>
            <input 
                type="text" 
                name="name" 
                value={name}
                onChange={this.handleChange} />
            <label>Job</label>
            <input 
                type="text" 
                name="job" 
                value={job} 
                onChange={this.handleChange}/>
            <button 
                type="button" 
                value="Submit" 
                onClick={this.submitForm} >SUBMIT</button>
        </form>
        );
    }
}
export default Form;