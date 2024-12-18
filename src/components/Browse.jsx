import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Browse = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (!userData) {
      navigate("/"); // Redirect to login if user data is missing
    } else {
      setUser(JSON.parse(userData));
    }
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {user ? (
        <div className="text-center">
          <img
            src={user.profilePic}
            alt="Profile"
            className="w-24 h-24 rounded-full shadow-md"
          />
          <h2 className="mt-4 text-xl font-semibold">{user.name}</h2>
          <p className="mt-2 text-gray-600">{user.email}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Browse;
