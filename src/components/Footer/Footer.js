/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import logo from '../../Illustration/Group 86.png';
import facebook from '../../Illustration/facebook-logo-in-circular-shape@2x.png';
import twitter from '../../Illustration/twitter (4)@2x.png';
import linkedin from '../../Illustration/linkedin (2)@2x.png';
import dribble from '../../Illustration/dribbble (1)@2x.png';
import './Footer.scss'

const Footer = () => {
    return (
        <div>
            <div className="text-center contact container">
                <h1 className="font-weight-bold">Get your design right, right now</h1>
                <p>Be the first to know our latest offers and updates!</p>
                <div className="input-group mb-3 p-2 rounded bg-white my-5 contact-input mx-auto">
                    <input type="text" class="form-control border-0" placeholder="Enter your email address" />
                    <div className="input-group-append">
                        <button className="btn font-weight-bolder rounded px-4" type="button">Get Started</button>
                    </div>
                </div>
            </div>
            <footer className="container pt-5">
                <div className="row d-flex ">
                    <div className="col-md-5 ml-5 text-center text-sm-left">
                        <img className="logo" src={logo} alt="" />
                        <div className="mt-3 social-icon">
                            <a href=""><img src={facebook} alt="" /></a>
                            <a href=""><img src={twitter} alt="" /></a>
                            <a href=""><img src={linkedin} alt="" /></a>
                            <a href=""><img src={dribble} alt="" /></a>
                        </div>
                    </div>
                    <div className="row col-md-6 link-text mt-4 ml-auto text-sm-left text-center">
                        <div className="col-md-4 mb-3">
                            <a href="">Features</a>
                            <br />
                            <a href="">Enterprise</a>
                            <br />
                            <a href="">Pricing</a>
                        </div>
                        <div className="col-md-4 mb-3">
                            <a href="">Blog</a>
                            <br />
                            <a href="">Help Center</a>
                            <br />
                            <a href="">Contact Us</a>
                            <br />
                            <a href="">Status</a>
                        </div>
                        <div className="col-md-4 mb-3">
                            <a href="">About Us</a>
                            <br />
                            <a href="">Terms of Service</a>
                            <br />
                            <a href="">Security</a>
                            <br />
                            <a href="">Login</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;