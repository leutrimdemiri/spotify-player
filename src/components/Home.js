import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import "../Home.css";
import { NavLink } from "react-router-dom";

function Home() {
    return (
    <>
     <Nav />
      <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-3 px-lg-4 py-lg-4">

          <section class="intro">
            <div class="intro-content">
                <div class="container">
                  <div class="row">
                    <div class="col-md-12">
                      <h2>RapCaviar</h2>
                      <p>Hot Shot, Confessions, Beyonce, Usher The-Dream, Mario, Akif, Princeton Michael, The Weeknd...</p>
                      <div>
                        <button type="button" class="btn btn-white rounded-pill">Play</button>
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
                  <h5>Indie</h5>
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

      </main>
     <Footer/>
    </>
    );
  }
  
  export default Home;
  