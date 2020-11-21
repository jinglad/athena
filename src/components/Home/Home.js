import React from 'react';
import Achievement from '../Achievement/Achievement';
import Footer from '../Footer/Footer';
import RunningProject from '../RunningProject/RunningProject';


const Home = () => {
    return (
        <div>            
            <RunningProject></RunningProject>
            <Achievement></Achievement>
            <Footer></Footer>
        </div>
    );
};

export default Home;