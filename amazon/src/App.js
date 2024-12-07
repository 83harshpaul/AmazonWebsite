import React from 'react';

import './App.css'; 
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Content from './Components/Contents/Contents';
import Products from './Components/Products/Products';
import ProductsTwo from './Components/Products/ProductsTwo';
import AllContents from './Components/AllContents/AllContents';
import AllContentsTwo from './Components/AllContents/AllContentsTwo';
import History from './Components/History/History'
import Footer from './Components/Footer/Footer'
import OnSearchBar from './Components/OnHover/OnSearchBar';
import Sidebar from './Components/Sidebar/Sidebar';


function App() {
  const [hoverState,setHoverState] = React.useState(false)
  const [isVisible,setIsVisible] = React.useState(false)
  const componentRef = React.useRef(null)
  const [searchHistory,setSearchHistory] = React.useState(false)
  const [onLangBox,setOnLangBox] = React.useState(false)
  const [onAccountBox,setOnAccountBox] = React.useState(false)
  const [isSideBar,setIsSideBar] = React.useState(false)
  const [showSideBar,setShowSideBar] = React.useState(false)


  React.useEffect(()=>{
 
    const observer = new IntersectionObserver(
      ([entry]) =>{
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 1}
    );


    let currentCompo = componentRef.current
    if(currentCompo){
      observer.observe(currentCompo)
    }

    return ()=>{
      if(currentCompo){
        observer.unobserve(currentCompo)
      }
    };
  
  },[])


  const hideTimeOut = React.useRef(null)
  const handleMouseEnter=()=>{
    clearTimeout(hideTimeOut.current)
    setOnLangBox(true)
    setSearchHistory(false)
    setHoverState(true)
    setOnAccountBox(false)
  }
  const handleMouseLeave=()=>{
     hideTimeOut.current = setTimeout(()=>{
      setOnLangBox(false)
      setHoverState(false)
     },200);
  }
  React.useEffect(()=>{
      return () => clearTimeout(hideTimeOut.current)
  },[])


  const handleMouseHover = React.useRef(null)
  
  const changeAccounts=()=>{
    clearTimeout(handleMouseHover.current)
    setOnAccountBox(true)
    setHoverState(true)
    setSearchHistory(false)
    setOnLangBox(false)
  }
  const removeAccounts=()=>{
    handleMouseHover.current = setTimeout(()=>{
      setOnAccountBox(false)
      setHoverState(false)
    },200)
    
  }
  React.useEffect(()=>{
    return ()=> clearTimeout(handleMouseHover.current)
  },[])
 
  
  return (
    <div className="app"  >
     <div className="mainHeader">
     <Header  
     setHoverState={setHoverState}
     setSearchHistory={setSearchHistory}
     setOnLangBox={setOnLangBox}
     onAccountBox={onAccountBox}
     setOnAccountBox={setOnAccountBox}
     handleMouseEnter={handleMouseEnter}
     handleMouseLeave={handleMouseLeave}
     changeAccounts={changeAccounts}
     removeAccounts={removeAccounts}
    //  setIsLangBoxHovered={setIsLangBoxHovered}
     />
    
     </div>
     <Navbar 
     ref={componentRef}
     setIsSideBar={setIsSideBar}
     setShowSideBar={setShowSideBar}/>
     <Hero />
     <div className="lifted">
       <Content />
       <Products />
       <AllContents />
       <ProductsTwo />
       <AllContentsTwo />
       <History />
       <Footer />
       
    </div>
   
    <OnSearchBar hoverState ={hoverState} 
    setHoverState={setHoverState}
    isVisible ={isVisible}
    searchHistory={searchHistory}
    onLangBox={onLangBox}
    setOnLangBox={setOnLangBox}
    handleMouseEnter={handleMouseEnter}
    handleMouseLeave={handleMouseLeave}
    onAccountBox={onAccountBox}
    changeAccounts={changeAccounts}
    removeAccounts={removeAccounts}
    
    />
    <Sidebar 
    isSideBar={isSideBar}
    setIsSideBar={setIsSideBar} 
    showSideBar={showSideBar}/>
   
   
    </div>
  );
}

export default App;
