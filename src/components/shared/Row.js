import React from 'react'
import Radium from 'radium'

import { vHeights } from './styles'

export const Row = ({ children, height }) => {
  return (
    <div style={{
      margin: '0 auto',
      display: 'flex',
      minHeight: vHeights[height],
      flexDirection: 'row',
      flexWrap: 'wrap',
      flexFlow: 'row wrap',
    }}>
      { children }
    </div>
  )
}

export default Radium(Row)
