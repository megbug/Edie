import AboutSection from "./assets/components/AboutSection"
import HeroSection from "./assets/components/HeroSection"
import Navbar from "./assets/components/Navbar"
import ServiceSection from "./assets/components/ServiceSection"
import WorkSection from "./assets/components/WorkSection"
import ClientSection from "./assets/components/ClientSection"
import Footer from "./assets/components/Footer"

const LandingPage = () => {

    let isDesktop = window.innerWidth < 501;

  return (
    <section className={isDesktop ? 'mobile' : 'desktop'}>
        <Navbar />
        <HeroSection />
        <ServiceSection />
        <WorkSection />
        <AboutSection />
        <ClientSection />
        <Footer />
    </section>
  )
}

export default LandingPage