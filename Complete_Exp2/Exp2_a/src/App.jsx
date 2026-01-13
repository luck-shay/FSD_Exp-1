import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
<div className="position-absolute top-50 start-50 translate-middle">
  <div className="card p-4" style={{ width: "350px" }}>
        <h4 className="text-center mb-3">Login Form</h4>

        <form>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" placeholder="Enter email" />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" placeholder="Enter password" />
          </div>

          <button className="btn btn-primary w-100">Login</button>
        </form>
      </div>
    </div>
  );
}

export default App;
