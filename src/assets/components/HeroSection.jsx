import heroImg from '../images/heroImage.jpg'
import Contact from './Contact'

const HeroSection = () => {
    return (
        <section className='heroSection' id='heroSection'>
            <h6>Unhappy with your Website?</h6>
            <div className='heroContainer'>
                <article>
                    <h2 className='headline'>We create beautiful and fast web sevices</h2>
                </article>
                <img src={heroImg} alt='peopleInMeeting' />
                <article>
                    <h2 className='headline'>Story, emotion and purpose</h2>
                    <p>We help transform your ideas into real world applications that will outperform your toughest competition and help you achieve your strategic goals in short period of time.</p>
                </article>
            </div>
            <Contact/>
        </section>
    )
}

export default HeroSection