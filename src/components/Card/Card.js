import React from 'react'

export const Card = ({ president }) => {
  return (
    <div className='Card'>
      <p>{president.president}</p>
      <p>{president.birth_year}</p>
      <p>{president.death_year}</p>
      <p>{president.took_office}</p>
      <p>{president.left_office}</p>
      <p>{president.party}</p>
    </div>
  )
}