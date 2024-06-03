import { useEffect } from 'react'

import AuthStore from "./store";
import reactLogo from '/react.svg'
import viteLogo from '/vite.svg'
import djangoLogo from '/django.svg'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { Box, Button, ButtonGroup, Container, Grid, Typography } from '@mui/material';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';
import { observer } from 'mobx-react-lite';
import { grey } from '@mui/material/colors';


function App() {
  useEffect(() => {
    AuthStore.checkAuth();
  }, []);

  const ObserveAuth = observer(({auth}: {auth: typeof AuthStore}) => {
    return (
      <>
        {auth.isAuth ?
          <Button sx={{ px: 4 }} onClick={auth.logout}>Logout</Button>
        :
          <Button component={Link} to="/login" sx={{ px: 4 }}>Login</Button>
        }
      </>
    );
  });

  return (
    <Container maxWidth="xl">
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        py: 4
      }}>
        <Grid container sx={{ maxWidth: '600px' }}>
          <Grid item xs={4} sx={{ display: 'flex', alignItems: 'center' }}>
            <a href="https://www.djangoproject.com/" target="_blank">
              <img src={djangoLogo} alt="Django logo" style={{
                width: '100%',
                maxHeight: '100px',
              }} />
            </a>
          </Grid>
          <Grid item xs={4}>
            <a href="https://vitejs.dev" target="_blank">
              <img src={viteLogo} alt="Vite logo" style={{
                width: '100%',
                maxHeight: '100px',
              }} />
            </a>
          </Grid>
          <Grid item xs={4}>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} alt="React logo" style={{
                width: '100%',
                maxHeight: '100px',
              }} />
            </a>
          </Grid>
        </Grid>
        <h1>Django + Vite + React</h1>

        <Box>
          <BrowserRouter>
            <ButtonGroup variant='text' fullWidth sx={{ my: 3 }}>
              <Button component={Link} to="/" sx={{ px: 4 }}>Home</Button>
              <ObserveAuth auth={AuthStore} />
              <Button component={Link} to="/home" sx={{ px: 4 }}>Profile</Button>
            </ButtonGroup>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/home' element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              } />
              <Route path='*' element={<div>404</div>} />
            </Routes>
          </BrowserRouter>
        </Box>

        <p>
          Click on the logos to learn more
        </p>
        <p>
          Or type
          <Typography component="span" sx={{ backgroundColor: grey[200], mx: '4px', p: '4px', borderRadius: 1 }}>just docs</Typography>
          in your shell
        </p>
      </Box>
    </Container>
  )
}


export default App
