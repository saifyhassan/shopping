import React from "react";
 import { Link } from "react-router-dom";
function Header1() {
  return (
    <div>
      <div class="container-fluid" id="toparrow">
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
                <ul class="navbar-nav ms-auto  ">
                  <li class="navbar-ms-auto nav-item">
                   <a class="  nav-link active">My Account</a>
                  </li>

                  <li class="navbar-ms-auto nav-item">
                    <a class="  nav-link active">Wish List</a>
                  </li>

                  <li class="navbar-ms-auto nav-item">
                    <a class="  nav-link active">Shopping</a>
                  </li>

                  <li class="navbar-ms-auto nav-item">
                    <a class="  nav-link active">Cart</a>
                  </li>

                  <li class="navbar-ms-auto nav-item">
                    <a class="  nav-link active">Checkout</a>
                  </li>
                </ul>
              </div>
          
            </nav>
          </div>
        </div>
      </div>

         </div>
  )
}

export default Header1;
