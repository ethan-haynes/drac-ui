import React from 'react'
import Radium from 'radium'

export class Nav extends React.Component {
  state = { offsetWidth: 0, windowWidth: window.innerWidth }

  render ({
    children,
    fixed,
    left,
    right
  } = this.props) {
    return (
      <div style={{
        // position: 'fixed',
        top: 0,
        width: '100%',
        flex: 1,
        margin: 0,
        minHeight: 50,
        backgroundColor: 'red'
      }}>
        { children }
      </div>
    )
  }
}

export default Radium(Nav)
