import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect( () => {
        fetch('https://mueem-nahid.github.io/Data/review.json')
        .then(res=>res.json())
        .then(data=>setReviews(data));
    },[]);
    return (
        <div className="container">
            <h2 className="text-center fw-bold pt-5 pb-3">People's Review</h2>
            <div className="row">
                {
                    reviews.map(review => <Review key={review.id}
                    review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;