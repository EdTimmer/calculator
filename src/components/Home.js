import React, { Component } from 'react';
import { Grid, Button } from '@material-ui/core';

import NumberButton from './Buttons/NumberButton';
// import ZeroButton from './Buttons/ZeroButton';
// import Screen from './Screen';
import EqualsButton from './Buttons/EqualsButton';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            display: ''
        }
        this.zero = this.zero.bind(this);
        this.one = this.one.bind(this);
        this.two = this.two.bind(this);
        this.three = this.three.bind(this);
        this.four = this.four.bind(this);
        this.five = this.five.bind(this);
        this.six = this.six.bind(this);
        this.seven = this.seven.bind(this);
        this.eight = this.eight.bind(this);
        this.nine = this.nine.bind(this);
        this.clear = this.clear.bind(this);
    }
    zero() {
        this.setState({ display: this.state.display + '0' })
    }
    one() {
        this.setState({ display: this.state.display + '1' })
    }
    two() {
        this.setState({ display: this.state.display + '2' })
    }
    three() {
        this.setState({ display: this.state.display + '3' })
    }
    four() {
        this.setState({ display: this.state.display + '4' })
    }
    five() {
        this.setState({ display: this.state.display + '5' })
    }
    six() {
        this.setState({ display: this.state.display + '6' })
    }
    seven() {
        this.setState({ display: this.state.display + '7' })
    }
    eight() {
        this.setState({ display: this.state.display + '8' })
    }
    nine() {
        this.setState({ display: this.state.display + '9' })
    }
    clear() {
        this.setState({ display: '' })
    }

    render() {
        const { zero, one, two, three, four, five, six, seven, eight, nine, clear } = this;
        return (
            <div style={{ paddingTop: '30px' }}>

                <Grid container spacing={16} alignItems='center'>
                    {/* justify="center" alignItems='center' */}

                    <Grid item xs={4} />

                    <Grid item xs={3} container alignItems='center'>

                        <Grid container spacing={16} alignItems='center' justify='center'>
                            {/* justify="center" alignItems='center' */}
                            <Grid item xs={12} container alignItems='center' justify='center'>
                                <div>
                                    {this.state.display}
                                </div>
                            </Grid>

                            <Grid item xs={3} container justify="center" alignItems='center'>
                                <Button variant="contained" style={{ width: '40px', height: '60px', fontSize: '25px' }} onClick={clear}>
                                    ac
                                </Button>
                            </Grid>
                            <Grid item xs={3} container justify="center" alignItems='center'>
                                <NumberButton symbol={'%'} />
                            </Grid>
                            <Grid item xs={3} container justify="center" alignItems='center'>
                                <NumberButton symbol={'/'} />
                            </Grid>
                            <Grid item xs={3} container justify="center" alignItems='center'>
                                <NumberButton symbol={'*'} />
                            </Grid>

                            <Grid item xs={3} container justify="center" alignItems='center'>
                                <Button variant="contained" style={{ width: '40px', height: '60px', fontSize: '25px' }} onClick={seven}>
                                    7
                                </Button>
                            </Grid>
                            <Grid item xs={3} container justify="center" alignItems='center'>
                                <Button variant="contained" style={{ width: '40px', height: '60px', fontSize: '25px' }} onClick={eight}>
                                    8
                                </Button>
                            </Grid>
                            <Grid item xs={3} container justify="center" alignItems='center'>
                                <Button variant="contained" style={{ width: '40px', height: '60px', fontSize: '25px' }} onClick={nine}>
                                    9
                                </Button>
                            </Grid>
                            <Grid item xs={3} container justify="center" alignItems='center'>
                                <NumberButton symbol={'-'} />
                            </Grid>

                            <Grid item xs={3} container justify="center" alignItems='center'>
                                <Button variant="contained" style={{ width: '40px', height: '60px', fontSize: '25px' }} onClick={four}>
                                    4
                                </Button>
                            </Grid>
                            <Grid item xs={3} container justify="center" alignItems='center'>
                                <Button variant="contained" style={{ width: '40px', height: '60px', fontSize: '25px' }} onClick={five}>
                                    5
                                </Button>
                            </Grid>
                            <Grid item xs={3} container justify="center" alignItems='center'>
                                <Button variant="contained" style={{ width: '40px', height: '60px', fontSize: '25px' }} onClick={six}>
                                    6
                                </Button>
                            </Grid>
                            <Grid item xs={3} container justify="center" alignItems='center'>
                                <NumberButton symbol={'+'} />
                            </Grid>

                            <Grid container spacing={16} alignItems='center' justify='center'>
                                <Grid item xs={9} container justify="center" alignItems='center'>
                                    <Grid container spacing={16} alignItems='center' justify='center'>

                                        <Grid item xs={4} container justify="center" alignItems='center'>
                                            <Button variant="contained" style={{ width: '40px', height: '60px', fontSize: '25px' }} onClick={one}>
                                                1
                                            </Button>
                                        </Grid>
                                        <Grid item xs={4} container justify="center" alignItems='center'>
                                            <Button variant="contained" style={{ width: '40px', height: '60px', fontSize: '25px' }} onClick={two}>
                                                2
                                            </Button>
                                        </Grid>
                                        <Grid item xs={4} container justify="center" alignItems='center'>
                                            <Button variant="contained" style={{ width: '40px', height: '60px', fontSize: '25px' }} onClick={three}>
                                                3
                                            </Button>
                                        </Grid>
                                        <Grid item xs={4} container justify="center" alignItems='center'>
                                            <Button variant="contained" style={{ width: '40px', height: '60px', fontSize: '25px' }} onClick={zero}>
                                                0
                                            </Button>
                                        </Grid>
                                        <Grid item xs={4} container justify="center" alignItems='center'>
                                            <Button variant="contained" style={{ width: '40px', height: '60px', fontSize: '25px' }} onClick={one}>
                                                .
                                            </Button>
                                        </Grid>
                                        <Grid item xs={4} container justify="center" alignItems='center'>
                                            <Button variant="contained" style={{ width: '40px', height: '60px', fontSize: '25px' }} onClick={one}>
                                                +/-
                                            </Button>
                                        </Grid>

                                    </Grid>
                                </Grid>
                                <Grid item xs={3} container justify="center" alignItems='center'>
                                    <EqualsButton symbol={'='} />
                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>

                    <Grid item xs={5} />

                </Grid>


            </div>
        );
    }
}

export default Home;