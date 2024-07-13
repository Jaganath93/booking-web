import { RoomSlider } from "./RoomSlider";


export const Rooms = ()=>{

    return(
        <div className="container-fluid">
        <div className="container-fluid">
            <div className="row">
                <div className="col-6 text-center">
                <h1 className="title fw-bold ">Our Favorite Rooms</h1>
                </div>
                <div className="col d-none d-md-block"></div>
                <div className="col">
                <button className="btn btn-dark mt-2 rounded-5 fw-bold">See all rooms</button>
                </div>
            </div>

        </div>
        <div className="col-12 mt-5 ms-5 me-5 pe-5">
            <RoomSlider/>
        </div>
        </div>
    );
};