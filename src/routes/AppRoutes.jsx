import React, { useState } from 'react';
import { Route, Routes } from 'react-router';
import LandingPage from '../pages/LandingPage/LandingPage';
import SignUp from '../pages/AuthPages/SignUp/SignUp';
import ChatListLayout from '../pages/MainApp/components/ChatListLayout/ChatListLayout';
import Inbox from '../pages/MainApp/components/InboxLayout/Inbox';
import AppInterface from '../pages/MainApp/AppInterface/AppInterface';

const AppRoutes = () => {

    const [user, setUser] = useState(false)

    if (user) {
        return (
            <Routes>
                <Route path='/' element={<AppInterface />}>
                    <Route path='t' element={<ChatListLayout type='chats' />}>
                        <Route path=':chatId' element={<Inbox />} />
                    </Route>
                    <Route path='requests/t' element={<ChatListLayout type='requests' />}>
                        <Route path=':chatId' element={<Inbox />} />
                    </Route>
                    <Route path='archive/t' element={<ChatListLayout type='archive' />}>
                        <Route path=':chatId' element={<Inbox />} />
                    </Route>
                </Route>
            </Routes>
        )
    }

    return (
        <Routes>
            <Route index element={<LandingPage />}/>
                <Route path='signup' element={<SignUp />} />
        </Routes>
    );
};

export default AppRoutes;