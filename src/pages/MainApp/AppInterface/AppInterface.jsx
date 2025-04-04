import React, { useState } from 'react';
import { Outlet } from 'react-router';
import Inbox from '../components/InboxLayout/Inbox';
import Sidebar from '../components/Sidebar/Sidebar';

const AppInterface = () => {
    const [openSideBar, setOpenSideBar] = useState(false);
    return (
        <div className="flex h-screen bg-white">
            {/* Sidebar (Dashboard 1) */}
            <div className='w-14 transition-all'>
                <Sidebar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
            </div>

            {/* Chat List (Dashboard 2) */}
            <div className="flex-3 h-full border-r-2 border-gray-50">
                <Outlet />
            </div>

            {/* Inbox */}
            <div className='flex-12 h-full'>
                <Inbox />
            </div>
        </div>
    );
};

export default AppInterface;