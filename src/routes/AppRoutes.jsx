import React, { useState } from 'react';
import { Route, Routes } from 'react-router';
import LandingPage from '../pages/LandingPage/LandingPage';
import SignIn from '../pages/AuthPages/SignIn/SignIn';
import SignUp from '../pages/AuthPages/SignUp/SignUp';
import AppInterface from '../pages/MainApp/AppInterface/AppInterface';
import ChatListLayout from '../pages/MainApp/components/ChatListLayout/ChatListLayout';
import Inbox from '../pages/MainApp/components/InboxLayout/Inbox';

const AppRoutes = () => {

    const [user, setUser] = useState(true)

    if (user) {
        return (
            <Routes>
                <Route path='/' element={<AppInterface />}>
                    {/* first level of nesting. */}
                    <Route path='chats' element={<ChatListLayout type='chats' />} />
                    <Route path='requests' element={<ChatListLayout type='requests' />} />
                    <Route path='archive' element={<ChatListLayout type='archive' />} />
                    {/* default route */}
                    <Route index element={<ChatListLayout type='chats' />} />

                    {/* second level of nesting (for different individuals). */}
                    <Route path='chats/:chatId?' element={<ChatListLayout type='chats' />}>
                        <Route path='inbox' element={<Inbox />} />
                    </Route>
                    <Route path='requests/:chatId?' element={<ChatListLayout type='requests' />}>
                        <Route path='inbox' element={<Inbox />} />
                    </Route>
                    <Route path='archive/:chatId?' element={<ChatListLayout type='archive' />}>
                        <Route path='inbox' element={<Inbox />} />
                    </Route>
                </Route>
            </Routes>
        )
    }

    return (
        <Routes>
            <Route path='/' element={<LandingPage />}>
                <Route path='login' element={<SignIn />} />
                <Route path='signup' element={<SignUp />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;