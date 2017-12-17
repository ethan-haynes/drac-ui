import React from 'react'
import Radium from 'radium'

const heights = {
  'xxs' : '15vh',
  'xs'  : '15vh',
  's'   : '25vh',
  'm'   : '50vh',
  'l'   : '75vh',
  'xl'  : '80vh',
  'xxl' : '90vh',
}

export const Row = ({ children, height }) => {
  return (
    <div style={{
      margin: '0 auto',
      display: 'flex',
      minHeight: heights[height],
      flexDirection: 'row',
      flexWrap: 'wrap',
      flexFlow: 'row wrap',
    }}>
      { children }
    </div>
  )
}

export default Radium(Row)
