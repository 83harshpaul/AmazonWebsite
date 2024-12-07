import React from 'react'
import './Hero.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
const Hero = () => {

    const [forward,setForward,] = React.useState(0);
    const [isTransitioning,setIsTransitioning] = React.useState([]);
    const buttonOne = React.useRef()
    const buttonTwo = React.useRef()
   
    // const slideWidth = 16.66; // width percentage of each slide
    // const totalSlides=6;
    // const autoSlideInterval = 3000;

    // React.useEffect(() => {
    //    const slideInterval = setInterval(()=>{
    //     goForward();
    //    }, autoSlideInterval);
    //    return ()=> clearInterval(slideInterval)
    // },[])
    
    // const handleTransitionEnd = () => {
    //     if(forward === -(slideWidth * totalSlides)){
    //         setIsTransitioning(false)
    //         setForward(0)
    //     }
    // }
  
   
    // const goForward =()=> {
    //         setIsTransitioning(true)
    //         setForward(prev=>prev-slideWidth);
    //     buttonTwo.current.style.border="none";
    //     buttonTwo.current.style.boxShadow="none";
    //     buttonOne.current.style.border="3px solid #058d7d";
    //     buttonOne.current.style.boxShadow="0 0 2px 3px #fff";
    // }

    // function goBackward() {
    //     if(forward === 0){
    //         setIsTransitioning(false)
    //         setForward(-slideWidth*totalSlides);
    //     }
    //     else {
    //         setIsTransitioning(true)
    //         setForward(prev => prev + slideWidth);
    //     }
    //     buttonOne.current.style.border="none";
    //     buttonOne.current.style.boxShadow="none";
    //     buttonTwo.current.style.border="3px solid #058d7d";
    //     buttonTwo.current.style.boxShadow="0 0 2px 3px #fff";
    // }
    function goForward() {
        setForward(prev => (prev > -66.8 ? prev - 16.66 : prev));
        buttonTwo.current.style.border="none";
        buttonTwo.current.style.boxShadow="none";
        buttonOne.current.style.border="3px solid #058d7d";
        buttonOne.current.style.boxShadow="0 0 2px 3px #fff";
    }

    function goBackward() {
        setForward(prev => (prev < -16.66 ? prev + 16.66 : prev));
        buttonOne.current.style.border="none";
        buttonOne.current.style.boxShadow="none";
        buttonTwo.current.style.border="3px solid #058d7d";
        buttonTwo.current.style.boxShadow="0 0 2px 3px #fff";
    }

   
   
//   return (
//     <div className="hero">
//         <div className="carusel">
//         <FontAwesomeIcon icon={faChevronLeft} className='left' onClick={goBackward} ref={buttonTwo}/>
//         <FontAwesomeIcon icon={faChevronRight} className='right' onClick={goForward}  ref={buttonOne}/>
//             <ul style={{transform:`translateX(${forward}%)`,
//                         transition: isTransitioning ? 'transform 0.5s ease':"none"}}
//                         onTransitionEnd={handleTransitionEnd}>
//                   {/* Cloned last slide */}
//                 {/* <li className="slide">
//                     <div className="caro">
//                     <div className="image6 image"></div>
//                     <div className="images6"></div>
//                     </div>
//                 </li> */}
//                 <li className="slide">
//                     <div className="caro">
//                         <div className="image1 image">
//                         {/* <img src={photo1} alt=""/> */}
//                         </div>
//                         <div className="images1"></div>
//                     </div>
//                 </li>
//                 <li className="slide">
//                     <div className="caro">
//                         <div className="image2 image">
//                         {/* <img src={photo2} alt=""/> */}
//                         </div>
//                         <div className="images2"></div>
//                     </div>
//                 </li>
//                 <li className="slide">
//                     <div className="caro">
//                         <div className='image3 image'>
//                         {/* <img src={photo3} alt=""/> */}
//                         </div>
//                         <div className="images3"></div>
//                     </div>
//                 </li>
//                 <li className="slide">
//                     <div className="caro">
//                         <div className='image4 image'>
//                         {/* <img src={photo4} alt=""/> */}
//                         </div>
//                         <div className="images4"></div>
//                     </div>
//                 </li>
//                 <li className="slide">
//                     <div className="caro">
//                         <div className='image5 image'>
//                         {/* <img src={photo5} alt=""/> */}
//                         </div>
//                         <div className="images5"></div>
//                     </div>
//                 </li>
//                 <li className="slide">
//                     <div className="caro">
//                         <div className='image6 image'>
//                         {/* <img src={photo6} alt=""/> */}
//                         </div>
//                         <div className="images6"></div>
//                     </div>
//                 </li>
//                  {/* Cloned first slide */}
//                 {/* <li className="slide">
//                     <div className="caro">
//                     <div className="image1 image"></div>
//                     <div className="images1"></div>
//                     </div>
//                 </li> */}
//             </ul>
//         </div>
//     </div>
//   )
// }

// export default Hero
  return (
    <div className="hero">
        <div className="carusel">
        <FontAwesomeIcon icon={faChevronLeft} className='left' onClick={goBackward} ref={buttonTwo}/>
        <FontAwesomeIcon icon={faChevronRight} className='right' onClick={goForward}  ref={buttonOne}/>
            <ul style={{transform:`translateX(${forward}%)`}} >
            {/* <ul > */}
                <li>
                    <div className="caro">
                        <div className="image1 image">
                        {/* <img src={photo1} alt=""/> */}
                        </div>
                        <div className="images1"></div>
                    </div>
                </li>
                <li>
                    <div className="caro">
                        <div className="image2 image">
                        {/* <img src={photo2} alt=""/> */}
                        </div>
                        <div className="images2"></div>
                    </div>
                </li>
                <li>
                    <div className="caro">
                        <div className='image3 image'>
                        {/* <img src={photo3} alt=""/> */}
                        </div>
                        <div className="images3"></div>
                    </div>
                </li>
                <li>
                    <div className="caro">
                        <div className='image4 image'>
                        {/* <img src={photo4} alt=""/> */}
                        </div>
                        <div className="images4"></div>
                    </div>
                </li>
                <li>
                    <div className="caro">
                        <div className='image5 image'>
                        {/* <img src={photo5} alt=""/> */}
                        </div>
                        <div className="images5"></div>
                    </div>
                </li>
                <li>
                    <div className="caro">
                        <div className='image6 image'>
                        {/* <img src={photo6} alt=""/> */}
                        </div>
                        <div className="images6"></div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Hero