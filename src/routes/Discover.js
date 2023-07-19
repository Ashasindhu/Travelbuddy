import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import natureImg from "../assets/nature3.avif"
import Footer from "../components/Footer";
import Trip from "../components/Trip";
function Discover(){
    return(
        <>
        <Navbar/>
    <Hero
    cName="hero-mid"
    heroImg={natureImg}
    title="Enjoy the Trip"
    buttonText="Travel"
    url="/"
    btnClass="show"
    />
    <Trip/>
     <Footer/>
        </>
    )
    }
    export default Discover;