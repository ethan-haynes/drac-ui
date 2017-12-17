import React from 'react'
import Radium from 'radium'

export const Col = ({ children }) => {
  return (
    <div style={{
      margin: 10,
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: 0,
    }}>
      { children }
    </div>
  )
}

export default Radium(Col)
