import React from 'react';
import { useRouter } from 'next/navigation';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const UserCard = ({ user }) => {
    const router = useRouter();

    const handleViewDetails = () => {
        router.push(`/users/${user.id}`);
    };

    return (
        <Card className="profile-header">
            <CardContent>
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-12">
                        <Avatar
                            src={user.avatar || "https://bootdey.com/img/Content/avatar/avatar7.png"}
                            alt={user.profile.username}
                            sx={{ width: 100, height: 100 }}
                        />
                    </div>
                    <div className="col-lg-8 col-md-8 col-12">
                        <Typography variant="h4">
                            <strong>{user.profile.username}</strong>
                        </Typography>
                        <Typography variant="subtitle1" className="job_post">
                            {user.jobTitle}
                        </Typography>
                        <Typography variant="body2">
                            {user.profile.email}
                        </Typography>
                        <div className='fs-6 mt-3'>
                         
                            <Button variant="contained" color="primary" onClick={handleViewDetails}>
                                View Details
                            </Button>
                        </div>
                   
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default UserCard;
