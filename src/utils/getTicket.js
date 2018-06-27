import Chance from 'chance';

const chance = new Chance();

export default () => {
    const whiteBall = chance.unique(chance.integer, 5, {min: 1, max: 69});
    const redBall = chance.integer({min: 1, max: 26});

    return [...whiteBall, redBall];
}
