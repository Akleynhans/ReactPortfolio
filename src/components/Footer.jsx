import React from 'react';
// import images
import Email from '../assets/email.png'
import Insta from '../assets/insta.png'
import Github from '../assets/github.png'

function Footer() {
    return (
        <div class="contact-list-foot">
            <a href="mailto: amykleynhans@yahoo.com"><img class="logosm" src={Email} alt="email logo" /> </a>
            <a href="https://www.instagram.com/amykleynhans"> <img class="logosm" src={Insta} alt="instagram logo" /></a>
            <a href="https://github.com/Akleynhans"> <img class="logosm" src={Github} alt="github logo" /></a>
        </div>
    )
}
export default Footer;