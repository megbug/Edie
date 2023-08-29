import personD from '../images/person4.png'

const ClientSection = () => {
    return (
        <section className='clientSection' id='clients'>
            <h3 className='subHeadline'>“Fast and outstanding results. Edie understands their customer’s needs. They have a young and talented team.”</h3>
            <article>
                <img src={personD} alt='' />
                <div>
                    <p>Carlos Tran</p>
                    <p>The Happy Customer</p>
                </div>
            </article>
        </section>
    )
}

export default ClientSection