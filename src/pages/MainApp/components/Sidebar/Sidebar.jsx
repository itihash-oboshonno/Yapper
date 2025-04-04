import React from 'react';
import logo from '../../../../assets/chorui_logo.webp'
import { IoIosChatboxes } from 'react-icons/io';
import { MdArchive } from 'react-icons/md';
import { TbMessageQuestion, TbLayoutSidebarLeftCollapseFilled, TbLayoutSidebarLeftExpandFilled } from 'react-icons/tb';
import { Link, NavLink } from 'react-router';
import { CgProfile } from 'react-icons/cg';

const Sidebar = ({ openSideBar, setOpenSideBar }) => {

  const Navigations = (
    <>
      <li className="flex w-full">
        <NavLink to="/t"
          className={({ isActive }) =>
            isActive
              ? `font-semibold text-white bg-black py-2 transition-all w-full flex items-center gap-2 ${openSideBar ? 'px-6' : 'px-4'}`
              : `text-gray-600 py-2 hover:bg-gray-200 hover:bg-opacity-50 transition-all w-full flex items-center gap-2 ${openSideBar ? 'px-6' : 'px-4'}`
          }
        ><IoIosChatboxes className='text-2xl transition-all' /> <span className={openSideBar ? 'flex' : 'hidden'}>Chats</span></NavLink>
      </li>
      <li className="flex w-full">
        <NavLink to="/requests/t"
          className={({ isActive }) =>
            isActive
              ? `font-semibold text-white bg-black py-2 transition-all w-full flex items-center gap-2 ${openSideBar ? 'px-6' : 'px-4'}`
              : `text-gray-600 py-2 hover:bg-gray-200 hover:bg-opacity-50 transition-all w-full flex items-center gap-2 ${openSideBar ? 'px-6' : 'px-4'}`
          }
        ><TbMessageQuestion className='text-2xl transition-all' /> <span className={openSideBar ? 'flex' : 'hidden'}>Requests</span></NavLink>
      </li>
      <li className="flex w-full">
        <NavLink to="/archive/t"
          className={({ isActive }) =>
            isActive
              ? `font-semibold text-white bg-black py-2 transition-all w-full flex items-center gap-2 ${openSideBar ? 'px-6' : 'px-4'}`
              : `text-gray-600 py-2 hover:bg-gray-200 hover:bg-opacity-50 transition-all w-full flex items-center gap-2 ${openSideBar ? 'px-6' : 'px-4'}`
          }
        ><MdArchive className='text-2xl transition-all' /> <span className={openSideBar ? 'flex' : 'hidden'}>Archive</span></NavLink>
      </li>
    </>
  )

  return (
    <div className="flex flex-col items justify-between min-h-screen bg-white z-50 fixed left-0 shadow-xl">
      <div className={`${openSideBar ? 'flex items-center justify-between p-4' : 'flex flex-col-reverse items-center gap-3 pt-4'} transition-all`}>
        <Link to='/t'>
          <img className={`w-8 h-8 rounded-md transition-all`} src={logo} alt="" />
        </Link>
        <button className='z-50 transition-all'
          onClick={() => setOpenSideBar(!openSideBar)}>
          {openSideBar ? <><TbLayoutSidebarLeftCollapseFilled className='text-3xl' /></> : <><TbLayoutSidebarLeftExpandFilled className='text-3xl' /></>}
        </button>
      </div>
      <div>
        <ul>
          {Navigations}
        </ul>
      </div>
      <div className='pb-4'>
        <ul>
          <li className="flex w-full">
            <NavLink to="/profile"
              className={({ isActive }) =>
                isActive
                  ? `font-semibold text-white bg-black py-2 transition-all w-full flex items-center gap-2 ${openSideBar ? 'px-6' : 'px-4'}`
                  : `text-gray-600 py-2 hover:bg-gray-200 hover:bg-opacity-50 transition-all w-full flex items-center gap-2 ${openSideBar ? 'px-6' : 'px-4'}`
              }
            ><CgProfile className='text-2xl transition-all' /> <span className={openSideBar ? 'flex' : 'hidden'}>Profile</span></NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;