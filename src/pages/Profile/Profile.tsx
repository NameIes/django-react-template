import { Box, Skeleton, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import AuthStore from "../../stores/AuthStore";
import { observer } from "mobx-react-lite";

const Profile = observer(() => {
  const [user, setUser] = useState({
    id: '',
    username: '',
    email: '',
    first_name: '',
    last_name: '',
  });

  useEffect(() => {
    AuthStore.current().then((response) => {
      setUser(response.data);
      AuthStore.setLoading(true);
      setTimeout(() => AuthStore.setLoading(false), 3000);
    });
  }, [setUser]);

  const notSet = <Typography variant="body1" component={'span'} color={'red'}>Not set</Typography>;

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', mt: 5 }}>
      <Box>
        <Typography variant="h4" sx={{my: 2}}>Profile</Typography>
        {AuthStore.isAuthInProgress ? <>
          <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
          <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
          <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
          <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
          <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
        </> : <>
          <Typography variant="body1">User ID: {user.id ? user.id : notSet}</Typography>
          <Typography variant="body1">Username: {user.username ? user.username : notSet}</Typography>
          <Typography variant="body1">Email: {user.email ? user.email : notSet}</Typography>
          <Typography variant="body1">First name: { user.first_name ? user.first_name : notSet }</Typography>
          <Typography variant="body1">Last name: { user.last_name ? user.last_name : notSet }</Typography>
        </>}
      </Box>
    </Box>
  );
});

export default Profile;
