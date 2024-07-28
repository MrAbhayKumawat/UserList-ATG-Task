"use client";
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Container from '@mui/material/Container';
import UserList from '../components/UserList';

const Home = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchUsers = useCallback(async () => {
        try {
            const { data } = await axios.get('https://602e7c2c4410730017c50b9d.mockapi.io/users');
            setUsers(data);
        } catch (error) {
            console.error('Error fetching users:', error);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    return (
        <Container>
            <UserList users={users} loading={loading} />
        </Container>
    );
};

export default Home;
