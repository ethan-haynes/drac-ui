import React from 'react'
import Radium from 'radium'

export const Col = ({
  children,
  left,
  right
}) => {
  return (
    <span style={{
      margin: 10,
      flex: 1,
      flexShrink: 1,
      flexBasis: 0,
      textAlign: left ? 'left' : right && 'right',
    }}>
      { children }
    </span>
  )
}

export default Radium(Col)
