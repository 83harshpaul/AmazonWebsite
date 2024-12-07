import React from 'react'
import './SearchHisCaro.css'
import baker from '../Assests/hi19.png'

const SearchHisCaro = (props) => {
  return (
    <div className="search-his-car">
        <div className="img">
            <img src={props.photo} alt=""/>
        </div>
        <p className="productName">{props.name}</p>
        <p className="viewed">{props.view} viewed</p>
    </div>
  )
}

export default SearchHisCaro