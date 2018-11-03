import React, { Component } from 'react';
import jspfpc from 'js-float-calculation';

import power1 from "../images/power1.png";
import Binary from './Binary';
import Quotes from './Quotes';
import { zero, one, two, three, four, five, six, seven, eight, nine, dot } from './functions/numbers';
import { plus, minus, star, slash } from './functions/operators';
import calculate from './functions/calculate';
import getPercentage from './functions/getPercentage';
import changeSign from './functions/changeSign';
import powerSound from '../sounds/start.wav';
import regularButtonSound from '../sounds/regular.wav';
import equals from '../sounds/equals.wav';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            a: '',
            b: '',
            operator: '',
            equals: '',
            result: '',
            on: false,
            opacity: 0,
            powerSound: false,
            regularButton: false,
        }
        this.clear = this.clear.bind(this);
        this.powerSwitch = this.powerSwitch.bind(this);
        this.playRegularSound = this.playRegularSound.bind(this);
    }

    componentWillMount() {
        this.zero = zero.bind(this);
        this.one = one.bind(this);
        this.two = two.bind(this);
        this.three = three.bind(this);
        this.four = four.bind(this);
        this.five = five.bind(this);
        this.six = six.bind(this);
        this.seven = seven.bind(this);
        this.eight = eight.bind(this);
        this.nine = nine.bind(this);
        this.dot = dot.bind(this);
        this.plus = plus.bind(this);
        this.minus = minus.bind(this);
        this.star = star.bind(this);
        this.slash = slash.bind(this);
        this.calculate = calculate.bind(this);
        this.getPercentage = getPercentage.bind(this);
        this.changeSign = changeSign.bind(this);
    }

    clear() {
        this.setState({ a: '', b: '', operator: '', equals: '', result: '' })
    }

    powerSwitch() {
        const wait = () => {
            let promise = new Promise(function (resolve, reject) {
                setTimeout(function () {
                    resolve({});
                }, 250);
            });
            return promise;
        }

        this.clear();

        if (this.state.on) {
            const turnOn = async () => {
                return this.setState({ on: false, opacity: 0, powerSound: true });
            }
            turnOn()
                .then(() => wait())
                .then(() => this.setState({ powerSound: false }))
        }
        else {
            const turnOff = async () => {
                return this.setState({ on: true, opacity: 1, powerSound: true })
            }
            turnOff()
                .then(() => wait())
                .then(() => this.setState({ powerSound: false }))
        }
    }

    playRegularSound() {
        console.log('playRegularSound functions got called')
        const wait = () => {
            let promise = new Promise(function (resolve, reject) {
                setTimeout(function () {
                    resolve({});
                }, 250);
            });
            return promise;
        }
        const play = async () => {
            if (this.state.on) {
                return this.setState({ regularButton: true })
            }
        }
        play()
            .then(() => wait())
            .then(() => this.setState({ regularButton: false }))
    }

    render() {

        const { zero, one, two, three, four, five, six, seven, eight, nine, dot, clear, plus, minus, star, slash, calculate, getPercentage, changeSign, powerSwitch, playRegularSound } = this;
        const buttonOn = this.state.on ? 'box-on' : 'box-off';
        const equalsButtonOn = this.state.on ? 'box-equals-on' : 'box-equals-off';
        const deviceOn = this.state.on ? 'deviceCase-on' : 'deviceCase-off';
        const displayOn = this.state.on ? 'boxDisplay-on' : 'boxDisplay-off';
        const powerBtnSwitch = this.state.on ? 'power-btn-on' : 'power-btn-off';

        const playPowerSound = this.state.powerSound ? (
            <audio src={powerSound} autoPlay />
        ) : null;

        const playButtonSound = this.state.regularButton ? (
            <audio src={regularButtonSound} autoPlay />
        ) : null;

        const equalsSound = this.state.result || (!this.state.a && !this.state.b && this.state.result) ? (
            <audio src={equals} autoPlay />
        ) : null;

        const percentSound = (!this.state.a && !this.state.b && this.state.result) ? (
            <audio src={equals} autoPlay />
        ) : null;

        console.log(this.state.regularButton)
        return (
            <div className="wrapper bgimg-1">
                <div className="left-pane">
                    <div className="inner-dispaly-binary">
                        <Binary a={this.state.a} b={this.state.b} result={this.state.result} on={this.state.on} />
                    </div>
                </div>
                <div className="wrapper-calculator" style={{ padding: '20px' }}>
                    <div className={`${deviceOn} case-image`}>

                        <div className={displayOn}>
                            <div className="innerDisplay">
                                {
                                    this.state.on ? (
                                        <div style={{ paddingTop: "10px" }}>
                                            <span>{this.state.a}</span>
                                            <span>{this.state.operator}</span>
                                            <span>{this.state.b}</span>
                                            <span>{this.state.equals}</span>
                                            <br />
                                            <span style={{ color: '#6dff8d' }}>{this.state.result}</span>
                                        </div>
                                    ) : (null)
                                }

                            </div>
                        </div>
                        <div className="banner">
                            <span>tron calculator</span>
                        </div>

                        <div className="power">
                            <div className={powerBtnSwitch} onClick={powerSwitch}>
                                <img src={power1} width={50} alt="powerButton" />
                            </div>
                        </div>

                        <div className={`${buttonOn} ac`} onClick={() => { clear(); playRegularSound() }}>
                            <span style={{ transition: 'all 1s ease-in-out', opacity: this.state.opacity }}>ac</span>
                        </div>
                        <div className={`${buttonOn} percent`} onClick={() => getPercentage(this.state)}><span style={{ transition: 'all 1s ease-in-out', opacity: this.state.opacity }}>%</span></div>
                        <div className={`${buttonOn} slash`} onClick={() => { slash(this.state); playRegularSound() }}><span style={{ transition: 'all 1s ease-in-out', opacity: this.state.opacity }}>/</span></div>
                        <div className={`${buttonOn} star`} onClick={() => { star(this.state); playRegularSound() }}><span style={{ transition: 'all 1s ease-in-out', opacity: this.state.opacity }}>✕</span></div>

                        <div className={`${buttonOn} seven`} onClick={() => { seven(this.state); playRegularSound() }}><span style={{ transition: 'all 1s ease-in-out', opacity: this.state.opacity }}>7</span></div>
                        <div className={`${buttonOn} eight`} onClick={() => { eight(this.state); playRegularSound() }}><span style={{ transition: 'all 1s ease-in-out', opacity: this.state.opacity }}>8</span></div>
                        <div className={`${buttonOn} nine`} onClick={() => { nine(this.state); playRegularSound() }}><span style={{ transition: 'all 1s ease-in-out', opacity: this.state.opacity }}>9</span></div>
                        <div className={`${buttonOn} minus`} onClick={() => { minus(this.state); playRegularSound() }}><span style={{ transition: 'all 1s ease-in-out', opacity: this.state.opacity }}>-</span></div>

                        <div className={`${buttonOn} four`} onClick={() => { four(this.state); playRegularSound() }}><span style={{ transition: 'all 1s ease-in-out', opacity: this.state.opacity }}>4</span></div>
                        <div className={`${buttonOn} five`} onClick={() => { five(this.state); playRegularSound() }}><span style={{ transition: 'all 1s ease-in-out', opacity: this.state.opacity }}>5</span></div>
                        <div className={`${buttonOn} six`} onClick={() => { six(this.state); playRegularSound() }}><span style={{ transition: 'all 1s ease-in-out', opacity: this.state.opacity }}>6</span></div>
                        <div className={`${buttonOn} plus`} onClick={() => { plus(this.state); playRegularSound() }}><span style={{ transition: 'all 1s ease-in-out', opacity: this.state.opacity }}>+</span></div>

                        <div className={`${buttonOn} one`} onClick={() => { one(this.state); playRegularSound() }}><span style={{ transition: 'all 1s ease-in-out', opacity: this.state.opacity }}>1</span></div>
                        <div className={`${buttonOn} two`} onClick={() => { two(this.state); playRegularSound() }}><span style={{ transition: 'all 1s ease-in-out', opacity: this.state.opacity }}>2</span></div>
                        <div className={`${buttonOn} three`} onClick={() => { three(this.state); playRegularSound() }}><span style={{ transition: 'all 1s ease-in-out', opacity: this.state.opacity }}>3</span></div>

                        <div className={`${buttonOn} zero`} onClick={() => { zero(this.state); playRegularSound() }}><span style={{ transition: 'all 1s ease-in-out', opacity: this.state.opacity }}>0</span></div>
                        <div className={`${buttonOn} dot`} onClick={() => { dot(this.state); playRegularSound() }}><span style={{ transition: 'all 1s ease-in-out', opacity: this.state.opacity }}>.</span></div>
                        <div className={`${buttonOn} plusminus`} onClick={() => { changeSign(this.state); playRegularSound() }}><span style={{ transition: 'all 1s ease-in-out', opacity: this.state.opacity }}>+/-</span></div>
                        <div className={`${equalsButtonOn} equals`} onClick={() => calculate(this.state)}><span style={{ transition: 'all 1s ease-in-out', opacity: this.state.opacity }}>=</span></div>

                    </div>
                </div>
                <div className="right-pane">
                    <div style={{ paddingRight: '20px' }}>
                        <Quotes result={this.state.result} on={this.state.on} />
                    </div>
                </div>
                <div>
                    {playPowerSound}
                    {playButtonSound}
                    {equalsSound}
                    {percentSound}
                </div>
            </div>
        );
    }
}

export default Home;