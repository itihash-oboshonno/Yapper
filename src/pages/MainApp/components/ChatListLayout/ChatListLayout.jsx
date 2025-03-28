import React from 'react';
import { Link, Outlet } from 'react-router';

const ChatListLayout = ({ type }) => {
  const chats = [
    { id: 1, name: 'Ricky Smith', message: "YOU! Let's get the..." },
    { id: 2, name: 'Stephanie Sharkey', message: "YOU! Let's get the..." },
    { id: 3, name: 'Rodger Struck', message: "YOU! Let's get the..." },
  ];

  const requests = [
    { id: 4, name: 'Jerry Hefler', message: "YOU! Let's get the..." },
    { id: 5, name: 'James Hall', message: "YOU! Let's get the..." },
  ];

  const archived = [
    { id: 6, name: 'Lorri Warf', message: "YOU! Let's get the..." },
    { id: 7, name: 'Frances Swann', message: "YOU! Let's get the..." },
  ];

  const data = type === 'chats' ? chats : type === 'requests' ? requests : archived;

  return (
    <div className="h-full">
      <div className="p-4 mt-2">
        <h2 className="text-2xl font-semibold">
          {type === 'chats' ? 'Chats' : type === 'requests' ? 'Requests' : 'Archive'}
        </h2>
      </div>
      <div className='px-4'>
        <input
          type="text"
          placeholder="Search Messenger..."
          className="w-full p-2 rounded-lg border-2 border-gray-100 focus:outline-none"
        />
      </div>
      <div className="overflow-y-auto h-[calc(100%-100px)] px-2 py-4">
        {data.map((chat) => (
          <Link
            key={chat?.id}
            to={`${chat?.id}`}
            className="flex items-center px-2 py-2 hover:bg-gray-100 hover:rounded-lg"
          >
            <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
            <div>
              <h3 className="font-medium">{chat?.name}</h3>
              <p className="text-sm text-gray-500">{chat?.message}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ChatListLayout;