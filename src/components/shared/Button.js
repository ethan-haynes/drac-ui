import React from 'react'
import Radium from 'radium'

const styles = {
  buttonBase: {
    cursor: 'pointer',
    backgroundColor: '#047CE0',
    padding: 10,
    color: 'white',
    margin: 5,
    ':hover': {
      backgroundColor: '#1D94F6'
    },
    ':active': {
      animation: 'x 1 1s ease-out forwards',
      animationName: Radium.keyframes({
        '0%': { backgroundColor: '#1D94F6' },
        '100%': { backgroundColor: '#8CCEFF' }
      }, 'bounce'),
    }
  },
  round: {
    borderRadius: 5,
  },
  oval: {
    borderRadius: 20,
  },
  glow: {
    boxShadow: '0 0 10px #047CE0'
  },
  shadow: {
    boxShadow: '0 2px 10px #959595'
  }
}

export const Button = (props) => {
  const { children, round, oval, glow, shadow } = props
  const style = {
    ...styles.buttonBase,
    ...round && styles.round,
    ...oval && styles.oval,
    ...glow && styles.glow,
    ...shadow && styles.shadow,
  }

  return (
    <div style={style} onClick={props.onClick}>
      { children }
    </div>
  )
}

export default Radium(Button)
