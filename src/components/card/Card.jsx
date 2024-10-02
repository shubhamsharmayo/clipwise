import React,{useState} from 'react'
import './card.css'
import tag from '../../assets/tag.svg'
import image from '../../assets/image.png'
import img from '../../assets/img.png'

const Card = ({currentIndex}) => {

  const images = [image,img,image,img,image]

  
  return (
    <div>
      <div className="cardcontainer">
        <img className='cardtag' src={tag} alt="" />
        
        <img className='cardimg' src={images[currentIndex]}  alt="" />
      </div>
    </div>
  )
}

export default Card
