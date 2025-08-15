'use client'

import {
  Button,
  Typography,
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  CardActions,
} from '@mui/material'
import Link from 'next/link'

export default function Home() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Rails + Next.js App
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          Full-stack application with Rails API and Next.js frontend
        </Typography>
      </Box>

      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 6, lg: 4 }}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                Material-UI Demo
              </Typography>
              <Typography variant="body1" paragraph>
                Material-UIコンポーネントとEmotionを使用したボタンのデモページ
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                href="/hello-mui"
                fullWidth
              >
                MUI Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 6, lg: 4 }}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                Rails API Test
              </Typography>
              <Typography variant="body1" paragraph>
                Rails APIサーバーとの疎通確認ページ
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="outlined"
                color="secondary"
                component={Link}
                href="/api-test"
                fullWidth
              >
                API Test
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 6, lg: 4 }}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                技術スタック
              </Typography>
              <Typography variant="body2" color="text.secondary">
                • Next.js 14.2.5 with App Router
              </Typography>
              <Typography variant="body2" color="text.secondary">
                • Material-UI with Emotion
              </Typography>
              <Typography variant="body2" color="text.secondary">
                • TypeScript
              </Typography>
              <Typography variant="body2" color="text.secondary">
                • Rails 7.1.5 API
              </Typography>
              <Typography variant="body2" color="text.secondary">
                • MySQL 8.0.32
              </Typography>
              <Typography variant="body2" color="text.secondary">
                • Docker containerization
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}