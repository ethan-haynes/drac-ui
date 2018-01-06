import React from 'react'
import Radium from 'radium'
import Columns from './Columns'

import { vHeights } from './styles'

export const Row = ({
  children,
  height,
  left,
  right,
  stretch,
  center,
  spread
}) => {
  return (
    <div style={{
      margin: '10 auto',
      display: 'flex',
      minHeight: vHeights[height],
      flexDirection: 'row',
      flexWrap: 'wrap',
      flexFlow: 'row wrap',
      justifyContent: left ? 'flex-start' : right ? 'flex-end' : center ? 'center' : 'space-evenly',
    }}>
    { stretch
      ? <Columns>{ children }</Columns>
      : children
    }
    </div>
  )
}

export default Radium(Row)
