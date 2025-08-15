'use client'

import { Button, Container, Box, Typography } from '@mui/material'

export default function HelloMui() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ py: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Material-UI Buttons Demo
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Button variant="contained" sx={{ padding: 3 }}>
            Button1
          </Button>
          <Button variant="outlined" sx={{ padding: 3 }}>
            Button2
          </Button>
          <Button variant="contained" color="error" sx={{ padding: 3 }}>
            Button3
          </Button>
        </Box>
      </Box>
    </Container>
  )
}