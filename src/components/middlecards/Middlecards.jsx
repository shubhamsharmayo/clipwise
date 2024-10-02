import React from 'react'
import image2 from '../../assets/image2.png'
import './middlecard.css'

const Middlecards = () => {
  return (
    <div>
      <div className="middlecardcontainer">
      
        
        <img className='middlecardimg' src={image2}  alt="" />
        <p className='cardtitle'>CRYSTAL AGATE PHONE GRIP</p>
        <p className='rate'>18.99$</p>
        <button className='buy'>BUY NOW</button>
      </div>
    </div>
  )
}

export default Middlecards
