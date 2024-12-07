import React from 'react'
import photo from '../Assests/photo.png'
import lines from '../Assests/3lines.png'
import './Navbar.css'

const Navbar = React.forwardRef((props,ref) => {
   const salePhoto = React.useRef(null)
   const [photoMargin,setPhotoMargin] = React.useState(0)

   const marginLeft = ()=>{
    if(salePhoto.current){
      const style = window.getComputedStyle(salePhoto.current);
      return style.marginLeft
     }
     return 0;
   }
  

   React.useEffect(()=>{
     
      const handleResize = ()=>setPhotoMargin(marginLeft())
      setPhotoMargin(marginLeft())
      window.addEventListener("resize",handleResize)
    
      return ()=> window.removeEventListener("resize",handleResize)
     
   },[])
  
  //  const navList = React.useRef(null)
   
  //  React.useEffect(()=>{
  //   if( navList.current && photoMargin <= 25){
  //     navList.current.removeChild(navList.current.lastChild)
  //   }
  // },[photoMargin])
   
   
  return (
    <div className="navbar" id="navBar" ref={ref}>
      <ul >
        <li className="threeLines" onClick={()=>{props.setIsSideBar(true);
                                                setTimeout(()=>{props.setShowSideBar(true)},200);}}><img src={lines} alt=""/><span>All</span></li>
        <li className="nav-item">Fresh</li>
        <li className="nav-item">MX Player</li>
        <li className="nav-item">Sell</li>
        <li className="nav-item">Gift Cards</li>
        <li className="nav-item">Amazon Pay</li>
        <li className="nav-item">AmazonBasics</li>
        <li className="nav-item">Buy Again</li>
        <li className="nav-item">Gift Ideas</li>
        <li className="nav-item">Today's Deals</li>
        <li className="nav-item">Health,Household & Personal Care</li>
        
      </ul>
      <img src={photo} alt="" className='shopNow' ref={salePhoto}/>
    </div>
  )
});

export default Navbar;