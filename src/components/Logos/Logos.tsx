import { Box } from "@mui/material";

import djangoLogo from '/django.svg';
import reactLogo from '/react.svg';
import viteLogo from '/vite.svg';

export default function Logos() {
  const imageStyle = {
    maxHeight: 100,
    height: 100,
    maxWidth: '100%',
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, mt: 5 }}>
      <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} alt="Vite logo" style={imageStyle} />
      </a>
      <a href="https://www.djangoproject.com/" target="_blank">
        <img src={djangoLogo} alt="Django logo" style={imageStyle} />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} alt="React logo" style={imageStyle} />
      </a>
    </Box>
  )
}
