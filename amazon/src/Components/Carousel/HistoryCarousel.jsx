import React from 'react';
import './HistoryCarousel.css'


const HistoryCarousel = (props) => {
    
    return(
        <div className="historyCarousel">
            <div className="tasvir">
                <img src={props.photo} alt=""/>
            </div>
            <p className="info">{props.productInfo}</p>
            <p className='star'>
                <img src={props.starImage} alt=""/>
                <span className="number">{props.delivered}</span>
            </p>
            <p className="view">{props.view}+ viewed in past month</p>
            { props.isbestSellerImage && <p className='bestSeller'>
                <img src={props.bestSellerImage} alt="" className="bestImage"/>
                <span className="stock">{props.stock}</span>
                </p>}
          
            <p className="priceInfo pinfo">
               { props.isNoOfOffers && <span className='offersFrom'>{props.noOfOffers} offers from</span>}
               { !props.isNoOfOffers && <span className="discountNumber">-{props.discountNo}%</span>}
                <span className="rupeeSign">₹</span>
                <span className="price">{props.price}</span>
                <span className="doubleZeroes">00</span>
               { props.ispriceperpieces && <span className="priceperpiece">(₹{props.priceperpieces})</span>}
            </p>
            { props.isshippingPrice && <p className="shipping">₹{props.shippingPrice}.00 shipping</p>}
           { props.isCounts && <p className="counts">(₹{props.counts}/count)</p>}
           { props.issalePhoto && <p className="salePhoto"><span className="discount">Great Indian Festival</span></p>}
           { props.ismrp && <p className="mRp"><span className="mrp">M.R.P:<span className="mrprice">₹{props.mrp}.00</span></span></p>}
           { props.isDate && <p className="deliveryDate">Get it by <span className="date">{props.date}</span></p>}
           { props.isFreeDelivery && <p className='free'>FREE Delivery by Amazon</p>}

        </div>
    )
}
export default HistoryCarousel