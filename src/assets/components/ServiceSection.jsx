import pen from '../images/pen.svg'
import database from '../images/database.svg'
import brackets from '../images/brackets.svg'

const ServiceSection = () => {
    return (
        <section className='serviceSection' id='services'>
                <h3 className='subHeadline'>We offer high demand services</h3>
                <article className='serviceContainer'>
                    <div className='serviceDiv'>
                        <img src={pen} alt="" />
                        <h4>UI/UX Design</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis.</p>
                        <button>Get started</button>
                    </div>
                    <div className='serviceDiv'>
                        <img src={brackets} alt="" />
                        <h4>Frontend</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis.</p>
                        <button>Get started</button>
                    </div>
                    <div className='serviceDiv'>
                        <img src={database} alt="" />
                        <h4>Backend</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis.</p>
                        <button>Get started</button>
                    </div>
                </article>
        </section>
    )
}

export default ServiceSection