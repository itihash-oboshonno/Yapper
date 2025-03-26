import React from 'react';
import { Outlet } from 'react-router';
import Sidebar from '../components/Sidebar/Sidebar';
import ChatInterface from '../ChatInterface/ChatInterface';

const AppInterface = () => {
    return (
        <div className='flex h-screen'>
            
            <Sidebar />

            <div>

                {/* chatlist */}
                <div className='flex-1 flex'>
                    <Outlet />
                </div>

                {/* inbox layout */}
                <div className='flex-1'>
                    <ChatInterface/>
                </div>

            </div>

            
        </div>
    );
};

export default AppInterface;