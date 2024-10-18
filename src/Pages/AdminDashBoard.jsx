import React from 'react';

const AdminDashBoard = () => {
  const RegisteredUsers = JSON.parse(localStorage.getItem('users')) || [];

  return (
    <div className="p-6 sm:p-8 md:p-12 lg:p-16">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center">Admin Dashboard</h1>
      <h2 className="text-lg sm:text-xl md:text-2xl mt-4 text-center">Registered Users:</h2>
      
      {RegisteredUsers.length > 0 ? (
        <ul className="mt-4 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {RegisteredUsers.map((user, index) => (
            <li key={index} className="border p-4 rounded-lg shadow-lg text-center bg-white">
              <p className="font-semibold">Name: <span className="font-normal">{user.name}</span></p>
              <p className="font-semibold">Email: <span className="font-normal">{user.email}</span></p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-600 mt-4">No users have registered yet.</p>
      )}
    </div>
  );
};

export default AdminDashBoard;
