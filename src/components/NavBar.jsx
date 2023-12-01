import { Link, useLocation } from 'react-router-dom';

function NavBar() {
    const page = useLocation().pathname;
    const links = ["Home", "Work", "Resume", "Contact"];

    return (
        <ul>
            <li>
                <Link to="/" className={page === '/' ? 'nav-link active' : 'nav-link'}>
                    Home
                </Link>
            </li>
            {links.map((link) => (
                <li>

                    <Link to={"/" + link} className={page === `/${link}` ? 'nav-link active' : 'nav-link'} key={link} tab={link}>{link}</Link>
                </li>
            ))}
        </ul>
    )
}

export default NavBar;