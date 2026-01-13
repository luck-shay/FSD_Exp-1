import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";

function App() {
  const cards = [
    { title: "React", text: "JavaScript library for UI" },
    { title: "Bootstrap", text: "CSS framework for styling" },
    { title: "Node.js", text: "JavaScript runtime" },
    { title: "MongoDB", text: "NoSQL database" }
  ];

  return (
<div className="position-absolute top-50 start-50 translate-middle">
      <h2 className="text-center mb-4">Card Based Layout</h2>

      <div className="row">
        {cards.map((card, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div className="card text-center">
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.text}</p>
                <button className="btn btn-primary">Learn More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;