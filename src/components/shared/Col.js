import React from 'react'
import Radium from 'radium'

export const Col = ({
  children,
  left,
  right
}) => {
  return (
    <span style={{
      flex: 1,
      margin: 10
    }}>
      { children }
    </span>
  )
}

export default Radium(Col)
