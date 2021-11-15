import React, { useRef } from 'react';

const WriteReview = () => {
    const reviewRef = useRef();

    const handleAddReview = e => {
        const review = reviewRef.current.value;

        const newReview = { review };

        fetch('https://calm-spire-77686.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newReview)
        })
            .then()

        e.preventDefault();
    }

    return (
        <div>
            <h2 className="m-5">Please write a review</h2>
            <form onSubmit={handleAddReview}>
                <input type="text" ref={reviewRef} className="w-75"></input> <br /><br />
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    );
};

export default WriteReview;