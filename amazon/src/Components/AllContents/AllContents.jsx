import React from 'react'
import './AllContents.css'
import CarouselDataTwo from '../Data/CircleCarouselData'
import CarouselCircle from '../Carousel/CarouselCircle'
import Box from '../Box/Box'
import DataTwo from '../Data/DataTwo'
import CircleCarouselDataTwo from '../Data/CircleCarouselDataTwo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import airplane from '../Assests/airplane.png'

const AllContents = () => {
    const [moveCircleCarousel,setMoveCircleCarousel] = React.useState(0)
    const [moveCircleCarouselTwo,setMoveCircleCarouselTwo] = React.useState(0)
    const CarouselOne = CarouselDataTwo.map((element,index)=>{
        return <li><CarouselCircle key={index} {...element} /></li>
    })

    const CarouselTwo = DataTwo.map((element,index)=>{
      return <Box key={index} {...element}/>
    })

    const CircleCarouselTwo = CircleCarouselDataTwo.map((element,index)=>{
      return <li><CarouselCircle key={index} {...element}/></li>
    })
   
    function moveForwardOne(){
      setMoveCircleCarousel(prev => (prev > -31.5? prev - 31.5 : prev))
    }
    function moveBackwardOne(){ 
      setMoveCircleCarousel(prev =>(prev < 0?prev + 31.5 : prev) )
    }

    function moveForwardTwo(){
      setMoveCircleCarouselTwo(prev => (prev > -31.5? prev - 31.5 : prev))
    }
    function moveBackwardTwo(){ 
      setMoveCircleCarouselTwo(prev =>(prev < 0?prev + 31.5 : prev) )
    }
  return (
    <div className="allContents">
        <div className="circle_carousel">
            <p>
              <span className="dealOne">Up to 40% off | Deals on smartphones</span>
              <span className='explore'>Explore more</span>   
           </p>
            <div className="circle_carousel_One">
            <FontAwesomeIcon icon={faChevronLeft} className='leftButton1' onClick={moveBackwardOne}/>
            <FontAwesomeIcon icon={faChevronRight} className='rightButton1' onClick={moveForwardOne}/>
            <ul style={{transform:`translateX(${moveCircleCarousel}%)`}}>
            {CarouselOne}
            </ul>
            </div>
        </div>
        <div className="box_carousel">
            {CarouselTwo}
        </div>
        <div className="advirtisement">
          <img src={airplane} alt="" />
        </div>

        <div className="circle_carousel carouselTwo">
            <p>
              <span className="dealOne">Starting ₹89 | Deals on mobile accessories</span>
              <span className='explore'>Explore more</span>   
           </p>
            <div className="circle_carousel_Two">
            <FontAwesomeIcon icon={faChevronLeft} className='leftButton2' onClick={moveBackwardTwo}/>
            <FontAwesomeIcon icon={faChevronRight} className='rightButton2' onClick={moveForwardTwo}/>
            <ul style={{transform:`translateX(${moveCircleCarouselTwo}%)`}}>
            {CircleCarouselTwo}
            </ul>
            </div>
        </div>

        <div className="boxCarouselTwo">
          
        </div>
    </div>
  )
}

export default AllContents