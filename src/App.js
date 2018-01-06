import React, { Component } from 'react'
import Radium from 'radium'
import logo from './logo.svg'
import * as styles from './App.style'

import Button from './components/shared/Button'
import Dialog from './components/shared/Dialog'
import Row from './components/shared/Row'
import Col from './components/shared/Col'
import Card from './components/shared/Card'
import Columns from './components/shared/Columns'
import Nav from './components/shared/Nav'

class App extends Component {
  render() {
    return (
      <div style={styles.App}>
        <Nav fixed>
          <Row right>
            <Button href="#cats">link here</Button>
            <Button href="#cats">link here</Button>
            <Button href="#cats">link here</Button>
            <Button href="#cats">link here</Button>
          </Row>
        </Nav>
        <header style={styles.AppHeader}>
          <img src={logo} style={styles.AppLogo} alt="logo" />
          <h1 style={styles.AppTitle}>Welcome to React</h1>
        </header>
        <p style={styles.AppIntro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Row spread>
          <Button shadow> click me! </Button>
          <Button round> click me! </Button>
          <Button oval> click me! </Button>
          <Button oval glow> click me! </Button>
          <Button round shadow> click me! </Button>
        </Row>
        <Row stretch>
          <Dialog> Hi there! </Dialog>
        </Row>
        <Row stretch>
          <Card header="Header">
            stuff and thangs
          </Card>
          <Card header="thangs" img={{
            alt: "Mountain View",
            src: "http://r.ddmcdn.com/s_f/o_1/cx_462/cy_245/cw_1349/ch_1349/w_720/APL/uploads/2015/06/caturday-shutterstock_149320799.jpg"
          }}>This is an example of a card with text and an image in it.</Card>
          <Card>stuff and thangs</Card>
          <Card>stuff and thangs</Card>
        </Row>

      </div>
    )
  }
}

export default Radium(App)
