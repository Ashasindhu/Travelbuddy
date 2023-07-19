import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import natureImg from "../assets/nature4.avif"
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
function Contact(){
    return(
        <>
         <Navbar/>
    <Hero
    cName="hero-mid"
    heroImg={natureImg}
    title="Adopt the pace of nature"
    buttonText="Travel"
    url="/"
    btnClass="show"
    />
    <ContactForm/>
    <Footer/>
        </>
    );
    }
    export default Contact;