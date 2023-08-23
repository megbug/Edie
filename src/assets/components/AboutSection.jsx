import personA from '../images/person1.png'
import personB from '../images/person2.png'
import personC from '../images/person3.png'


const AboutSection = () => {
    return (
        <section className='aboutSection'>
            <article>
                <p>Meet the team</p>
                <h3 className='subHeadline'>We are a chilled and laidback team</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </article>
            <div>
                <img src={personA} alt='' />
                <img src={personB} alt='' />
                <img src={personC} alt='' />
            </div>
        </section>
    )
}

export default AboutSection