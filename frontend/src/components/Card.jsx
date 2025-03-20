import React from "react";

const Card = ({ image, title, description, colorClass }) => {
  return (
    <div className={`card ${colorClass}`} style={{ width: '100%', margin: '0', borderRadius: '0' }}>
      <img src={image} className="card-img-top" alt="Card image" />
      <div className="card-body" style={{ padding: '0' }}>
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <button className="btn btn-light" style={{ margin: '0' }}>
          Ver más
        </button>
      </div>
    </div>
  );
};

export default Card;
