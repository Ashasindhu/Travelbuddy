import "./Trip.css"
import TripData from "./TripData"
import small2 from "../assets/small2.avif"
import small1 from "../assets/small1.avif"
import s6 from "../assets/s6.avif"

function Trip(){
    return(
        <div className="trip">
            <h1>Recent trips</h1>
            <p>You can discover unique destinations using Google Maps</p>
            <div className="tripcard">
                <TripData
                image={small2}
                heading="Trip indonesia"
                text="Start your Indonesian river escapades on the island of Bali with an exhilarating rafting experience along the Ayung River. This picturesque river winds through lush rainforests, deep gorges, and cascading waterfalls, offering an adrenaline-pumping journey for adventurers of all levels. As you navigate the rapids, you'll be surrounded by breathtaking scenery, with glimpses of traditional villages and vibrant green landscapes."
                />
            <TripData
                image={small1}
                heading="Thames River, England"
                text="
                Flowing through the heart of London, the Thames River offers a unique river ride experience. Cruise along this iconic river and marvel at the iconic landmarks such as the Tower Bridge, the Houses of Parliament, and the majestic St. Paul's Cathedral. The Thames River ride provides a blend of historical and modern perspectives, showcasing the rich heritage of England's capital."
                />
                <TripData
                image={s6}
                heading="Yosemite Valley, United States"
                text="Located in California's Sierra Nevada Mountains, Yosemite Valley is renowned for its awe-inspiring beauty. This glacially carved valley boasts towering granite cliffs, including the iconic El Capitan and Half Dome, cascading waterfalls such as Yosemite Falls, and lush meadows. It's a paradise for outdoor enthusiasts, with hiking trails, rock climbing opportunities, and the chance to immerse oneself in the serenity of nature.."
                />
            </div>
        </div>
    );
}
export default Trip;