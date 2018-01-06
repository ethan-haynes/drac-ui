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
        <Row>
          <Columns>
            <Button shadow> click me! </Button>
            <Button round> click me! </Button>
            <Button oval> click me! </Button>
            <Button oval glow> click me! </Button>
            <Button round shadow> click me! </Button>
          </Columns>
        </Row>
        <Row>
          <Columns right>
            <Dialog> Hi there! </Dialog>
          </Columns>
        </Row>
        <Row>
          <Columns right>
            <Card header="Header">
              stuff and thangs
            </Card>
            <Card header="thangs" img={{
              alt: "Mountain View",
              src: "http://r.ddmcdn.com/s_f/o_1/cx_462/cy_245/cw_1349/ch_1349/w_720/APL/uploads/2015/06/caturday-shutterstock_149320799.jpg"
            }}>stuff dsfonsdfofdsl dsfdfsjklfdskjsfkd fdslfsdljkfdsjl</Card>
            <Card>stuff and thangs</Card>
            <Card>stuff and thangs</Card>
          </Columns>
        </Row>

      </div>
    )
  }
}

export default Radium(App)
