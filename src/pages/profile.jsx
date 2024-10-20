// src/pages/Profile.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaComments, FaCalendarAlt, FaUser, FaBook } from 'react-icons/fa';

const Profile = () => {
  const [profileData, setProfileData] = useState({
    fullName: 'Divyansh Sharma',
    email: 'sharmadivyansh022@gmail.com',
    Education: '',
    gender: 'Male',
    state: 'Uttar Pradesh',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleUpload = () => {
    alert('Upload feature not implemented');
  };

  const handleDelete = () => {
    alert('Delete feature not implemented');
  };

  const handleEdit = () => {
    alert('Edit button clicked');
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Navigation */}
      <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">ConnecTo</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-gray-400">
                Logout
              </a>
            </li>
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

        <main className="flex-1 bg-white p-6 flex items-center justify-center">
          <div className="bg-white shadow-lg rounded-lg w-full md:w-3/4 p-6">
            <div className="flex items-center gap-4 p-4 rounded-t-lg bg-gradient-to-r from-blue-300 to-yellow-300">
              <img
                src="https://via.placeholder.com/80"
                alt="Profile"
                className="w-20 h-20 rounded-full border-2 border-white"
              />
              <div>
                <h2 className="text-xl font-semibold">{profileData.fullName}</h2>
                <p className="text-gray-600">{profileData.email}</p>
              </div>
              <div className="ml-auto flex gap-2">
                <button
                  onClick={handleUpload}
                  className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
                >
                  Upload
                </button>
                <button
                  onClick={handleDelete}
                  className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={profileData.fullName}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Education</label>
                <input
                  type="text"
                  name="shopName"
                  value={profileData.shopName}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Gender</label>
                <select
                  name="gender"
                  value={profileData.gender}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">State</label>
                <select
                  name="state"
                  value={profileData.state}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select State</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Punjab">Punjab</option>
                </select>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={handleEdit}
                className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
              >
                Edit
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Profile;
