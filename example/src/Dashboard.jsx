import React from "react";
import { Outlet,Link } from "react-router-dom";
var ss = {
    backgroundColor: "rgb(52,58,64)",
    color: "rgb(147,152,159)"
}
function Dashboard() {
    return (
        <div>

            <div class="container-fluid">
                <div className="row bg-dark">

                    <div className="col-md-12 ">

                        <nav class="navbar navbar-expand-sm navbar-dark">

                            <img src="logo1.png" alt="" width="30px" height="30px" />
                            <button
                                class="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#mynavbar"
                            >
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="mynavbar">
                                <ul class="right1 navbar-nav">
                                    <li class="nav-item dropdown">
                                        <a
                                            class="nav-link dropdown-toggle active "
                                            href="#"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            INDIA
                                        </a>
                                        <ul class="dropdown-menu ">
                                            <li>
                                                <a class="dropdown-item" href="#">
                                                    Action
                                                </a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item" href="#">
                                                    Another action
                                                </a>
                                            </li>
                                            <li>
                                                <hr class="dropdown-divider" />
                                            </li>
                                            <li>
                                                <a class="dropdown-item" href="#">
                                                    Something else here
                                                </a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item" href="#">
                                                    Something else here
                                                </a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li class="nav-item">
                                        <a class="nav-link active" href="javascript:void(0)">
                                            +777 2345 7886
                                        </a>
                                    </li>
                                </ul>
                              
                            </div>

                        </nav>
                    </div>
                </div>
          
            <div className="row">
                <div className="col-md-2">
                    <div class="list-group " >


                       

                        <Link  to="login" class="list-group-item list-group-item-action list-group-item-dark list1 form-select" style={ss}>Login</Link>
                        <Link to="productlist" class="list-group-item list-group-item-action list-group-item-dark list1 form-select" style={ss}>Wishlist</Link>
                      
                        <Link to="shoppingcart1" class="list-group-item list-group-item-action list-group-item-dark list1 form-select" style={ss}>Cart</Link>
                        <Link to="productcheckout1" class="list-group-item list-group-item-action list-group-item-dark list1 form-select" style={ss}>Checkout</Link>
                        <Link to="confirmation" class="list-group-item list-group-item-action list-group-item-dark list1 form-select" style={ss}>Confirmation</Link>

                        
                     

                    </div>
                </div>
                <div className="col-md-10">
                    
                </div>

            </div>
            <div className="row" style={{marginTop:"20px"}}>
                    <div className="col-md-12">
                    <Outlet/>
                    </div>
            </div>
            </div>

        </div>
    )
}
export default Dashboard