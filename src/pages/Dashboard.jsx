// src/pages/Dashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaComments, FaCalendarAlt, FaUser, FaBook } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      {/* Top Navigation */}
      <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">ConnecTo</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-gray-400 transition">Logout</a></li>
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
                  <FaBook className="mr-2" /> Dashboard
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/chats" className="flex items-center hover:text-gray-400 transition">
                  <FaComments className="mr-2" /> Chats
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/calendar" className="flex items-center hover:text-gray-400 transition">
                  <FaCalendarAlt className="mr-2" /> Calendar
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/profile" className="flex items-center hover:text-gray-400 transition">
                  <FaUser className="mr-2" /> Profile
                </Link>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-white p-6 rounded-lg shadow-lg">
          {/* Welcome Section */}
          <div className="mb-6 bg-blue-100 p-4 rounded-lg">
            <h2 className="text-3xl font-bold mb-2 text-black">Welcome to ConnecTo</h2>
            <p className="text-gray-700 mb-4">
              Empowering mentees through guidance and support. Together, we can make a difference!
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-400 transition">
              Get Started
            </button>
          </div>

          {/* Success Stories */}
          <section className="mb-6">
            <h3 className="text-xl font-semibold mb-4">Success Stories</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition text-black">
                <p>"Thanks to my mentor, I've gained the confidence to pursue my career goals!" - Vishal</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition text-black">
                <p>"The guidance I received was invaluable in navigating my job search." - Sahil</p>
              </div>
            </div>
          </section>

          {/* Upcoming Events Section */}
          <section className="mb-6">
            <h3 className="text-xl font-semibold mb-4 text-black">Upcoming Events</h3>

            <div className="flex overflow-x-auto space-x-4 scrollbar-thin scrollbar-thumb-gray-500">
              {/* Event Cards */}
              {Array(5).fill(null).map((_, index) => (
                <div key={index} className="flex-shrink-0 w-64 bg-gray-100 p-4 rounded-lg shadow-lg hover:shadow-xl transition">
                  <img src={`/event${index + 1}.jpg`} alt={`Event ${index + 1}`} className="w-full h-32 rounded-lg object-cover mb-4" />
                  <h4 className="text-lg font-bold text-black">Event Title {index + 1}</h4>
                  <p className="text-black mt-2">Date: November {15 + index}, 2024</p>
                  <button className="bg-green-500 text-white px-4 py-2 mt-4 rounded-lg hover:bg-green-400 transition">
                    Register Now
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Mentorship Resources Section */}
          <section className="mb-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-black">Meet Our Professional Mentors</h3>
              <button className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-400 transition">
                View All
              </button>
            </div>

            <div className="flex overflow-x-auto space-x-4 scrollbar-thin scrollbar-thumb-gray-500">
              {/* Mentor Cards */}
              {['Sheen Lynn', 'Alex Reena', 'Halena Smith', 'David Miller'].map((name, index) => (
                <div key={index} className="flex-shrink-0 w-64 bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition">
                  <img src={`/mentor${index + 1}.jpg`} alt={name} className="rounded-t-lg w-full h-40 object-cover mb-2" />
                  <h4 className="font-semibold text-black">{name}</h4>
                  <p className="text-gray-500">{['UI/UX Designer', 'Web Development', 'Marketing', 'Digital Marketing'][index]}</p>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;