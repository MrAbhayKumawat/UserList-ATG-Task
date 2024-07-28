import React from 'react';
import UserCard from './UserCard';
import CircularProgress from '@mui/material/CircularProgress';

const UserList = ({ users, loading }) => {
    if (loading) {
        return    <div className="loader-container">
        <CircularProgress />
    </div>;
    }

    if (!users.length) {
        return <p>No data to show</p>;
    }

    return (
        <div className="container profile-page">
            <div className="row">
                {users.map(user => (
                    <div className="col-xl-6 col-lg-7 col-md-12" key={user.id}>
                        <UserCard user={user} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserList;
