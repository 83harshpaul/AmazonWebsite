import React from 'react'
import './LiveCarousel.css'
import s1 from '../Assests/s1.png'

const LiveCarousel = (props) =>{
    return (
        <div className="liveCarousel">
            <div className="image">
                <img src={props.image} alt=""/>
            </div>
            {props.isFeatured && <p className="featured">Featured Now</p>}
            {!props.isFeatured && <p></p>}
            <p className="info">{props.productInfo}</p>
            {props.isofferAvailable &&<p className="saleInfo">
                <span className="discount">{props.discount} off</span>   
                <span className="sale">
                    <span className="saleName">Great Indian</span>
                    <span className="festival">Festival</span>
                </span>    
            </p>}
            <p className="priceInfo">
                <span className="rupeeSign">₹</span>
                <span className="price">{props.price}</span>
                <span className="doubleZeroes">00</span>
                <span className="mrp">M.R.P:<span className="mrprice">₹{props.mrp}.00</span>
            </span> 
            </p>
            {props.isClaimed && <p className="checkClaimedBox">
            <span>
                <div className="claimed">
                   <div className="filledBox" style={{width:`${props.perclaimed}%`}}></div>
                </div>
            </span>
            <span className="percentageClaimed">{props.perclaimed}% claimed</span>
            </p>}
        </div>
    )
}

export default LiveCarousel
