import personA from '../images/person1.png'
import personB from '../images/person2.png'
import personC from '../images/person3.png'


const AboutSection = () => {
    return (
        <section className='aboutSection'>
            <article>
                <p>Meet the team</p>
                <h3 className='subHeadline'>We are chilled and a laidback team</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </article>
            <div className='imgSection'>
                <img src={personC} alt='' id='c'/>
                <img src={personA} alt='' id='a'/>
                <img src={personB} alt='' id='b'/>
            </div>
        </section>
    )
}

export default AboutSection