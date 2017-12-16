import React, { Component } from 'react'
import Radium from 'radium'
import logo from './logo.svg'
import * as styles from './App.style'

import Button from './components/shared/Button'
import Dialog from './components/shared/Dialog'

class App extends Component {
  render() {
    return (
      <div style={styles.App}>
        <header style={styles.AppHeader}>
          <img src={logo} style={styles.AppLogo} alt="logo" />
          <h1 style={styles.AppTitle}>Welcome to React</h1>
        </header>
        <p style={styles.AppIntro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <Button shadow> click me! </Button>
          <Button round> click me! </Button>
          <Button oval> click me! </Button>
          <Button oval glow> click me! </Button>
          <Button round shadow> click me! </Button>
        </div>
        <Dialog> Hi there! </Dialog>
      </div>
    )
  }
}

export default Radium(App)
