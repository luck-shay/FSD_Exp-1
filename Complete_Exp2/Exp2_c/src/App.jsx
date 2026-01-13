import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";

function App() {
  return (
    <>
    <div className="position-absolute top-50 start-50 translate-middle">
<nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">MyApp</a>

    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navBar"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navBar">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link active" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>


      <div className="container mt-5 text-center">
        <h2>Welcome to MyApp</h2>
        <p>This page uses a responsive Bootstrap Navigation Bar.</p>
      </div>
      </div>
    </>
  );
}

export default App;