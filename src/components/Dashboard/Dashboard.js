import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {

    return (
        <div class="row row-cols-1 row-cols-md-3 g-4 m-5">
            <div class="col">
                <button>
                    <div class="card h-100">
                        {/* <img src="..." class="card-img-top" alt="..."> */}
                        <div class="card-body">
                            <h5 class="card-title">Pay</h5>
                            <p class="card-text">Payment coming soon!</p>
                            <Link className="nav-link me-3" aria-current="page" to="/payment">Click here</Link>
                        </div>
                    </div>
                </button>
            </div>
            <div class="col">
                <button>
                    <div class="card h-100">
                        {/* <img src="..." class="card-img-top" alt="..."> */}
                        <div class="card-body">
                            <h5 class="card-title">My Orders</h5>
                            <p class="card-text">See your orders here</p>
                            <Link className="nav-link me-3" aria-current="page" to="/orders">Click here</Link>
                        </div>
                    </div>
                </button>
            </div>
            <div class="col">
                <button>
                    <div class="card h-100">
                        {/* <img src="..." class="card-img-top" alt="..."> */}
                        <div class="card-body">
                            <h5 class="card-title">Reviews</h5>
                            <p class="card-text">See your reviews here</p>
                            <Link className="nav-link me-3" aria-current="page" to="/reviews">Click here</Link>
                        </div>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default Dashboard;