
export const Discover = ()=>{

    return(
        <div className="container mb-5">
            <div className="row">

                {/* Creating a dummy column to fix main column in center Starts Here */}
                <div className="col-2 d-none d-xl-block"></div>
                {/* Creating a dummy column to fix main column in center Ends Here */}


                <div className="col-12 col-xl-7 text-center text-white py-xl-5 my-xl-5">
                    <h1 className="display-2 display-md--1 fw-bolder text-center opacity-100">A World of Luxury Awaits You</h1>
                    <h5 className="fw-bold fw-md-bolder mt-3 opacity-100">Discover a New Look of Luxury Resorts</h5>
                    <button className="btn btn-dark mt-2 rounded-5 fw-bold opacity-100">Discover More</button>
                </div>
            </div>
        </div>
    );
};