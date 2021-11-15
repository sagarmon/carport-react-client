import React, { useEffect, useState } from 'react';
import Order from '../Order/Order';

const Orders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://calm-spire-77686.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])

    return (
        <div className="container m-5">
            <h1 className="text-warning fw-bold mb-3 text-decoration-underline">All orders</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    orders.map(order => <Order
                        key={order._id}
                        order={order}
                    >
                    </Order>)
                }
            </div>
        </div>
    );
};

export default Orders;