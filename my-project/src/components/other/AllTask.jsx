import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  return (
    <div className="bg-gray-900 p-8 rounded-2xl mt-8 shadow-md text-white">
      <h2 className="text-2xl font-bold text-emerald-400 mb-6">All Task Overview</h2>

      <div className="w-full overflow-x-auto">
        <div className="min-w-[700px]">
          {/* Table Header */}
          <div className="grid grid-cols-5 bg-emerald-600 text-white font-semibold py-3 px-4 rounded-t-lg text-sm">
            <span>Employee Name</span>
            <span className="text-center">New</span>
            <span className="text-center">Active</span>
            <span className="text-center">Completed</span>
            <span className="text-center">Failed</span>
          </div>

          {/* Data Rows */}
          {userData.map((user, idx) => (
            <div
              key={idx}
              className={`grid grid-cols-5 items-center px-4 py-3 border-b border-gray-700 text-sm hover:bg-gray-800 transition ${
                idx % 2 === 0 ? 'bg-gray-800' : 'bg-gray-850'
              }`}
            >
              <span className="font-medium">{user.firstName}</span>
              <span className="text-center text-blue-400">{user.taskCounts.newTask}</span>
              <span className="text-center text-yellow-400">{user.taskCounts.active}</span>
              <span className="text-center text-green-400">{user.taskCounts.completed}</span>
              <span className="text-center text-red-500">{user.taskCounts.failed}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllTask;
