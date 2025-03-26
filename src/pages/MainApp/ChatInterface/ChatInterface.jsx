import React from 'react';
import { useParams } from 'react-router';
import ChatListLayout from '../components/ChatListLayout/ChatListLayout';
import Inbox from '../components/InboxLayout/Inbox';

const ChatInterface = ({type}) => {
    const {chatId} = useParams();
    return (
        <div className='flex flex-1'>
            <ChatListLayout type={type} selectedChatId={chatId} />
            { chatId ? (
                <Inbox chatId={chatId} />
            ) : (
                <div className="flex-1 flex items-center justify-center bg-gray-100 text-gray-500">
                    Select a chat to start messaging
                </div>
            )}
        </div>
    );
};

export default ChatInterface;