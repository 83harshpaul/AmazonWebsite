import React from 'react'
import './CarouselPhoto.css'


const CarouselPhoto = (props) => {
  return (
    <div className="carouselPhoto">
        <img src={props.photo} alt=""/>
    </div>
  )
}

export default CarouselPhoto