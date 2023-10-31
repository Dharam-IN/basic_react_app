import React from 'react';

function Featured_() {
  return (
    <div className="my-5">
      <div className="container px-4 py-4">
        <div className="card bg-black text-white shadow-lg">
          <h5 className="card-header">Featured Courses</h5>
          <div className="card-body">
            <div className="container">
              <div className="row d-flex justify-content-around">
                <div className="col-md-3 col-sm-6 col-12">
                  <div className="card text-black move-up mb-3">
                    <div className="card-header">Web Development</div>
                    <div className="card-body">
                      <h5 className="card-title">Front End + Backend</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 col-12">
                  <div className="card text-black move-up mb-3">
                    <div className="card-header">Web3.0</div>
                    <div className="card-body">
                      <h5 className="card-title">Web3 and Tools</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 col-12">
                  <div className="card text-black move-up mb-3">
                    <div className="card-header">Java Masterclass</div>
                    <div className="card-body">
                      <h5 className="card-title">Beginner Course</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 col-12">
                  <div className="card text-black move-up mb-3">
                    <div className="card-header">Python</div>
                    <div className="card-body">
                      <h5 className="card-title">Python AI</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and make up the bulk of the card's content.
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
  );
}

export default Featured_;
