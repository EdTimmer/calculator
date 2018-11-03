import { additionFn, subtractionFn, multiplicationFn, divisionFn } from './basicCalculations';

export function plus(state) {
    if (state.a !== '' && state.b !== '' && state.result === '') {
        const getResult = async (a, b) => {
            return additionFn(a, b);
        }
        getResult(state.a, state.b)
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
        const getResult = async (a, b) => {
            return subtractionFn(Operation(a, b);
        }
        getResult(state.a, state.b)
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
        const getResult = async (a, b) => {
            return multiplicationFn(Operation(a, b);
        }
        getResult(state.a, state.b)
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
        const getResult = async (a, b) => {
            return division(Operation(a, b);
        }
        getResult(state.a, state.b)
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