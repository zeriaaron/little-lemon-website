import classNames from 'classnames'
import introStyle from '../styles/Intro.module.css'
import restaurantFood from '../assets/images/restaurantfood.jpg'
import { Link } from 'react-router-dom'

const Intro = () => {
    return (
        <>
            <section className={classNames(introStyle.introSection)}>
                <article>
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit repellendus natus iure maiores omnis repudiandae aliquid sit obcaecati fugiat numquam, assumenda, itaque similique delectus minima.</p>
                    <button type="button"><Link to={'/book'}>Reserve a Table</Link></button>
                </article>
                <img src={restaurantFood} alt="Restaurant Food" />
            </section>
        </>
    )
}

export default Intro