import restaurantFood from '../assets/images/restaurantfood.jpg'
import mainStyle from '../styles/Main.module.css'

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
            <div className={`${mainStyle.specialsDiv}`}>
                <h2>Specials</h2>
                <button type="submit">Online Menu</button>
            </div>
            <section className={`${mainStyle.specialsSection}`}>
                <article>
                    <h1>Hello World</h1>
                    <img src="" alt="Greek salad" />
                    <h3>Greek salad</h3>
                    <h3>$12.99</h3>
                    <p>
                        The famous greek salad of crispy lettuce,
                        peppers, olives and our Chicago style feta
                        cheese, garnished with crunchy garlic and
                        rosemary croutons.
                    </p>
                    <div>
                        <h3>Order a delivery</h3>
                        <img src="" alt="Motorcycle" />
                    </div>
                </article>
                <article>
                    <img src="" alt="Greek salad" />
                    <h3>Greek salad</h3>
                    <h3>$12.99</h3>
                    <p>
                        Our Bruschetta is made from grilled
                        breadt hat has been smeared with gralic and
                        seasoned with salt and olive oil.
                    </p>
                    <div>
                        <h3>Order a delivery</h3>
                        <img src="" alt="Motorcycle" />
                    </div>
                </article>
                <article>
                    <img src="" alt="Greek salad" />
                    <h3>Greek salad</h3>
                    <h3>$12.99</h3>
                    <p>
                        This comes straight from grandma's
                        recipe book, every last ingredient
                        has been sourced and is as authentic
                        as can be imagined.
                    </p>
                    <div>
                        <h3>Order a delivery</h3>
                        <img src="" alt="Motorcycle" />
                    </div>
                </article>
            </section>
            <section className={`${mainStyle.testimonialsSection}`}>
                <h1>Testimonials</h1>
                <div className={`${mainStyle.testimonialsDiv}`}>
                    <article>
                        <h3>Rating</h3>
                        <img src="" alt="Rating" />
                        <h3>Name</h3>
                        <h4>Review rext</h4>
                    </article>
                    <article>
                        <h3>Rating</h3>
                        <img src="" alt="Rating" />
                        <h3>Name</h3>
                        <h4>Review rext</h4>
                    </article>
                    <article>
                        <h3>Rating</h3>
                        <img src="" alt="Rating" />
                        <h3>Name</h3>
                        <h4>Review rext</h4>
                    </article>
                    <article>
                        <h3>Rating</h3>
                        <img src="" alt="Rating" />
                        <h3>Name</h3>
                        <h4>Review rext</h4>
                    </article>
                </div>
            </section>
            <section className={`${mainStyle.outroSection}`}>
                <article>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, eligendi?</p>
                </article>
                <img src="" alt="Pic1" />
                <img src="" alt="Pic2" />
            </section>
        </main>
    )
}

export default Main