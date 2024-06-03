import { Box, Button, TextField } from "@mui/material";
import AuthStore from "../../store";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let error_flag = false;

    setUsernameError(false);
    setPasswordError(false);

    if (username === "") {
      setUsernameError(true);
      error_flag = true;
    }
    if (password === "") {
      setPasswordError(true);
      error_flag = true;
    }

    if (error_flag) return;

    const login = async () => {
      const res = await AuthStore.login(username, password);
      if (res) {
        navigate("/home");
      } else {
        setUsernameError(true);
        setPasswordError(true);
      }
    };

    login();
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
        }}
        onSubmit={handleSubmit}
      >
        <TextField
          variant="outlined"
          label="Username"
          id="username"
          size="small"
          required
          value={username}
          error={usernameError}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          variant="outlined"
          label="Password"
          id="password"
          size="small"
          required
          type="password"
          value={password}
          error={passwordError}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" fullWidth type="submit">
          Login
        </Button>
      </form>
    </Box>
  );
}
