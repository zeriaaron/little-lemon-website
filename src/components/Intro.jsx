import classNames from 'classnames'
import introStyle from '../styles/Intro.module.css'
import restaurantFood from '../assets/images/restaurantfood.jpg'
import { useNavigate } from 'react-router-dom'

const Intro = () => {
    const navigate = useNavigate()

    return (
        <>
            <section className={classNames(introStyle.introSection)}>
                <article>
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit repellendus natus iure maiores omnis repudiandae aliquid sit obcaecati fugiat numquam, assumenda, itaque similique delectus minima.</p>
                    <button type="button" aria-label='Go to reservations page' onClick={() => navigate('/book')}>Reserve a Table</button>
                </article>
                <img src={restaurantFood} alt="Restaurant Food" />
            </section>
        </>
    )
}

export default Intro