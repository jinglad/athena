import React from 'react';
import './Order.scss';

const Order = () => {
    return (
        <section className="bg">
            <div className="container pb-5">
                <h2 className="text-center mb-4 pb-4">Choose Your Dedicated Team</h2>

                <div className="card-deck text-center">
                    <div className="card">
                        <div className="card-body shadow">
                            <h2 className="card-title">$199</h2>
                            <h6 className="card-text">For Basic</h6>

                            <hr />

                            <p className="card-text text-dark">Homepage<br /><br /> No Inner Page<br /><br />Asset file<br /><br />
                            Source file<br /><br />Free Stock Photos<br /><br />10 Days Free Support<br /><br />24/7 Support</p>
                            <button className="btn navContact pricing-btn">Order Now</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body shadow">
                            <h2 className="card-title">$399</h2>
                            <h6 className="card-text">For Preferred</h6>

                            <hr />

                            <p className="card-text text-dark">Homepage<br /><br /> No Inner Page<br /><br />Asset file<br /><br />
                            Source file<br /><br />Free Stock Photos<br /><br />10 Days Free Support<br /><br />24/7 Support</p>
                            <button className="btn navContact pricing-btn">Order Now</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body shadow">
                            <h2 className="card-title">$599</h2>
                            <h6 className="card-text">For Elite</h6>

                            <hr />

                            <p className="card-text text-dark">Homepage<br /><br /> No Inner Page<br /><br />Asset file<br /><br />
                            Source file<br /><br />Free Stock Photos<br /><br />10 Days Free Support<br /><br />24/7 Support</p>
                            <button className="btn navContact pricing-btn">Order Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Order;