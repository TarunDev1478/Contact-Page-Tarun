import React, { useState, useRef, useEffect } from 'react';
import '../assets/styles/contactSection.css'
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import '../assets/styles/mobileSection.css' 
import Switch from '@mui/material/Switch';
import zIndex from '@mui/material/styles/zIndex';

//Styled component for customizing MUI TextField for styling textfields
const CssTextField = styled(TextField)({
    '& .MuiInputBase-root': {
        color: '#bcb5b5',
        borderColor: '#1f1f1e '
    },
    "& .MuiInputLabel-root": { color: '#bcb5b5' },
    '& label.Mui-focused': {
        color: '#bcb5b5 ',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#bcb5b5 ',
        color: '#bcb5b5 '
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#1f1f1e ',
            color: '#bcb5b5 ',
            borderRadius: "10px"
        },
        '&:hover fieldset': {
            borderColor: '#bcb5b5 ',
            color: '#bcb5b5 '
        },
        '&.Mui-focused fieldset': {
            borderColor: '#bcb5b5 ',
            color: '#bcb5b5 '
        },
    },
});

//for styled slider
const label = { inputProps: { 'aria-label': 'Color switch demo' } };

// this is for getting windowQidth increase responsiveness
function ContactSection(props) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    //url or api link for google spreadsheets
    const scripturl = 'https://script.google.com/macros/s/AKfycbwxQHgkwUDZKoJMaYeuZzbc_f9SXhm5s6p8FbaQltLBVUeC_ttD-uE1f_o1-nvCTqKD7A/exec'
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phno, setPhno] = useState();
    const [message, setMessage] = useState();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    //function to submit form
    const submitForm = (e) => {
        e.preventDefault();
        if (!name || !email || !phno || !message) {
            alert("Please fill out all required fields.");
            return;
        }
        //for emali validation
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }
        // for phno validaion
        if (!/^\d{10}$/.test(phno)) {
            alert("Please enter a valid 10-digit phone number.");
            return;
        }
        const formData = new FormData();
        formData.append('Name1', name);
        formData.append('Email1', email);
        formData.append('Phno1', phno);
        formData.append('Message1', message);
        // making a post request to api for storing form data
        fetch(scripturl, {
            method: 'POST',
            body: formData
        })
            .then(response => {
                if (response.ok) {
                    alert("Thank you for contacting us! Your form has been submitted successfully!");
                } else {
                    throw new Error('Network response was not ok.');
                }
            })
            .catch(error => console.error('Error!', error.message));
    };


    return (
        <div>
            <div className="container" style={{ backgroundColor: props.mode == "on" ? 'white' : '' }}>
                <div className="title">
                    <div className="main">
                        <div className="png">
                        <img style={{opacity:props.mode=='on'?'0':'1'}} className='moon' src="/images/moon.png" alt="" />
                        <img style={{opacity:props.mode=='on'?'0':'1'}} className='city'src="/images/city1.png" alt="" />
                        <img style={{opacity:props.mode=='on'?'1':'0'}} className='sun' src="/images/sun3.png" alt="" />
                        <img style={{opacity:props.mode=='on'?'1':'0'}} className='tree' src="/images/tree.png" alt="" />
                        </div>
                        <div className='h4' style={{ color: props.mode == "on" ? '#455d58' : '' }}>get in touch</div>
                        <div className='h1' style={{ color: props.mode == "on" ? '#455d58' : '' }}>CONTACT</div>
                    </div>
                    <div className="mode">
                        <DarkModeIcon style={{ display: props.mode === "on" ? 'none' : '', cursor: 'pointer' }} />
                        <LightModeIcon style={{ display: props.mode === "on" ? '' : 'none', cursor: 'pointer' }} />
                        <Switch {...label} onChange={(e) => { props.setMode(e.target.checked ? "on" : "off") }} color="warning" />
                    </div>
                </div>
                <div className="contact">
                    <div className="info">
                        <div className="given-info" style={{ backgroundColor: props.mode == "on" ? '#3e5650' : '', color: props.mode == 'on' ? 'white' : '#bcb5b5' }}><PhoneAndroidIcon sx={{ fontSize: 40, padding: 2 }} /><div className='data'>+91-7985706039 </div> </div>
                        <div className="given-info" style={{ backgroundColor: props.mode == "on" ? '#3e5650' : '', color: props.mode == 'on' ? 'white' : '#bcb5b5' }}><EmailRoundedIcon sx={{ fontSize: 40, padding: 2 }} /><div className='data'>tarunkumar147800@gmail.com</div> </div>
                        <div className="given-info" style={{ backgroundColor: props.mode == "on" ? '#3e5650' : '', color: props.mode == 'on' ? 'white' : '#bcb5b5' }}><LocationOnRoundedIcon sx={{ fontSize: 40, padding: 2 }} /><div className='data'>Kanpur, UttarPradesh</div></div>
                    </div>
                    <div style={{backgroundColor:props.mode=="on"?'#3e5650':'' }} className="ver-line"></div>
                    <div className="credentials">
                        <form method='post' name='forms' action="" style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                            <CssTextField
                                style={{ backgroundColor: props.mode == "on" ? '#3e5650' : '' }}
                                className="cred"
                                required
                                onChange={(e) => setName(e.target.value)} 
                                name='Name1'
                                label="Name"
                                id="custom-css-outlined-input"
                            />
                            <div className="email">
                             <CssTextField
                                    style={{ backgroundColor: props.mode == "on" ? '#3e5650' : ''}}
                                    className="cred1"
                                    required
                                    onChange={(e) => { setEmail(e.target.value) }}
                                    name='Email1'
                                    label="Email"
                                    type="email"
                                    id="custom-css-outlined-input"
                                />
                                <DoneIcon  style={{ display: emailRegex.test(email) && windowWidth >= 500 ? 'flex' : 'none',color: props.mode=='on'?'#3e5650':'#bcb5b5' }} sx={{ fontSize: 40, paddingTop: 2, paddingLeft: 2 }} />
                                <CloseIcon  style={{ display: emailRegex.test(email)|| windowWidth <= 500 ? 'none' : 'flex' ,color: props.mode=='on'?'#3e5650':'#bcb5b5'}} sx={{ fontSize: 40, paddingTop: 2, paddingLeft: 2 }} />
                            </div>
                            <div className="phno">
                                <CssTextField
                                    style={{ backgroundColor: props.mode == "on" ? '#3e5650' : ''}}
                                    className="cred1"
                                    type='tel'
                                    required
                                    onChange={(e) => { setPhno(e.target.value) }}
                                    name='Phno1'
                                    label="Phone Number"
                                    pattern="[0-9]{10}"
                                    id="custom-css-outlined-input"
                                />
                                <DoneIcon  style={{zIndex:'3', display: /^\d{10}$/.test(phno) && windowWidth >= 500 ? 'flex' : 'none' ,color: props.mode=='on'?'#3e5650':'black'}} sx={{ fontSize: 40, paddingTop: 2, paddingLeft: 2 }} />
                                <CloseIcon  style={{ zIndex:'3',display: /^\d{10}$/.test(phno) || windowWidth <= 500 ? 'none' : 'flex' ,color: props.mode=='on'?'#3e5650':'black'}} sx={{ fontSize: 40, paddingTop: 2, paddingLeft: 2 }} />
                            </div>

                            <CssTextField
                                style={{ backgroundColor: props.mode == "on" ? '#3e5650' : '' }}
                                className="cred"
                                required
                                onChange={(e) => setMessage(e.target.value)} 
                                name='Message1'
                                maxRows={7}
                                multiline
                                label="Message"
                                id="custom-css-outlined-input"
                            />

                            <button style={{ color: props.mode == 'on' ? 'white' : 'black', backgroundColor: props.mode == 'on' ? '#3e5650' : 'white' }} onClick={(e) => submitForm(e)}>Send</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactSection;
