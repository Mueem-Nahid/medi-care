import React from 'react';
import './Review.css';

const Client = (props) => {
    const {name, img, comment} = props.review;
    return (
        <div className="col-12 col-md-4 col-lg-3">
            <div className="card-box background">
            <div className="card-thumbnail text-center">
                <img src={img} className="my-img" alt=""/>
            </div>
            <h4 className="mt-2 text-dark text-center text-md-start">{name}</h4>
            <p className="text-dark text-center text-md-start">{comment}</p>
            </div>
        </div>
    );
};

export default Client;