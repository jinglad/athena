import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Order from '../Order/Order';
import WhatWeDo from '../WhatWeDo/WhatWeDo';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <WhatWeDo></WhatWeDo>
            <Order></Order>
            <Footer></Footer>
        </div>
    );
};

export default Home;