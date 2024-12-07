import React from 'react'
import './Box.css'

const Box = (props) => {
  return (
    <div className='box'>
       <h1>{props.heading}</h1>
        <div className='things'>
          <div className='part'>
            <img src={props.image1} alt=''/>
            <p>{props.des1}</p>
          </div>
          <div className='part'>  
            <img src={props.image2} alt=''/>
            <p>{props.des2}</p>
          </div>
          <div className='part'>  
            <img src={props.image3} alt=''/>
            <p>{props.des3}</p>
          </div>
          <div className='part'>  
            <img src={props.image4} alt=''/>
            <p>{props.des4}</p>
          </div>  
        </div>
        <p className='offers'>{props.offers}</p> 
    </div>
  )
}

export default Box