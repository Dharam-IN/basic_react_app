import React from 'react';
import '../assets/css/style.css'

function Testimonials() {
  return (
    <>
        <section className="client pt-3 pb-5">
      <div className="container">
        <div className="row text-center">
          <div className="col-12">
            <h1 className="display-3 fw-bold text-white">Testimonials</h1>
            <hr className="bg-white mb-4 mt-0 d-inline-block mx-auto" style={{ width: '100px', height: '3px' }} />
            <p className="p-text text-white">What our clients are saying</p>
          </div>
        </div>
        <div className="row align-items-md-center text-white">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row p-4">
                    <div className="t-card">
                      <i className="fa fa-quote-left" aria-hidden="true"></i>
                      <p className="lh-lg">Lorem Ipsum ist ein einfacher 
                        Lorem Ipsum ist in der Industrie bereits der 
                        iste natus error sit voluptatem accusantium 
                        totam rem aperiam, eaque ipsa quae ab illo 
                        architecto beatae vitae dicta sunt explicabo.</p>
                      <i className="fa fa-quote-right" aria-hidden="true"></i><br/>
                    </div>
                    <div className="row">                    
                      <div className="col-sm-2 pt-3 imagediv">
                        <img src="https://shorturl.at/flvU4" className="rounded-circle img-responsive img-fluid" alt="Client 1" />
                      </div>                    
                      <div className="col-sm-10">
                        <div className="arrow-down d-none d-lg-block"></div>
                        <h4><strong>Jack Mathews</strong></h4>
                        <p className="testimonial_subtitle">
                          <span>Global Brand Manager</span><br />
                          <span>Artc Cafe</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row p-4">
                    <div className="t-card">
                      <i className="fa fa-quote-left" aria-hidden="true"></i>
                      <p className="lh-lg">Lorem Ipsum ist ein einfacher
                        Lorem Ipsum ist in der Industrie bereits der
                        perspiciatis unde omnis iste natus error sit
                        laudantium, totam rem aperiam, eaque ipsa quae
                        architecto beatae vitae dicta sunt</p>
                      <i className="fa fa-quote-right" aria-hidden="true"></i><br/>
                    </div>
                    <div className="row">
                      <div className="col-sm-2 pt-4 imagediv">
                        <img src="https://shorturl.at/flvU4" className="rounded-circle img-responsive img-fluid" alt="Client 2" />
                      </div>
                      <div className="col-sm-10">
                        <div className="arrow-down d-none d-lg-block"></div>
                        <h4><strong>Esther Zawadi</strong></h4>
                        <p className="testimonial_subtitle">
                          <span>Digital Strategist</span><br />
                          <span>Vaxa digital</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row p-4">
                    <div className="t-card">
                      <i className="fa fa-quote-left" aria-hidden="true"></i>
                      <p className="lh-lg">Lorem Ipsum ist ein einfacher Demo-Text für die Print- und Schriftindustrie. 
                        Lorem Ipsum ist in der Industrie bereits der Standard Demo-Text "Sed ut .</p>
                      <i className="fa fa-quote-right" aria-hidden="true"></i><br/>
                    </div>
                    <div className="row text-lg-start">
                      <div className="col-sm-2 pt-4 imagediv align-items-center">
                        <img src="https://shorturl.at/flvU4" className="rounded-circle img-responsive img-fluid" alt="Client 3" />
                      </div>
                      <div className="col-sm-10">
                        <div className="arrow-down d-none d-md-block"></div>
                        <h4><strong>Patrick Muriungi</strong></h4>
                        <p className="testimonial_subtitle">
                          <span>Web Technologist</span><br />
                          <span>Vaxa digital</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Testimonials;
