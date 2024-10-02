import { useState } from 'react'

import Navbar from './components/Navbar/Navbar'
import './App.css'
import scroll from './assets/scroll.svg'
import Card from './components/card/Card'
import Slidetracker from './components/slidetracker/Slidetracker'
import image from './assets/image.png'
import img from './assets/img.png'
import Middlecards from './components/middlecards/Middlecards'
import thirdview from './assets/thirdview.svg'
import image2 from './assets/image2.png'
import { useInView } from 'react-intersection-observer';

function App() {


 
  const { ref: refBox2, inView: inViewBox2 } = useInView({
    triggerOnce: true,
    threshold: 0.1, // 10% of the element visible
  });

  const { ref: refBox3, inView: inViewBox3 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [img,image,img,image,img]

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };


  return (
    <>
      <div className="container">
        <div className="boxes box1">

          <Navbar />

          <svg className='backgroundcurve' width="1440" height="604" viewBox="0 0 1440 604" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M760 435.452C544.368 463.007 234.943 374.829 0 498.829V604H1440V0.5C1440 0.5 1296.64 13.2995 1171 90.5C1025.94 179.629 975.632 407.896 760 435.452Z" fill="white" />
          </svg>
          <div className='content'>

            <div className='title'> <div className='welcome'>Welcome to</div>Pop Rock Crystal Shop!</div>
            <div className='description'>Here you will find unique phone accessories, crystals, jewelry and more. Free shipping inside the U.S. and our phone grips come with a limited warranty. Enjoy!</div>
            <div className='btn'>
              <button className='shop'>SHOP NOW</button>
              <p>about us</p>
            </div>
            <div className='maincard'>
              <Card currentIndex={currentIndex}/>
            </div>
          </div>
          <div className="scroll">
            <img src={scroll} alt="" />
          </div>
          <Slidetracker goToPrevious={goToPrevious} goToNext={goToNext} currentIndex={currentIndex}/>
        </div>





        <div className={`box2hidden ${inViewBox2 ? 'box2visible' : 'box2hidden'}`} ref={refBox2}>
          <div className='product'>All Product</div>
          <div className="options">
            <div className="opt1">
            <label >Filter:</label>
            <select className='select'>
              <option >All Product</option>
              <option >2</option>
              <option >3</option>
              <option >4</option>
            </select>
            </div>
            <div className="opt2">
            <label >Sort:</label>
            <select className='select'>
              <option >Best Selling</option>
              <option >2</option>
              <option >3</option>
              <option >4</option>
            </select>
            </div>
          </div>
          <div className="carding">
            <Middlecards/>
            <Middlecards/>
            <Middlecards/>
            <Middlecards/>
            <Middlecards/>
            <Middlecards/>
            <Middlecards/>
            <Middlecards/>
          </div>
          <div className='view'>
            <button className="viewall">VIEW ALL</button>
          </div>
        </div>
        <div className={`box3hidden ${inViewBox3 ? 'box3visible' : 'box3hidden'}`} ref={refBox3}>
          <img className='curve' src={thirdview} alt="" />
          
          <div className="outercircle">
            <div className="innercircle"></div>
            <img  className='circleimg' src={image2}  alt="" />

          </div>
          <div className="lowerboxcontent">
            <p className='cont1'>BEST PRICE</p>
            <p className='cont2'>Agate Phone Grip</p>
            <div className='price'>
            <span className='less'>44.50$</span><span className='more'>19.50$</span>
            
            </div>
            <div className='paradiv'>
              <p className="para">These Pop Rock Crystal grip tops can be swapped with other tops depending on your mood, outfit, nails, phone case, holiday, etc.! Just gently squeeze the sides to remove and swap out with another color or design!</p>
            </div>
            <button className='buy2'>BUY NOW</button>
          </div>
        </div>
        <div className="boxes box4"></div>
      </div>
    </>
  )
}

export default App
