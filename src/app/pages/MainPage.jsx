import React from "react";
import { useEffect, useState } from "react";
import { fetchUsers } from "../services/api"; 
import SearchBar from "../components/SearchBar";
import ItemCard from "../components/UserCard";

const MainPage = () => {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetchUsers().then(setItems).catch(console.error);
  }, []);

  const filtered = items.filter((user) =>
    user.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <SearchBar query={query} setQuery={setQuery} />
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {items.map((user) => (
          <ItemCard key={user.id} user={user} query={query} />
        ))}
      </ul>
    </div>
  );
};

export default MainPage;
