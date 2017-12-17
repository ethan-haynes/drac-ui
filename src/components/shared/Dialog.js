import React, { Component } from 'react'
import Radium from 'radium'
import Button from './Button'
import Modal from './Modal'

export class Dialog extends Component {
  state = { open: false }

  dialogContent = () =>
    this.state.open && (
      <Modal>
        {this.props.children}
        <Button
          onClick={this.handleOnClick}>
          close me!
        </Button>
      </Modal>
    )

  handleOnClick = () =>
    this.setState({ open: !this.state.open })

  render({ props, handleOnClick } = this) {
    return (
      <div style={{margin: 10, padding: 10}}>
        {this.dialogContent()}
        <Button
          onClick={handleOnClick}>
          open me!
        </Button>
      </div>
    )
  }
}

export default Radium(Dialog)
