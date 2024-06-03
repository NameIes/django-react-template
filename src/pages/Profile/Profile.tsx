import { useEffect, useState } from "react"
import ProfileService from "../../services/ProfileService"
import { Skeleton, Typography } from "@mui/material";

import "./Profile.css";

export default function Profile() {
  const [isLoading, setIsLoading] = useState(false);
  const [profile, setProfile] = useState({
    'pk': 0,
    'username': '',
    'email': '',
    'first_name': '',
    'last_name': '',
  });

  useEffect(() => {
    setIsLoading(true);
    const getMe = async () => {
      const res = await ProfileService.getMe();
      setProfile(res.data);
      setTimeout(() => setIsLoading(false), 1000);
    }
    getMe();
  }, []);

  return (
    <>
      {isLoading ?
        <div>
          <Skeleton variant="text" />
          <Skeleton variant="text" />
          <Skeleton variant="text" />
          <Skeleton variant="text" />
          <Skeleton variant="text" />
        </div>
      :
        <div>
          <Typography variant="body1">
            UserID: <span className="text-dark">{profile.pk}</span>
          </Typography>
          <Typography variant="body1">
            Username: <span className="text-dark">{profile.username}</span>
          </Typography>
          <Typography variant="body1">
            Email: <span className="text-dark">{profile.email}</span>
          </Typography>
          <Typography variant="body1">
            First name: <span className="text-dark">{profile.first_name}</span>
          </Typography>
          <Typography variant="body1">
            Last name: <span className="text-dark">{profile.last_name}</span>
          </Typography>
        </div>
      }
    </>
  )
}
