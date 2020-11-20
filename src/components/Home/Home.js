import React from 'react';
import Achievement from '../Achievement/Achievement';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import RunningProject from '../RunningProject/RunningProject';
import WhatWeDo from '../WhatWeDo/WhatWeDo';
import Order from '../Order/Order';


const Home = () => {
    return (
        <div>  
            <Header></Header>        
            <WhatWeDo></WhatWeDo>  
            <RunningProject></RunningProject>
            <Achievement></Achievement>
            <Order></Order>
            <Footer></Footer>
        </div>

)};

export default Home;