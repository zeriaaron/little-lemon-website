import logo from '../assets/images/Logo.svg'
import navStyle from '../styles/Nav.module.css'

const Nav = () => {
    return (
        <nav>
            <ul className={`${navStyle.unorderedList} ul`}>
                <img className={`${navStyle.img}`} src={logo} alt="Little Lemon Logo" />
                <li><a className={`${navStyle.links}`} href="">Home</a></li>
                <li><a className={`${navStyle.links}`} href="">About</a></li>
                <li><a className={`${navStyle.links}`} href="">Menu</a></li>
                <li><a className={`${navStyle.links}`} href="">Reservations</a></li>
                <li><a className={`${navStyle.links}`} href="">Order Online</a></li>
                <li><a className={`${navStyle.links}`} href="">Login</a></li>
            </ul>
        </nav>
    )
}

export default Nav