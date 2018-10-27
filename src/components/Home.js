import React, { Component } from 'react';
import { Grid, Button } from '@material-ui/core';

import NumberButton from './Buttons/NumberButton';
// import ZeroButton from './Buttons/ZeroButton';
// import Screen from './Screen';
import EqualsButton from './Buttons/EqualsButton';
import jspfpc from 'js-float-calculation';
// var jspfpc = require("js-float-calculation");

class Home extends Component {
    constructor() {
        super();
        this.state = {
            a: '',
            b: '',
            operator: '',
            equals: '',
            result: '',
            on: false
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
        this.additionFn = this.additionFn.bind(this);
        this.subtractionFn = this.subtractionFn.bind(this);
        this.multiplicationFn = this.multiplicationFn.bind(this);
        this.divisionFn = this.divisionFn.bind(this);
        this.selectOperation = this.selectOperation.bind(this);
    }

    additionFn(a, b) {
        const f1 = parseFloat(a);
        const f2 = parseFloat(b);
        const f3 = f1.add(f2)
        return f3;
    }
    subtractionFn(a, b) {
        const f1 = parseFloat(a);
        const f2 = parseFloat(b);
        const f3 = f1.sub(f2);
        return f3;
    }
    multiplicationFn(a, b) {
        const f1 = parseFloat(a);
        const f2 = parseFloat(b);
        const f3 = f1.mul(f2);
        return f3;
    }
    divisionFn(a, b) {
        const f1 = parseFloat(a);
        const f2 = parseFloat(b);
        const f3 = f1.div(f2);
        return f3;
    }
    selectOperation(a, b, operator) {
        if (this.state.operator === ' + ') {
            return this.additionFn(a, b)
        }
        if (this.state.operator === ' - ') {
            return this.subtractionFn(a, b)
        }
        if (this.state.operator === ' ✕ ') {
            return this.multiplicationFn(a, b)
        }
        if (this.state.operator === ' / ') {
            return this.divisionFn(a, b)
        }
    }
    zero() {
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
        this.setState({ a: '', b: '', operator: '', equals: '', result: '0' })
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
        if (this.state.a !== '' && this.state.operator === '' && this.state.b === '') {
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
                return this.additionFn(this.state.a, this.state.b);
            }
            getResult()
                .then(console.log('getResult got called'))
                .then((res) => {
                    this.setState({
                        equals: ' = ',
                        result: ` ${res} `,
                    })
                })
        }

        //subtraction
        else if (this.state.operator === ' - ' && this.state.b === '') {
            this.setState({ b: this.state.a, equals: ' = ', result: '0' })
        }
        else if (this.state.a !== '' && this.state.operator === ' - ' && this.state.b !== '') {
            const getResult = async () => {
                return this.subtractionFn(this.state.a, this.state.b);
            }
            getResult()
                .then((res) => {
                    this.setState({
                        equals: ' = ',
                        result: ` ${res} `,
                    })
                })
        }

        //multiplication
        else if (this.state.operator === ' ✕ ' && this.state.b === '') {
            const f1 = parseFloat(this.state.a);
            const f2 = f1;
            const f3 = f1.mul(f2)
            this.setState({ b: this.state.a, equals: ' = ', result: f3 })
        }
        else if (this.state.a !== '' && this.state.operator === ' ✕ ' && this.state.b !== '') {
            const getResult = async () => {
                return this.multiplicationFn(this.state.a, this.state.b);
            }
            getResult()
                .then((res) => {
                    this.setState({
                        equals: ' = ',
                        result: ` ${res} `,
                    })
                })
        }

        //division
        else if (this.state.operator === ' / ' && this.state.b === '') {
            this.setState({ b: this.state.a, equals: ' = ', result: '1' })
        }
        else if (this.state.operator === ' / ' && this.state.b !== '' && this.state.b !== '0') {
            const getResult = async () => {
                return this.divisionFn(this.state.a, this.state.b);
            }
            getResult()
                .then((res) => {
                    this.setState({
                        equals: ' = ',
                        result: ` ${res} `,
                    })
                })
        }
        else if (this.state.operator === ' / ' && this.state.b === '0') {
            this.setState({
                a: '',
                b: '',
                operator: '',
                equals: '',
                result: 'SELF-DESTRUCT SEQUENCE ACTIVATED'
            })
        }
    }
    getPercentage() {
        if (this.state.result !== '') {
            const percentage = (res) => {
                return this.divisionFn(res, 100)
                // return parseFloat(res) / 100;
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
                return this.divisionFn(a, 100)
                // return parseFloat(a) / 100;
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

            const newB = this.multiplicationFn(this.divisionFn(this.state.a, 100), this.state.b)
            // const newB = (this.state.a / 100) * this.state.b;

            //addition
            if (this.state.operator === ' + ') {

                this.setState({
                    b: this.state.b + '%',
                    equals: ' = ',
                    result: this.additionFn(this.state.a, newB)
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
                    result: this.subtractionFn(this.state.a, newB)
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
                    result: this.multiplicationFn(this.state.a, newB)
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
                    result: this.divisionFn(this.state.a, newB)
                })
            }

        }

    }

    changeSign() {
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

    powerSwitch() {
        this.clear();
        if (this.state.on) {
            this.setState({ result: '', on: false })
        }
        else {
            this.setState({ result: '0', on: true })
        }
        // this.setState({ on: !this.state.on })
    }

    render() {

        console.log('a is:', this.state.a)
        console.log('b is:', this.state.b)
        console.log('result is', this.state.result)
        const truncatedResult = () => {
            if (this.state.result.length > 10) {
                const newResult = parseFloat(this.state.result).toExponential();
                return newResult.toString();
            }
            else {
                return this.state.result;
            }
        }

        const { zero, one, two, three, four, five, six, seven, eight, nine, dot, clear, plus, minus, star, slash, calculate, getPercentage, changeSign, powerSwitch } = this;
        // const { a, b, operator, equals, result } = this.state;
        // const ready = () => {
        //     if (a === '' && b === '' && operator === '' && equals === '' && result === '') {
        //         return true;
        //     }
        //     else {
        //         return false;
        //     }
        // }

        const powerOn = this.state.on ? 'box-power-on' : 'box-power-off';
        const buttonOn = this.state.on ? 'box-on' : 'box-off';
        const deviceOn = this.state.on ? 'deviceCase-on' : 'deviceCase-off';
        const displayOn = this.state.on ? 'boxDisplay-on' : 'boxDisplay-off'
        // const initialScreen = this.state.on ? '0' : '';

        return (
            <div>
                <div className="wrapper" style={{ padding: '20px' }}>
                    <div className={deviceOn}>

                        {/*<div className={displayOn}>
                            {
                                ready() ? (
                                    <div>
                                        <span>{initialScreen}</span>
                                    </div>
                                ) : (
                                        <div>
                                            <span>{this.state.a}</span>
                                            <span>{this.state.operator}</span>
                                            <span>{this.state.b}</span>
                                            <span>{this.state.equals}</span>
                                            <span>{this.state.result}</span>
                                        </div>
                                    )
                            }
                        </div>*/}

                        <div className={displayOn}>
                            <div className="innerDisplay">
                                <span>{this.state.a}</span>
                                <span>{this.state.operator}</span>
                                <span>{this.state.b}</span>
                                <span>{this.state.equals}</span>
                                {/*<span>{this.state.result}</span>*/}
                            </div>
                            <br />
                            <div>
                                {/*<span>{truncatedResult}</span>*/}
                                <span>{this.state.result}</span>
                            </div>
                        </div>

                        <div className={`${powerOn} power`} onClick={powerSwitch}>⏻</div>

                        <div className={`${buttonOn} ac`} onClick={clear}>ac</div>
                        <div className={`${buttonOn} percent`} onClick={getPercentage}>%</div>
                        <div className={`${buttonOn} slash`} onClick={slash}>/</div>
                        <div className={`${buttonOn} star`} onClick={star}>✕</div>

                        <div className={`${buttonOn} seven`} onClick={seven}>7</div>
                        <div className={`${buttonOn} eight`} onClick={eight}>8</div>
                        <div className={`${buttonOn} nine`} onClick={nine}>9</div>
                        <div className={`${buttonOn} minus`} onClick={minus}>-</div>

                        <div className={`${buttonOn} four`} onClick={four}>4</div>
                        <div className={`${buttonOn} five`} onClick={five}>5</div>
                        <div className={`${buttonOn} six`} onClick={six}>6</div>
                        <div className={`${buttonOn} plus`} onClick={plus}>+</div>

                        <div className={`${buttonOn} one`} onClick={one}>1</div>
                        <div className={`${buttonOn} two`} onClick={two}>2</div>
                        <div className={`${buttonOn} three`} onClick={three}>3</div>

                        <div className={`${buttonOn} zero`} onClick={zero}>0</div>
                        <div className={`${buttonOn} dot`} onClick={dot}>.</div>
                        <div className={`${buttonOn} plusminus`} onClick={changeSign}>+/-</div>
                        <div className={`${buttonOn} equals`} onClick={calculate}>=</div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Home;