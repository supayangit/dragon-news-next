import React from 'react';
import Navbar from '@/components/shared/Navbar';
import { montserrat } from '../layout';

const AuthLayout = ({children}) => {
    return (
        <div className={`${montserrat.className} h-full`}>
            <Navbar></Navbar>
            {children}
        </div>
    );
};

export default AuthLayout;