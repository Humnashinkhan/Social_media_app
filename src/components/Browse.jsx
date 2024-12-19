import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Browse = () => {
   
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (!userData) {
      navigate("/"); 
    } else {
      setUser(JSON.parse(userData));
    }
  }, [navigate]);
  

  

  return (
    <div className="min-h-screen">
      {user ? (
        <div className="flex">
          <img
            src={user.profilePic}
            alt="Profile"
            className="w-24 h-24 ml-5 mt-5 p-1 rounded-full shadow-md"
          />
          <div className="mt-12 ml-5">
          <h2>Welcome Back </h2>
          <h2 className="text-xl font-bold">{user.name}</h2>
          <p className="mt-2 text-gray-600">{user.email}</p>
            </div>
        </div>
    ) : (
        <p>Loading...</p>
      )}
      <div className="mt-16 ml-8">
        <h1 className='text-2xl font-bold'>Feeds</h1>
        <button>Add</button>
      </div>
    </div>
  );
};

export default Browse;
