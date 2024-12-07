import React from 'react'
import "./Products.css"
import CarouselData from '../Data/CarouselData'
import Carousel from '../Carousel/Carousel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Products = () => {
  const [move , setMove ] = React.useState(0); 

  const leftOne = React.useRef()
  const rightOne = React.useRef()

  const lists = CarouselData.map((element,index)=>{
    return <li><Carousel key ={index} {...element}/></li>
  })
    let currentPosition = move;
  function moveForward(){
      if(currentPosition === -178){
        currentPosition-=41.5;
        //  rightOne.current.style.border=" 2px solid #058d7d"
      }
      else if(currentPosition >-219){
      currentPosition-= 89;
      //  rightOne.current.style.border=" 2px solid #058d7d"
      }
      // rightOne.current.style.border=" 2px solid #058d7d"
    setMove(currentPosition)
  }
  function moveBackward(){
      if(currentPosition === -219.5){
        currentPosition+=41.5;
      }
      else if(currentPosition < 0){
      currentPosition+= 89;
      }
    
    setMove(currentPosition)
  }
  return (
    <div className="product">
          <h1>Blockbuster deals with exchange</h1>
          <div className="productCarousel">
          <FontAwesomeIcon icon={faChevronLeft} className='leftButton' onClick={moveBackward} ref={leftOne}/>
          <FontAwesomeIcon icon={faChevronRight} className='rightButton' onClick={moveForward} ref={rightOne}/>
            <ul style={{transform:`translateX(${move}%)`}}>
            
                {lists}
            </ul>
          </div>
    </div>
  )
}

export default Products