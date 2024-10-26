// src/pages/Chats.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaComments, FaCalendarAlt, FaUser, FaBook, FaSearch } from 'react-icons/fa';

const Chats = () => {
  const [selectedChat, setSelectedChat] = useState(null);

  const contacts = [
    { id: 1, name: 'Kate Williams', status: 'online', favorite: true },
    { id: 2, name: 'Emma Horbachev', status: 'offline', favorite: true },
    { id: 3, name: 'Maya Orchard', status: 'offline', favorite: true },
    { id: 4, name: 'James Orchard', message: "Hey! I'm available.", status: 'online' },
    { id: 5, name: 'Sarah Esther', message: 'I am buying a new MacBook.', status: 'offline' },
    { id: 6, name: 'Aiden Chavez', message: 'Are we going to meet today?', status: 'online' },
    { id: 7, name: 'Joyce Maria', message: 'Can you send photos?', status: 'offline' },
  ];

  const messages = [
    { id: 1, sender: 'Maria', text: 'Hello, Amy. Good morning.', time: '08:25 AM' },
    { id: 2, sender: 'Amy', text: 'Good morning. How are you?', time: '08:55 AM' },
    { id: 3, sender: 'Maria', text: 'I am doing great. Excited for a new project!', time: '09:05 AM' },
    { id: 4, sender: 'Amy', text: 'That’s great. Sharing some files now.', time: '09:06 AM', file: 'mobile-app.zip' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Navigation - Fixed */}
      <header className="bg-gray-800 text-white p-4 flex justify-between items-center fixed top-0 left-0 right-0 z-10">
        <h1 className="text-xl font-bold">ConnecTo</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-gray-400">Logout</a>
            </li>
          </ul>
        </nav>
      </header>

      <div className="flex flex-1">
        {/* Sidebar - Fixed */}
        <aside className="w-40 bg-gray-800 text-white p-4 shadow-lg fixed top-14 bottom-0 left-0 z-10 overflow-y-auto">
          <nav>
            <ul>
              <li className="mb-4">
                <Link to="/" className="flex items-center hover:text-gray-300 transition">
                  <FaBook className="mr-2" /> Dashboard
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/chats" className="flex items-center hover:text-gray-300 transition">
                  <FaComments className="mr-2" /> Chats
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/calendar" className="flex items-center hover:text-gray-300 transition">
                  <FaCalendarAlt className="mr-2" /> Calendar
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/profile" className="flex items-center hover:text-gray-300 transition">
                  <FaUser className="mr-2" /> Profile
                </Link>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Chat Section */}
        <main className="flex-1 bg-gray-50 p-4 ml-40 pt-16">
          <div className="flex h-full">
            {/* Contacts List */}
            <aside className="w-1/5 bg-white p-4 shadow-lg rounded-lg overflow-y-auto">
              <h2 className="text-xl font-bold mb-4 text-black">Chats</h2>

              {/* Search Bar */}
              <div className="mb-4">
                <div className="flex items-center border rounded-lg p-2 bg-gray-100">
                  <FaSearch className="text-gray-500 mr-2" />
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full outline-none bg-transparent text-black"
                  />
                </div>
              </div>

              {/* Favorites Section */}
              <h3 className="text-lg font-semibold mb-2 text-black">Favorites</h3>
              <div className="flex space-x-2 mb-4">
                {contacts.filter((c) => c.favorite).map((contact) => (
                  <div
                    key={contact.id}
                    className="w-12 h-12 bg-gray-200 rounded-full shadow-md flex items-center justify-center text-center"
                  >
                    <p className="text-xs font-semibold text-black">
                      {contact.name.split(' ')[0]}
                    </p>
                  </div>
                ))}
              </div>

              {/* Contact List */}
              <ul>
                {contacts.map((contact) => (
                  <li
                    key={contact.id}
                    className={`flex items-center justify-between mb-2 p-2 rounded-lg ${
                      selectedChat === contact.id ? 'bg-teal-200' : 'bg-gray-100'
                    }`}
                    onClick={() => setSelectedChat(contact.id)}
                  >
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gray-300 rounded-full mr-2"></div>
                      <div>
                        <p className="font-semibold text-black text-sm">{contact.name}</p>
                        {contact.message && (
                          <p className="text-xs text-gray-600">{contact.message}</p>
                        )}
                      </div>
                    </div>
                    <div
                      className={`w-2 h-2 rounded-full ${
                        contact.status === 'online' ? 'bg-green-500' : 'bg-red-500'
                      }`}
                    ></div>
                  </li>
                ))}
              </ul>
            </aside>

            {/* Chat Window */}
            <div className="flex-1 bg-white p-4 flex flex-col shadow-lg rounded-lg ml-4">
              <header className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-black">Maria Williams</h2>
                <div className="flex space-x-2">
                  <button className="bg-gray-200 p-1 rounded-full">📞</button>
                  <button className="bg-gray-200 p-1 rounded-full">📷</button>
                </div>
              </header>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto mb-2">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex mb-2 ${
                      msg.sender === 'Maria' ? 'justify-start' : 'justify-end'
                    }`}
                  >
                    <div
                      className={`max-w-xs p-3 rounded-lg ${
                        msg.sender === 'Maria' ? 'bg-teal-100' : 'bg-yellow-100'
                      }`}
                    >
                      <p className="text-black text-sm">{msg.text}</p>
                      {msg.file && (
                        <div className="mt-1 bg-gray-300 p-1 rounded-lg">
                          <p className="text-black text-sm">{msg.file}</p>
                        </div>
                      )}
                      <p className="text-right text-xs text-gray-500 mt-1">
                        {msg.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Input Box - Fixed at Bottom */}
              <div className="border-t border-gray-300 pt-2">
                <div className="flex items-center border rounded-lg p-2 bg-gray-100">
                  <input
                    type="text"
                    placeholder="Type a message..."
                    className="w-full outline-none bg-transparent text-black text-sm"
                  />
                  <button className="ml-2 bg-teal-500 text-white px-3 py-1 rounded-lg">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Chats;