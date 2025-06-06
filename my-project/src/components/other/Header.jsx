import React from 'react';

const Header = ({ user, changeUser }) => {
  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '');
    changeUser('');
  };

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md rounded-lg">
      <div>
        <h1 className="text-xl text-gray-600">Hello,</h1>
        <h2 className="text-2xl font-semibold text-gray-800">
          {user?.firstName || 'Admin'} <span className="inline-block">👋</span>
        </h2>
      </div>
      <button
        onClick={logOutUser}
        className="bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-5 py-2 rounded-md transition"
      >
        Log Out
      </button>
    </header>
  );
};

export default Header;
