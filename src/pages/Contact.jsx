// import images
import Email from '../assets/email.png'
import Insta from '../assets/insta.png'
import Github from '../assets/github.png'

export default function Contact() {
    return (
        <div>
            <h1 className="pageTitle" id="border" >Contact Me</h1>

            <div class="contact-list">
                <a href="mailto: amykleynhans@yahoo.com"><img class="logo" src={Email} alt="email logo" /> </a>
                <a href="https://www.instagram.com/amykleynhans"> <img class="logo" src={Insta} alt="instagram logo" /></a>
                <a href="https://github.com/Akleynhans"> <img class="logo" src={Github} alt="github logo" /></a>
            </div>

        </div>
    )
}