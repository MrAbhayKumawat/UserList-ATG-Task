"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { usePathname } from "next/navigation";

import axios from "axios";
import Container from "@mui/material/Container";
import CircularProgress from "@mui/material/CircularProgress";
import UserDetails from "../../../components/UserDetails";

const UserPage = () => {
  const router = useRouter();
  const pathname = usePathname();
  const id = pathname;
  console.log(id);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log(user, "user");
  console.log(`https://602e7c2c4410730017c50b9d.mockapi.io${id}`, "url");

  useEffect(() => {
    if (id) {
      const fetchUser = async () => {
        try {
          const response = await axios.get(
            `https://602e7c2c4410730017c50b9d.mockapi.io${id}`
          );
          setUser(response.data);
        } catch (error) {
          console.error("Error fetching user:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchUser();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="loader-container">
        <CircularProgress />
      </div>
    );
  }

  if (!user) {
    return <p>No data to show</p>;
  }

  return (
    <Container className="loader-container col-xl-6 col-lg-7 col-md-12">
      <UserDetails user={user} />
    </Container>
  );
};

export default UserPage;
