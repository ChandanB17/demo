import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className="container-fluid home-container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h1 className="display-4">Welcome to Our Education Platform</h1>
            <p className="lead">Learn and grow with our wide range of courses!</p>
            <div className="btn-group">
              <Link className="btn btn-primary btn-lg" to="/courses">Explore Courses</Link>
              <Link className="btn btn-secondary btn-lg" to="/contact">About Us</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

