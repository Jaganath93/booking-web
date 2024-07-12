import AliceCarousel from "react-alice-carousel";
import 'react-alice-carousel/lib/alice-carousel.css';
import { Sliders } from "./Sliders";

export const Experience = ()=>{
    const cards = [
        {
            id:1,
            title:"Activities", 
            image: "https://booking.webestica.com/assets/images/category/hotel/resort/3by4/03.jpg",
            description: "Tolerably behavior may admit daughters offending effect wishes change way and any wanted."
        },

        {
            id:2,
            title:"Fitness Center",
            image: "https://booking.webestica.com/assets/images/category/hotel/resort/3by4/06.jpg",
            description: "Praise effect wishes change way and any wanted."
        },

        {
            id:3,
            title:"Event Calender",
            image: "https://booking.webestica.com/assets/images/category/hotel/resort/3by4/04.jpg",
            description: "Praise effect wishes change way and any wanted behavioral psychology and influence."
        },
        {
            id:4,
            title:"Dining",
            image: "https://booking.webestica.com/assets/images/category/hotel/resort/3by4/05.jpg",
            description: "Focus a great deal on the understanding of behavioral psychology and influence"
        },
    ];

    const responsive = {
        0: { items: 1 },
        568: { items: 1.5 },
        713: {items:2},
        1024: { items: 2.5 },
        1200: {items:3.5}
    };
    
    const carousel = cards.map((card)=> <Sliders card={card}/>);
    const items = [...carousel];
    console.log(items)

    return(
        <div className="container-fluid">
            <h1 className="text-center fw-bolder title">Our Exciting Experience</h1>
                <div className="mt-5">
                <div className="ms-0 ms-lg-3">
      <div className="row">                
                <AliceCarousel
                  mouseTracking
                  items={items}
                  responsive={responsive}
                  disableDotsControls={true}
    />
                </div>
      </div>
                </div>
        </div>
    );
}