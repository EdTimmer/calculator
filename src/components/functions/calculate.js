import { additionFn, subtractionFn, multiplicationFn, divisionFn } from './basicCalculations';

export default function calculate(state) {
  if (state.a === '0.' && state.operator === '' && state.b === '') {
      this.setState({
          a: '',
          b: '',
          operator: '',
          equals: '',
          result: '0'
      })
  }
  else if (state.b.includes('%')) {
      this.setState({
          a: '',
          b: '',
          operator: '',
          equals: '',
          result: ''
      })
  }
  else if (state.a[state.a.length - 1] === '.' && state.operator === '' && state.b === '') {
      const newResult = state.a + '0';
      this.setState({
          a: '',
          b: '',
          operator: '',
          equals: '',
          result: newResult
      })
  }
  else if (state.a !== '' && state.operator === '' && state.b === '') {
      const newResult = state.a;
      this.setState({
          a: '',
          b: '',
          operator: '',
          equals: '',
          result: newResult
      })
  }
  //addition
  else if (state.operator === ' + ' && state.b === '') {
      this.setState({ b: state.a, equals: ' = ', result: state.a * 2 })
  }
  else if (state.a !== '' && state.operator === ' + ' && state.b !== '') {
      const getResult = async () => {
          return additionFn(state.a, state.b);
      }
      getResult()
          // .then(console.log('getResult got called'))
          .then((res) => {
              this.setState({
                  equals: ' = ',
                  result: `${res}`,
              })
          })
  }

  //subtraction
  else if (state.operator === ' - ' && state.b === '') {
      this.setState({ b: state.a, equals: ' = ', result: '0' })
  }
  else if (state.a !== '' && state.operator === ' - ' && state.b !== '') {
      const getResult = async () => {
          return subtractionFn(state.a, state.b);
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
  else if (state.operator === ' ✕ ' && state.b === '') {
      const getResult = async (a, b) => {
          // return this.selectOperation(a, b);  //THE ONLY PLACE THAT USES SELECT OPERATION
          return multiplicationFn(state.a, state.a);
      }
      getResult(state.a, state.a)
          .then((res) => this.setState({
              a: state.a,
              operator: ' ✕ ',
              b: state.a,
              result: `${res}`
          }))
  }
  else if (state.a !== '' && state.operator === ' ✕ ' && state.b !== '') {
      const getResult = async () => {
          return multiplicationFn(state.a, state.b);
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
  else if (state.operator === ' / ' && state.b === '' && state.a !== '0') {
      this.setState({ b: state.a, equals: ' = ', result: '1' })
  }
  else if (state.operator === ' / ' && state.b === '' && state.a === '0') {
      this.setState({ b: state.a, equals: ' = ', result: 'WIPE DISC START' })
  }
  else if (state.operator === ' / ' && state.b !== '' && state.b !== '0') {
      const getResult = async () => {
          return divisionFn(state.a, state.b);
      }
      getResult()
          .then((res) => {
              this.setState({
                  equals: ' = ',
                  result: `${res}`,
              })
          })
  }
  else if (state.operator === ' / ' && state.b === '0') {
      this.setState({
          a: '',
          b: '',
          operator: '',
          equals: '',
          result: 'WIPE DISC START'
      })
  }
}