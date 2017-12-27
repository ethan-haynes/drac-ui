import React from 'react'
import Radium from 'radium'

export const Card = (props) => {
  return (
    <div style={{
      backgroundColor: 'white',
      boxShadow: '0 10px 50px #bdbdbd',
      borderRadius: 2,
      padding: 20,
      minWidth: 50,
      minHeight: 50
    }}>
      { props.children }
    </div>
  )
}

export default Radium(Card)
