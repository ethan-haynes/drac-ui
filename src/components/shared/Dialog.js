import React, { Component } from 'react'
import Radium from 'radium'
import Button from './Button'

export class Dialog extends Component {
  render({ props } = this) {
    return (
      <div style={{margin: 10}}>
        {props.children}
      </div>
    )
  }
}

export default Radium(Dialog)
