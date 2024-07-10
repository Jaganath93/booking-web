import { faCircleXmark, faStar } from "@fortawesome/free-regular-svg-icons";
import { faMapPin, faWallet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const Story = ()=>{

    return(
        <div className="container pt-5">
            <div className="row">

                {/* Creating a dummy column to fix main column in center Starts Here */}
                <div className="col-1"></div>
                {/* Creating a dummy column to fix main column in center Ends Here */}

                <div className="col-12 col-xl-9 text-center mx-lg-4">
                    <h1 className="fw-bolder title">Here is a tribute to good life!</h1>
                    <p className="fs-5 text-muted">Size-like body someone had. Are conduct viewing boy minutes warrant the expense? Tolerably behavior may admit daughters offending her ask own. Praise effects wish change way and any wanted. Lively use looked latter regard had. Do he it part more last in. We understand that theory is important to build a solid foundation, we understand that theory alone isn't going to get the job done so that's why this is packed with practical hands-on examples that you can follow step by step.</p>
                </div>
            </div>
             
             <div className="container mx-5">
            <div className="row mt-5 px-lg-5 fw-bold">
                <div className="col-12 col-md-4 col-lg-3 fs-5 ms-0"><FontAwesomeIcon className="pe-2" icon={faStar} style={{color: "#FFD43B",}} /> Have High Rating</div>
                <div className="col-12 col-md-4 col-lg-3 fs-5"><FontAwesomeIcon className="pe-2" icon={faMapPin} style={{color: "#4420b1",}} />Best Locations</div>
                <div className="col-12 col-md-4 col-lg-3 fs-5"><FontAwesomeIcon className="pe-2" icon={faCircleXmark} style={{color: "#f54d4d",}} />Free Cancellation</div>
                <div className="col-12 col-md-4 col-lg-3 fs-5"><FontAwesomeIcon className="pe-2" icon={faWallet} style={{color: "#63E6BE",}} />Payment Options</div>
            </div>
            </div>


            <div className="container mt-5">
                <div className="row">
                    <div className="col col-md-3"></div>
                    <div className="col-3 col-md d-flex w-100 ms-5 ps-5 ps-md-0 ms-md-0"><p className="fs-1 fw-bolder text-dark">4.5</p>
                    {/* <div className="col"> */}

                        {/* Rating Star */}
                        <div className="flex-column ms-1">
                        <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      </div>
                        <span className=" text-muted">Clients Love Us!</span>
                        </div>
                        
                        </div>
                    {/* <div className="col"></div> */}
                    <div className="col ms-5 ms-md-0 ps-5 ps-md-0"><button className="btn btn-dark mt-2 rounded-5 fw-bold ms-md-0">Explore now</button></div>
                    {/* <div className="col-md-3"></div> */}
                </div>
            </div>
        </div>
    )
};