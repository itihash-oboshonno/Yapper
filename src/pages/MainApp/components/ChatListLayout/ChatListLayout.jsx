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
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold">
          {type}
        </h2>
        <input
          type="text"
          placeholder="Search Messenger..."
          className="w-full mt-2 p-2 rounded-lg border border-gray-300"
        />
      </div>
      <div className="overflow-y-auto h-[calc(100%-100px)]">
        {data.map((chat) => (
          <Link
            key={chat?.id}
            to={`${chat?.id}`}
            className="flex items-center p-4 hover:bg-gray-100"
          >
            <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
            <div>
              <h3 className="font-medium">{chat?.name}</h3>
              <p className="text-sm text-gray-500">{chat?.message}</p>
            </div>
          </Link>
        ))}
      </div>
      {/* Nested Outlet for Inbox */}
      <Outlet />
    </div>
  );
};

export default ChatListLayout;