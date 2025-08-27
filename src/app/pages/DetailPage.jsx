import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

const DetailPage = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        setUser(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-[rgba(255,255,255,0.2)]"></div>
      </div>
    );
  }

  if (!user) return <p className="text-white text-center">User not found</p>;

  return (
    <div className="min-h-screen w-full bg-black text-white p-6 overflow-hidden">
      <div className="">
          {/* Back link at the top */}
        <Link to="/main" className="w-xl max-w-3xl flex items-center mb-4 text-white/70 hover:text-white transition-colors ">
          <ArrowBackOutlinedIcon className="mr-1 text-sm" />
           Home
        </Link>
        <div className="space-y-5 w-full  sm:w-xl max-w-3xl mx-auto bg-[rgba(0,0,0,0.5)] py-4 rounded-2xl border border-[rgba(255,255,255,0.2)] shadow-md">
          <div className="flex flex-col items-center gap-4 px-4">
            <img
              src={`https://i.pravatar.cc/150?u=${user.id}`}
              alt={user.name}
              className="w-16 h-16 rounded-full border border-[rgba(255,255,255,0.2)] shadow-md"
            />
            <h2 className="text-2xl font-bold">{user.name}</h2>
          </div>
          <hr className="outline-none border-[rgba(255,255,255,0.2)] "/>
          <div className="flex items-center justify-between px-4 md:px-6">
            <p className="text-lg text-white/90">User Information</p>
            {/* User info icon */}
            <InfoOutlinedIcon className="text-white/90 cursor-pointer"/>
          </div>
          <div className="px-4 md:px-6 items-center space-y-2">
            <div>
              <p className="">Email</p>
              <p className="text-gray-300 font-bold">{user.email}</p>
            </div>
            <div>
              <p className="">Phone</p>
              <p className="font-semibold text-gray-300">{user.phone}</p>
            </div>
            <div>
              <p className="">Website</p> 
              <p className="font-semibold text-gray-300">{user.website}</p>
            </div>
            <div>
              <p className="">Company</p> 
              <p className="font-semibold text-gray-300">{user.company?.name}</p>
            </div>   
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
// This component fetches and displays detailed information about a user based on the ID from the URL parameters.