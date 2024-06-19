import { Box, Button, ButtonGroup } from "@mui/material";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import AuthStore from "../../stores/AuthStore";

const Navbar = observer(() => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
      <ButtonGroup variant="text" aria-label="Basic button group">
        <Button component={Link} sx={{ px: 3 }} to="/">Home</Button>
        {AuthStore.isAuth ? <>
          <Button sx={{ px: 3 }} onClick={() => AuthStore.logout()}>Logout</Button>
        </> : <>
          <Button component={Link} sx={{ px: 3 }} to="/login">Login</Button>
        </>}
        <Button component={Link} sx={{ px: 3 }} to="/profile">Profile</Button>
      </ButtonGroup>
    </Box>
  )
});

export default Navbar;
