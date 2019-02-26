import React from 'react'
import { Card } from '../Card/Card'

export const CardContainer = ({ presidents }) => {
  const cards = presidents.map(president => <Card president={president} key={presidents.name} />)

  return (
    <div className='CardContainer'>
      { cards }
    </div >
  )
}