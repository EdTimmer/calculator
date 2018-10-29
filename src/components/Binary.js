import React, { Component } from 'react';
import converter from 'decimal-to-binary';

class Binary extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   a: this.props.a[0] === '-' ? this.props.a.substr(1) : this.props.a,
    //   b: this.props.b[0] === '-' ? this.props.b.substr(1) : this.props.b,
    //   result: this.props.result[0] === '-' ? this.props.result.substr(1) : this.props.result,
    // a: this.props.a,
    // b: this.props.b,
    // result: this.props.result,
    //   }
  }

  render() {
    console.log('Binary got called 2')
    const { a, b, result } = this.props;
    const newA = a[0] === '-' ? a.substr(1, 10) : a.substr(0, 10);
    const newB = b[0] === '-' ? b.substr(1, 10) : b.substr(0, 10);
    const newResult = result === '' ? '' : ((parseInt(result) + parseInt(result)) / 2);
    const newResultSafe = newResult.toString().substr(0, 10);

    return (
      <div style={{ textAlign: 'center' }}>
        <span style={{ color: 'white' }}>
          {converter.convertToBinary(newA)}
        </span>
        <br />
        <span style={{ color: 'white' }}>
          {converter.convertToBinary(newB)}
        </span>
        <br />
        <span style={{ color: 'rgb(233, 4, 157)' }}>
          {converter.convertToBinary(newResultSafe)}
        </span>
      </div>

    )
  }
}

export default Binary;



