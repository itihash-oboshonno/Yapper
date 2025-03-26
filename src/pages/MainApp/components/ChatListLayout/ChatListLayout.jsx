import React from 'react';
import { Link } from 'react-router';

const ChatListLayout = ({type, selectedChatId}) => {
    const chats = [
        { id: '1', name: 'Alice', lastMessage: 'Hey, how are you?', avatar: 'https://via.placeholder.com/40' },
        { id: '2', name: 'Bob', lastMessage: 'See you tomorrow!', avatar: 'https://via.placeholder.com/40' },
    ];
    
    return (
        <div className="w-2/5 border-r border-gray-300 bg-white">
            <h3 className="text-lg font-semibold p-4 border-b border-gray-200">
                {type?.charAt(0).toUpperCase() + type?.slice(1)}
            </h3>
            <ul>
                {chats.map((chat) => (
                <li
                key={chat.id}
                className={`p-4 flex items-center hover:bg-gray-100 transition-colors ${
                chat.id === selectedChatId ? 'bg-blue-100' : ''
                }`}
                >
                <img
                src={chat.avatar}
                alt={chat.name}
                className="w-10 h-10 rounded-full mr-3"
                />
            <div>
              <Link
                to={`/${type}/${chat.id}`}
                className="text-blue-600 font-medium hover:underline"
              >
                {chat.name}
              </Link>
              <p className="text-gray-600 text-sm truncate">{chat.lastMessage}</p>
            </div>
          </li>
        ))}
      </ul>
        </div>
    );
};

export default ChatListLayout;