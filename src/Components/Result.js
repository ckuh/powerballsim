import React, {Component} from 'react';
import getTicket from '../utils/getTicket'
import _ from 'lodash';

export default class Result extends Component {
    constructor(props) {
        super(props)

        this.state = {
            totalWinnings: {},
            totalSpent: 0,
            totalGained: 0,
        }
    }

    componentWillReceiveProps ({ ticket }) {
        // const winningTicket = getTicket();
        let { totalGained, totalSpent } = this.state;
        const totalWinnings = Array(112*100)
            .fill()
            .map( _ => getTicket())
            .reduce((bucket, winningTicket) => {
                const prize = getPrizeMoney(ticket, winningTicket)
                if (!bucket.hasOwnProperty(prize)) {
                    bucket[prize] = 1;
                } else {
                    bucket[prize] += 1;
                }

                if (prize === 'winner') {
                    totalGained = prize;
                } else if(prize !== 'no winner') {
                    totalGained += prize;
                }
                return bucket;
            }, this.state.totalWinnings)

        this.setState({
            totalWinnings,
            totalSpent: totalSpent += (112 * 1000 * 2),
            totalGained,
            totalNet: `$${totalGained - totalSpent}`,
        })
    }

    render() {
        return (<div>
            <pre style={{textAlign: 'left'}}>
                <code>
                    {JSON.stringify(this.state, null, '\t')}
                </code>
            </pre>
        </div>)
    }
}
const prizes = {
    'p': 4,
    '1p': 4,
    '2p': 7,
    '3': 7,
    '3p': 100,
    '4': 100,
    '4p': 50000,
    '5': 1000000,
    '5p': 'winner',
}

const getPrizeMoney = (ticket, winningTicket) => {
    const ticketWhiteBall = ticket.slice(0, 5);
    const winningTicketWhiteBall = winningTicket.slice(0, 5);
    const ticketPowerBall = ticket[5];
    const winningTicketPowerBall = winningTicket[5];

    const matchingWhiteBall = 5 - _.difference(ticketWhiteBall, winningTicketWhiteBall).length
    const matchingPowerBall = ticketPowerBall === winningTicketPowerBall ? 'p' : '';
    return prizes[matchingWhiteBall + matchingPowerBall] || 'no winner';
}
