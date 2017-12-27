import React, { Component } from 'react'
import Radium from 'radium'

// width: 153%;
// top: 0;
// left: 0;
// transform: translate(-18%, -18%);

const styles = {
  container: {
    backgroundColor: 'white',
    boxShadow: '0 10px 50px #bdbdbd',
    borderRadius: 2,
    padding: 20,
    minWidth: 50,
    minHeight: 50,
    textAlign: 'left'
  },
  header: {
    fontSize: '1.5em'
  },
  img: {
    width: 113.77,
    position: 'absolute',
    borderRadius: 2,
    transform: 'translate(-18%, -18%)'
  }
}

export class Card extends Component {
  state = { offsetWidth: 0 }
  componentDidMount () {
    const { offsetWidth } = this.refs.bla
    console.log(this.refs.bla.offsetWidth)
    this.setState({ offsetWidth })
  }

  render ({ children, header, img } = this.props) {
    return (
      <div style={{...styles.container}} ref="bla">
        { img && <img src={img.src} alt={img.alt} style={{...styles.img, width: this.state.offsetWidth}} /> }
        { img && <div style={{ height: 113.77 }}/> }
        { header && <div style={{...styles.header}}> { header } </div> }
        { children }
      </div>
    )
  }
}

export default Radium(Card)
