import MontImg from "../assets/nature2houses.avif"
import MontImg1 from "../assets/nb3.avif"
import MontImg2 from "../assets/nature4.avif"
import MontImg3 from "../assets/nb4.avif"
import DestinationData from "./DestinationData";
import "./Destination.css"
const Destination = () => {
  return (
      
      <div className="destination">
        <h1>Popular Destination</h1>
        <p>Tours gives you oppurtunity to make memories</p>
        <DestinationData
        className="first-des"
          heading="A pleasant summer retreat and a snowy winter wonderland"
          text="It's a wondrous and exhilarating realm that never ceases to amaze me. Imagine stepping into a lush, emerald-green forest where sunlight filters through the canopy, casting dancing shadows on the forest floor. The air is alive with the symphony of birdsong and the gentle rustling of leaves. As you explore deeper, you stumble upon a breathtaking waterfall cascading down mighty rocks, its mist kissing your cheeks, and the sound roaring in your ears.."
          img1={MontImg}
          img2={MontImg2}
        />
        <DestinationData
        className="first-des-reverse"
          heading="Beach sunset"
          text="Get ready to be swept away by the sheer excitement and wonder of these magnificent coastal wonders! Picture yourself stepping onto the warm, powdery sand, as the radiant sun casts its golden glow over a dazzling turquoise expanse of crystal-clear water. The air is thick with a salty tang and the gentle sound of crashing waves embraces your senses."
          
          img1={MontImg1}
          img2={MontImg3}
        />
      </div>
     
      );
};
      export default Destination;