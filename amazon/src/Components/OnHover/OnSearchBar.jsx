import React from 'react'
import './OnSearchBar.css'
import SearchHisCaro from '../Carousel/SearchHisCaro'
import SearchCarouselData from '../Data/SearchCarouselData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import iphone from '../Assests/cr1.png'
import cutter from '../Assests/cv1.png'
import nescafe from '../Assests/hi2.png'
import flag from '../Assests/flag.jpeg'

const OnSearchBar = ({hoverState,setHoverState,isVisible,
                      searchHistory,onLangBox,handleMouseEnter,
                      handleMouseLeave,removeAccounts,changeAccounts,onAccountBox}) => {
  const [move,setMove] = React.useState(0)
  const searches = React.useRef(null)
  

  const closeSearches =(e)=>{
    if(e.target === searches.current){
      setHoverState(false)
    }
  }
 

  const history =  SearchCarouselData.map((element,index)=>{
    return <li><SearchHisCaro key={index} {...element}/></li>
  })

  function moveForwardSix(){
    setMove(prev=>prev> -40.3? prev -=40.3:prev)
  }
  function moveBackwardSix(){
    setMove(prev=>prev< 0? prev +=40.3:prev)
  }



  return (
    <div className={`onSearchBar ${hoverState?'':'hide'}`}
     ref={searches}  
    //  onScroll={closeSea} 
     onClick={closeSearches}
     style={{height:`${isVisible?"86%":"91.5%"}`}}
     >
        { searchHistory && <div className="searchHistory" 
        style={{top:`${isVisible?"-66px":"-15px"}`}}
       >
            <h1>KEEP SHOPPING FOR</h1>
            <div className="searchCarousel">
            <FontAwesomeIcon icon={faChevronLeft} className='leftButton6' onClick={moveBackwardSix}/>
            <FontAwesomeIcon icon={faChevronRight} className='rightButton6' onClick={moveForwardSix}/>
                <ul style={{transform:`translateX(${move}%)`}}>
                    {history}
                </ul>
            </div>
        </div>}

      
          {onLangBox && <div className="langBox" style={{top:`${isVisible?"-82px":"-31px"}`}}
                                              
                                                onMouseOver={handleMouseEnter}
                                                onMouseLeave={handleMouseLeave}
                                              >
           < div className="rotatedBox"></div>
           <div className="mainLang">
              <ul>
                <li><input type="radio" id='a-option' name='selector' checked/>
                    <label for="a-option" className='eng'>English - EN</label>
                    <div class="check"></div>
                </li>
                {/* <li><hr /></li> */}
                <li><input type="radio" id='b-option' name='selector' />
                    <label for="b-option" >हिन्दी - HI</label>
                    <div class="check"></div>
                </li>
                <li><input type="radio" id='c-option' name='selector' />
                    <label for="c-option" >தமிழ் - TA </label>
                    <div class="check"></div>
                </li>
                <li><input type="radio" id='d-option' name='selector' />
                    <label for="d-option" >తెలుగు - TE</label>
                    <div class="check"></div>
                </li>
                <li><input type="radio" id='e-option' name='selector' />
                    <label for="e-option" >ಕನ್ನಡ - KN </label>
                    <div class="check"></div>
                </li>
                <li><input type="radio" id='f-option' name='selector' />
                    <label for="f-option" >മലയാളം - ML </label>
                    <div class="check"></div>
                </li>
                <li><input type="radio" id='g-option' name='selector' />
                    <label for="g-option" >বাংলা - BN</label>
                    <div class="check"></div>
                </li>
                <li><input type="radio" id='h-option' name='selector' />
                    <label for="h-option" >मराठी - MR</label>
                    <div class="check"></div>
                </li>
              </ul>
                <p className='learn'>Learn more</p>
                <hr />
                <p><img src={flag} alt=""/>You are shopping on Amazon.in</p>
                <p className="desh">Change country/region.</p>
           </div>
        </div>}

        { onAccountBox && <div className="onAccounts"
                  style={{top:`${isVisible?"-80px":"-29px"}`}} 
                  onMouseEnter={changeAccounts} 
                  onMouseLeave={removeAccounts}>
        <div className="rotatedOne"></div>
        <div className="accountInfo">
             <div className="buyAgain">
                <h1>Buy it again</h1>
                <p className='mess'>View All & Manage</p>
                <div className="his">
                    <div className="three">
                        <div className="pic">
                            <img src={iphone} alt=""/>
                        </div>
                        <div className="picInfo">
                            <p className='pName'>Apple iPhone 13(128GB) - Starlight </p>
                            <p className='rate'>₹43,999.00</p>
                            <button className="addBtn">Add to cart</button>
                        </div>
                    </div>
                    <div className="three">
                        <div className="pic">
                            <img src={cutter} alt=""/>
                        </div>
                        <div className="picInfo">
                            <p className='pName'>Vegetable Cutter | Amazon Brand...</p>
                            <p className='rate'> ₹439.00</p>
                            <button className="addBtn">Add to cart</button>
                        </div>
                    </div>
                    <div className="three">
                        <div className="pic nes" >
                            <img src={nescafe} alt="" />
                        </div>
                        <div className="picInfo">
                            <p className='pName'>Nescafe Ready To Drink, Flavoured Milk</p>
                            <p className='rate'>₹45.00 <span>(₹25.00/100 ml)</span></p>
                            <button className="addBtn">Add to cart</button>
                        </div>
                    </div>
                </div>
             </div>
             <div className="accountSettings">
                <div className="boxA">
                    <div className="profiles">
                        <p>
                            <span>Who is shopping? Select a profile.</span>
                            <span className="manageProfile">Manage Profiles<FontAwesomeIcon icon={faChevronRight} className='rBtn'/></span>
                        </p>
                    </div>
                </div>
                <div className="bAndC">
                    <div className="boxB">
                        <h1>Your Lists</h1>
                        <p className="alexa">Alexa Shopping List</p>
                        <p className="zero">0 items</p>
                        <hr />
                        <p className='shopLists'>Shopping List</p>
                        <hr />
                        <ul>
                            <li>Create a Wish List</li>
                            <li>Wish from Any Website</li>
                            <li>Baby Wishlist</li>
                            <li>Discover Your Style</li>
                            <li>Explore Showroom</li>
                        </ul>
                    </div>
                    <div className="boxC">
                        <h1>Your Account</h1>
                        <p className='switch'>Switch Accounts</p>
                        <p className='signOut'>Sign Out</p>
                        <hr />
                        <ul>
                            <li>Your Account</li>
                            <li>Your Orders</li>
                            <li>Your Wish List</li>
                            <li>Keep shopping for</li>
                            <li>Your Recommendations</li>
                            <li>Recalls and Product Safety Alerts</li>
                            <li>Your Prime Membership</li>
                            <li>Your Prime Video</li>
                            <li>your Subscribe & Save Items</li>
                            <li>Memberships & Subscriptions</li>
                            <li>your Seller Account</li>
                            <li>Content Library</li>
                            <li>Devices</li>
                            <li>Your Free Amazon Business Account</li>
                        </ul>
                    </div>
                </div>
             </div>
        </div>
    </div>}
  
 
    </div>
  )
}

export default OnSearchBar