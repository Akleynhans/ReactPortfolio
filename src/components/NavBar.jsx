import { Link, useLocation } from 'react-router-dom';

function NavBar() {
    const page = useLocation().pathname;
    const links = ["Work", "Resume", "Contact"];

    return (
        <div>

            <ul className='nav nav-item' >
                <li className='nav-item'>
                    <Link to="/" className={page === '/' ? 'nav-link active' : 'nav-link'} id='navLink' >
                        Home
                    </Link>
                </li>
                {links.map((link) => (
                    <li className='nav-item'>

                        <Link to={"/" + link} className={page === `/${link}` ? 'nav-link active' : 'nav-link'} id='navLink' key={link} tab={link}>{link}</Link>
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default NavBar;