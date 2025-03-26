import React from 'react';
import { Link, Outlet } from 'react-router';
import Inbox from '../components/InboxLayout/Inbox';
import Sidebar from '../components/Sidebar/Sidebar';

const AppInterface = () => {
    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar (Dashboard 1) */}
            <Sidebar />

            {/* Chat List (Dashboard 2) */}
            <div className="w-1/4 bg-gray-50 border-r">
                <Outlet />
            </div>

            {/* Inbox */}
            <div className="flex-1 bg-white">
                <Inbox />
            </div>
        </div>
    );
};

export default AppInterface;