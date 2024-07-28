import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

const UserDetails = ({ user }) => {
  if (!user) {
    return (
      <Container>
        <Typography variant="h6" align="center">
          Select a user to see details
        </Typography>
      </Container>
    );
  }

  return (
    <Card className="profile-header">
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Avatar
              src={
                user.avatar ||
                "https://bootdey.com/img/Content/avatar/avatar7.png"
              }
              alt={user.profile.username}
              sx={{ width: 100, height: 100 }}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h4">
              <strong>{user.profile.username}</strong>
            </Typography>
            <Typography variant="body2">
              <strong>Job title -</strong> {user.jobTitle}
            </Typography>
            <Typography variant="body2">
              <strong>Bio - </strong>
              {user.Bio}
            </Typography>
            <Typography variant="body2">
              <strong>Email -</strong> {user.profile.email}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default UserDetails;
