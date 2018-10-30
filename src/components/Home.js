import React, { Component } from 'react';
import { Grid, Button } from '@material-ui/core';
import ReactAudioPlayer from 'react-audio-player';

import NumberButton from './Buttons/NumberButton';
// import ZeroButton from './Buttons/ZeroButton';
// import Screen from './Screen';
import EqualsButton from './Buttons/EqualsButton';
import jspfpc from 'js-float-calculation';
// var jspfpc = require("js-float-calculation");
import { additionFn, subtractionFn, multiplicationFn, divisionFn } from './functions/basicCalculations';

import power1 from "../images/power1.png";
import power2 from "../images/power2.png";
import bannerImg from "../images/banner1.jpg";
import powerSound from "../sounds/button1.wav";
import regularButtonSound from "../sounds/button-3.wav";
import equalsButtonSound from "../sounds/button-10.wav";
import Binary from './Binary';
import Quotes from './Quotes';

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
            // ac: false
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
        this.dot = this.dot.bind(this);
        this.clear = this.clear.bind(this);
        this.plus = this.plus.bind(this);
        this.minus = this.minus.bind(this);
        this.star = this.star.bind(this);
        this.slash = this.slash.bind(this);
        this.calculate = this.calculate.bind(this);
        this.getPercentage = this.getPercentage.bind(this);
        this.changeSign = this.changeSign.bind(this);
        this.powerSwitch = this.powerSwitch.bind(this);
        // this.additionFn = this.additionFn.bind(this);
        // this.subtractionFn = this.subtractionFn.bind(this);
        // this.multiplicationFn = this.multiplicationFn.bind(this);
        // this.divisionFn = this.divisionFn.bind(this);
        this.selectOperation = this.selectOperation.bind(this);
        // this.play = this.play.bind(this);
        // this.audio = document.createElement('audio');
        // this.play = this.play.bind(this);
        // this.audio.src = "../sounds/button-3.wav";
    }
    // play() {
    //     this.audio.play();
    // }

    selectOperation(a, b, operator) {
        if (this.state.operator === ' + ') {
            return additionFn(a, b)
        }
        if (this.state.operator === ' - ') {
            return subtractionFn(a, b)
        }
        if (this.state.operator === ' ✕ ') {
            return multiplicationFn(a, b)
        }
        if (this.state.operator === ' / ') {
            return divisionFn(a, b)
        }
    }

    zero() {
        // let audio = new Audio("../sounds/button-3.wav");
        // if (this.state.soundOn) {
        // audio.play();
        // this.play()
        if (this.state.result) {
            this.clear();
        }
        else if (this.state.a !== '0' && this.state.operator === '') {
            this.setState({ a: this.state.a + 0 })
        }
        else if (this.state.operator && this.state.b !== '0') {
            this.setState({ b: this.state.b + 0 })
        }
    }
    one() {
        if (this.state.result) {
            this.setState(
                {
                    a: '1',
                    b: '',
                    operator: '',
                    equals: '',
                    result: '',
                }
            )
        }
        else if (this.state.operator === '') {
            this.setState({ a: this.state.a + 1 })
        }
        else if (this.state.operator) {
            this.setState({ b: this.state.b + 1 })
        }
    }
    two() {
        if (this.state.result) {
            this.setState(
                {
                    a: '2',
                    b: '',
                    operator: '',
                    equals: '',
                    result: '',
                }
            )
        }
        else if (this.state.operator === '') {
            this.setState({ a: this.state.a + 2 })
        }
        else if (this.state.operator) {
            this.setState({ b: this.state.b + 2 })
        }
    }
    three() {
        if (this.state.result) {
            this.setState(
                {
                    a: '3',
                    b: '',
                    operator: '',
                    equals: '',
                    result: '',
                }
            )
        }
        else if (this.state.operator === '') {
            this.setState({ a: this.state.a + 3 })
        }
        else if (this.state.operator) {
            this.setState({ b: this.state.b + 3 })
        }
    }
    four() {
        if (this.state.result) {
            this.setState(
                {
                    a: '4',
                    b: '',
                    operator: '',
                    equals: '',
                    result: '',
                }
            )
        }
        else if (this.state.operator === '') {
            this.setState({ a: this.state.a + 4 })
        }
        else if (this.state.operator) {
            this.setState({ b: this.state.b + 4 })
        }
    }
    five() {
        if (this.state.result) {
            this.setState(
                {
                    a: '5',
                    b: '',
                    operator: '',
                    equals: '',
                    result: '',
                }
            )
        }
        else if (this.state.operator === '') {
            this.setState({ a: this.state.a + 5 })
        }
        else if (this.state.operator) {
            this.setState({ b: this.state.b + 5 })
        }
    }
    six() {
        if (this.state.result) {
            this.setState(
                {
                    a: '6',
                    b: '',
                    operator: '',
                    equals: '',
                    result: '',
                }
            )
        }
        else if (this.state.operator === '') {
            this.setState({ a: this.state.a + 6 })
        }
        else if (this.state.operator) {
            this.setState({ b: this.state.b + 6 })
        }
    }
    seven() {
        if (this.state.result) {
            this.setState(
                {
                    a: '7',
                    b: '',
                    operator: '',
                    equals: '',
                    result: '',
                }
            )
        }
        else if (this.state.operator === '') {
            this.setState({ a: this.state.a + 7 })
        }
        else if (this.state.operator) {
            this.setState({ b: this.state.b + 7 })
        }
    }
    eight() {
        if (this.state.result) {
            this.setState(
                {
                    a: '8',
                    b: '',
                    operator: '',
                    equals: '',
                    result: '',
                }
            )
        }
        else if (this.state.operator === '') {
            this.setState({ a: this.state.a + 8 })
        }
        else if (this.state.operator) {
            this.setState({ b: this.state.b + 8 })
        }
    }
    nine() {
        if (this.state.result) {
            this.setState(
                {
                    a: '9',
                    b: '',
                    operator: '',
                    equals: '',
                    result: '',
                }
            )
        }
        else if (this.state.operator === '') {
            this.setState({ a: this.state.a + 9 })
        }
        else if (this.state.operator) {
            this.setState({ b: this.state.b + 9 })
        }
    }

    dot() {
        if (this.state.result) {
            this.setState(
                {
                    a: '0.',
                    b: '',
                    operator: '',
                    equals: '',
                    result: '',
                }
            )
        }
        else if (this.state.a && this.state.a.indexOf('.') === -1 && !this.state.operator) {
            this.setState({ a: this.state.a + '.' })
        }
        else if (this.state.a && this.state.operator && !this.state.b) {
            this.setState({ b: '0.' })
        }
        else if (this.state.b && this.state.b.indexOf('.') === -1) {
            this.setState({ b: this.state.b + '.' })
        }

    }
    clear() {
        this.setState({ a: '', b: '', operator: '', equals: '', result: '' })
    }

    plus() {
        if (this.state.a !== '' && this.state.b !== '' && this.state.result === '') {
            const getResult = async (a, b) => {
                return this.selectOperation(a, b);
            }
            getResult(this.state.a, this.state.b)
                .then((res) => this.setState({
                    a: `${res}`,
                    operator: ' + ',
                    b: '',
                    result: ''
                }))
        }
        else if (this.state.result !== '') {
            const currentResult = this.state.result;
            this.setState(
                {
                    a: currentResult,
                    b: '',
                    operator: ' + ',
                    equals: '',
                    result: '',
                }
            )
        }
        else if (this.state.a === '') {
            this.setState({
                a: '0',
                b: '',
                operator: ' + ',
                equals: '',
                result: '',
            })
        }
        else {
            this.setState({ operator: ' + ' })
        }
    }
    minus() {
        if (this.state.a !== '' && this.state.b !== '' && this.state.result === '') {
            const getResult = async (a, b) => {
                return this.selectOperation(a, b);
            }
            getResult(this.state.a, this.state.b)
                .then((res) => this.setState({
                    a: `${res}`,
                    operator: ' - ',
                    b: '',
                    result: ''
                }))
        }
        if (this.state.result !== '') {
            const currentResult = this.state.result;
            this.setState(
                {
                    a: currentResult,
                    b: '',
                    operator: ' - ',
                    equals: '',
                    result: '',
                }
            )
        }
        else if (this.state.a === '') {
            this.setState({
                a: '0',
                b: '',
                operator: ' - ',
                equals: '',
                result: '',
            })
        }
        else {
            this.setState({ operator: ' - ' })
        }
    }
    star() {
        if (this.state.a !== '' && this.state.b !== '' && this.state.result === '') {
            const getResult = async (a, b) => {
                return this.selectOperation(a, b);
            }
            getResult(this.state.a, this.state.b)
                .then((res) => this.setState({
                    a: `${res}`,
                    operator: ' ✕ ',
                    b: '',
                    result: ''
                }))
        }
        if (this.state.result !== '') {
            const currentResult = this.state.result;
            this.setState(
                {
                    a: currentResult,
                    b: '',
                    operator: ' ✕ ',
                    equals: '',
                    result: '',
                }
            )
        }
        else if (this.state.a === '') {
            this.setState({
                a: '0',
                b: '',
                operator: ' ✕ ',
                equals: '',
                result: '',
            })
        }
        else {
            this.setState({ operator: ' ✕ ' })
        }
    }
    slash() {
        if (this.state.a !== '' && this.state.b !== '' && this.state.result === '') {
            const getResult = async (a, b) => {
                return this.selectOperation(a, b);
            }
            getResult(this.state.a, this.state.b)
                .then((res) => this.setState({
                    a: `${res}`,
                    operator: ' / ',
                    b: '',
                    result: ''
                }))
        }
        if (this.state.result !== '') {
            const currentResult = this.state.result;
            this.setState(
                {
                    a: currentResult,
                    b: '',
                    operator: ' / ',
                    equals: '',
                    result: '',
                }
            )
        }
        else if (this.state.a === '') {
            this.setState({
                a: '0',
                b: '',
                operator: ' / ',
                equals: '',
                result: '',
            })
        }
        else {
            this.setState({ operator: ' / ' })
        }
    }

    calculate() {
        if (this.state.a === '0.' && this.state.operator === '' && this.state.b === '') {
            // const newResult = this.state.a + '0';
            this.setState({
                a: '',
                b: '',
                operator: '',
                equals: '',
                result: '0'
            })
        }
        else if (this.state.a[this.state.a.length - 1] === '.' && this.state.operator === '' && this.state.b === '') {
            const newResult = this.state.a + '0';
            this.setState({
                a: '',
                b: '',
                operator: '',
                equals: '',
                result: newResult
            })
        }
        else if (this.state.a !== '' && this.state.operator === '' && this.state.b === '') {
            const newResult = this.state.a;
            this.setState({
                a: '',
                b: '',
                operator: '',
                equals: '',
                result: newResult
            })
        }
        //addition
        else if (this.state.operator === ' + ' && this.state.b === '') {
            this.setState({ b: this.state.a, equals: ' = ', result: this.state.a * 2 })
        }
        else if (this.state.a !== '' && this.state.operator === ' + ' && this.state.b !== '') {
            const getResult = async () => {
                return additionFn(this.state.a, this.state.b);
            }
            getResult()
                .then(console.log('getResult got called'))
                .then((res) => {
                    this.setState({
                        equals: ' = ',
                        result: `${res}`,
                    })
                })
        }

        //subtraction
        else if (this.state.operator === ' - ' && this.state.b === '') {
            this.setState({ b: this.state.a, equals: ' = ', result: '0' })
        }
        else if (this.state.a !== '' && this.state.operator === ' - ' && this.state.b !== '') {
            const getResult = async () => {
                return subtractionFn(this.state.a, this.state.b);
            }
            getResult()
                .then((res) => {
                    this.setState({
                        equals: ' = ',
                        result: `${res}`,
                    })
                })
        }

        //multiplication
        else if (this.state.operator === ' ✕ ' && this.state.b === '') {
            const getResult = async (a, b) => {
                return this.selectOperation(a, b);
            }
            getResult(this.state.a, this.state.a)
                .then((res) => this.setState({
                    a: this.state.a,
                    operator: ' ✕ ',
                    b: this.state.a,
                    result: `${res}`
                }))
        }
        else if (this.state.a !== '' && this.state.operator === ' ✕ ' && this.state.b !== '') {
            const getResult = async () => {
                return multiplicationFn(this.state.a, this.state.b);
            }
            getResult()
                .then((res) => {
                    this.setState({
                        equals: ' = ',
                        result: `${res}`,
                    })
                })
        }

        //division
        else if (this.state.operator === ' / ' && this.state.b === '' && this.state.a !== '0') {
            this.setState({ b: this.state.a, equals: ' = ', result: '1' })
        }
        else if (this.state.operator === ' / ' && this.state.b === '' && this.state.a === '0') {
            this.setState({ b: this.state.a, equals: ' = ', result: 'WIPE DISC START' })
        }
        else if (this.state.operator === ' / ' && this.state.b !== '' && this.state.b !== '0') {
            const getResult = async () => {
                return divisionFn(this.state.a, this.state.b);
            }
            getResult()
                .then((res) => {
                    this.setState({
                        equals: ' = ',
                        result: `${res}`,
                    })
                })
        }
        else if (this.state.operator === ' / ' && this.state.b === '0') {
            this.setState({
                a: '',
                b: '',
                operator: '',
                equals: '',
                result: 'WIPE DISC START'
            })
        }
    }
    getPercentage() {
        if (this.state.result !== '') {
            const percentage = (res) => {
                return divisionFn(res, 100)
            }
            const currentResult = this.state.result
            this.setState({
                a: '',
                b: '',
                operator: '',
                equals: '',
                result: percentage(currentResult)
            })
        }
        else if (this.state.a !== '' && this.state.b === '') {
            const percentage = (a) => {
                return divisionFn(a, 100)
            }
            const numA = this.state.a
            this.setState({
                a: '',
                b: '',
                operator: '',
                equals: '',
                result: percentage(numA)
            })
        }
        else if (this.state.a !== '' && this.state.b !== '' && this.state.result === '') {

            const newB = multiplicationFn(divisionFn(this.state.a, 100), this.state.b)
            // const newB = (this.state.a / 100) * this.state.b;

            //addition
            if (this.state.operator === ' + ') {

                this.setState({
                    b: this.state.b + '%',
                    equals: ' = ',
                    result: additionFn(this.state.a, newB)
                })
            }
            //subtraction
            if (this.state.operator === ' - ') {

                // const subtraction = (a, b) => {
                //     return parseFloat(a) - parseFloat(b);
                // }

                this.setState({
                    b: this.state.b + '%',
                    equals: ' = ',
                    result: subtractionFn(this.state.a, newB)
                })
            }
            //multiplication
            if (this.state.operator === ' ✕ ') {

                // const multiplication = (a, b) => {
                //     return parseFloat(a) * parseFloat(b);
                // }

                this.setState({
                    b: this.state.b + '%',
                    equals: ' = ',
                    result: multiplicationFn(this.state.a, newB)
                })
            }
            //division
            if (this.state.operator === ' / ') {

                // const division = (a, b) => {
                //     return parseFloat(a) / parseFloat(b);
                // }

                this.setState({
                    b: this.state.b + '%',
                    equals: ' = ',
                    result: divisionFn(this.state.a, newB)
                })
            }

        }

    }

    changeSign() {
        if (this.state.result) {
            if (this.state.result.includes('-')) {
                const withoutMinus = this.state.result.substr(1);
                this.setState({
                    a: withoutMinus,
                    operator: '',
                    b: '',
                    equals: '',
                    result: ''
                })
            }
            else {
                // const withMinus = this.state.result.substr(1);
                this.setState({
                    a: '-' + this.state.result,
                    operator: '',
                    b: '',
                    equals: '',
                    result: ''
                })
            }
        }
        else {
            if (this.state.a[0] === '-' && this.state.operator === '' && this.state.b === '') {
                const newA = this.state.a.substr(1)
                this.setState({
                    a: newA
                })
            }
            if (this.state.a[0] !== '-' && this.state.operator === '' && this.state.b === '') {
                const newA = '-' + this.state.a
                this.setState({
                    a: newA
                })
            }

            if (this.state.b[0] === '-' && this.state.operator !== '' && this.state.a !== '') {
                const newB = this.state.b.substr(1)
                this.setState({
                    b: newB
                })
            }
            if (this.state.b[0] !== '-' && this.state.operator !== '' && this.state.a !== '') {
                const newB = '-' + this.state.b
                this.setState({
                    b: newB
                })
            }
            if (this.state.a === '0' && this.state.operator === '' && this.state.b === '') {
                this.setState({
                    a: '-' + this.state.a
                })
            }
            if (this.state.a === '-0' && this.state.operator === '' && this.state.b === '') {
                this.setState({
                    a: '0'
                })
            }
        }
    }

    powerSwitch() {
        this.clear();
        // let audio = new Audio("../sounds/button1.wav");
        // if (this.state.soundOn) {
        // audio.play();
        // }
        if (this.state.on) {
            this.setState({ on: false, opacity: 0 })
        }
        else {
            this.setState({ on: true, opacity: 1 })
        }
        // this.setState({ on: !this.state.on })
    }

    // play() {
    //     const audio = document.getElementById("audio");
    //     audio.play();
    // }

    render() {

        const { zero, one, two, three, four, five, six, seven, eight, nine, dot, clear, plus, minus, star, slash, calculate, getPercentage, changeSign, powerSwitch } = this;

        // const powerOn = this.state.on ? 'box-power-on' : 'box-power-off';
        const powerBtn = this.state.on ? power2 : power1;
        const banner = this.state.on ? (<span>tron calculator</span>) : null
        // const btnOpacity = this.state.on ? "1.0" : "0.4";
        const buttonOn = this.state.on ? 'box-on' : 'box-off';
        const equalsButtonOn = this.state.on ? 'box-equals-on' : 'box-equals-off';
        const deviceOn = this.state.on ? 'deviceCase-on' : 'deviceCase-off';
        const displayOn = this.state.on ? 'boxDisplay-on' : 'boxDisplay-off';
        const acPressed = this.state.ac ? '../sounds/button-3.wav' : null;
        const powerBtnSwitch = this.state.on ? 'power-btn-on' : 'power-btn-off';

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
                                            <span style={{ color: 'rgb(170, 42, 255)' }}>{this.state.result}</span>
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
                                <img src={power1} width={50} />

                                {/*<label className="switch" >
                                    {/*<input type="checkbox" />
                                    <span className="slider"></span>
                            </label>



                                <img src={powerBtn} width={70} style={{ paddingTop: "5px" }} onClick={powerSwitch} />*/}
                            </div>
                        </div>





                        <div className={`${buttonOn} ac`} onClick={clear}>
                            {/* {
                                this.state.ac ? (<audio src="../sounds/button-3.wav" autoPlay />) : null
                            }  */}
                            <span style={{ transition: 'all 1s ease-in-out', opacity: this.state.opacity }}>ac
                        {/*<ReactAudioPlayer src="../sounds/button-3.wav" onPlay={true} />*/}
                            </span>
                        </div>
                        <div className={`${buttonOn} percent`} onClick={getPercentage}><span style={{ transition: 'all 1s ease-in-out', opacity: this.state.opacity }}>%</span></div>
                        <div className={`${buttonOn} slash`} onClick={slash}><span style={{ transition: 'all 1s ease-in-out', opacity: this.state.opacity }}>/</span></div>
                        <div className={`${buttonOn} star`} onClick={star}><span style={{ transition: 'all 1s ease-in-out', opacity: this.state.opacity }}>✕</span></div>

                        <div className={`${buttonOn} seven`} onClick={seven}><span style={{ transition: 'all 1s ease-in-out', opacity: this.state.opacity }}>7</span></div>
                        <div className={`${buttonOn} eight`} onClick={eight}><span style={{ transition: 'all 1s ease-in-out', opacity: this.state.opacity }}>8</span></div>
                        <div className={`${buttonOn} nine`} onClick={nine}><span style={{ transition: 'all 1s ease-in-out', opacity: this.state.opacity }}>9</span></div>
                        <div className={`${buttonOn} minus`} onClick={minus}><span style={{ transition: 'all 1s ease-in-out', opacity: this.state.opacity }}>-</span></div>

                        <div className={`${buttonOn} four`} onClick={four}><span style={{ transition: 'all 1s ease-in-out', opacity: this.state.opacity }}>4</span></div>
                        <div className={`${buttonOn} five`} onClick={five}><span style={{ transition: 'all 1s ease-in-out', opacity: this.state.opacity }}>5</span></div>
                        <div className={`${buttonOn} six`} onClick={six}><span style={{ transition: 'all 1s ease-in-out', opacity: this.state.opacity }}>6</span></div>
                        <div className={`${buttonOn} plus`} onClick={plus}><span style={{ transition: 'all 1s ease-in-out', opacity: this.state.opacity }}>+</span></div>

                        <div className={`${buttonOn} one`} onClick={one}><span style={{ transition: 'all 1s ease-in-out', opacity: this.state.opacity }}>1</span></div>
                        <div className={`${buttonOn} two`} onClick={two}><span style={{ transition: 'all 1s ease-in-out', opacity: this.state.opacity }}>2</span></div>
                        <div className={`${buttonOn} three`} onClick={three}><span style={{ transition: 'all 1s ease-in-out', opacity: this.state.opacity }}>3</span></div>

                        <div className={`${buttonOn} zero`} onClick={zero}><span style={{ transition: 'all 1s ease-in-out', opacity: this.state.opacity }}>0</span></div>
                        <div className={`${buttonOn} dot`} onClick={dot}><span style={{ transition: 'all 1s ease-in-out', opacity: this.state.opacity }}>.</span></div>
                        <div className={`${buttonOn} plusminus`} onClick={changeSign}><span style={{ transition: 'all 1s ease-in-out', opacity: this.state.opacity }}>+/-</span></div>
                        <div className={`${equalsButtonOn} equals`} onClick={calculate}><span style={{ transition: 'all 1s ease-in-out', opacity: this.state.opacity }}>=</span></div>

                    </div>
                </div>
                <div className="right-pane">
                    <div style={{ paddingRight: '20px' }}>
                        <Quotes result={this.state.result} on={this.state.on} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;