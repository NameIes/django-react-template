import { Box, Button, List, ListItem, TextField, Typography } from "@mui/material";
import AuthStore from "../../stores/AuthStore";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import { red } from "@mui/material/colors";

const Login = observer(() => {
  const navigate = useNavigate();
  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    AuthStore.setUsername((event.target as HTMLInputElement).value);
  }
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    AuthStore.setPassword((event.target as HTMLInputElement).value);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    AuthStore.login().then(() => navigate('/profile'));
  };

  const { values, errors, isAuthInProgress } = AuthStore;

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', mt: 5 }}>
      <form autoComplete="off" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Typography textAlign={'center'} variant="h4" sx={{my: 2}}>Login</Typography>
        {errors.length > 0 && (
          <List sx={{ my: 2, backgroundColor: red[300], borderRadius: 1 }}>
            {errors && errors.map((error) => <ListItem sx={{ color: 'white' }} key={error}>{error}</ListItem>)}
          </List>
        )}
        <TextField
          label="Username"
          onChange={handleUsernameChange}
          required
          variant="outlined"
          color="secondary"
          value={values.username}
        ></TextField>
        <TextField
          label="Password"
          onChange={handlePasswordChange}
          required
          variant="outlined"
          type="password"
          color="secondary"
          value={values.password}
        ></TextField>
        <Button
          disabled={isAuthInProgress}
          type="submit"
          variant="contained"
          sx={{ px: 3, mx: 'auto' }}
        >Login</Button>
      </form>
    </Box>
  );
});

export default Login;
