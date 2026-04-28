import Navbar from '@/components/shared/Navbar';
import Header from '@/components/shared/Header';

const Mainlayout = ({ children }) => {
    return (
        <div className='space-y-10'>
            <Header></Header>
            <Navbar></Navbar>
            <main>
                {children}
            </main>
        </div>
    );
};

export default Mainlayout;