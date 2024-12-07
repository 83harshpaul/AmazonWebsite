import React from 'react'
import "./CarouselCircle.css"


const CarouselCircle = (props) => {
  return (
    <div className="carouselCircle">
        <div className="circleImage">
        <img src={props.photo} alt=""/>
        </div>
    </div>
  )
}

export default CarouselCircle