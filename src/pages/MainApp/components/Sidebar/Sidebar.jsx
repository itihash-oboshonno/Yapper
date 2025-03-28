import React from 'react';
import logo from '../../../../assets/chorui_logo.webp'
import { IoIosChatboxes } from 'react-icons/io';
import { MdArchive } from 'react-icons/md';
import { TbMessageQuestion } from 'react-icons/tb';
import { Link, NavLink } from 'react-router';

const Sidebar = () => {

  const Navigations = (
    <>
      <li className="flex w-full">
        <NavLink to="/chats"
          className={({ isActive }) =>
            isActive
              ? "font-semibold text-white bg-black px-6 py-2 rounded-md transition-all w-full flex items-center gap-2"
              : "text-gray-600 px-6 py-2 hover:bg-blue-200 hover:bg-opacity-50 rounded-md transition-all w-full flex items-center gap-2"
          }
        ><IoIosChatboxes className='text-2xl' /> Chats</NavLink>
      </li>
      <li className="flex w-full">
        <NavLink to="/requests"
          className={({ isActive }) =>
            isActive
              ? "font-semibold text-white bg-black px-6 py-2 rounded-md transition-all w-full flex items-center gap-2"
              : "text-gray-600 px-6 py-2 hover:bg-blue-200 hover:bg-opacity-50 rounded-md transition-all w-full flex items-center gap-2"
          }
        ><TbMessageQuestion className='text-2xl' /> Requests</NavLink>
      </li>
      <li className="flex w-full">
        <NavLink to="/archive"
          className={({ isActive }) =>
            isActive
              ? "font-semibold text-white bg-black px-6 py-2 rounded-md transition-all w-full flex items-center gap-2"
              : "text-gray-600 px-6 py-2 hover:bg-blue-200 hover:bg-opacity-50 rounded-md transition-all w-full flex items-center gap-2"
          }
        ><MdArchive className='text-2xl' /> Archive</NavLink>
      </li>
    </>
  )

  return (
    <div className="w-52 border-r-2 border-gray-100 p-4">
      <div>
        <div>
          <div className='flex justify-center'>
            <Link to='/chats'>
              <img className='rounded-md w-12 h-12' src={logo} alt="" />
            </Link>
          </div>
          <ul className='mt-2 text-lg'>
            {Navigations}
          </ul>
        </div>
        <div>

        </div>
      </div>
    </div>
  );
};

export default Sidebar;