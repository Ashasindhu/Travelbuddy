import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import natureImg from "../assets/nature1.avif"
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";
function Homepage(){
return(
    <>
    <Navbar/>
    <Hero
    cName="hero"
    heroImg={natureImg}
    title="Look deep into nature"
    text="Travel With Us"
    buttonText="Travel"
    url="/"
    btnClass="show"
    />
    <Destination/>
    <Trip/>
    <Footer/>
    </>
);
}
export default Homepage;