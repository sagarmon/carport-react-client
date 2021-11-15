import React, { useEffect, useState } from 'react';
import ExploreCar from '../ExploreCar/ExploreCar';

const ExploreCars = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch('https://calm-spire-77686.herokuapp.com/exploreCars')
            .then(res => res.json())
            .then(data => setCars(data));
    }, [])
    // useEffect(() => {
    //     fetch('http://localhost:5000/exploreCars')
    //         .then(res => res.json())
    //         .then(data => setCars(data));
    // }, [])

    return (
        <div className="container mb-5">
            <h1 className="text-warning fw-bold mb-3 text-decoration-underline">All Cars</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    cars.map(car => <ExploreCar
                        // key={car._id}
                        car={car}
                    >
                    </ExploreCar>)
                }
            </div>
        </div>
    );
};

export default ExploreCars;