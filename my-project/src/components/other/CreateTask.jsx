import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [asignTo, setAsignTo] = useState('');
  const [category, setCategory] = useState('');

  const [newTask, setNewTask] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    const task = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };

    const updatedData = userData.map((user) => {
      if (asignTo === user.firstName) {
        return {
          ...user,
          tasks: [...user.tasks, task],
          taskCounts: {
            ...user.taskCounts,
            newTask: user.taskCounts.newTask + 1,
          },
        };
      }
      return user;
    });

    setUserData(updatedData);
    setNewTask(task);

    // Reset form
    setTaskTitle('');
    setTaskDescription('');
    setTaskDate('');
    setAsignTo('');
    setCategory('');
  };

  return (
    <div className="p-8 bg-gray-900 mt-8 rounded-2xl shadow-lg text-white">
      <h2 className="text-2xl font-bold mb-6 text-emerald-400">Create New Task</h2>
      <form
        onSubmit={submitHandler}
        className="flex flex-col lg:flex-row gap-8 justify-between"
      >
        {/* Left Column */}
        <div className="w-full lg:w-1/2 space-y-4">
          <div>
            <label className="block text-sm text-gray-300 mb-1">Task Title</label>
            <input
              type="text"
              placeholder="e.g. Design login page"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-300 mb-1">Date</label>
            <input
              type="date"
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-300 mb-1">Assign to</label>
            <input
              type="text"
              placeholder="e.g. Ahmed"
              value={asignTo}
              onChange={(e) => setAsignTo(e.target.value)}
              className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-300 mb-1">Category</label>
            <input
              type="text"
              placeholder="e.g. Design, Dev"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
              required
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between">
          <div>
            <label className="block text-sm text-gray-300 mb-1">Description</label>
            <textarea
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              placeholder="Write a detailed task description..."
              className="w-full h-44 bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-emerald-500 outline-none resize-none"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="mt-4 bg-emerald-600 hover:bg-emerald-700 transition px-6 py-3 rounded-lg font-semibold text-sm"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
