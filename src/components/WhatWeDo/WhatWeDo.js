import React from 'react';
import './WhatWeDo.scss';
import img1 from '../../Illustration/img1.png';
import img2 from '../../Illustration/img2.png';
import img3 from '../../Illustration/img3.png';
import img4 from '../../Illustration/img4.png';

const WhatWeDo = () => {
    return (
        <div className="container text-center my-5 whatWeDo-container">
            <h2>What We Do</h2>
            <p className="text-secondary">Our main focus is to make the User Experience very <br/> simple and easy. Simplicity is our Strength.</p>
            <div className="row my-5 py-5">
                <div className="col-md-3 box">
                    <div>
                        <img src={img1} alt=""/>
                        <h5 className="my-3">Experience Design</h5>
                        <p className="text-secondary">The point of using lorem <br/> ipsum is that it has a more-or-less normal</p>
                    </div>
                </div>
                <div className="col-md-3 box">
                    <div>
                        <img src={img2} alt=""/>
                        <h5 className="my-3">Interface Design</h5>
                        <p className="text-secondary">The point of using lorem <br/> ipsum is that it has a more-or-less normal</p>
                    </div>
                </div>
                <div className="col-md-3 box">
                    <div>
                        <img src={img3} alt=""/>
                        <h5 className="my-3">Prototyping</h5>
                        <p className="text-secondary">The point of using lorem <br/> ipsum is that it has a more-or-less normal</p>
                    </div>
                </div>
                <div className="col-md-3 box">
                    <div>
                        <img src={img4} alt=""/>
                        <h5 className="my-3">Illustration</h5>
                        <p className="text-secondary">The point of using lorem <br/> ipsum is that it has a more-or-less normal</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatWeDo;