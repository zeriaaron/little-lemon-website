import classNames from 'classnames'
import specialsStyle from '../styles/Specials.module.css'
import greekSalad from '../assets/images/specials/greek salad.jpg'
import bruchetta from '../assets/images/specials/bruchetta.svg'
import lemonDessert from '../assets/images/specials/lemon dessert.jpg'

const Specials = () => {
    return (
        <>
            <section className={classNames(specialsStyle.specialsSection)}>
                <div className={classNames(specialsStyle.specialsDiv, specialsStyle.category)}>
                    <h2>Specials</h2>
                    <button type="submit">Online Menu</button>
                </div>
                <div className={classNames(specialsStyle.specialsDiv, specialsStyle.menu)}>
                    <article>
                        <img src={greekSalad} alt="Greek salad" />
                        <div>
                            <h4>Greek salad</h4>
                            <h4>$12.99</h4>
                        </div>
                        <p>
                            The famous greek salad of crispy lettuce,
                            peppers, olives and our Chicago style feta
                            cheese, garnished with crunchy garlic and
                            rosemary croutons.
                        </p>
                        <div>
                            <h4>Order a delivery</h4>
                            <img src="1" alt="Motorcycle" />
                        </div>
                    </article>
                    <article>
                        <img src={bruchetta} alt="Bruchetta" />
                        <div>
                            <h4>Bruchetta</h4>
                            <h4>$12.99</h4>
                        </div>
                        <p>
                            Our Bruschetta is made from grilled
                            breadt hat has been smeared with gralic and
                            seasoned with salt and olive oil.
                        </p>
                        <div>
                            <h4>Order a delivery</h4>
                            <img src="1" alt="Motorcycle" />
                        </div>
                    </article>
                    <article>
                        <img src={lemonDessert} alt="Lemon dessert" />
                        <div>
                            <h4>Lemon dessert</h4>
                            <h4>$12.99</h4>
                        </div>
                        <p>
                            This comes straight from grandma's
                            recipe book, every last ingredient
                            has been sourced and is as authentic
                            as can be imagined.
                        </p>
                        <div>
                            <h4>Order a delivery</h4>
                            <img src="1" alt="Motorcycle" />
                        </div>
                    </article>
                </div>
            </section>
        </>
    )
}

export default Specials