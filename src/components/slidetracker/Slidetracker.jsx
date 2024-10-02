import React from 'react'
import './slide.css'

const Slidetracker = ({goToPrevious,goToNext,currentIndex}) => {
  return (
    <div className='toggle'>
      <button className='previous' onClick={goToPrevious}>←</button>
      <div className={currentIndex==0?'background':'dots'}></div>
        <div className={currentIndex==1?'background':'dots'}></div>
        <div className={currentIndex==2?'background':'dots'}></div>
        <div className={currentIndex==3?'background':'dots'}></div>
        <div className={currentIndex==4?'background':'dots'}></div>
      <button className='next' onClick={goToNext}>→</button>
    </div>
  )
}

export default Slidetracker
