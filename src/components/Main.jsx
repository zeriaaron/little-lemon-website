import restaurantFood from '../assets/images/restaurantfood.jpg'
import mainStyle from '../styles/Main.module.css'
import greekSalad from '../assets/images/specials/greek salad.jpg'
import bruchetta from '../assets/images/specials/bruchetta.svg'
import lemonDessert from '../assets/images/specials/lemon dessert.jpg'
import restaurant from '../assets/images/outro/restaurant.jpg'
import threeStar from '../assets/images/testimonials/3-stars.png'
import fourStar from '../assets/images/testimonials/4-stars.png'
import fiveStar from '../assets/images/testimonials/five-stars.png'
import classNames from 'classnames'


const Main = () => {
    return (
        <main>
            <section className={`${mainStyle.introSection}`}>
                <article>
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit repellendus natus iure maiores omnis repudiandae aliquid sit obcaecati fugiat numquam, assumenda, itaque similique delectus minima.</p>
                    <button type="submit">Reserve a Table</button>
                </article>
                <img src={restaurantFood} alt="Restaurant Food" />
            </section>
            <section className={`${mainStyle.specialsSection}`}>
                <div className={classNames(mainStyle.specialsDiv, mainStyle.category)}>
                    <h2>Specials</h2>
                    <button type="submit">Online Menu</button>
                </div>
                <div className={classNames(mainStyle.specialsDiv, mainStyle.menu)}>
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
            <section className={`${mainStyle.testimonialsSection}`}>
                <h1>Testimonials</h1>
                <div className={`${mainStyle.testimonialsDiv}`}>
                    <article>
                        <h3>Rating</h3>
                        <div>
                            <img src={fiveStar} alt="Rating" />
                            <h3>Manny Pacquiao</h3>
                        </div>
                        <p>Little Lemon's fresh flavors and warm atmosphere make it a perfect spot to recharge after a busy day. The quick and respectful service felt just right—like a winning round in the ring.</p>
                    </article>
                    <article>
                        <h3>Rating</h3>
                        <div>
                            <img src={threeStar} alt="Rating" />
                            <h3>Bill Gates</h3>
                        </div>
                        <p>Little Lemon delivers a smart combination of quality ingredients and a comfortable dining experience. It's a reliable place for anyone who values well-balanced flavors and great service.</p>
                    </article>
                    <article>
                        <h3>Rating</h3>
                        <div>
                            <img src={fiveStar} alt="Rating" />
                            <h3>Elon Musk</h3>
                        </div>
                        <p>The creativity in Little Lemon's dishes makes dining feel like an exciting innovation. The efficient service and fresh ingredients make it a standout spot worth visiting.</p>
                    </article>
                    <article>
                        <h3>Rating</h3>
                        <div>
                            <img src={fourStar} alt="Rating" />
                            <h3>Steve Jobs</h3>
                        </div>
                        <p>Little Lemon shows how simplicity and attention to detail create a memorable meal. Every dish and the atmosphere reflect clean, focused excellence.</p>
                    </article>
                </div>
            </section>
            <section className={`${mainStyle.outroSection}`}>
                <article>
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, nam! Veritatis nostrum expedita eveniet quod debitis quia dolorum placeat sequi rem obcaecati eaque voluptatum reprehenderit a consequuntur sunt necessitatibus, cum, fugiat recusandae? Nobis itaque, dolorum numquam totam est aperiam, sit perferendis qui amet quam autem corporis reiciendis magnam soluta accusamus.</p>
                </article>
                <img src={restaurant} alt="Pic2" />
            </section>
        </main>
    )
}

export default Main