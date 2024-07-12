import { Gallery } from "../Components/Gallery/Gallery";
import { NavBar } from "../Components/HomeStart/NavBar";
import { Experience } from "../Components/OurExperience/Experience";
import { Offers } from "../Components/OurOffers/Offers";
import { Rooms } from "../Components/OurRooms/Rooms";
import { Story } from "../Components/OurStory/Story";




export const Home = ()=>{
    

    return(
        <>
         <NavBar/>  
        <div className="pt-5">
            <Story/>
        </div>

        <div className="pt-5 mt-5">
            <Experience/>
        </div>

        <div className="pt-5 mt-5">
            <Rooms/>
        </div>

        <div className="pt-5 mt-5">
            <Offers/>
        </div>

        <div className="pt-5 mt-5">
            <Gallery/>
        </div>
        </>
    )
};

// https://booking.webestica.com/assets/images/category/hotel/resort/bg-01.jpg