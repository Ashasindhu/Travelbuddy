import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import natureImg from "../assets/nb3.avif"
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
function About(){
    return(
        <>
    <Navbar/>
    <Hero
    cName="hero-mid"
    heroImg={natureImg}
    title="Your Journey Your Start"
    buttonText="Travel"
    url="/"
    btnClass="show"
    />
    <AboutUs/>
    <Footer/>
        </>
    );
    }
    export default About;