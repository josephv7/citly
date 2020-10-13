import React from "react";

const Card = ({ children, title }) => {
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
          {children}
        </div>
      </div>
    </div>
  );
};

export default Card;
