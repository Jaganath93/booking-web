

export const Offers = ()=>{
    const offers = [
        {
            img:"https://booking.webestica.com/assets/images/offer/02.jpg",
            name:"Pass Holder Package",
        },
        {
            img:"https://booking.webestica.com/assets/images/offer/03.jpg",
            name:"More Sun, More Fun",
        },
        {
            img:"https://booking.webestica.com/assets/images/offer/07.jpg",
            name:"A Stay That Gives Back",
        },
        {
            img:"https://booking.webestica.com/assets/images/offer/04.jpg",
            name:"Elevate Your Stay",
        },
        {
            img:"https://booking.webestica.com/assets/images/offer/06.jpg",
            name:"Spa Package Offer",
        }
    ]

    return(

        <div className="container-fluid px-lg-5" >
            <div className="row mb-4">
            <h1 className="title fw-bolder text-center">Offers of The Month</h1>
            </div>
           <div>
            <div className="row">
                {offers?.map((offer)=>(
                    <div className="col-6 col-md-4 col-xl-2">
                    <img src={offer.img} className="w-100" alt={offer.name}/>
                    <p className="text-center fw-bold">{offer.name}</p>
                </div>
                ))}
                <div className="col-6 col-md-4 col-xl-2">
                    <button className="btn btn-lg btn-primary btn-round m-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-arrow-right-circle-fill text-light" viewBox="0 0 16 16">
  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
</svg>
                    </button>
                    <p className="text-center fw-bold">View All Offers</p>
                </div>
                
            </div>
            </div>
            
        </div>
    );
};

{/* <div className="row mb-4" >
                {offers?.map((offer)=>(
                    <div className="col-6 col-md-4 col-xl-2 me-5">
                        <div className="h-100">
                    <img src={offer.img} alt={offer.name} className="h-50"/>
                    <p className="text-center">{offer.name}</p>
                    </div>
                </div>
                ))}
                
            </div> */}