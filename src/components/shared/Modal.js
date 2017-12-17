import React from 'react'
import Radium from 'radium'

export const Modal = (props) => {
  return (
    <div style={{
      zIndex: 10,
      backgroundColor: 'white',
      boxShadow: '0 2px 10px #959595',
      borderRadius: 2,
      position: 'fixed',
      top: '25%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      padding: 20,
      minWidth: 300,
      minHeight: 150
    }}>
      {props.children}
    </div>
  )
}

export default Radium(Modal)
