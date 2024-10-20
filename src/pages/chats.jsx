// src/pages/Chats.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaComments, FaCalendarAlt, FaUser, FaBook } from 'react-icons/fa';

const Chats = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Navigation */}
      <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">ConnecTo</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-gray-400">Logout</a></li>
          </ul>
        </nav>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-48 bg-gray-700 text-white h-full p-4 shadow-lg">
          <nav>
            <ul>
              <li className="mb-4">
                <Link to="/" className="flex items-center hover:text-gray-400 transition">
                  <FaBook className="mr-2"/> Dashboard
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/chats" className="flex items-center hover:text-gray-400 transition">
                  <FaComments className="mr-2"/> Chats
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/calendar" className="flex items-center hover:text-gray-400 transition">
                  <FaCalendarAlt className="mr-2"/> Calendar
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/profile" className="flex items-center hover:text-gray-400 transition">
                  <FaUser className="mr-2"/> Profile
                </Link>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-white p-6">
          <h2 className="text-2xl font-bold mb-4 text-black">Chats</h2>
          <p>This is the chats section. You can view your messages here.</p>
          {/* Add chat functionality here */}
        </main>
      </div>
    </div>
  );
};

export default Chats;