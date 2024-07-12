

export const Sliders = ({card})=>{
    

    return(

 <div className="col me-3">
   
            <div className="card text-white border-0 mt-3" key={card.id}> 
            <img src={card.image} className="exp-card" alt={card.title}/>
            <div className="card-img-overlay d-flex flex-column justify-content-end">
              <h5 className="card-title fw-bolder fs-2">{card.title}</h5>
              <p className="card-text">{card.description}</p>
              <p className="card-text">Explore now</p>
            </div>
          </div>

            </div>

     
    );
};





