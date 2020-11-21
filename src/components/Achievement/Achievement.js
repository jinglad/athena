import React from 'react';
import aclogo1 from '../../images/aclogo1.png';
import aclogo2 from '../../images/aclogo2.png';
import aclogo3 from '../../images/aclogo3.png';
import aclogo4 from '../../images/aclogo4.png';
import './Achievement.scss';


const Achievement = () => {
    return (
        <div className="achievement-part mt-5 pb-5">
            <div className="main-part">
                <div className="container mt-5 pt-5">
                    <div className="row">
                        <div className="col-lg-5 col-md-5 col-sm-12 col-12">
                            <div className="achievement-text">
                                <h2>Our Achievements</h2>
                                <br/>
                                <small className="text-secondary">
                                    It is a long establish fact that a render will be distracted by the readable content of a page when looking at its layout.The point of using Lorem ipsum is that it has a more-or-less normal distribution of letter.   
                                </small>
                            </div>                            
                        </div>
                        <div className="col-lg-7 col-md-7 col-sm-12 col-11">
                            <div className="achievement-part2">
                                <div className="row">
                                    <div className="content1 col-lg-6 col-md-6 col-sm-12 col-12 mb-4">
                                        <div className="part1 d-flex justify-content-center align-items-center
                                         ">
                                            <img src={aclogo2} className="img-part1" />
                                            <div className="ml-4">
                                                <h1 className="text-white">
                                                    700+
                                                </h1>
                                                <p>Happy Client</p>
                                            </div>                                            
                                        </div>
                                    </div>                                    
                                    <div className="content1 col-lg-6 col-md-6 col-sm-12 col-12 mb-4">
                                        <div className="part2 d-flex justify-content-center align-items-center">
                                            <img src={aclogo1} className="img-part1"/>
                                            <div className="ml-4">
                                                <h1 className="">
                                                    140+
                                                </h1>
                                                <p>Project Completed</p>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                                <div className="row">
                                    <div className="content1 col-lg-6 col-md-6 col-sm-12 col-12 mb-4">
                                        <div className="part3 d-flex justify-content-center align-items-center">
                                            <img src={aclogo3} className="img-part1" />
                                            <div className="ml-4">
                                                <h1 className="">
                                                    25+
                                                </h1>
                                                <p>Crazy Minds</p>
                                            </div>                                            
                                        </div>
                                    </div>
                                    <div className="content1 col-lg-6 col-md-6 col-sm-12 col-12 ">
                                        <div className="part4 d-flex justify-content-center align-items-center">
                                            <img src={aclogo4} className="img-part1"/>
                                            <div className="ml-4">
                                                <h1 className="">
                                                    75+
                                                </h1>
                                                <p>Running Project</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    );
};

export default Achievement;