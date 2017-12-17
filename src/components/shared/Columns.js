import React from 'react'
import Col from './Col'
import keyGen from '../../util/keyGen'

const Columns = (props) => (
  props.children.map
    ? props.children.map(component => <Col {...props} key={keyGen()}>{component}</Col>)
    : <Col {...props} key={keyGen()}>{ props.children }</Col>
)

export default Columns
