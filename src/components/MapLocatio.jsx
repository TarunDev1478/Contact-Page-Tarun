import React from 'react'
import "../assets/styles/map.css"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import '../assets/styles/mobileSection.css'
function MapLocatio() {
  return (
    <div>
      <div className="map">
      <div className="location">
            <LocationOnIcon sx={{color:'red',fontSize:40}}/>
            <div className="exact">
                <p className='here'>Here is me</p>
                <p className='address'>KeshavNagar,Kanpur,<br/>UttarPradesh,India</p>
                <a href='https://www.google.com/maps/@26.4799141,80.293804,3a,75y,332.07h,69.21t/data=!3m7!1e1!3m5!1sc-h0BrjVS6UrT3ipZdqJkw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3Dc-h0BrjVS6UrT3ipZdqJkw%26cb_client%3Dsearch.revgeo_and_fetch.gps%26w%3D96%26h%3D64%26yaw%3D273.79437%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656?entry=ttu'>Open in google map</a>
            </div>
        </div>
            <div className="map1"></div>
            <img src="/images/loc1.png" alt="" />
      </div>
    </div>
  )
}

export default MapLocatio
