import classNames from 'classnames'
import restaurant from '../assets/images/outro/restaurant.jpg'
import outroStyle from '../styles/Outro.module.css'

const Outro = () => {
    return (
        <>
            <section className={classNames(outroStyle.outroSection)}>
                <article>
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, nam! Veritatis nostrum expedita eveniet quod debitis quia dolorum placeat sequi rem obcaecati eaque voluptatum reprehenderit a consequuntur sunt necessitatibus, cum, fugiat recusandae? Nobis itaque, dolorum numquam totam est aperiam, sit perferendis qui amet quam autem corporis reiciendis magnam soluta accusamus.</p>
                </article>
                <img src={restaurant} alt="Pic2" />
            </section>
        </>
    )
}

export default Outro