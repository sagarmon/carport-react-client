import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Car from '../Car/Car';
import Review from '../Review/Review';
// import useAuth from '../../hooks/useAuth';
import img1 from '../../banner-images/img1.jpeg';
import img2 from '../../banner-images/img2.jpeg';
import img3 from '../../banner-images/img3.jpeg';
// import Service from '../Service/Service';
// import safety from '../../images/safety.png';

const Home = () => {
    // const { user } = useAuth();
    // const [services, setServices] = useState([]);
    const [cars, setCars] = useState([]);
    const [reviews, setReviews] = useState([]);


    // useEffect(() => {
    //     fetch('http://localhost:5000/cars')
    //         .then(res => res.json())
    //         .then(data => setCars(data));
    // }, [])
    useEffect(() => {
        fetch('https://calm-spire-77686.herokuapp.com/cars')
            .then(res => res.json())
            .then(data => setCars(data));
    }, [])

    // useEffect(() => {
    //     fetch('./carsa12.json')
    //         .then(res => res.json())
    //         .then(data => setCars(data));
    // }, [])

    useEffect(() => {
        fetch('https://calm-spire-77686.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])


    return (
        <div>
            <header className="container m-5">
                <div className="jumbotron">
                    <h1 className="display-4 fw-bolder mb-3">Get your dream car at <span className="text-primary">Sagar's Carport</span></h1>
                    <h1 className="lead fw-bold">SELLING QUALITY USED CARS IN SYDNEY SINCE 1995</h1>
                    <br />
                    <p className="lead fw-bold">At Sagar's Carport, we have worked hard to provide Sydney siders the best used cars for over 25 years. We are proud to see parent and families bringing their children back to buy a car from us. Why? because we believe that taking care of the customer and selling a top quality car is paramount. We back all our used cars with a 3 YEAR USED CAR WARRANTY! <br />

                        We are located in Lidcombe and Croydon, just 10 minutes from the CBD. We have been established in Croydon since 1985 and we are first and foremost, a family business. We always strive to give our customers the best experience in buying a new vehicle that suits your needs.</p>
                    {/* <hr className="my-4" /> */}
                    {/* <Link className="btn btn-primary btn-dark btn-lg" to="/about" role="button">Learn more</Link> */}
                </div>
            </header>
            <hr />
            <main className="mb-5">
                <div className="container">
                    <h1 className="text-warning fw-bold mb-3 text-decoration-underline">Top Cars</h1>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {
                            cars.map(car => <Car
                                key={car._id}
                                car={car}
                            >
                            </Car>)
                        }
                    </div>
                </div>

                <hr />

                {/* carousel */}
                <div id="carouselExampleIndicators" className="carousel slide mt-5" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={img1} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={img2} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={img3} className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

                {/* <div>
                    <img src={safety} className="w-100" alt="" />
                </div> */}

                <hr />

                <div className="container m-5">
                    <h1 className="text-warning fw-bold mb-3 text-decoration-underline">Reviews</h1>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {
                            reviews.map(review => <Review
                                key={review._id}
                                review={review}
                            >
                            </Review>)
                        }
                    </div>
                </div>


            </main>
        </div>
    );
};

export default Home;