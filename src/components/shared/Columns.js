import React from 'react'
import Col from './Col'

const Columns = (props) => (
  props.children.map
    ? props.children.map(component => <Col>{component}</Col>)
    : <Col>{ props.children }</Col>
)

export default Columns
