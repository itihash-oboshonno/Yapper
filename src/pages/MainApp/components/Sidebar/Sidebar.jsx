import React from 'react';
import { Link } from 'react-router';

const Sidebar = () => {
    return (
        <div className="w-1/5 border-r border-gray-300 p-4 bg-gray-50">
          <h2 className="text-xl font-bold mb-4">Messenger</h2>
          <ul>
            <li className="mb-2">
              <Link to="/chats" className="text-blue-600 hover:underline">Chats</Link>
            </li>
            <li className="mb-2">
              <Link to="/requests" className="text-blue-600 hover:underline">Requests</Link>
            </li>
            <li className="mb-2">
              <Link to="/archive" className="text-blue-600 hover:underline">Archive</Link>
            </li>
          </ul>
        </div>
      );
};

export default Sidebar;