import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function AdminDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        id="dropdownAvatarNameButton"
        className="flex items-center text-sm pe-1 font-medium text-gray-900 rounded-full hover:text-blue-600 dark:hover:text-blue-500 md:me-0 dark:focus:ring-gray-700 dark:text-white"
        onClick={toggleDropdown}
        type="button"
      >
        <span className="sr-only">Open user menu</span>
        <h1 className='text-xl'>{localStorage.getItem('name')}</h1>
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div
          id="dropdownAvatarName"
          className="z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
        >
          <div className="px-4 py-3 text-sm text-black dark:text-white">
            <div className="font-medium">ADMIN</div>
            <div className="truncate">admin@gmail.com</div>
          </div>
          <ul className="py-2 text-sm text-black dark:text-gray-200" aria-labelledby="dropdownAvatarNameButton">
            <li>
              <p className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">My Dashboard</p>
            </li>
            <li>
              <p className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</p>
            </li>
          </ul>
          <div className="py-2">
            <NavLink to={'/'} className="block px-4 py-2 text-sm text-black hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</NavLink>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminDropdown;
