// import images
import Email from '../assets/email.png'
import Insta from '../assets/insta.png'
import Github from '../assets/github.png'

export default function Contact() {
    return (
        <div>
            <h1>Contact Me</h1>
            <div>
            <ul class="contact-list">
                    <li><a href="mailto: amykleynhans@yahoo.com"><img class="logo" src={Email} alt="email logo"/> </a></li>
                    <li><a href="https://www.instagram.com/amykleynhans"> <img class="logo" src={Insta} alt="instagram logo"/></a></li>
                    <li><a href="https://github.com/Akleynhans"> <img class="logo" src={Github} alt="github logo"/></a></li>
                </ul>
            </div>
        </div>
    )
}