import React, { useState } from 'react';

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-300">
      <div className="bg-white shadow-xl rounded-2xl px-12 py-10 w-full max-w-md">
        <h2 className="text-3xl font-bold text-emerald-600 text-center mb-8">Welcome Back</h2>
        <form onSubmit={submitHandler} className="flex flex-col gap-5">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 rounded-lg px-4 py-2 text-lg placeholder-gray-400 outline-none transition"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
            placeholder="Enter your password"
            className="w-full border border-gray-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 rounded-lg px-4 py-2 text-lg placeholder-gray-400 outline-none transition"
          />
          <button
            type="submit"
            className="bg-emerald-600 hover:bg-emerald-700 transition text-white font-semibold py-2 rounded-lg text-lg"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
