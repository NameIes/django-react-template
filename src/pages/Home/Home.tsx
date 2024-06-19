import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5, flexDirection: 'column' }}>
      <Typography textAlign={'center'} variant="h5" fontWeight={'bold'}>Counter is {count}</Typography>
      <Button onClick={() => setCount(count + 1)} variant="contained" sx={{ px: 3, mx: 'auto', mt: 2 }}>Click me</Button>
    </Box>
  );
}
