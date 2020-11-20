import React from 'react';
import Achievement from '../Achievement/Achievement';

import RunningProject from '../RunningProject/RunningProject';


const Home = () => {
    return (
        <div>            
            <RunningProject></RunningProject>
            <Achievement></Achievement>
        </div>
    );
};

export default Home;