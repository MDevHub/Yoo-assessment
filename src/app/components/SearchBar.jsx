import React from "react";
import PersonSearchOutlinedIcon from "@mui/icons-material/PersonSearchOutlined";

const SearchBar = ({ query, setQuery }) => {
  return (
    <div className="max-w-lg mx-auto mb-6 relative">
      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
        <PersonSearchOutlinedIcon />
      </span>
      <input
        className="w-full pl-12 p-3 rounded-xl bg-[rgba(0,0,0,0.6)] text-white border border-[rgba(255,255,255,0.2)] focus:ring-1 focus:ring-[rgba(255,255,255,0.5)] focus:outline-none placeholder-gray-400"
        placeholder="Search users..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
