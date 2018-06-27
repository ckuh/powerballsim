import React, {Component} from 'react';
import getTicket from '../utils/getTicket'

export default class BallForm extends Component {
    constructor() {
        super();
        this.state = {
            ticket: Array.from({length: 6}).fill(0),
        }
    }

    handleFormSubmit = e => {
        e.preventDefault();

        this.setState({
            ticket: getTicket(),
        })
    }

    isPowerball = ballId => ballId === this.state.ticket.length - 1 ? 'powerBall' : 'normalBall'

    render() {
        return (<form onSubmit={this.handleFormSubmit}>
            <div style={center}>
                {this.state.ticket.map((ball, key) =>
                    <div key={key} style={getBallStyle(this.isPowerball(key))}>
                        <div style={ballNum}>
                            {this.state.ticket[key]}
                        </div>
                    </div>
                )}
            </div>
            <div>
                {/*<input type='submit' value='Buy Ticket' />*/}
                <input type='submit' value='Random Ticket' />
            </div>
        </form>)
    }
}
const center = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px',
}

const getBallStyle = curBall => ({
    height: '100px',
    width: '100px',
    borderRadius: '100%',
    backgroundColor: ballColor[curBall],
    textAlign: 'center',
    marginLeft: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
})

const ballColor = {
    powerBall: 'red',
    normalBall: 'lightgray',
}

const ballNum = {
    width: '100%',
}
