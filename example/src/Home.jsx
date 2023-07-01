import React from "react";
function Home() {
  return (
    <div className="container-fluid">
      <div className="row bg-blue">
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div className='row' style={{backgroundColor: "rgb(199,236,255)" }}>
              <div className='col-md-2'>

              </div>
              <div className='col-md-4'>
                <img src="firstimage.png" alt="" style={{ backgroundColor: "rgb(199,236,255)", width: "383px" }} />
              </div>
              <div className='col-md-4' style={{ marginTop: "100px" }}>
                <p id='discount'>
                  <h3 id='discountstyle' style={{ color: "rgb(37,119,253)", fontSize: "33px", fontWeight: "bold" }}>60% Discount</h3>
                  < div style={{ fontSize: "85px" }}><b><i >Winter</i></b></div>
                  <div style={{ fontSize: "81px", marginTop: "-36px" }}> <b><i >Collection</i></b></div>
                  <p><b><i>Best Clloction By 2020!</i></b></p>
                </p>
                <button type="button" class="btn btn-primary" style={{ borderRadius: "30px", marginTop: "10px", marginTop: "30px", width: "157px", height: "47px", marginBottom: "140px" }}>Shop Now</button>
              </div>
              <div className='col-md-2'>

              </div>
            </div>

          </div>
          <div class="carousel-item">
            <div className='row' style={{ backgroundColor: "#FFF7D8", width: "1349px", height: "617.6px" }}>
              <div className='col-md-2'>

              </div>
              <div className='col-md-4'>
                <img src="fifth.png" alt="" style={{ backgroundColor: "#FFF7D8", width: "225px" }} />
              </div>
              <div className='col-md-4' style={{ marginTop: "100px" }}>
                <p id='discount'>
                  <h3 id='discountstyle' style={{ color: "rgb(37,119,253)", fontSize: "33px", fontWeight: "bold" }}>60% Discount</h3>
                  < div style={{ fontSize: "85px" }}><b><i >Winter</i></b></div>
                  <div style={{ fontSize: "81px", marginTop: "-36px" }}> <b><i >Collection</i></b></div>
                  <p><b><i>Best Clloction By 2020!</i></b></p>
                </p>
                <button type="button" class="btn btn-primary" style={{ borderRadius: "30px", marginTop: "10px", marginTop: "30px", width: "157px", height: "47px", marginBottom: "140px" }}>Shop Now</button>
              </div>
              <div className='col-md-2'>

              </div>
            </div>

          </div>

          <div class="carousel-item">

            <div className='row' style={{ backgroundColor: "#F5F5F5", width: "1349px", height: "617.6px" }}>
              <div className='col-md-2'>

              </div>
              <div className='col-md-4'>
                <img src="secondimage.png" class="vert-move" alt="" style={{ backgroundColor: "#F5F5F5", width: "225px" }} />
              </div>
              <div className='col-md-4' style={{ marginTop: "100px" }}>
                <p id='discount'>
                  <h3 id='discountstyle' style={{ color: "rgb(37,119,253)", fontSize: "33px", fontWeight: "bold" }}>60% Discount</h3>
                  < div style={{ fontSize: "85px" }}><b><i >Summer</i></b></div>
                  <div style={{ fontSize: "81px", marginTop: "-36px" }}> <b><i >Collection</i></b></div>
                  <p><b><i>Best Clloction By 2020!</i></b></p>
                </p>
                <button type="button" class="btn btn-primary" style={{ borderRadius: "30px", marginTop: "10px", marginTop: "30px", width: "157px", height: "47px", marginBottom: "140px" }}>Shop Now</button>
              </div>
              <div className='col-md-2'>

              </div>
            </div>


          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      </div>



      <div className='row' >
        <div className='col-md-5'>

        </div>
        <div className='col-md-6' style={{ marginTop: "100px" }}>
          <p><b style={{ fontSize: "47px", fontFamily: "ui-sans-serif" }}>Shop By Category</b></p>
        </div>
        <div className='col-md-1'>

        </div>
      </div>

      <div>
        <div className='row'>
          {/* <div class="card" style={{ width: "444px", border: "none" }}>
            <img class="card-img-top" src="womenscloth.jpg" alt="Card image" />
            <div class="top-right"><h3><b>Owmen's</b></h3></div>
            <button className='top-right' style={{ borderRadius: "30px", backgroundColor: "#FFCE25", height: "42px", width: "143px", marginTop: "-3px" }}>Best New Deal's</button>
            <p className='top-right' style={{ marginTop: "-10px", fontFamily: "cursive", color: "#0A75FE", fontSize: "17px" }}> <b>New Collection</b> </p>
          </div> */}
      

          <div class="card" style={{ width: "444px", border: "none" }}>
            <img class="card-img-top" src="discount.jpg" alt="Card image" />
            <div class="top-right"><h3 style={{ fontFamily: "cursive", color: "#0A75FE", fontSize: "17px", marginLeft: "36px" }}><b>Discount!</b></h3>
              <h3><b>Winter Cloth</b></h3>
              <p><b style={{ marginLeft: "36px" }}>New Collection</b></p>
            </div>
          </div>


          <div class="card" style={{ width: "444px", border: "none" }}>
            <img class="card-img-top" src="womenscloth.jpg" alt="Card image" />
            <div class="top-right"><h3 style={{ fontFamily: "cursive", color: "#0A75FE", fontSize: "17px", marginLeft: "36px" }}><b>Discount!</b></h3>
              <h3><b>Winter Cloth</b></h3>
              <p><b style={{ marginLeft: "36px" }}>New Collection</b></p>
            </div>
          </div>


          <div class="card" style={{ width: "444px", border: "none" }}>
            <img class="card-img-top" src="mans.jpg" alt="Card image" />
            <div class="top-right"><h3 style={{ fontFamily: "cursive", color: "#0A75FE", fontSize: "17px", marginLeft: "36px" }}><b>Discount!</b></h3>
              <h3><b>Winter Cloth</b></h3>
              <p><b style={{ marginLeft: "36px" }}>New Collection</b></p>
            </div>
          </div>
          {/* <div class="card" style={{ width: "444px", border: "none" }}>
            <img class="card-img-top" src="mans.jpg" alt="Card image" />
            <div class="top-right"><h3><b>Man's Cloth</b></h3></div>
            <button className='top-right' style={{ borderRadius: "30px", backgroundColor: "#FFCE25", height: "42px", width: "143px", marginTop: "-3px" }}>Best New Deal's</button>
            <p className='top-right' style={{ marginTop: "-10px", fontFamily: "cursive", color: "#0A75FE", fontSize: "17px" }}> <b>New Collection</b> </p>
          </div> */}
        </div>
      </div>
      <div className='row' style={{ marginTop: "250px" }}>
        <div className='col-md-1'>


        </div>
        <div className='col-md-3'>

          <p><b style={{ fontSize: "47px", fontFamily: "ui-sans-serif", marginLeft: "-65px" }}>Latest Product</b></p>
        </div>
        <div className='col-md-4'>


        </div>
        <div className='col-md-1 all'>
          <p>All</p>
        </div>
        <div className='col-md-1 all1'>
          <p>New</p>
        </div>
        <div className='col-md-1 all2'>
          <p>Featured</p>
        </div>
        <div className='col-md-1 all3'>
          <p>Offer</p>
        </div>

      </div>
      <div className='row' style={{ marginTop: "-18px", }}>

        <div className='col-md-11'>
          < hr />
        </div>
        <div className='col-md-1'>

        </div>
      </div>

      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div className='row' style={{ marginTop: "80px" }}>


              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <div class="card" style={{ width: "360px", border: "none", marginLeft: "52px" }}>

                <img class="card-img-top" src="tshirt1.png" alt="Card image" />
                <button className='bttnn1' style={{ width: "66.2833px", marginTop: "-344px", marginLeft: "18px" }}>New</button>
                <div>
                  <div class="card-body" style={{ marginTop: "315px" }}>

                    <i className='fa fa-star-o' style={{ color: "#ffbc07", marginLeft: "111px" }}></i>
                    <i className='fa fa-star-o' style={{ color: "#ffbc07" }}></i>
                    <i className='fa fa-star-o' style={{ color: "#ffbc07" }}></i>
                    <i className='fa fa-star-o'></i>
                    <i className='fa fa-star-o'></i>
                    <p class="card-text gdwd">Green Dress With Details </p>
                    <a style={{ textDecoration: "none" }} href="#"><span style={{ color: "black", fontSize: "18px", fontWeight: "500px", marginLeft: "92px" }}>$40.00</span> &nbsp;<span style={{ color: "#ff003c", fontSize: "18px", fontWeight: "500px" }}>$60.00</span>  </a>
                  </div>
                </div>
              </div>

              <div class="card" style={{ width: "360px", border: "none", marginLeft: "9px" }}>
                <img class="card-img-top" src="track1.png" alt="Card image" />
                <div class="card-body">
                  <i className='fa fa-star-o' style={{ color: "#ffbc07", marginLeft: "111px" }}></i>
                  <i className='fa fa-star-o' style={{ color: "#ffbc07" }}></i>
                  <i className='fa fa-star-o' style={{ color: "#ffbc07" }}></i>
                  <i className='fa fa-star-o'></i>
                  <i className='fa fa-star-o'></i>
                  <p class="card-text gdwd">Green Dress With Details </p>
                  <a style={{ textDecoration: "none" }} href="#"><span style={{ color: "black", fontSize: "18px", fontWeight: "500px", marginLeft: "92px" }}>$40.00</span> &nbsp;<span style={{ color: "#ff003c", fontSize: "18px", fontWeight: "500px" }}>$60.00</span>  </a>
                </div>
              </div>
              <div class="card" style={{ width: "360px", border: "none", marginLeft: "9px" }}>


                <img class="card-img-top" src="jeansjacket.png" alt="Card image" />
                <button className='bttnn1' style={{ width: "66.2833px", marginTop: "-344px", marginLeft: "18px" }}>New</button>
                <div class="card-body" style={{ marginTop: "315px" }}>
                  <i className='fa fa-star-o' style={{ color: "#ffbc07", marginLeft: "111px" }}></i>
                  <i className='fa fa-star-o' style={{ color: "#ffbc07" }}></i>
                  <i className='fa fa-star-o' style={{ color: "#ffbc07" }}></i>
                  <i className='fa fa-star-o'></i>
                  <i className='fa fa-star-o'></i>
                  <p class="card-text gdwd"> Green Dress With Details </p>
                  <a style={{ textDecoration: "none" }} href="#"><span style={{ color: "black", fontSize: "18px", fontWeight: "500px", marginLeft: "92px" }}>$40.00</span> &nbsp;<span style={{ color: "#ff003c", fontSize: "18px", fontWeight: "500px" }}>$60.00</span>  </a>
                </div>
              </div>
            </div>

            <div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div class="carousel-item">
            <div className='row' style={{ marginTop: "80px" }}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <div class="card" style={{ width: "360px", border: "none", marginLeft: "52px" }}>

                <img class="card-img-top" src="shorts.png" alt="Card image" />

                <div>
                  <div class="card-body" style={{ marginTop: "-2px" }}>

                    <i className='fa fa-star-o' style={{ color: "#ffbc07", marginLeft: "111px" }}></i>
                    <i className='fa fa-star-o' style={{ color: "#ffbc07" }}></i>
                    <i className='fa fa-star-o' style={{ color: "#ffbc07" }}></i>
                    <i className='fa fa-star-o'></i>
                    <i className='fa fa-star-o'></i>
                    <p class="card-text gdwd">Green Dress With Details </p>
                    <a style={{ textDecoration: "none" }} href="#"><span style={{ color: "black", fontSize: "18px", fontWeight: "500px", marginLeft: "92px" }}>$40.00</span> &nbsp;<span style={{ color: "#ff003c", fontSize: "18px", fontWeight: "500px" }}>$60.00</span>  </a>
                  </div>
                </div>
              </div>

              <div class="card" style={{ width: "360px", border: "none", marginLeft: "9px" }}>
                <img class="card-img-top" src="tshirt.png" alt="Card image" />
                <div class="card-body">
                  <i className='fa fa-star-o' style={{ color: "#ffbc07", marginLeft: "111px" }}></i>
                  <i className='fa fa-star-o' style={{ color: "#ffbc07" }}></i>
                  <i className='fa fa-star-o' style={{ color: "#ffbc07" }}></i>
                  <i className='fa fa-star-o'></i>
                  <i className='fa fa-star-o'></i>
                  <p class="card-text gdwd">Green Dress With Details </p>
                  <a style={{ textDecoration: "none" }} href="#"><span style={{ color: "black", fontSize: "18px", fontWeight: "500px", marginLeft: "92px" }}>$40.00</span> &nbsp;<span style={{ color: "#ff003c", fontSize: "18px", fontWeight: "500px" }}>$60.00</span>  </a>
                </div>
              </div>
              <div class="card" style={{ width: "360px", border: "none", marginLeft: "9px" }}>


                <img class="card-img-top" src="sweater.png" alt="Card image" />
                <button className='bttnn1' style={{ width: "66.2833px", marginTop: "-344px", marginLeft: "18px" }}>New</button>
                <div class="card-body" style={{ marginTop: "315px" }}>
                  <i className='fa fa-star-o' style={{ color: "#ffbc07", marginLeft: "111px" }}></i>
                  <i className='fa fa-star-o' style={{ color: "#ffbc07" }}></i>
                  <i className='fa fa-star-o' style={{ color: "#ffbc07" }}></i>
                  <i className='fa fa-star-o'></i>
                  <i className='fa fa-star-o'></i>
                  <p class="card-text gdwd"> Green Dress With Details </p>
                  <a style={{ textDecoration: "none" }} href="#"><span style={{ color: "black", fontSize: "18px", fontWeight: "500px", marginLeft: "92px" }}>$40.00</span> &nbsp;<span style={{ color: "#ff003c", fontSize: "18px", fontWeight: "500px" }}>$60.00</span>  </a>
                </div>
              </div>


            </div>


            <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>

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

      <div className='row' style={{ marginTop: "80px" }}>


        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div class="card" style={{ width: "318px", border: "none", marginLeft: "52px" }}>

          <img class="card-img-top" src="shorts.png" alt="Card image" />
          <button className='bttnn1' style={{ width: "66.2833px", marginTop: "-344px", marginLeft: "18px" }}>New</button>
          <div>
            <div class="card-body" style={{ marginTop: "315px" }}>

              <i className='fa fa-star-o' style={{ color: "#ffbc07", marginLeft: "111px" }}></i>
              <i className='fa fa-star-o' style={{ color: "#ffbc07" }}></i>
              <i className='fa fa-star-o' style={{ color: "#ffbc07" }}></i>
              <i className='fa fa-star-o'></i>
              <i className='fa fa-star-o'></i>
              <p class="card-text gdwd">Green Dress With Details </p>
              <a style={{ textDecoration: "none" }} href="#"><span style={{ color: "black", fontSize: "18px", fontWeight: "500px", marginLeft: "92px" }}>$40.00</span> &nbsp;<span style={{ color: "#ff003c", fontSize: "18px", fontWeight: "500px" }}>$60.00</span>  </a>
            </div>
          </div>
        </div>

        <div class="card" style={{ width: "318px", border: "none", marginLeft: "9px" }}>
          <img class="card-img-top" src="tshirt.png" alt="Card image" />
          <div class="card-body">
            <i className='fa fa-star-o' style={{ color: "#ffbc07", marginLeft: "111px" }}></i>
            <i className='fa fa-star-o' style={{ color: "#ffbc07" }}></i>
            <i className='fa fa-star-o' style={{ color: "#ffbc07" }}></i>
            <i className='fa fa-star-o'></i>
            <i className='fa fa-star-o'></i>
            <p class="card-text gdwd">Green Dress With Details </p>
            <a style={{ textDecoration: "none" }} href="#"><span style={{ color: "black", fontSize: "18px", fontWeight: "500px", marginLeft: "92px" }}>$40.00</span> &nbsp;<span style={{ color: "#ff003c", fontSize: "18px", fontWeight: "500px" }}>$60.00</span>  </a>
          </div>
        </div>
        <div class="card" style={{ width: "318px", border: "none", marginLeft: "9px" }}>


          <img class="card-img-top" src="sweater.png" alt="Card image" />
          <button className='bttnn1' style={{ width: "66.2833px", marginTop: "-344px", marginLeft: "18px" }}>New</button>
          <div class="card-body" style={{ marginTop: "315px" }}>
            <i className='fa fa-star-o' style={{ color: "#ffbc07", marginLeft: "111px" }}></i>
            <i className='fa fa-star-o' style={{ color: "#ffbc07" }}></i>
            <i className='fa fa-star-o' style={{ color: "#ffbc07" }}></i>
            <i className='fa fa-star-o'></i>
            <i className='fa fa-star-o'></i>
            <p class="card-text gdwd"> Green Dress With Details </p>
            <a style={{ textDecoration: "none" }} href="#"><span style={{ color: "black", fontSize: "18px", fontWeight: "500px", marginLeft: "92px" }}>$40.00</span> &nbsp;<span style={{ color: "#ff003c", fontSize: "18px", fontWeight: "500px" }}>$60.00</span>  </a>
          </div>
        </div>
      </div>

      <div className='row' style={{ backgroundColor: "#FFF7D8", marginTop: "240px", height: "525px" }}>
        <div className='col-md-2'>

        </div>
        <div className='col-md-2'>
          <img src="secondimage.png" alt="" style={{ backgroundColor: "", width: "225px", marginTop: "-119px", height: "643px" }} />
        </div>
        <div className='col-md-8' style={{ marginTop: "100px" }}>
          <div className='row'>
            <div className='col-md-12'>
              <p id='secondimage1'>
                < div style={{ fontSize: "55px", }}><b><i >Find The Best Product</i></b></div>
                <div style={{ fontSize: "55px", marginTop: "-8px" }}> <b><i >From Our Shop</i></b></div>
                <p style={{ marginTop: "15px" }}><b><i >Designers who are interesten creating state ofthe.</i></b></p>
              </p>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6'>
              <button type="button" class="" style={{ borderRadius: "30px", marginTop: "30px", width: "157px", height: "47px", marginBottom: "140px", backgroundColor: "black", marginLeft: "68px", color: "white" }}>Shop Now</button>

            </div>
            <div className='col-md-6' >
              <img id='secondimage2' src="secondimage2.png" alt="" style={{ marginLeft: "80px" }} />
            </div>
          </div>

        </div>


        <div className='col-md-2'>

        </div>
      </div>


      <div className='row' style={{ marginTop: "200px" }}>
        <div className='col-md-4'>
          <div className='row'>
            <div className='col-md-2'>

            </div>
            <div className='col-md-10' style={{ marginTop: "115px" }}>
              <p><b style={{ fontSize: "47px", fontFamily: "", }} className="bestcollection">Best Collection</b></p>
            </div>
            <div className='col-md-2'>

            </div>
            <div className='col-md-10' style={{ marginTop: "-33px" }}>
              <p><b style={{ fontSize: "47px", fontFamily: "ui-sans-serif" }} className="bestcollection">Of  This Month</b></p>
            </div>
            <div className='col-md-2'>

            </div>
            <div className='col-md-10'>
              <p><b style={{ fontFamily: "ui-sans-serif" }} className="bestcollection">Designers who are interesten crea.</b></p>
            </div>
            <div className='col-md-2'>

            </div>
            <div className='col-md-10' style={{ marginTop: "40px" }}>
              <button type="button" class="" style={{ borderRadius: "30px", marginTop: "", width: "157px", height: "47px", marginBottom: "140px", backgroundColor: "black", color: "white" }}>Shop Now</button>
            </div>
            <div className='col-md-2'>

            </div>
            <div className='col-md-10'>
              <img src="thirdimage1.png" alt="" />
            </div>
          </div>

        </div>
        <div className='col-md-8'>
          <div className='row'> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div className='col-md-6'>
              <img src="thirdimage.png" alt="" style={{ marginLeft: "33px" }} />
            </div> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div className='col-md-3'>
              <div className='row' style={{ marginTop: "289px", marginLeft: "0px" }}>
                <div className='col-md-12'>
                  <p>Menz Winter</p>
                  <p>Jacket</p>
                </div>
              </div>
              <div className='row' style={{ marginTop: "77px", marginLeft: "0px" }}>
                <div className='col-md-12'>
                  <p >Menz Winter</p>
                  <p>Jacket</p>
                </div>
              </div>
              <div className='row' style={{ marginTop: "85px", marginLeft: "0px" }}>
                <div className='col-md-12'>
                  <p >Menz Winter</p>
                  <p>Jacket</p>
                </div>
              </div>
            </div>
            <div className='col-md-3' style={{ marginLeft: "-103px" }}>
              <div className='row' style={{ marginTop: "232px", marginLeft: "0px" }}>
                <div className='col-md-12'>
                  <img src="thirdimage2.png" alt="" />
                </div>
              </div>
              <div className='row' style={{ marginTop: "36px", marginLeft: "0px" }}>
                <div className='col-md-12'>
                  <img src="thirdimage3.png" alt="" />
                </div>
              </div>
              <div className='row' style={{ marginTop: "36px", marginLeft: "0px" }}>
                <div className='col-md-12'>
                  <img src="thirdimage4.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='row' style={{ marginTop: "235px", width: "" }}>
        <div className='col-md-1'>

        </div>
        <div className='col-md-10' style={{ backgroundColor: "#DDF2FF", height: "340px" }}>

          <div className='row' style={{ marginTop: "80px" }}>
            <div className='col-md-1' style={{ marginTop: "20px" }}>

            </div>

            <div className='col-md-11'>
              <p><b style={{ fontSize: "47px" }} className="bestcollection">Get Our</b></p>

            </div>

          </div>
          <div className='row' style={{ marginTop: "-32px" }}>
            <div className='col-md-1'>

            </div>

            <div className='col-md-11'>

              <p><b style={{ fontSize: "47px", fontFamily: "", }} className="bestcollection">Latest Offers News</b></p>

            </div>

          </div>
          <div className='row' style={{ marginTop: "-6px" }}>
            <div className='col-md-1'>

            </div>

            <div className='col-md-11'>

              <p><b style={{ fontSize: "20px", fontFamily: "", }} className="bestcollection">Subscribe News Latter</b></p>

            </div>

          </div>
        </div>
        <div className='col-md-1'>

        </div>

      </div>
      <div className='row' style={{ marginTop: "-186px" }}>
        <div className='col-md-6'>

        </div>

        <div className='col-md-6'>
          <input type="text" placeholder='type here' style={{ width: "358px", height: "60px", borderRadius: "30px", paddingLeft: "35px", border: "none" }} />
        </div>
      </div>
      <div className='row' style={{ marginTop: "-61px" }}>
        <div className='col-md-8'>

        </div>

        <div className='col-md-4'>
          <button style={{ width: "163px", height: "61px", borderRadius: "30px", paddingLeft: "35px", backgroundColor: "#0D6EFD", border: "none" }}>Shop Now</button>
        </div>
      </div>
      <div className='row' style={{ marginTop: "330px" }}>
        <div className='col-md-1'>

        </div>
        <div className='col-md-3'>
          <i style={{ fontSize: "40px" }} className='fa fa-cube'></i><br /><br />
          <h5><b style={{ fontFamily: "cursive" }}>Free Shipping Method</b></h5>
          <h6 className='freeshipping'>aorem ixpsacdolor sit </h6>
          <h6 className='freeshipping'>ameasecur adipisicing elitsf  </h6>
          <h6 className='freeshipping'>edasd. </h6>

        </div>
        <div className='col-md-1'>

        </div>
        <div className='col-md-3'>
          <i style={{ fontSize: "40px" }} className='fa fa-unlock-alt'></i><br /><br />
          <h5><b style={{ fontFamily: "cursive" }}>Secure Payment System</b></h5>
          <h6 className='freeshipping'>aorem ixpsacdolor sit </h6>
          <h6 className='freeshipping'>ameasecur adipisicing elitsf  </h6>
          <h6 className='freeshipping'>edasd. </h6>
        </div>
        <div className='col-md-1'>

        </div>
        <div className='col-md-3'>
          <i style={{ fontSize: "40px" }} className='fa fa-refresh'></i><br /><br />
          <h5><b style={{ fontFamily: "cursive" }}>Secure Payment System</b></h5>
          <h6 className='freeshipping'>aorem ixpsacdolor sit </h6>
          <h6 className='freeshipping'>ameasecur adipisicing elitsf  </h6>
          <h6 className='freeshipping'>edasd. </h6>
        </div>

      </div>&nbsp;&nbsp;&nbsp;
      <div className='row' style={{ marginTop: "165px" }}>
        <div className='col-md-1'>

        </div>
        <div className='col-md-2'>
          <img src="fourthimage.png" alt="" style={{ marginLeft: "-76px" }} />
        </div>
        <div className='col-md-2'>
          <img src="fourthimage1.png" alt="" />
        </div>
        <div className='col-md-2'>
          <img src="fourthimage2.png" alt="" />
        </div>
        <div className='col-md-2'>
          <img src="fourthimage4.png" alt="" />
        </div>
        <div className='col-md-3'>
          <img src="fourthimage5.png" alt="" width="325px" height="348px" />
        </div>

      </div>

    </div>
  )
}
export default Home