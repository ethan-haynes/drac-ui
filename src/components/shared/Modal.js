import React from 'react'
import Radium from 'radium'

export const Modal = (props) => {
  return (
    <div>
    <div style={{
      zIndex: 10,
      backgroundColor: 'white',
      boxShadow: '0 10px 50px #4A4A4A',
      borderRadius: 2,
      position: 'fixed',
      top: '40%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      padding: 20,
      minWidth: 600,
      minHeight: 150
    }}>
      {props.children}
    </div>
    <div
      style={{
        zIndex: 0,
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,.25)',
        height: '100vh',
        width: '100vw',
        top: 0,
        left: 0
      }}
    />
    </div>

  )
}

export default Radium(Modal)
