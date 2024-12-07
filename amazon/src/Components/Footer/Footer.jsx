import React from 'react'
import './Footer.css'
import amalogo from '../Assests/newama.png'
import globe from '../Assests/globe.png'
import up from '../Assests/u&l.png'
import flag from '../Assests/flag.jpeg'
import { Link } from 'react-scroll'
const Footer = () => {
  return (
    <div className="footer">

        <Link to='navBar' smooth={true} offset={-80} duration={500}><button className="btn">Back to top</button></Link>
        <div className="allLinks">
            <div className="subLinks">
            <ul>
                <li className="mainHeading">Get to Know <br /> Us</li>
                <li><a>About Amazon</a></li>
                <li><a>Careers</a></li>
                <li><a>Press Releases</a></li>
                <li><a>Amazon Science</a></li>
            </ul>
            <ul>
                <li className="mainHeading">Connect with <br /> Us</li>
                <li><a>Facebook</a></li>
                <li><a>Twitter</a></li>
                <li><a>Instagram</a></li>
            </ul>
            <ul>
                <li className="mainHeading">Make Money with Us</li>
                <li><a>Sell on Amazon</a></li>
                <li><a>Sell under Amazon Accelerator</a></li>
                <li><a>Protect and Build Your Brand</a></li>
                <li><a>Amazon Global Selling</a></li>
                <li><a>Supply to Amazon</a></li>
                <li><a>Become an Affiliate</a></li>
                <li><a>Fulfilment by Amazon</a></li>
                <li><a>Advertise Your Products</a></li>
                <li><a>Amazon Pay on Merchants</a></li>
            </ul>
            <ul>
                <li className='mainHeading'>Let Us Help You</li>
                <li><a>Your Account</a></li>
                <li><a>Returns Centre</a></li>
                <li><a>Recalls and Product Safety Alerts</a></li>
                <li><a>100% Purchase Protection</a></li>
                <li><a>Amazon App Download</a></li>
                <li><a>Help</a></li>
            </ul>
            </div>
           
        </div>
        <hr className='line'/>
        <div className="language">
        <Link to='navBar' smooth={true} offset={-80} duration={0}><img src={amalogo} alt="" className="amalogo"/></Link>
            <div className="lang"><img src={globe} alt=""  className='globe'/>English <img src={up} alt="" className='upper'/></div>
            <div className="country"><img src={flag} alt="" />India</div>
        </div>

        <div className="realFooter">
            <div className="smallLinks">
                <ul>
                    <li className="links"><a>AbeBooks</a></li>
                    <li><a>Books, art</a></li>
                    <li><a>& collectibles</a></li>
                </ul>
                <ul>
                    <li className="links"><a>Amazon Web Services</a></li>
                    <li><a>Scalable Cloud</a></li>
                    <li><a>Computing Services</a></li>
                </ul>
                <ul>
                    <li className="links"><a>Audible</a></li>
                    <li><a>Download</a></li>
                    <li><a>Audio Books</a></li>
                </ul>
                <ul>
                    <li className="links"><a>IMDB</a></li>
                    <li><a>Movies, TV</a></li>
                    <li><a>& Celebrities</a></li>
                </ul>
                <ul>
                    <li className="links"><a>Shopbop</a></li>
                    <li><a>Designer</a></li>
                    <li><a>Fashion Brands</a></li>
                </ul>
                <ul>
                    <li className="links"><a>Amazon Business</a></li>
                    <li><a>Everything For</a></li>
                    <li><a>Your Business</a></li>
                </ul>
                <ul>
                    <li className="links"><a>Prime Now</a></li>
                    <li><a>2-Hour Delivery</a></li>
                    <li><a>o Everyday items</a></li>
                </ul>
                <ul>
                    <li className="links"><a>Amazon Prime Music</a></li>
                    <li><a>100 million songs, ad-free</a></li>
                    <li><a>Over 15 million podcast episodes</a></li>
                </ul>
            </div>
            <div className="conditions">
                <p className='cond'><span>Conditions of Use & Sale</span>
                   <span>Privacy Notice</span>
                   <span>Interest-Based Ads</span></p>
                   <p>© 1996-2024, Amazon.com, Inc. or its affiliates</p>
            </div>
        </div>
    </div>
  )
}

export default Footer 