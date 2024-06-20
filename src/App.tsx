import { Container } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';

import Logos from './components/Logos/Logos';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import Login from './pages/Login/Login';
import AuthStore from './stores/AuthStore';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  useEffect(() => {
    AuthStore.checkAuth();
  }, []);

  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <Logos />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App
