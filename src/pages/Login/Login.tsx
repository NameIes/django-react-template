import { Box, Button, FormControl, TextField } from "@mui/material";

export default function Login() {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <FormControl sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
        <TextField variant="outlined" label="Username" id="username" size="small" />
        <TextField variant="outlined" label="Password" id="password" size="small" />
        <Button variant="contained" fullWidth>Login</Button>
      </FormControl>
    </Box>
  )
}
