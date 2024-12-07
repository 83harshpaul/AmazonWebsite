import React from 'react'
import "./ProductsTwo.css"
import CarouselDataTwo from '../Data/CarouselDataTwo'
import Carousel from '../Carousel/Carousel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const ProductsTwo = () => {
  const [move , setMove ] = React.useState(0); 

  const lists = CarouselDataTwo.map((element,index)=>{
    return <li><Carousel key ={index} {...element}/></li>
  })
    let currentPosition = move;
  function moveForward(){
      if(currentPosition === -89){
        currentPosition-=23.7;
      }
      else if(currentPosition >-112.7){
      currentPosition-= 89;
      }
    
    setMove(currentPosition)
  }
  function moveBackward(){
      if(currentPosition === -112.7){
        currentPosition+=89;
      }
      else if(currentPosition < 0){
      currentPosition+= 23.7;
      }
    
    setMove(currentPosition)
  }
  return (
    <div className="product">
          <h1>Trending deals under ₹499</h1>
          <div className="productCarousel">
            
              <FontAwesomeIcon icon={faChevronLeft} className='leftButton' onClick={moveBackward}/>
          
          
              <FontAwesomeIcon icon={faChevronRight} className='rightButton' onClick={moveForward}/>
          
            <ul style={{transform:`translateX(${move}%)`}}>
            
            
                {lists}
            </ul>
          </div>
    </div>
  )
}

export default ProductsTwo