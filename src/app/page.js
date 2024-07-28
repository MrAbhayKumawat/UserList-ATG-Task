// pages/index.js
"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

import UserList from "../components/UserList";
import UserDetails from "../components/UserDetails";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://602e7c2c4410730017c50b9d.mockapi.io/users"
        );
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="d-flex justify-content-between px-5 gap-5">
      <div>
        <UserList users={users} loading={loading} onSelect={setSelectedUser} />
      </div>
      <div>
        <UserDetails user={selectedUser} />
      </div>
    </div>
  );
};

export default Home;
