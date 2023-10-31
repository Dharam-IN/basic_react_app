import React from 'react';
import image1 from '../assets/images/slider1.jpg';
import image2 from '../assets/images/slider2.jpg';
import image3 from '../assets/images/slider3.jpg';

export default function Service() {
  return (
    <div>
        <section className='py-5'>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center pb-3">
                        <h3>Our Services</h3>
                    </div>
                </div>
                <div className="row gy-4 gy-sm-0 service_row">
                    <div className="col-md-4 col-sm-6 col-12">
                        <div class="card">
                            <img src={image1} class="card-img-top" alt="image"/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-12">
                        <div class="card">
                            <img src={image2} class="card-img-top" alt="image"/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-12">
                        <div class="card">
                            <img src={image3} class="card-img-top" alt="image"/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
