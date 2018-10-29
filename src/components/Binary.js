import React, { Component } from 'react';
import converter from 'decimal-to-binary';

class Binary extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <span style={{ color: 'white' }}>
          {converter.convertToBinary(Math.abs(this.props.a))}
        </span>
        <br />
        <span style={{ color: 'white' }}>
          {converter.convertToBinary(this.props.b)}
        </span>
        <br />
        <span style={{ color: 'rgb(233, 4, 157)' }}>
          {converter.convertToBinary(this.props.result)}
        </span>
      </div>

    )
  }
}

export default Binary;



