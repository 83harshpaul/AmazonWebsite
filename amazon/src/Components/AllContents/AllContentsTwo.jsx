import React from 'react'
import './AllContentsTwo.css'
import Box from '../Box/Box'
import LiveCarousel from '../Carousel/LiveCarousel'
import AmazonLiveCarousel from '../Data/AmazonLiveCarousel'
import CarouselDressesData from '../Data/CarouselDressesData'
import CarouselPhoto from '../Carousel/CarouselPhoto'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import p1 from '../Assests/1a.png'
import p2 from '../Assests/1b.png'
import p3 from '../Assests/1c.png'
import p4 from '../Assests/1d.png'
import p5 from '../Assests/7a.png'
import p6 from '../Assests/7b.png'
import p7 from '../Assests/7c.png'
import p8 from '../Assests/7d.png'
import big1 from '../Assests/bigone.png'
import big2 from '../Assests/bigtwo.png'

const AllContentsTwo = () => {
    const [move, setMove] = React.useState(0)
    const [moveTwo, setMoveTwo] = React.useState(0)
    const livecarousel = AmazonLiveCarousel.map((element, index) =>{
        return <li><LiveCarousel key={index} {...element}/></li>
    })
    let currentPosition = move;
    function moveForwardThree(){
        if(currentPosition === -183.2){
          currentPosition-=64.3;
        }
        else if(currentPosition >-247.5){
        currentPosition-= 91.6;
        }
      
      setMove(currentPosition)
    }
    function moveBackwardThree(){
        if(currentPosition === -247.5){
          currentPosition+=64.3;
        }
        else if(currentPosition < 0){
        currentPosition+= 91.6;
        }
      
      setMove(currentPosition)
    }

   const photos = CarouselDressesData.map((element,index)=>{
    return <li><CarouselPhoto key={index} {...element}/></li>
   })

   function moveForwardFour(){
        setMoveTwo(prev=>(prev > -60 ? prev - 60:prev))
   }
   function moveBackwardFour(){
    setMoveTwo(prev=>(prev < 0 ? prev + 60:prev))
   }
   const videoId = "TNzpBP6B98c"; // Replace with your actual YouTube video ID
  const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}&mute=1`;
  return (
    <div className="allContentsTwo">
        <div className="fourBoxes">
            <Box 
                heading="Minimum 50% off | Sports, outdoor & more"
                image1={p1}
                des1="Sports & fitness"
                image2={p2}
                des2="Automotive"
                image3={p3}
                des3="Tools"
                image4={p4}
                des4="Garden & outdoor" 
                offers="See all offers"
                />
            <div className='box'>
       <h1> Up to 75% off | Amazon Renewed</h1>
       <img src={big2} alt=""/>
        <p className='offers offer2'>See all offers </p> 
        </div>
            <div className='box'>
       <h1> Up to 80% off | Electronics & accessories</h1>
       <img src={big1} alt=""/>
        <p className='offers offer2'>See all offers </p> 
        </div>

        <Box 
                heading="Up to 75% off | Handmade decorations"
                image1={p5}
                des1="Handmade showpieces| Up to 75% off "
                image2={p6}
                des2="Organizable boxes | Up to 80% off"
                image3={p7}
                des3="Sheets & pillows  | Up to 55% off "
                image4={p8}
                des4="Fine furnitures | Up to 60% off" 
                offers="See all offers"
                />


        </div>

        <div className="videoPannel">
            <p className='head'><span className="heading">Amazon LIVE - Watch, Chat & Shop LIVE</span><span className="link">See more from Amazon Live</span></p>
            <div className="twoBoxes">
            <div className="video">

            <iframe 
        width="560" 
        height="315" 
        src={videoUrl}
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen
      />
            <p className="person"> Influenced By Harsh <span className='influencer'>Amazon Influencer Program</span></p>
            </div>
            <div className="sportsBox">
                <div className="sportsCarousel">
                <FontAwesomeIcon icon={faChevronLeft} className='leftButton3' onClick={moveBackwardThree}/>
                <FontAwesomeIcon icon={faChevronRight} className='rightButton3' onClick={moveForwardThree}/>
                    <ul style={{transform:`translateX(${move}%)`}}>
                        {livecarousel}
                    </ul>
                </div>
            </div>
            </div>
        </div>


        <div className="dresses">
            <h1>Check all the Latest designs</h1>
            <div className="bahotDresses">
            <FontAwesomeIcon icon={faChevronLeft} className='leftButton4' onClick={moveBackwardFour}/>
            <FontAwesomeIcon icon={faChevronRight} className='rightButton4' onClick={moveForwardFour}/>
                <ul  style={{transform:`translateX(${moveTwo}%)`}}>
                    {photos}
                </ul>
            </div>
        </div>

    </div>
  )
}

export default AllContentsTwo