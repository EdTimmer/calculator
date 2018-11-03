import { additionFn, subtractionFn, multiplicationFn, divisionFn } from './basicCalculations';

const selectOperator = (a, b, operator) => {
    if (operator === ' + ') {
        return additionFn(a, b);
    }
    else if (operator === ' - ') {
        return subtractionFn(a, b);
    }
    else if (operator === ' ✕ ') {
        return multiplicationFn(a, b);
    }
    else if (operator === ' / ') {
        return divisionFn(a, b);
    }
}

export function plus(state) {
    if (state.a !== '' && state.b !== '' && state.result === '') {
        const getResult = async (a, b, operator) => {
            return selectOperator(a, b, operator);
        }
        getResult(state.a, state.b, state.operator)
            .then((res) => this.setState({
                a: `${res}`,
                operator: ' + ',
                b: '',
                result: ''
            }))
    }
    else if (state.result !== '') {
        const currentResult = state.result;
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
    else if (state.a === '') {
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

export function minus(state) {
    if (state.a !== '' && state.b !== '' && state.result === '') {
        const getResult = async (a, b, operator) => {
            return selectOperator(a, b, operator);
        }
        getResult(state.a, state.b, state.operator)
            .then((res) => this.setState({
                a: `${res}`,
                operator: ' - ',
                b: '',
                result: ''
            }))
    }
    if (state.result !== '') {
        const currentResult = state.result;
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
    else if (state.a === '') {
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

export function star(state) {
    if (state.a !== '' && state.b !== '' && state.result === '') {
        const getResult = async (a, b, operator) => {
            return selectOperator(a, b, operator);
        }
        getResult(state.a, state.b, state.operator)
            .then((res) => this.setState({
                a: `${res}`,
                operator: ' ✕ ',
                b: '',
                result: ''
            }))
    }
    if (state.result !== '') {
        const currentResult = state.result;
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
    else if (state.a === '') {
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

export function slash(state) {
    if (state.a !== '' && state.b !== '' && state.result === '') {
        const getResult = async (a, b, operator) => {
            return selectOperator(a, b, operator);
        }
        getResult(state.a, state.b, state.operator)
            .then((res) => this.setState({
                a: `${res}`,
                operator: ' / ',
                b: '',
                result: ''
            }))
    }
    if (state.result !== '') {
        const currentResult = state.result;
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
    else if (state.a === '') {
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