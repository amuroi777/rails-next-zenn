'use client'

import { Container, Box, Typography, Card, CardContent, CircularProgress } from '@mui/material'
import useSWR from 'swr'
import { fetcher } from '@/utils'

export default function ApiTest() {
  const url = 'http://localhost:3002/api/v1/health_check'
  const { data, error } = useSWR(url, fetcher)

  if (error) {
    return (
      <Container maxWidth="sm">
        <Box sx={{ py: 4 }}>
          <Card>
            <CardContent>
              <Typography variant="h5" color="error" gutterBottom>
                エラーが発生しました
              </Typography>
              <Typography variant="body1">
                Rails APIサーバーに接続できませんでした。
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                サーバーが起動していることを確認してください。
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Container>
    )
  }

  if (!data) {
    return (
      <Container maxWidth="sm">
        <Box sx={{ py: 4, textAlign: 'center' }}>
          <CircularProgress />
          <Typography variant="h6" sx={{ mt: 2 }}>
            Loading...
          </Typography>
        </Box>
      </Container>
    )
  }

  return (
    <Container maxWidth="sm">
      <Box sx={{ py: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Rails API 疎通確認
        </Typography>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              接続成功！
            </Typography>
            <Typography variant="body1">
              レスポンスメッセージ: {data.message}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  )
}