import React, { Component } from 'react'
import Radium from 'radium'

const styles = {
  container: {
    backgroundColor: 'white',
    boxShadow: '0 10px 50px #bdbdbd',
    borderRadius: 2,
    padding: 20,
    minWidth: 25,
    minHeight: 25,
    textAlign: 'left'
  },
  header: {
    fontSize: '1.5em'
  },
  img: {
    width: 113.77,
    boxShadow: '0 10px 50px #bdbdbd',
    borderRadius: 2,
    marginBottom: -10
  }
}

export class Card extends Component {
  state = { offsetWidth: 0 }

  updateDimensions = () => {
    const { offsetWidth } = this.refs.image_container
    this.setState({ offsetWidth })
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
      <span>
        { img && <img src={img.src} alt={img.alt} style={{...styles.img, width: this.state.offsetWidth, height: 'auto'}} /> }
        <div style={{...styles.container}} ref="image_container">
          { header && <div style={{...styles.header}}> { header } </div> }
          { children }
        </div>
      </span>
    )
  }
}

export default Radium(Card)
