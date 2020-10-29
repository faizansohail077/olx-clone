import React from 'react'
import './Footer.css'


function Footer() {
    return (
        <>
            <div className='footer'>
                <div className="footer__left">
                    <h5>Popular Catogaries</h5>
                    <span>car</span>
                    <span>Flats for Rent</span>
                    <span>Jobs</span>
                    <span>Mobile Phone</span>
                </div>
                <div className="footer__left1">
                    <h5>TRENDING SEARCHES</h5>
                    <span>Bikes</span>
                    <span>Watches</span>
                    <span>Books</span>
                    <span>Dogs</span>
                </div>
                <div className="footer__left2">
                    <h5>ABOUT US</h5>
                    <span>About Olx Group</span>
                    <span>Olx Blogs</span>
                    <span>Contact Us</span>
                    <span>Olx for Business</span>
                </div>
                <div className="footer__left3">
                    <h5>OLX</h5>
                    <span>Help</span>
                    <span>Sitemap</span>
                    <span>Legal and privacy information</span>

                </div>
                <div className="footer__left4">
                    <h5>Follow us</h5>
                    <img src="https://statics.olx.com.pk/external/base/img/appstore.png" />
                    <img src="https://statics.olx.com.pk/external/base/img/playstore.png" />
                </div>
            </div>
            <div className="footer__bottom">
                <div className="footer__bottomLeft">
                    <h3>Other Countries</h3>
                    <span> India - South Africa - Indonesia</span>
                </div>
                <div className="footer__bottomRight">
                    <h3>Free Classifieds in Pakistan</h3>
                    <span>. © 2006-2020 OLX</span>
                </div>

            </div>
        </>


    )
}

export default Footer
