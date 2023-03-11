import { Outlet } from 'react-router-dom';

import HeaderContent from '../components/Header';
import FooterContent from '../components/Footer';

function Main() {
    return (
        <div className="bg-blue grid grid-rows-6 container h-4/5 rounded-lg w-3/4">
            <div className="row-span-1">
                <HeaderContent />
            </div>

            <div className="row-span-4">
                <Outlet />
            </div>

            <div className="row-span-1">
                <FooterContent />
            </div>
        </div>
    );
}

export default Main;