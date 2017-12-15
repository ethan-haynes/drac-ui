import React, { Component } from 'react'
import Radium from 'radium'

const styles = {
  button: {
    cursor: 'pointer',
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 20,
    color: 'white'
  }
}

export const Button = (props) => {
  const { children } = props
  return (
    <span style={{...styles.button}}>
      { children }
    </span>
  )
}

export default Radium(Button)
