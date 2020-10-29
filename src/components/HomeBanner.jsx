import React from 'react'
import './HomeBanner.css'
function HomeBanner() {
    return (
        <div className='homebanner'>
            <div className="homebanner__img">
                <img src="https://statics.olx.com.pk/external/base/img/phone-app.png" alt=""/>
            </div>
            <div className="hommerbanner__Text">
                <h1>TRY THE OLX APP</h1>
                <p>Buy, sell and find just about anything using the app on your mobile. </p>
        
            </div>
            <div className="hommerbanner__right">
                <h4>GET YOUR APP TODAY</h4>
                <img src="https://statics.olx.com.pk/external/base/img/appstore.png" alt="" />
                <img src="https://statics.olx.com.pk/external/base/img/playstore.png" alt="" />
            </div>
        </div>
    )
}

export default HomeBanner
