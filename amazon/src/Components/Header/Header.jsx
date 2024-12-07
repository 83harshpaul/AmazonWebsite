import React from 'react'
import './Header.css'
import amazonLogo from '../Assests/jhjh.jpeg' 
import loca from '../Assests/Screenshot 2024-10-09 175642.png'
// import down from '../Assests/downLogo.png'
import indianFlag from '../Assests/flag.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-scroll';

import SearchHisCaro from '../Carousel/SearchHisCaro'





const Header = ({setHoverState,setSearchHistory, setOnLangBox,
                  setOnAccountBox,handleMouseEnter,
                  handleMouseLeave,changeAccounts,removeAccounts}) => {
  const selectRef = React.useRef(null);
  const [selectWidth, setSelectWidth] = React.useState('auto');
  
  
  const options = [ 
    { value: 'all', label: 'All' },
    { value: 'all categories', label: 'All Categories' },
    { value: 'alexa skills', label: 'Alexa Skills' },
    { value: 'amazon devices', label: 'Amazon Devices' },
    { value: 'amazon fashion', label: 'Amazon Fashion' },
    { value: 'amazon fresh', label: 'Amazon Fresh' },
    { value: 'amazon pharmacy', label: 'Amazon Pharmacy' },
    { value: 'appliances', label: 'Appliances' },
    { value: 'apps & games', label: 'Apps & Games' },
    { value: 'audible audiobooks', label: 'Audible Audiobooks' },
    { value: 'baby', label: 'Baby' },
    { value: 'beauty', label: 'Beauty' },
    { value: 'books', label: 'Books' },
    { value: 'car & motorbike', label: 'Car & Motorbike' },
    { value: 'clothing & accessories', label: 'Clothing & Accessories' },
    { value: 'collectibles', label: 'Collectibles' },
    { value: 'computers & accessories', label: 'Computers & Accessories' },
    { value: 'deals', label: 'Deals' },
    { value: 'electronics', label: 'Electronics' },
    { value: 'furniture', label: 'Furniture' },
    { value: 'garden & outdoors', label: 'Garden & Outdoors' },
    { value: 'gift cards', label: 'Gift Cards' },
    { value: 'grocery & gourmet foods', label: 'Grocery & Gourmet Foods' },
    { value: 'health & personal care', label: 'Health & Personal Care' },
    { value: 'home & kitchen', label: 'Home & Kitchen' },
    { value: 'industrial & scientific', label: 'Industrial & Scientific' },
    { value: 'jewellary', label: 'Jewellary' },
    { value: 'kindle store', label: 'Kindle Store' },
    { value: 'luggage & bags', label: 'Luggage & Bags' },
    { value: 'luxury beauty', label: 'Luxury Beauty' },
    { value: 'movies & tv shows', label: 'Movies & TV Shows' },
    { value: 'mp3 music', label: 'MP3 Music' },
    { value: 'music', label: 'Music' },
    { value: 'musical instrument', label: 'Musical Instrument' },
    { value: 'office products', label: 'Office Products' }
  ];

  // Function to calculate the width of the selected word using Canvas
  const calculateWordWidthCanvas = (word, fontSize = "16px", fontFamily = "Arial") => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    context.font = `${fontSize} ${fontFamily}`;
    return context.measureText(word).width;
  };

  // Function to update the width based on the selected option
  const updateSelectWidth = (selectedOptionLabel) => {
    if (selectRef.current) {
      const fontSize = window.getComputedStyle(selectRef.current).fontSize;
      const fontFamily = window.getComputedStyle(selectRef.current).fontFamily;

      // Calculate the width of the selected option
      const selectedOptionWidth = calculateWordWidthCanvas(selectedOptionLabel, fontSize, fontFamily);

      // Update the width (adding some extra space for padding and the dropdown arrow)
      setSelectWidth(selectedOptionWidth + 20 + 'px' ); // 30px for padding and arrow
    }
  };

  // Handle change of the select element
  const handleChange = (event) => {
    const selectedOptionLabel = options.find(opt => opt.value === event.target.value).label;
    updateSelectWidth(selectedOptionLabel);
  };

  // useEffect to adjust the width based on the initial selected option
  React.useEffect(() => {
    const initialOptionLabel = options[0].label;
    updateSelectWidth(initialOptionLabel);
  }, []);

  const SearchBar = React.useRef(null)
  
  const [border,setBorder] = React.useState(false)
  const searchInput = React.useRef(null)

  React.useEffect(() => {
    const handleClickOutside = (event) =>{
      if(SearchBar.current && !SearchBar.current.contains(event.target)){
        setBorder(false);
      }
    }

    document.addEventListener("mousedown",handleClickOutside)
    return ()=>{
      document.removeEventListener("mousedown",handleClickOutside)
    }
  },[])
  
  const [boxShadow, setBoxShadow] = React.useState(false)
  const Btn1 = React.useRef(null)

  React.useEffect(() => {
    const handleClickOutside = (event) =>{
      if(Btn1.current && !Btn1.current.contains(event.target)){
        setBoxShadow(false);
      }
    }

    document.addEventListener("mousedown",handleClickOutside)
    return ()=>{
      document.removeEventListener("mousedown",handleClickOutside)
    }
  },[])
  function setBox(){
    setBoxShadow(true)
  }

  function inputClicked(){
    setHoverState(true)
    setBorder(true)
    setSearchHistory(true)
    setOnLangBox(false)
    setOnAccountBox(false)
  }



  return (
    <div className="header" id='homePage'> 
         <Link to='navBar' smooth={true} offset={-80} duration={0}><div className="amalogo">
       <img src={amazonLogo} alt="" />
            <span>.in</span>
        </div></Link>
        <div className="location">
            {/* <img src={loca} alt="" /> */}
             <img src={loca} alt=""/>
            <div className="address">
                <span className="add1">Deliver to Harsh</span>
                <span className="add2">Karnal 132001</span>
            </div>
        </div>
        <div className={`searchBar ${border?"focused":""}`} ref={SearchBar} >
             <button className={`btn1 ${boxShadow?"focused":""}`} ref={Btn1} onClick={setBox}>
             <select ref={selectRef} onChange={handleChange} style={{ width: selectWidth, padding: '5px' }}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
              <FontAwesomeIcon icon={faSortDown} className="down1"/>
              </button>
              <input type="search" 
              placeholder="Search Amazone.in" 
              onClick={inputClicked}
              ref={searchInput}
              />
             <button className="btn2"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
        </div>
        <div className="language" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <img src={indianFlag} alt=""/>
          <span>EN</span>
          <FontAwesomeIcon icon={faSortDown} className="down3"/>
        </div>
        <div className="account" onMouseEnter={changeAccounts} onMouseLeave={removeAccounts}>
          <span className='harsh'>Hello, Harsh</span>
          <span className="stat2">Account & Lists <FontAwesomeIcon icon={faSortDown} className="down2" /></span>
        </div>
        <div className="orders">
          <span className="stat1">Returns</span>
          <span className="stat2">& Orders</span>
        </div>
        <div className='cart'>
          <span className="cartItem">15</span>
        <FontAwesomeIcon icon={faCartShopping} />
        <span className="balti">Cart</span>
        </div>
    </div>
  )
}

export default Header