import React, { Component } from 'react'
import Radium from 'radium'

const styles = {
  container: {
    backgroundColor: 'white',
    boxShadow: '0 2px 5px #bdbdbd',
    borderRadius: 4,
    padding: 20,
    minWidth: 25,
    minHeight: 25,
    textAlign: 'left'
  },
  header: {
    fontSize: '1.5em'
  },
  img: {
    boxShadow: '0 15px 0 white, 0 0 20px #bdbdbd',
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
    margin: -10
  }
}

export class Card extends Component {
  state = { offsetWidth: 0, windowWidth: window.innerWidth }

  checkResize = (previousState) => {
    const width = window.innerWidth
    if (previousState.windowWidth > width) {
      return {
        offsetWidth: previousState.offsetWidth - (previousState.windowWidth - width),
        windowWidth: previousState.windowWidth - width
      }
    } else {
      return {
        offsetWidth: this.refs.image_container.offsetWidth,
        windowWidth: width
      }
    }
  }

  updateDimensions = () => {
    const { offsetWidth } = this.refs.image_container
    this.setState(this.checkResize)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions)
  }

  componentDidMount () {
    this.updateDimensions()
    window.addEventListener("resize", this.updateDimensions)
  }

  render ({ children, header, img } = this.props) {
    return (
      <div>
        { img && <img src={img.src} alt={img.alt} style={{...styles.img, width: this.state.offsetWidth, height: 'auto'}} /> }
        <div style={{...styles.container}} ref="image_container">
          { header && <div style={{...styles.header}}> { header } </div> }
          { children }
        </div>
      </div>
    )
  }
}

export default Radium(Card)
