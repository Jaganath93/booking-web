

export const Gallery = ()=>{

    

    return(
        <div className="container-fluid">
            <div><h1 className="title fw-bolder text-center">Some Of Our Happy Moments</h1></div>
            <div className="mt-5">
                <div className="row">
                    
                    <div className="col-12 col-xl-4 mt-0 pt-0 mt-xl-5 pt-xl-5 d-block d-xl-flex flex-column justify-content-between">
                    <h1 className="d-none d-xl-block"></h1>
                        <img src="https://booking.webestica.com/assets/images/category/hotel/resort/05.jpg" className="w-100 h-75 rounded" alt="gallery-1"/>
                    </div>

                    <div className="col-12 col-xl-7 mt-md-5">
                        {/* <div className="gal-style-1 w-100 h-100"></div> */}
                        <img src="https://booking.webestica.com/assets/images/category/hotel/resort/04.jpg" className="gal-style w-100 h-100 mt-5 mt-md-0 rounded" alt=""/>
                    </div>
                </div>
            </div>

        </div>
    );
};