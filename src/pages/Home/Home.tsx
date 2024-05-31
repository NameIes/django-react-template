import { Box, Button } from "@mui/material";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
     }}>
      <Button variant="contained" onClick={() => setCount((count) => count + 1)}>
        Counter is {count}
      </Button>
      <p>
        Edit <code>frontend/src/pages/Home/Home.tsx</code> and save to test HMR
      </p>
    </Box>
  );
}
