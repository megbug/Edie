import { Link } from 'react-router-dom';

import smartHome from '../images/smarthome.jpg';
import onboard from '../images/onboard.png';
import booking from '../images/booking.png';
import juice from '../images/juice-product.png';

const WorkSection = () => {
    return (
        <section className='workSection'>
            <h3 className='subHeadline'>Good design means good business</h3>
            <div>
                <article>
                    <img src={smartHome} alt='' />
                    <h5>Fullstack application</h5>
                    <h6>Smart home dashboard</h6>
                </article>
                <article>
                    <img src={onboard} alt='' />
                    <h5>UI/UX Design</h5>
                    <h6>Onboard application</h6>
                </article>
            </div>
            <div>
                <article>
                    <img src={booking} alt='' />
                    <h5>Mobile application</h5>
                    <h6>Booking system</h6>
                </article>
                <article>
                    <img src={juice} alt='' />
                    <h5>Frontend application</h5>
                    <h6>Product homepage</h6>
                </article>
            </div>
            <Link>see more</Link>
        </section>
    )
}

export default WorkSection