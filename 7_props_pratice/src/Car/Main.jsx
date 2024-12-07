import React from 'react'
import CarCard from './CarCard'
import Car1 from '.././assets/car1.jpeg'
import Car2 from '.././assets/car2.jpeg'
import Car3 from '.././assets/car3.jpeg'

const Main = () => {
  return (
    <div className='main'>
      <CarCard name='BMW' price='1.45cr'  imgUrl={Car1} />
      <CarCard name='HERO' price='1.5cr'  imgUrl={Car2} />
      <CarCard name='MOTO' price='1.85cr'  imgUrl={Car3} />
    </div>
  )
}

export default Main
