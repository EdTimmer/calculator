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
    }
    zero() {
        if (this.state.result) {
            this.setState(
                {
                    a: '0',
                    b: '',
                    operator: '',
                    equals: '',
                    result: '',
                }
            )
        }
        else if (this.state.operator) {
            this.setState({ b: this.state.b + 0 })
        }
        else {
            this.setState({ a: this.state.a + 0 })
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
        else if (this.state.operator) {
            this.setState({ b: this.state.b + 1 })
        }
        else {
            this.setState({ a: this.state.a + 1 })
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
        else if (this.state.operator) {
            this.setState({ b: this.state.b + 2 })
        }
        else {
            this.setState({ a: this.state.a + 2 })
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
        else if (this.state.operator) {
            this.setState({ b: this.state.b + 3 })
        }
        else {
            this.setState({ a: this.state.a + 3 })
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
        else if (this.state.operator) {
            this.setState({ b: this.state.b + 4 })
        }
        else {
            this.setState({ a: this.state.a + 4 })
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
        else if (this.state.operator) {
            this.setState({ b: this.state.b + 5 })
        }
        else {
            this.setState({ a: this.state.a + 5 })
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
        else if (this.state.operator) {
            this.setState({ b: this.state.b + 6 })
        }
        else {
            this.setState({ a: this.state.a + 6 })
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
        else if (this.state.operator) {
            this.setState({ b: this.state.b + 7 })
        }
        else {
            this.setState({ a: this.state.a + 7 })
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
        else if (this.state.operator) {
            this.setState({ b: this.state.b + 8 })
        }
        else {
            this.setState({ a: this.state.a + 8 })
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
        else if (this.state.operator) {
            this.setState({ b: this.state.b + 9 })
        }
        else {
            this.setState({ a: this.state.a + 9 })
        }
    }
    //DOT NEED WORK
    dot() {
        if (this.state.result !== '') {
            this.setState(
                {
                    a: '.',
                    b: '',
                    operator: '',
                    equals: '',
                    result: '',
                }
            )
        }
        else if (this.state.a[this.state.a.length - 1] === '.') {
            this.setState({ a: this.state.a })
        }
        else if (this.state.b[this.state.b.length - 1] === '.') {
            this.setState({ b: this.state.b })
        }
        else if (this.state.operator) {
            this.setState({ b: this.state.b + '.' })
        }
        else {
            this.setState({ a: this.state.a + '.' })
        }
    }
    clear() {
        this.setState({ a: '', b: '', operator: '', equals: '', result: '' })
    }
    plus() {
        if (this.state.result !== '') {
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
        else if (this.state.a !== '' && this.state.operator !== '' && this.state.b !== '' && this.state.result === '') {
            const setResult = async () => {
                return this.calculate();
            }
            setResult()
                .then(() => {
                    this.setState({
                        a: this.state.result,
                        b: '',
                        operator: ' + ',
                        equals: '',
                        result: '',
                    })
                })
        }
        else {
            this.setState({ operator: ' + ' })
        }
    }
    minus() {
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
        else if (this.state.a !== '' && this.state.operator !== '' && this.state.b !== '' && this.state.result === '') {
            const setResult = async () => {
                return this.calculate();
            }
            setResult()
                .then(() => {
                    this.setState({
                        a: this.state.result,
                        b: '',
                        operator: ' - ',
                        equals: '',
                        result: '',
                    })
                })
        }
        else {
            this.setState({ operator: ' - ' })
        }
    }
    star() {
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
        else if (this.state.a !== '' && this.state.operator !== '' && this.state.b !== '' && this.state.result === '') {
            const setResult = async () => {
                return this.calculate();
            }
            setResult()
                .then(() => {
                    this.setState({
                        a: this.state.result,
                        b: '',
                        operator: ' ✕ ',
                        equals: '',
                        result: '',
                    })
                })
        }
        else {
            this.setState({ operator: ' ✕ ' })
        }
    }
    slash() {
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
        else if (this.state.a !== '' && this.state.operator !== '' && this.state.b !== '' && this.state.result === '') {
            const setResult = async () => {
                return this.calculate();
            }
            setResult()
                .then(() => {
                    this.setState({
                        a: this.state.result,
                        b: '',
                        operator: ' / ',
                        equals: '',
                        result: '',
                    })
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
        if (this.state.operator === ' + ' && this.state.b === '') {

            const addition = (a) => {
                return parseFloat(a) + parseFloat(a);
            }

            this.setState({ b: this.state.a, equals: ' = ', result: addition(this.state.a) })
        }
        if (this.state.operator === ' + ' && this.state.b !== '') {

            const addition = (a, b) => {
                return parseFloat(a) + parseFloat(b);
            }

            this.setState({ equals: ' = ', result: addition(this.state.a, this.state.b) })
        }

        //subtraction
        if (this.state.operator === ' - ' && this.state.b === '') {

            const subtraction = (a) => {
                return parseFloat(a) - parseFloat(a);
            }

            this.setState({ b: this.state.a, equals: ' = ', result: subtraction(this.state.a) })
        }
        if (this.state.operator === ' - ' && this.state.b !== '') {

            const subtraction = (a, b) => {
                return parseFloat(a) - parseFloat(b);
            }

            this.setState({ equals: ' = ', result: subtraction(this.state.a, this.state.b) })
        }

        //multiplication
        if (this.state.operator === ' ✕ ' && this.state.b === '') {

            const multiplication = (a) => {
                return parseFloat(a) * parseFloat(a);
            }

            this.setState({ b: this.state.a, equals: ' = ', result: multiplication(this.state.a) })
        }
        if (this.state.operator === ' ✕ ' && this.state.b !== '') {

            const multiplication = (a, b) => {
                return parseFloat(a) * parseFloat(b);
            }

            this.setState({ equals: ' = ', result: multiplication(this.state.a, this.state.b) })
        }

        //division
        if (this.state.operator === ' / ' && this.state.b === '') {

            const division = (a) => {
                return parseFloat(a) / parseFloat(a);
            }

            this.setState({ b: this.state.a, equals: ' = ', result: division(this.state.a) })
        }
        if (this.state.operator === ' / ' && this.state.b !== '' && this.state.b !== '0') {

            const division = (a, b) => {
                return parseFloat(a) / parseFloat(b);
            }
            this.setState({ equals: ' = ', result: division(this.state.a, this.state.b) })
        }

        if (this.state.operator === ' / ' && this.state.b === '0') {
            this.setState({
                a: '',
                b: '',
                operator: '',
                equals: '',
                result: 'beep cannot compute beep boo beep error'
            })
        }
    }
    getPercentage() {
        if (this.state.result !== '') {
            const percentage = (res) => {
                return parseFloat(res) / 100;
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
        if (this.state.a !== '' && this.state.b === '') {
            const percentage = (a) => {
                return parseFloat(a) / 100;
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
            const newB = (this.state.a / 100) * this.state.b;

            //addition
            if (this.state.operator === ' + ') {

                const addition = (a, b) => {
                    return parseFloat(a) + parseFloat(b);
                }

                this.setState({
                    b: this.state.b + '%',
                    equals: ' = ',
                    result: addition(this.state.a, newB)
                })
            }
            //subtraction
            if (this.state.operator === ' - ') {

                const subtraction = (a, b) => {
                    return parseFloat(a) - parseFloat(b);
                }

                this.setState({
                    b: this.state.b + '%',
                    equals: ' = ',
                    result: subtraction(this.state.a, newB)
                })
            }
            //multiplication
            if (this.state.operator === ' ✕ ') {

                const multiplication = (a, b) => {
                    return parseFloat(a) * parseFloat(b);
                }

                this.setState({
                    b: this.state.b + '%',
                    equals: ' = ',
                    result: multiplication(this.state.a, newB)
                })
            }
            //division
            if (this.state.operator === ' / ') {

                const division = (a, b) => {
                    return parseFloat(a) / parseFloat(b);
                }

                this.setState({
                    b: this.state.b + '%',
                    equals: ' = ',
                    result: division(this.state.a, newB)
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
        if (this.state.a === '' && this.state.operator === '' && this.state.b === '') {
            this.setState({
                a: '-0'
            })
        }
        if (this.state.a === '-0' && this.state.operator === '' && this.state.b === '') {
            this.setState({
                a: ''
            })
        }
    }

    powerSwitch() {
        this.setState({ on: !this.state.on })
    }

    render() {
        const { zero, one, two, three, four, five, six, seven, eight, nine, dot, clear, plus, minus, star, slash, calculate, getPercentage, changeSign, powerSwitch } = this;
        const { a, b, operator, equals, result } = this.state;
        const ready = () => {
            if (a === '' && b === '' && operator === '' && equals === '' && result === '') {
                return true;
            }
            else {
                return false;
            }
        }

        const powerOn = this.state.on ? 'box-power-on' : 'box-power-off';
        const buttonOn = this.state.on ? 'box-on' : 'box-off';
        const deviceOn = this.state.on ? 'deviceCase-on' : 'deviceCase-off';
        const displayOn = this.state.on ? 'boxDisplay-on' : 'boxDisplay-off'

        return (
            <div style={{ paddingTop: '30px' }}>
                <div className="wrapper" style={{ padding: '20px' }}>
                    <div className={deviceOn}>
                        <div className={displayOn}>
                            {
                                ready() ? (
                                    <div>
                                        <span>0</span>
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