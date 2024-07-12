import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faBars, faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { data } from "../../data";
import { useState } from "react";
import { Discover } from "./Discover";
import { SideDrawer } from "./SideDrawer";

export const NavBar = ()=>{

    const [showList, setShowList] = useState(false);
    const [selected, setSelected] = useState(null);
    const [chevron, setChevron] = useState(false);

    const handleNav= (id,lists)=> {
        setShowList(!showList);
        setSelected(id);
        if(lists.length>0) setChevron(true)
            else setChevron(false)
    };


    return(
        <div className="header-section">
            <div role="img">
        <div className="container-fluid p-0 p-md-5 pt-4">
            <div className="row">

             {/* Booking Logo Starts Here  */}
           <div className="col">
           <img src="https://booking.webestica.com/assets/images/logo-light.svg" className="w-25 img-fluid" alt="logo"/>
           </div>
           {/* Booking Logo Ends Here  */}



           {/* NavBar Col Starts Here*/}
           <div className="col-6 d-none d-xl-block">
            <div className={`d-flex justify-content-around pt-2 px-lg-0 px-xxl-5 fw-bold d-none d-xl-flex`}>
             
                {data.map((dt,i)=>(
                    <span className={`${selected && selected == dt.id? "nav-color" : "text-white"}`} key={i} onClick={()=>handleNav(dt.id,dt.lists)} role="button">
                        {dt.name}{dt.lists.length>0 ? (showList && chevron? <FontAwesomeIcon icon={faChevronUp} size="xs" className={`${selected && selected == dt.id? "nav-color" : "text-white"} ms-1`}/> : <FontAwesomeIcon icon={faChevronDown} size="xs"  className={`${selected && selected == dt.id ? "nav-color" : "text-white"} ms-1`}/>) : ""}
                        </span>
                ))}
            </div>
           </div>
           {/* NavBar Col Ends Here*/}




           {/* Button Col Starts Here*/}
           <div className="col d-flex d-xl-block justify-content-end">

            {/* NavBar Col with Menu Icon for Small Devices Starts Here*/}
           <div className="d-block d-xl-none me-2">
           <FontAwesomeIcon icon={faBars} size="2xl" style={{color: "#f7f7f7"}} role="button"/>
           </div>
           {/* NavBar Col with Menu Icon for Small Devices Ends Here*/}


            <div className="d-flex justify-content-end pt-xl-2">
            <button type="button" className="header-btn fw-bold rounded me-0" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><FontAwesomeIcon icon={faCalendar} style={{color: "#f2f2f2"}} className="me-0 me-md-2"/>Book a Stay</button>
            </div>
           </div>
           {/* Button Col Ends Here*/}


           {/* Side Drawer section Starts Here */}
           <>
              <SideDrawer/> 
           </>
           {/* Side Drawer section Ends Here */}

            </div>
        </div>

          {/* Title Starts Here!!! */}
          <Discover/>
           {/* Title Ends Here!!! */}


           {/* Increasing bg Image height using opacity Starts Here */}
           <div className="text-muted opacity-hidden"><span>dhcdcd</span></div>
           <div className="text-muted opacity-hidden"><span>dhcdcd</span></div>
           {/* <div className="text-muted opacity-hidden"><span>dhcdcd</span></div> */}
           {/* Increasing bg Image height using opacity Ends Here */}
           
           



        </div>
        </div>
    );
}