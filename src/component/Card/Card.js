import React from 'react';

const Card = ({product}) => {
    return (
        <div className="card m-4 bg-primary text-white p-5 rounded">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Hello{product.name}</h5>
                <p className="card-text">Your Age: {product.age}</p>
            </div>
        </div>
    );
};

export default Card;