import React from "react";
import { Link } from "react-router-dom";

const UserCard = ({ user, query }) => {
  // Check if name matches search query
  const matches =
    query && user.name.toLowerCase().includes(query.toLowerCase());

  return (
    <li
      className={`group relative bg-[rgba(0,0,0,0.6)] h-auto sm:h-48 flex flex-col justify-end border 
      border-[rgba(255,255,255,0.2)] p-4 rounded-2xl shadow-md hover:shadow-xl 
      transition duration-300 transform hover:-translate-y-1
      ${matches ? "ring-2 ring-[rgba(255,255,255,0.5)]" : ""}`}
    >
      {/* Top row with avatar + name */}
      <Link to={`/detail/${user.id}`} className="flex items-center gap-3 mb-2">
        <img
          src={`https://i.pravatar.cc/150?u=${user.id}`}
          alt={user.name}
          className="w-10 h-10 rounded-full border border-gray-700 shadow-md 
          transition duration-300 transform group-hover:-translate-y-1"
        />
        <span
          className={`text-lg font-semibold transition hover:text-[rgba(255,255,255,0.6)] 
          ${matches ? "text-[rgba(255,255,255,0.5)]" : ""}`}
        >
          {user.name}
        </span>
      </Link>

      {/* Extra info */}
      <p className="text-gray-400 text-sm">{user.email}</p>
      <p className="text-gray-500 text-xs">{user.company?.name}</p>
    </li>
  );
};

export default UserCard;
