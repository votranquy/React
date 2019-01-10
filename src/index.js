import React,{Component} from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import './index.css';
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
        <form name="formDemo" id="formDemo" >
            <label>Name</label>
            <input 
                type="text" 
                name="name"
                id="name" 
                value={name}
                onChange={this.handleChange} />
            <label>Job</label>
            <input 
                type="text" 
                name="job"
                id="job" 
                value={job} 
                onChange={this.handleChange}/>
            <button 
                type="button" 
                value="submit" 
                onClick={this.submitForm} >SUBMIT</button>
        </form>
        );
    }
}
const TableHeader = () => { 
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
                <th>Delete</th>
            </tr>
        </thead>
    );
}
const TableBody = props => {
    const rows = props.characterData.map((row,index)=>{
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td><button onClick={() => props.removeCharacter(index)}>Delete</button></td>
            </tr>
        );
    }); 
    return <tbody>{rows}</tbody>;
}
class Table extends Component {
    render() {
        const { characterData, removeCharacter } = this.props;
        return(
            <table>
                <TableHeader />
                <TableBody  
                    characterData={characterData}
                    removeCharacter={removeCharacter}
                />
            </table>
        );
    }
}
class App extends Component {
    state = {
        characters:[
            {
                'name': 'Tamana',
                'job': 'Student'
            },
            {
                'name': 'Mack',
                'job': 'Teacher'
            },
            {
                'name': 'Jack',
                'job': 'Athletic'
            },
            {
                'name': 'Tenis',
                'job': 'Goalkeeper'
            }
        ]
    };

    removeCharacter = index => {
        const {characters} = this.state;
        this.setState({
            characters: characters.filter((character,i) => {
                return i !== index;
            })
        });
    }

    handleSubmit = character => {
        this.setState({characters:[...this.state.characters,character]});
    }

    render(){
        const {characters}=this.state;
        return(
            <div className="container">
                <Table 
                    characterData={characters}
                    removeCharacter={this.removeCharacter}
                />
                <Form handleSubmit = {this.handleSubmit} />
            </div>
        );
    }
}
ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Application />,document.getElementById('root'));
// ReactDOM.render(
//     <h1>Hello world</h1>, document.getElementById('root')
// );
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//================================
// const name= 'Wuyatt';
// const element = <h1> Hello {name} </h1>;
// ReactDOM.render(
//     element, document.getElementById('root')
// );
