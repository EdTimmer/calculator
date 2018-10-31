import React, { Component } from 'react';
import converter from 'decimal-to-binary';

class Binary extends Component {
  render() {
    const { a, b, result } = this.props;
    const newA = a[0] === '-' ? a.substr(1, 10) : a.substr(0, 10);
    const newB = b[0] === '-' ? b.substr(1, 10) : b.substr(0, 10);
    const newResult = result[0] === '-' ? result.substr(1, 10) : result.substr(0, 10);


    const newResultSafe = result === '' ? '' : parseInt(newResult);
    // const newResultSafe = newResult ? newResult.toString().substr(0, 10) : '';

    const resultA = converter.convertToBinary(newA);
    const resultB = converter.convertToBinary(newB);
    // const resultResult = converter.convertToBinary(newResultSafe);
    const convertedResult = parseInt(newResultSafe, 10).toString(2);
    // const filteredResult = converter.convertToBinary(newResultSafe);
    // const filteredNewResult = !!converter.convertToBinary(newResultSafe) ? converter.convertToBinary(newResultSafe) : '';
    const displayResult = result === '' ? '' : convertedResult;

    if (this.props.on) {
      return (
        <div style={{ textAlign: 'center' }}>
          <span style={{ color: 'white' }}>
            {resultA}
          </span>
          <br />
          <span style={{ color: 'white' }}>
            {resultB}
          </span>
          <br />
          <span style={{ color: '#6dff8d' }}>
            {displayResult}
          </span>
        </div>

      )
    }
    else {
      return null;
    }
  }
}

export default Binary;



