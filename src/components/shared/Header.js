import React from 'react'
import Radium from 'radium'
import Row from './Row'

export const Header = ({
  children,
  title
}) => {
  return (
    <div style={{
      flex: 1,
      marginBottom: 20,
      padding: '40px 10px',
      backgroundColor: '#e2e2e2'
    }}>
    <Row left>
      <div
        style={{
          padding: '10px 10px 10px 40px',
          fontSize: 50,
          fontWeight: 'bold'
        }}
      >
        {title}
      </div>
    </Row>
      { children }
    </div>
  )
}

export default Radium(Header)
