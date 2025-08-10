import logo from '../assets/images/Logo.svg'
import navStyle from '../styles/Nav.module.css'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        // <nav>
        //     <ul className={`${navStyle.unorderedList} ul`}>
        //         <img className={`${navStyle.img}`} src={logo} alt="Little Lemon Logo" />
        //         <li><a className={`${navStyle.links}`} href="">Home</a></li>
        //         <li><a className={`${navStyle.links}`} href="">About</a></li>
        //         <li><a className={`${navStyle.links}`} href="">Menu</a></li>
        //         <li><a className={`${navStyle.links}`} href="">Reservations</a></li>
        //         <li><a className={`${navStyle.links}`} href="">Order Online</a></li>
        //         <li><a className={`${navStyle.links}`} href="">Login</a></li>
        //     </ul>
        // </nav>

        // Updating the navigation
        // Learned: ul, li are semantics and should be partnered always
        // Learned: Link has "a" anchor tag that you can target to work with styling
        <nav>
            <ul className={classNames(navStyle.unorderedList)}>
                <img className={classNames(navStyle.links)} src={logo} alt="Little Lemon Logo" />
                <li><Link className={classNames(navStyle.links)} to={'/'}>Home</Link></li>
                <li><Link className={classNames(navStyle.links)} to={'/'}>About</Link></li>
                <li><Link className={classNames(navStyle.links)} to={'/'}>Menu</Link></li>
                <li><Link className={classNames(navStyle.links)} to={'/book'}>Reservations</Link></li>
                <li><Link className={classNames(navStyle.links)} to={'/'}>Order Online</Link></li>
                <li><Link className={classNames(navStyle.links)} to={'/'}>Login</Link></li>
            </ul>
        </nav>
    )
}

export default Nav