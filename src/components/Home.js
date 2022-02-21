import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import "../Home.css";
import { NavLink } from "react-router-dom";

function Home() {
    return (
    <>
     <Nav />
      <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-3 px-lg-4">

          <section class="circle">
            <div class="circle-content">
                <div class="container">
                  <div class="row">
                    <div class="col-md-6 intro-info order-md-first order-last">
                      <h2>R&B Hits</h2>
                      <p>Hot Shot, Confessions, Beyonce, Usher The-Dream, Mario, Akif, Princeton Michael, The Weeknd...</p>
                      <div>
                        <button type="button" class="btn btn-white btn-md rounded-pill">GET SPOTIFY FREE</button>
                      </div>
                    </div>

                  </div>
                </div>
            </div>
          </section>
        
            <section className="content-title">
                <h4>Browse</h4>
                <p className="content-description">Explore by genre and mood</p>
            </section>

            <div className="row">
              <div className="col-6 col-md-3 col-lg-3">
                <div className="genre-cover card-1">
                  <h5>Rap</h5>
                </div>
              </div>
              <div className="col-6 col-md-3 col-lg-3">
                <div className="genre-cover card-2">
                  <h5 className="text-dark">Indie</h5>
                </div>
              </div>
              <div className="col-6 col-md-3 col-lg-3">
                <div className="genre-cover card-3">
                  <h5>Pop</h5>
                </div>
              </div>
              <div className="col-6 col-md-3 col-lg-3">
                <div className="genre-cover card-4">
                  <h5>Rock</h5>
                </div>
              </div>
            </div>


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
          <div style={{
            marginTop: '150px',
          }}></div>

      </main>
     <Footer/>
    </>
    );
  }
  
  export default Home;
  