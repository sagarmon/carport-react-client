import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://calm-spire-77686.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])

    return (
        <div className="container m-5">
            <h1 className="text-warning fw-bold mb-3 text-decoration-underline">Reviews</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    reviews.map(review => <Review
                        // key={car._id}
                        review={review}
                    >
                    </Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;