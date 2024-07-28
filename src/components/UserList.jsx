import React from "react";
import UserCard from "./UserCard";
import CircularProgress from "@mui/material/CircularProgress";

const UserList = ({ users, loading, onSelect }) => {
  if (loading) {
    return (
      <div className="loader-container">
        <CircularProgress />
      </div>
    );
  }

  if (!users.length) {
    return <p>No data to show</p>;
  }

  return (
    <div className="container profile-page mt-5">
      <div className="">
        {users.map((user) => (
          <div className="" key={user.id}>
            <UserCard user={user} onSelect={onSelect} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
