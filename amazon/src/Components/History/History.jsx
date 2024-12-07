import React from 'react'
import './History.css'
import HistoryCarousel from '../Carousel/HistoryCarousel'
import HistoryCarouselData from '../Data/HistoryCarouselData'
import BrowsingHistoryCarousel from '../Carousel/BrowsingHistoryCarousel'
import BrowsingHistoryCarouselData from '../Data/BrowsingHistoryCarouselData'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const History = () => {
const [move ,setMove] = React.useState(0)
const [counter,setCounter] = React.useState(1)

    const historyList = HistoryCarouselData.map((element,index)=>{
        return <li><HistoryCarousel key={index} {...element}/></li>
    })
    let currentPosition = move
    function moveBackwardFour(){
        if(currentPosition <-1){
            currentPosition +=100
            setCounter(prev=>prev-1)
        }
        setMove(currentPosition)
    }
    function moveForwardFour(){
        if(currentPosition === 0){
            currentPosition -= 101
            setCounter(prev=>prev+1)
        }
        else if(currentPosition > -301){
            currentPosition -=100
            setCounter(prev=>prev+1)
        }
        setMove(currentPosition)

    }

    function originalPosition(){
        setMove(0)
        setCounter(1)
    }
    const [more , setMore] = React.useState(0)
    const [count , setCount] = React.useState(1)
    const browHistory = BrowsingHistoryCarouselData.map((element,index)=>{
        return <li><BrowsingHistoryCarousel key={index} {...element}/></li>
    })
    let currentPositionTwo = more;
   function moveForwardFive(){
    if(currentPositionTwo > -300){
        currentPositionTwo -=100
        setCount(prev=>prev+1)
    }
    setMore(currentPositionTwo)
   }

   function moveBackwardFive(){
    if(currentPositionTwo < 0){
        currentPositionTwo +=100
        setCount(prev=>prev-1)
    }
    setMore(currentPositionTwo)
   }

  function originalPositionTwo(){
    setMore(0)
    setCount(1)
  }


  return (
    <div className="history">
        <hr />
        <p className="counter"> 
        <h1>Inspired by your browsing history</h1>
        <span className="pages"><span className='page'>Page {counter} of 4</span>
        { counter !== 1 && <span className='dandaStart'><span className='danda'>|</span><span className="start" onClick={originalPosition}>Start over</span></span>}</span>
        </p>
        <div className="historylists">
        <FontAwesomeIcon icon={faChevronLeft} className='leftButton5' onClick={moveBackwardFour}/>
        <FontAwesomeIcon icon={faChevronRight} className='rightButton5' onClick={moveForwardFour}/>
            <div className="insiderBox">
            <ul style={{transform:`translateX(${move}%)`}}>
                {historyList}
            </ul>
            </div>
        </div>

        <div className="browsingHis">
            <hr />
            <p>
                <h1 className="tag">Your browsing history</h1>
                <span className="linkTag">View or edit your browsing history</span>
                <span className="pages"><span className='page'>Page {count} of 4</span>
                { count !== 1 && <span className='dandaStart'><span className='danda'>|</span>
                <span className="start" onClick={originalPositionTwo}>Start over</span></span>}</span>
            </p>
            <div className="browsing">
            <FontAwesomeIcon icon={faChevronLeft} className='leftButton5' onClick={moveBackwardFive}/>
            <FontAwesomeIcon icon={faChevronRight} className='rightButton5' onClick={moveForwardFive}/>
                <div className="ulBox">
                    <ul style={{transform:`translateX(${more}%)`}}>
                        {browHistory}
                    </ul>
                </div>
            </div>
        </div>
        <hr />
    </div>
  )
}

export default History