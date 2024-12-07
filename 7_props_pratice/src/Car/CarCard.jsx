import React from 'react'

const CarCard = (props) => {
  return (
    <div className='card'>
      <img src={props.imgUrl} alt="" />
      <h1>{props.name}</h1>
      <h3>{props.price}</h3>
    </div>
  )
}

export default CarCard
