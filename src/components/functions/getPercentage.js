import { additionFn, subtractionFn, multiplicationFn, divisionFn } from './basicCalculations';

export default function getPercentage(state) {
  if (state.result !== '') {
    const percentage = (res) => {
      return divisionFn(res, 100)
    }
    const currentResult = state.result
    this.setState({
      a: '',
      b: '',
      operator: '',
      equals: '',
      result: percentage(currentResult)
    })
  }
  else if (state.a !== '' && state.b === '') {
    const percentage = (a) => {
      return divisionFn(a, 100)
    }
    const numA = state.a
    this.setState({
      a: '',
      b: '',
      operator: '',
      equals: '',
      result: percentage(numA)
    })
  }
  else if (state.a !== '' && state.b !== '' && state.result === '') {

    const newB = multiplicationFn(divisionFn(state.a, 100), state.b)

    //addition
    if (state.operator === ' + ') {

      this.setState({
        b: state.b + '%',
        equals: ' = ',
        result: additionFn(state.a, newB)
      })
    }
    //subtraction
    if (state.operator === ' - ') {
      this.setState({
        b: state.b + '%',
        equals: ' = ',
        result: subtractionFn(state.a, newB)
      })
    }
    //multiplication
    if (state.operator === ' ✕ ') {
      this.setState({
        b: state.b + '%',
        equals: ' = ',
        result: multiplicationFn(state.a, newB)
      })
    }
    //division
    if (state.operator === ' / ') {
      this.setState({
        b: state.b + '%',
        equals: ' = ',
        result: divisionFn(state.a, newB)
      })
    }
  }
}