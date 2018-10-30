import React, { Component } from 'react';
import converter from 'decimal-to-binary';

class Binary extends Component {
  render() {
    const { a, b, result } = this.props;
    const newA = a[0] === '-' ? a.substr(1, 10) : a.substr(0, 10);
    const newB = b[0] === '-' ? b.substr(1, 10) : b.substr(0, 10);
    const newResult = result === '' ? '' : (Math.abs(parseFloat(this.props.result)));
    const newResultSafe = newResult.toString().substr(0, 10);

    if (this.props.on) {
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
          <span style={{ color: '#6dff8d' }}>
            {converter.convertToBinary(newResultSafe)}
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



