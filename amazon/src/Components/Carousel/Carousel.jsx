import React from 'react'
import './Carousel.css'
import iphone from '../Assests/cr3.png'

const Carousel = (props) => {
  return (
    <div className="carousel">
        <div className="imageBox">
            <img src={props.image} alt="" />
        </div>
        <p>
            <span className="discount">{props.discount} off</span>
            <span className="saleName">Great Indian Festival</span>
        </p>
        <p className="priceInfo">
            <span className="rupeeSign">₹</span>
            <span className="price">{props.price}</span>
            <span className="doubleZeroes">00</span>
            <span className="mrp">M.R.P:<span className="mrprice">₹{props.mrp}.00</span>
            </span>
        </p>
        <p className="productName">{props.productName}</p>
    </div>
  )
}

export default Carousel