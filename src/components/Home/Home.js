import React from 'react';
import Achievement from '../Achievement/Achievement';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Order from '../Order/Order';
import WhatWeDo from '../WhatWeDo/WhatWeDo';
import RunningProject from '../RunningProject/RunningProject';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <WhatWeDo></WhatWeDo>
            <Order></Order>
            <RunningProject></RunningProject>
            <Achievement></Achievement>
            <Footer></Footer>
        </div>

)};

export default Home;