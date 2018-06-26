import React, {Component} from 'react';

export default class BallForm extends Component {
    constructor() {
        super();
        this.state = {
            ticket: [],
        }
    }

    ballNums = Array.from({ length: 6 }, (_, num) => num)

    handleFormSubmit = e => {
        console.log(e);
        e.preventDefault();
    }

    handleInputChange = e => {
        const newTicket = [...this.state.ticket];
        newTicket[e.target.id] = e.target.value;
        this.setState({
            ticket: [...newTicket]
        })
        console.log(e.target.value)
    }

    render() {
        return (<form onSubmit={this.handleFormSubmit}>
            {this.ballNums.map(ball =>
                <input
                    key={ball}
                    id={ball}
                    style={ballInputStyle}
                    value={this.state.ticket[ball]}
                    type='number'
                    min='1'
                    max='69' />
            )}
            <input type='submit' value='Buy Ticket' />
            <input type='submit' value='Random Ticket' />
        </form>)
    }
}

const ballInputStyle = {
    textAlign: 'center',
}
