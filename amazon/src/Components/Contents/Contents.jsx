import React from 'react'
import './Contents.css'
import photo1 from '../Assests/a.png'
import photo2 from '../Assests/b.png'
import photo3 from '../Assests/spe1.png'
import photo4 from '../Assests/light.png'
import lap from '../Assests/laptop.png'
import img1 from '../Assests/5a.png'
import img2 from '../Assests/5b.png'
import img3 from '../Assests/5c.png'
import img4 from '../Assests/5d.png'
import asus from '../Assests/asus.png'

import data from '../Data/Data'
import Box from '../Box/Box'

const Contents = () => {

  const Boxes = data.map((elements,index)=>{
    return <Box 
               key ={index}
               {...elements}/>
  })
  return (
    <div className="content">
        <div className="content1">
        <Box 
                heading="Keep shopping for Appliances & 
        more from "
                image1={photo1}
                des1="Mixer Grinder"
                image2={photo2}
                des2="Airbuds"
                image3={photo3}
                des3="Speakers"
                image4={photo4}
                des4="Strip Lights" 
                offers="View your browsing history"
                />
        


        <div className='box'>
       <h1> Up to 80% off | Electronics & accessories</h1>
       <img src={lap} alt=""/>
        <p className='offers offer2'>See all offers </p> 
    </div>

    <Box 
                heading="Keep shopping for Appliances & 
        more from  "
                image1={img1}
                des1="Kitchen appliance"
                image2={img2}
                des2="Home decor"
                image3={img3}
                des3="Furniture"
                image4={img4}
                des4="Home improvement" 
                offers="See all deals"
                />
   
    <div className='boxes'>
      <div className='productname'>
        <h1>ASUS</h1>
        <a href='' target=''>ASUS Zenbook 14 OLED</a>
      </div>
      <img src={asus} alt=""/>
    </div>

        </div>
        <div className="content2">
          {Boxes}
        </div>

    </div>
  )
}

export default Contents