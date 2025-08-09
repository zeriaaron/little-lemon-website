import footerStyle from '../styles/Footer.module.css'
import footerImage from '../assets/images/footerimage.jpg'

const Footer = () => {
    return (
        <footer>
            <section className={`${footerStyle.section}`}>
                <img src={footerImage} alt="Logo" />
                <article>
                    <h1>Dormat Navigation</h1>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Menu</a></li>
                        <li><a href="">Reservations</a></li>
                        <li><a href="">Order Online</a></li>
                        <li><a href="">Login</a></li>
                    </ul>
                </article>
                <article>
                    <h1>Contact</h1>
                    <ul>
                        <li><a href="">Address</a></li>
                        <li><a href="">Phone Number</a></li>
                        <li><a href="">Email</a></li>
                    </ul>
                </article>
                <article>
                    <h1>Social Media Links</h1>
                    <ul>
                        <li><a href="">Address</a></li>
                        <li><a href="">Phone Number</a></li>
                        <li><a href="">Email</a></li>
                    </ul>
                </article>
            </section>
        </footer>
    )
}

export default Footer