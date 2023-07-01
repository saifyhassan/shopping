import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from './Home'
import Contact from './Contact'
import Login from './Login'
import About from './About'
import Shoppingcart from './Shoppingcart'
import Productcheckout from './Productcheckout'
import Productlist from './Productlist'
import Productdetailes from './Productdetailes'
import Register from './Register'
import Dashboard from './Dashboard'
import Confirmation from './Confirmation'
import Admindash from './Dashadmin'
import Addproduct from './Addproductadmin'
import Addproductdetailes from './Addproducttable'
import Editadmin from './Editproductadmin'
import Registertable from './Registertable'
import Wishlist from './Wishlist'
import Productlisttable from './Productlisttable'
function Header2() {
  return (
    <div>
      <BrowserRouter>

        <div class="container-fluid">
          <div className='row nav1'>

            <div className='col-md-1' id='estore'>
              <a class="navbar-brand" href="#"><h3><b style={{ marginLeft: "40px" }}>Estore</b></h3></a>
            </div>
            <div className='col-md-1'>

            </div>

            <div className='col-md-5'>
              <nav class="navbar navbar-expand-lg navbar-light ">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item ml">
                      <Link class="nav-link active" aria-current="page" to=""><b>Home</b> </Link>
                    </li>
                  
                   
                     <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <b>Latest</b>
                      </a>
                      <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><Link class="dropdown-item" to="/productlist">Product List</Link></li>
                        <li><Link class="dropdown-item" to="/productdetailes">Product Details</Link></li>
                      </ul>
                    </li> 
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle font-weight-normal active" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <b>Blog</b>
                      </a>
                      <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><Link class="dropdown-item" to="/blog">Blog</Link></li>
                        <li><Link class="dropdown-item" to="/blogdetailes">Blog details</Link></li>
                      </ul>
                    </li>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <b>Pages</b>
                      </a>
                      <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><Link class="dropdown-item" to="/login1">Login</Link></li>
                        <li><Link class="dropdown-item" to="/about1">About</Link></li>
                        <li><Link class="dropdown-item" to="/shoppingcart1">Shopping Cart</Link></li>
                        <li><Link class="dropdown-item" to="/productcheckout1">Product Checkout</Link></li>
                        <li><Link class="dropdown-item" to="/wishlist">Wish List</Link></li>
                        {/* <li><hr class="dropdown-divider" /></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li> */}
                      </ul>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link active" aria-current="page" to="/contact"><b>Contact</b> </Link>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link active" aria-current="page" to="/dash"><b>Dash1</b> </Link>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link active" aria-current="page" to="/dash2"><b>Dash2</b> </Link>
                    </li>
                  
                  </ul>
                  <form class="d-flex search1" style={{ marginLeft: "61px", width: "187px" }}>
                    <input class="form-control me-2" type="search" placeholder="Search" style={{ borderRadius: "30px", borderColor: "#EEEEEE" }} aria-label="Search" />

                  </form>
                </div>
              </nav>
            </div>

            <div id='heart1'>
              <div className='col-md-1'>
               
                <Link to="/wishlist">  <i className='fa fa-heart-o'></i></Link>
              </div>
            </div>
            <div className='col-md-1'>

            </div>
            <div className='col-md-1' id='cart1'>
             <Link to="/shoppingcart1"> <i className='fa fa-shopping-cart'></i></Link>
            </div>
            <div className='col-md-1'>
            <Link to="login"><button type="button" class="btn btn-primary active" style={{ marginLeft: "35px", borderRadius: "30px", borderColor: "#EEEEEE", width: "96px", marginTop: "7px" }}>Sign in</button></Link> 
            </div>
          </div>
        </div>
      <Routes>
          <Route path="" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login1" element={<Login />} />
          <Route path="/about1" element={<About />} />
          <Route path="/shoppingcart1" element={<Shoppingcart />} />
          <Route path="/productcheckout1" element={<Productcheckout />} />
          
          <Route path="/productdetailes" element={<Productdetailes />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/productlist" element={<Productlist />} />
          {/* <Route path="/productlist" element={<Productlist />} />
          <Route path="producttable" element={<Productlisttable />} />
          </Route> */}
          
            <Route path="/dash" element={<Dashboard />} >
               <Route path="confirmation" element={<Confirmation />} />
               <Route path="login" element={<Login />} />
               <Route path="shoppingcart1" element={<Shoppingcart />} />
               <Route path="productcheckout1" element={<Productcheckout />} />
               <Route path="productlist" element={<Productlist />} />
            </Route>


            <Route path="/dash2" element={<Admindash />} >
               <Route path="addproduct" element={<Addproduct />} />
               <Route path="addproductdetailes" element={<Addproductdetailes />} />
               <Route path="editadminform/:id" element={<Editadmin />} />

               <Route path="userrecords" element={<Registertable />} >
               <Route path="usertable/:id" element={<Registertable/>}/>
               </Route>
            </Route>
        </Routes>
      </BrowserRouter>
    </div>

  )
}
export default Header2