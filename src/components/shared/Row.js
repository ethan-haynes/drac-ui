import React from 'react'
import Radium from 'radium'

export const Row = ({ children }) => {
  return (
    <div style={{
      margin: '0 auto',
      display: 'flex'
    }}>
      { children }
    </div>
  )
}

export default Radium(Row)
