import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row mt-5 pagename">
          <h1>Home</h1>
        </div>
        <div className="row mt-5">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">Assigment 1</h3>

                <Link to="/login" className="card-link">
                  Explore
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">Assigment 2</h3>

                <Link to="/products" className="card-link">
                  Explore
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
