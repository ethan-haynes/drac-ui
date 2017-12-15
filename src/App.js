import React, { Component } from 'react'
import Radium from 'radium'
import logo from './logo.svg'
import * as styles from './App.style'

class App extends Component {
  render() {
    return (
      <div style={{...styles.App}}>
        <header style={{...styles.AppHeader}}>
          <img src={logo} style={{...styles.AppLogo}} alt="logo" />
          <h1 style={{...styles.AppTitle}}>Welcome to React</h1>
        </header>
        <p style={{...styles.AppIntro}}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default Radium(App)
