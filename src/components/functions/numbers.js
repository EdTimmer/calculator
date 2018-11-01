export function zero(state) {
    if (state.result) {
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
    else if (state.a !== '0' && state.operator === '' && state.a.length < 9) {
        this.setState({ a: state.a + 0 })
    }
    else if (state.operator && state.b !== '0' && state.b.length < 9) {
        this.setState({ b: state.b + 0 })
    }
}

export function one(state) {
    if (state.result) {
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
    else if (state.a === '0' && !state.operator) {
        this.setState({ a: '1' })
    }
    else if (state.b === '0') {
        this.setState({ b: '1' })
    }
    else if (state.operator === '' && state.a.length < 9) {
        this.setState({ a: state.a + 1 })
    }
    else if (state.operator && state.b.length < 9) {
        this.setState({ b: state.b + 1 })
    }
}

export function two(state) {
    if (state.result) {
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
    else if (state.a === '0' && !state.operator) {
        this.setState({ a: '2' })
    }
    else if (state.b === '0') {
        this.setState({ b: '2' })
    }
    else if (state.operator === '' && state.a.length < 9) {
        this.setState({ a: state.a + 2 })
    }
    else if (state.operator && state.b.length < 9) {
        this.setState({ b: state.b + 2 })
    }
}

export function three(state) {
    if (state.result) {
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
    else if (state.a === '0' && !state.operator) {
        this.setState({ a: '3' })
    }
    else if (state.b === '0') {
        this.setState({ b: '3' })
    }
    else if (state.operator === '' && state.a.length < 9) {
        this.setState({ a: state.a + 3 })
    }
    else if (state.operator && state.b.length < 9) {
        this.setState({ b: state.b + 3 })
    }
}

export function four(state) {
    if (state.result) {
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
    else if (state.a === '0' && !state.operator) {
        this.setState({ a: '4' })
    }
    else if (state.b === '0') {
        this.setState({ b: '4' })
    }
    else if (state.operator === '' && state.a.length < 9) {
        this.setState({ a: state.a + 4 })
    }
    else if (state.operator && state.b.length < 9) {
        this.setState({ b: state.b + 4 })
    }
}

export function five(state) {
    if (state.result) {
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
    else if (state.a === '0' && !state.operator) {
        this.setState({ a: '5' })
    }
    else if (state.b === '0') {
        this.setState({ b: '5' })
    }
    else if (state.operator === '' && state.a.length < 9) {
        this.setState({ a: state.a + 5 })
    }
    else if (state.operator && state.b.length < 9) {
        this.setState({ b: state.b + 5 })
    }
}

export function six(state) {
    if (state.result) {
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
    else if (state.a === '0' && !state.operator) {
        this.setState({ a: '6' })
    }
    else if (state.b === '0') {
        this.setState({ b: '6' })
    }
    else if (state.operator === '' && state.a.length < 9) {
        this.setState({ a: state.a + 6 })
    }
    else if (state.operator && state.b.length < 9) {
        this.setState({ b: state.b + 6 })
    }
}

export function seven(state) {
    if (state.result) {
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
    else if (state.a === '0' && !state.operator) {
        this.setState({ a: '7' })
    }
    else if (state.b === '0') {
        this.setState({ b: '7' })
    }
    else if (state.operator === '' && state.a.length < 9) {
        this.setState({ a: state.a + 7 })
    }
    else if (state.operator && state.b.length < 9) {
        this.setState({ b: state.b + 7 })
    }
}

export function eight(state) {
    if (state.result) {
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
    else if (state.a === '0' && !state.operator) {
        this.setState({ a: '8' })
    }
    else if (state.b === '0') {
        this.setState({ b: '8' })
    }
    else if (state.operator === '' && state.a.length < 9) {
        this.setState({ a: state.a + 8 })
    }
    else if (state.operator && state.b.length < 9) {
        this.setState({ b: state.b + 8 })
    }
}

export function nine(state) {
    if (state.result) {
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
    else if (state.a === '0' && !state.operator) {
        this.setState({ a: '9' })
    }
    else if (state.b === '0') {
        this.setState({ b: '9' })
    }
    else if (state.operator === '' && state.a.length < 9) {
        this.setState({ a: state.a + 9 })
    }
    else if (state.operator && state.b.length < 9) {
        this.setState({ b: state.b + 9 })
    }
}

export function dot(state) {
    if (state.result) {
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
    else if (state.a && state.a.indexOf('.') === -1 && !state.operator) {
        this.setState({ a: state.a + '.' })
    }
    else if (state.a && state.operator && !state.b) {
        this.setState({ b: '0.' })
    }
    else if (state.b && state.b.indexOf('.') === -1) {
        this.setState({ b: state.b + '.' })
    }
    else if (!state.a) {
        this.setState({ a: '0.' })
    }
}