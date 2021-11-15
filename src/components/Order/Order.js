import React from 'react';
import { Link } from 'react-router-dom';

const Order = (props) => {
    const { order } = props.order;

    return (
        <div className="col">
            <div className="card h-100">
                {/* <img src={img} className="card-img-top" alt="..." /> */}
                <div className="card-body">
                    <h5 className="card-title">{order}</h5>

                </div>
            </div>
        </div>
    );
};

export default Order;