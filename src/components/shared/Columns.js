import React from 'react'
import Col from './Col'
import keyGen from '../../util/keyGen'

const Columns = (props) => {
  const { children, ...attributes } = props

  return (
    children.map
      ? children.map(component => <Col {...attributes} key={keyGen()}>{component}</Col>)
      : <Col {...attributes} key={keyGen()}>{ props.children }</Col>
  )
}

export default Columns
