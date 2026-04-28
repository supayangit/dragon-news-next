import React from 'react';
import Logo from '@/assets/logo.png';
import Image from 'next/image';
import { compareAsc, format } from "date-fns";
import Marquee from "react-fast-marquee";

const Header = () => {
    return (
        <div className="text-center space-y-8">
            <div className="text-center space-y-2">
                <Image src={Logo} width={300} height={100} alt="Logo" className="mx-auto" />
                <p>Journalism Without Fear or Favour</p>
                <p>{format(new Date(), "EEEE, MMMM dd, yyyy")}</p>
            </div>

            <Marquee>
                <p>Breaking News: This is a sample breaking news headline.</p>
            </Marquee>
        </div>

    );
};

export default Header;