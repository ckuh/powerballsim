import React, {Component} from 'react';
import BallForm from './Components/BallForm';
import Result from './Components/Result';
import './App.css';

class App extends Component {
    constructor() {
        super();

        this.state = {
            ticket: null,
        }
    }
    onBallFormSubmit = ticket => {
        this.setState({ ticket });
    }

    render() {
        return (<div className='App'>
            <BallForm onBallFormSubmit={this.onBallFormSubmit} />
            <Result ticket={this.state.ticket}/>
        </div>);
    }
}

export default App;
