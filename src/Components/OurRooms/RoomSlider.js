

export const RoomSlider = ()=>{

    const roomData = [
        {
            id:1,  
            img:"https://booking.webestica.com/assets/images/category/hotel/resort/02.jpg",
            room:"The Penthouse Suite",
            roomSqft: "789-850",
            roomSqmt: "78-85",
            about:"Lively use looked latter regard had. We understand that theory is important to build a solid foundation",
            facilities:["Indoor Tub", "Private Deck", "Freestanding"]
        },
        {
            id:2,  
            img:"https://booking.webestica.com/assets/images/category/hotel/resort/01.jpg",
            room:"One Bedrooom Ocean Suite",
            roomSqft: "757-900",
            roomSqmt: "79-84",
            about:"Lively use looked latter regard had. We understand that theory is important to build a solid foundation",
            facilities:["Indoor Tub", "Private Deck", "Freestanding"]
        },
        {
            id:3,  
            img:"https://booking.webestica.com/assets/images/category/hotel/resort/03.jpg",
            room:"One Bedrooom Ocean Suite",
            roomSqft: "757-900",
            roomSqmt: "79-84",
            about:"Lively use looked latter regard had. We understand that theory is important to build a solid foundation",
            facilities:["Indoor Tub", "Private Deck", "Freestanding"]
        }        
    ];

    return(
        <div className="me-5 pb-5">
            <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    {roomData?.map((room,i)=>(
        <>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={i} class={`${i==0 ? "active" : ""}`} aria-current={`${i===0 ?"true" : ""}`} aria-label={`Slide ${i+1}`}></button>
    </>

    ))}
    
  </div>
  <div class="carousel-inner">
    {roomData?.map((room,i)=>(
        <>
        <div class={`carousel-item ${i==0 ? 'active' : ""} room-slider h-100 `}>
        <img src={room.img} class="d-block w-100 p-5" style={{borderRadius:'65px'}} alt={room.room}/>  
        <div className="position-absolute">
          <p className="bg-danger">Hello</p>
          </div>      
        <div class="carousel-caption bg-light text-dark w-50 position-absolute">
          <div className="container d-flex flex-column justify-content-start">
            <div className="row">
                <div className="col-12 pt-3 mt-3">
                    <h1 className="mt-0 pt-0 fw-bold text-center">{room.room}</h1>
                    <p className="w-100 text-start">
                        <ul className="row">
                        <li className="list-unstyled col-1"></li>
                        <li className="list-unstyled col-4 text-end">{room.roomSqft} SQ.Ft</li>
                        <li className="list-unstyled col-4 text-start">{room.roomSqmt} SQ.M</li>
                        </ul>
                    </p>
                </div>
            </div>
            <div className="row text-center">
                    <p className="text-muted col-6 ms-0 ps-0 text-center">{room.about}</p>
                </div>
          </div>
        </div>
      </div>
      </>
    ))}
    
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>
    );
};