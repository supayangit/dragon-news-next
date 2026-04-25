import Navbar from '@/components/shared/Navbar';
import React, { Children } from 'react';

const Mainlayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            {Children}
        </div>
    );
};

export default Mainlayout;