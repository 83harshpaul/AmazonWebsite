import React from 'react'
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser} from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'


const Sidebar = ({isSideBar,setIsSideBar,showSideBar}) => {
        const sideBar = React.useRef(null)
    React.useEffect(() => {
        sideBar.current.addEventListener("wheel",(event)=>{
            if(event.target ===sideBar.current){
            event.preventDefault();
            }
        })
    })
    
    const [expanded,setExpanded] = React.useState(false);
    const exp = React.useRef(null);
    const ext = React.useRef(null);

    const expand =()=>{
        if (ext.current.style.height === '0px' || ext.current.style.height === '') {
            // Expand the shutter by setting its height to 'auto'
            ext.current.style.height = ext.current.scrollHeight + 'px'; // Automatically adjust to content height
            setExpanded(true)
          } else {
            // Collapse the shutter by setting its height to '0'
            ext.current.style.height = '0px';
            setExpanded(false)
          }
    }
    const [expanded1,setExpanded1] = React.useState(false);
    const exp1 = React.useRef(null);
    const ext1 = React.useRef(null);

    const expand1 =()=>{
        if (ext1.current.style.height === '0px' || ext1.current.style.height === '') {
            // Expand the shutter by setting its height to 'auto'
            ext1.current.style.height = ext1.current.scrollHeight + 'px'; // Automatically adjust to content height
            setExpanded1(true)
          } else {
            // Collapse the shutter by setting its height to '0'
            ext1.current.style.height = '0px';
            setExpanded1(false)
          }
    }

    const closeSideBar = (e)=>{
        if(e.target === sideBar.current){
            setIsSideBar(false)
        }
    }

  return (
    <div className={`sidebar ${isSideBar?"":"hide"}`} ref={sideBar} onClick={closeSideBar} >
         <div className="sideOne" style={{transform:`translateX(${showSideBar?"0":"-460"}px)`}}>
            <div className="profileAccount">
            <FontAwesomeIcon icon={faUser} className='userSetting'/>
            <span className='helloHarsh'>Hello, Harsh</span>
            </div>
            <div className="allFeatures" >
                <div className="features">
                    <h1>Trending</h1>
                    <ul>
                        <li>Best Sellers</li>
                        <li>New Releases</li>
                        <li>Movers and Shakers</li>
                    </ul>
                </div>
                <div className="features">
                    <h1>Digital Content and Devices</h1>
                    <ul>
                    <li>Echo & Alexa<FontAwesomeIcon icon={faChevronRight} className='rightBtn'/></li>
                    <li>Fire TV<FontAwesomeIcon icon={faChevronRight} className='rightBtn'/></li>
                    <li>Kindle E-Readers & eBooks<FontAwesomeIcon icon={faChevronRight} className='rightBtn'/></li>
                    <li>Audible Audiobooks<FontAwesomeIcon icon={faChevronRight} className='rightBtn'/></li>
                    <li>Amazon Prime Video<FontAwesomeIcon icon={faChevronRight} className='rightBtn'/></li>
                    <li>Amazon Prime Music<FontAwesomeIcon icon={faChevronRight} className='rightBtn'/></li>
                    </ul>
                </div>
                <div className="features">
                    <h1>Shop by Category</h1>
                    <ul>
                        <li>Mobiles, Computers<FontAwesomeIcon icon={faChevronRight} className='rightBtn'/></li>
                        <li>TV, Appliances, Electronics<FontAwesomeIcon icon={faChevronRight} className='rightBtn'/></li>
                        <li>Men's Fashion<FontAwesomeIcon icon={faChevronRight} className='rightBtn'/></li>
                        <li>Women's Fashion<FontAwesomeIcon icon={faChevronRight} className='rightBtn'/></li>
                        <li className="specialList">
                        <div className="extendedPart" ref={ext1}>
                            
                                    
                            <p className="handloom">Home, Kitchen, Pets<FontAwesomeIcon icon={faChevronRight} className='rightBtn'/></p>
                            <p>Beauty, Health, Grocery<FontAwesomeIcon icon={faChevronRight} className='rightBtn'/></p>
                            <p>Sports, Fitness, Bags, Luggage<FontAwesomeIcon icon={faChevronRight} className='rightBtn'/></p>
                            <p>Toys, Baby Products, Kids Fashion<FontAwesomeIcon icon={faChevronRight} className='rightBtn'/></p>
                            <p>Car, Motorbike,Industrial<FontAwesomeIcon icon={faChevronRight} className='rightBtn'/></p>
                            <p>Books<FontAwesomeIcon icon={faChevronRight} className='rightBtn'/></p>
                            <p>Movies, Music & Video Games<FontAwesomeIcon icon={faChevronRight} className='rightBtn'/></p>
                            
                        
                        </div>
                            
                        <div className="expandable" ref={exp1} onClick={expand1}>See { expanded1?"less":"all"}<FontAwesomeIcon icon={expanded1? faAngleUp:faAngleDown} className='rightBtn'/></div>
                        </li>
                    </ul>
                </div>
                <div className="features">
                    <h1>Programs & Features</h1>
                    <ul>
                        <li>Amazon Pay<FontAwesomeIcon icon={faChevronRight} className='rightBtn'/></li>
                        <li>Gift Cards & Mobile Recharges<FontAwesomeIcon icon={faChevronRight} className='rightBtn'/></li>
                        <li>Amazon Launchpad<FontAwesomeIcon icon={faChevronRight} className='rightBtn'/></li>
                        <li>Amazon Business<FontAwesomeIcon icon={faChevronRight} className='rightBtn'/></li>
                        <li className="specialList">
                            <div className="extendedPart" ref={ext}>
                            
                                    
                                    <p className="handloom">Handloom and Handicrafts<FontAwesomeIcon icon={faChevronRight} className='rightBtn'/></p>
                                    <p>Amazon Saheli<FontAwesomeIcon icon={faChevronRight} className='rightBtn'/></p>
                                    <p>Amazon Combos<FontAwesomeIcon icon={faChevronRight} className='rightBtn'/></p>
                                    <p>Amazon Custom<FontAwesomeIcon icon={faChevronRight} className='rightBtn'/></p>
                                    <p>Flight<FontAwesomeIcon icon={faChevronRight} className='rightBtn'/></p>
                                    <p>Buy more, Save more<FontAwesomeIcon icon={faChevronRight} className='rightBtn'/></p>
                                    <p>Clearance store<FontAwesomeIcon icon={faChevronRight} className='rightBtn'/></p>
                                    <p>International Brands<FontAwesomeIcon icon={faChevronRight} className='rightBtn'/></p>
                                
                            </div>
                            <div className="expandable" ref={exp} onClick={expand}>See { expanded?"less":"all"}<FontAwesomeIcon icon={expanded? faAngleUp:faAngleDown} className='rightBtn'/></div>
                        </li>
                    </ul>
                </div>
                <div className="features special">
                    <h1>Help & Settings</h1>
                    <ul>
                        <li>Your Account<FontAwesomeIcon icon={faChevronRight} className='rightBtn'/></li>
                        <li>Customer Service<FontAwesomeIcon icon={faChevronRight} className='rightBtn'/></li>
                        <li>Sign Out<FontAwesomeIcon icon={faChevronRight} className='rightBtn'/></li>
                        
                    </ul>
                </div>
            </div>
         </div>
    </div>
  )
}

export default Sidebar