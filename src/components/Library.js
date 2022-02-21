import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";

function Library() {
    return (
      <>
       <Nav />
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">


        <section className="content-title mb-3">
              <h4>Your Library</h4>
             </section>


            <div className="row">
              <div className="col-6 col-md-3 col-lg-3">
              <NavLink  to={'/'}>
                  <div class="card">
                  <img class="card-img" src="https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/39/f1/f7/39f1f73d-b411-b238-1a39-3727a3972acf/source/600x600bb.jpg" alt="Card image cap"/>
                  <div class="card-body">
                    <h5>FREE 6LACK</h5>
                    <p>2016 &bull; Album</p>
                  </div>
                </div>
              </NavLink>
              </div>

              <div className="col-6 col-md-3 col-lg-3">
              <NavLink  to={'/'}>
                  <div class="card">
                  <img class="card-img" src="https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/7e/fe/79/7efe7933-83d1-2a72-1f2e-8920142e1413/source/600x600bb.jpg" alt="Card image cap"/>
                  <div class="card-body">
                    <h5>Starboy</h5>
                    <p>2016 &bull; Album</p>
                  </div>
                </div>
              </NavLink>
              </div>

              <div className="col-6 col-md-3 col-lg-3">
              <NavLink  to={'/'}>
                  <div class="card">
                  <img class="card-img" src="https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/7e/fe/79/7efe7933-83d1-2a72-1f2e-8920142e1413/source/600x600bb.jpg" alt="Card image cap"/>
                  <div class="card-body">
                    <h5>Starboy</h5>
                    <p>2016 &bull; Album</p>
                  </div>
                </div>
              </NavLink>
              </div>


              <div className="col-6 col-md-3 col-lg-3">
              <NavLink  to={'/'}>
                  <div class="card">
                  <img class="card-img" src="https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/7e/fe/79/7efe7933-83d1-2a72-1f2e-8920142e1413/source/600x600bb.jpg" alt="Card image cap"/>
                  <div class="card-body">
                    <h5>Starboy</h5>
                    <p>2016 &bull; Album</p>
                  </div>
                </div>
              </NavLink>
              </div>
              </div>

        </main>
        <Footer/>
      </>
    );
  }
  
  export default Library;
  