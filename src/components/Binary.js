import React, { Component } from 'react';
import { multiplicationFn, divisionFn } from './functions/basicCalculations';

class Binary extends Component {
  render() {
    const { a, b, result } = this.props;

    const aAsBinary1 = a === '' ? '' : parseInt(Math.abs(a), 10).toString(2).substr(0, 15);
    const aAsBinary2 = a === '' ? '' : parseInt(Math.abs(a), 10).toString(2).substr(15, 15);
    const aAsBinary3 = a === '' ? '' : parseInt(Math.abs(a), 10).toString(2).substr(30, 15);

    const bWithoutPercent = b.includes('%') ? b.slice(0, -1) : b;
    const newB = multiplicationFn(divisionFn(a, 100), bWithoutPercent);

    const bForFormula = b.includes('%') ? newB : b;

    const bAsBinary1 = b === '' ? '' : parseInt(Math.abs(bForFormula), 10).toString(2).substr(0, 15);
    const bAsBinary2 = b === '' ? '' : parseInt(Math.abs(bForFormula), 10).toString(2).substr(15, 15);
    const bAsBinary3 = b === '' ? '' : parseInt(Math.abs(bForFormula), 10).toString(2).substr(30, 15);

    const resultAsBinary1 = result === '' ? '' : parseInt(Math.abs(result), 10).toString(2).substr(0, 15);
    const resultAsBinary2 = result === '' ? '' : parseInt(Math.abs(result), 10).toString(2).substr(15, 15);
    const resultAsBinary3 = result === '' ? '' : parseInt(Math.abs(result), 10).toString(2).substr(30, 15);



    if (this.props.on) {
      return (
        <div style={{ textAlign: 'center' }}>
          <span style={{ color: 'white' }}>
            {aAsBinary1}
            <br />
            {aAsBinary2}
            <br />
            {aAsBinary3}
          </span>
          <br />
          <span style={{ color: 'white' }}>
            {bAsBinary1}
            <br />
            {bAsBinary2}
            <br />
            {bAsBinary3}
          </span>
          <br />
          <span style={{ color: '#6dff8d' }}>
            {resultAsBinary1}
            <br />
            {resultAsBinary2}
            <br />
            {resultAsBinary3}
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
