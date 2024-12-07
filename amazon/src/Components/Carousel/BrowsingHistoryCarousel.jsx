import React from 'react'
import './BrowsingHistoryCarousel.css'

const BrowsingHistoryCarousel = (props) => {
  return (
    <div className="browsingHistoryCarousel">
        <img src={props.photo} alt=""/>
    </div>
  )
}

export default BrowsingHistoryCarousel