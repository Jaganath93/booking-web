

export const Sliders = ()=>{
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

    return(

<div className="ms-0 ms-lg-3">
      <div className="row">
         {cards?.map((card)=>(
            <div className="card text-white col-12 col-md-4 col-lg-3 col-xl ms-4 me-0 ps-0 pe-5 pe-md-0 border-0 mt-3" key={card.id}> 
            <img src={card.image} className="exp-card" alt={card.title}/>
            <div className="card-img-overlay d-flex flex-column justify-content-end">
              <h5 className="card-title fw-bolder fs-2">{card.title}</h5>
              <p className="card-text">{card.description}</p>
              <p className="card-text">Explore now</p>
            </div>
          </div>
         ))
            }

      </div>
      </div>
    );
};





