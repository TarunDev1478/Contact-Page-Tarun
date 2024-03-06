import React from 'react'
import ContactSection from './ContactSection'
import MapLocatio from './MapLocatio'
import '../assets/styles/mobileSection.css'
function ContactPage(props) {
  return (
    <div>
      <ContactSection mode={props.mode} setMode={props.setMode}  />
      <MapLocatio/>
    </div>
  )
}

export default ContactPage
