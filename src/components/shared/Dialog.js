import React, { Component } from 'react'
import Radium from 'radium'
import Button from './Button'
import Modal from './Modal'
import Row from './Row'
import Col from './Col'
import Columns from './Columns'

export class Dialog extends Component {
  state = { open: false }

  handleOnClick = () =>
    this.setState(prevState => ({ open: !prevState.open }))

  dialogContent = () =>
    this.state.open && (
      <Modal>
        <Row height='S'>
          <Columns left>
            {this.props.children}
          </Columns>
        </Row>
        <Row right>
          <Button
            onClick={this.handleOnClick}>
            close me!
          </Button>
        </Row>
      </Modal>
    )

  render({ props, handleOnClick } = this) {
    return (
      <div>
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
