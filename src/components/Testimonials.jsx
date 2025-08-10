import classNames from 'classnames'
import threeStar from '../assets/images/testimonials/3-stars.png'
import fourStar from '../assets/images/testimonials/4-stars.png'
import fiveStar from '../assets/images/testimonials/five-stars.png'
import testiStyle from '../styles/Testimonials.module.css'

const Testimonials = () => {
    return (
        <>
            <section className={classNames(testiStyle.testimonialsSection)}>
                <h1>Testimonials</h1>
                <div className={classNames(testiStyle.testimonialsDiv)}>
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
        </>
    )
}

export default Testimonials