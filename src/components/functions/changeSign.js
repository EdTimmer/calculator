export default function changeSign(state) {
  if (state.result) {
      if (state.result.includes('-')) {
          const withoutMinus = state.result.substr(1);
          this.setState({
              a: withoutMinus,
              operator: '',
              b: '',
              equals: '',
              result: ''
          })
      }
      else {
          this.setState({
              a: '-' + state.result,
              operator: '',
              b: '',
              equals: '',
              result: ''
          })
      }
  }
  else {
      if (state.a[0] === '-' && state.operator === '' && state.b === '') {
          const newA = state.a.substr(1)
          this.setState({
              a: newA
          })
      }
      if (state.a[0] !== '-' && state.operator === '' && state.b === '') {
          const newA = '-' + state.a
          this.setState({
              a: newA
          })
      }

      if (state.b[0] === '-' && state.operator !== '' && state.a !== '') {
          const newB = state.b.substr(1)
          this.setState({
              b: newB
          })
      }
      if (state.b[0] !== '-' && state.operator !== '' && state.a !== '') {
          const newB = '-' + state.b
          this.setState({
              b: newB
          })
      }
      if (state.a === '0' && state.operator === '' && state.b === '') {
          this.setState({
              a: '-' + state.a
          })
      }
      if (state.a === '-0' && state.operator === '' && state.b === '') {
          this.setState({
              a: '0'
          })
      }
  }
}