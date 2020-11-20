import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Header.scss';
import headerPic from '../../Illustration/header-pic.png';

const Header = () => {
    return (
        <div className="container mb-5">
            <Navbar></Navbar>
            <div className="row">
                <div className="col-md-5">
                    <div className="mt-5">
                        <h1 className="header-txt">Florence <br/> agency</h1>
                        <p className="text-secondary my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati accusamus, autem iste earum, quas debitis laborum officiis, incidunt cupiditate atque distinctio modi fugit. Excepturi adipisci ratione, reiciendis quo ad cumque?</p>
                        <button className="see-pricing-btn">See Pricing</button>
                    </div>
                </div>
                <div className="col-md-7">
                    <div>
                        <img src={headerPic} className="img-fluid" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;