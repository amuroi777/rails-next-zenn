import { Box, Grid, Container } from '@mui/material'
import camelcaseKeys from 'camelcase-keys'
import type { NextPage } from 'next'
import Link from 'next/link'
import useSWR from 'swr'
import ArticleCard from '@/components/ArticleCard'
import { fetcher } from '@/utils'

type ArticleProps = {
  id: number
  title: string
  createdAt: string
  fromToday: string
  user: {
    name: string
  }
}

const Index: NextPage = () => {
  const url = 'http://localhost:3002/api/v1/articles'

  const { data, error } = useSWR(url, fetcher)
  if (error) return <div>An error</div>
  if (!data) return <div>Loading...</div>

  const articles = camelcaseKeys(data.articles)

  return (
    <Box sx={{ backgroundColor: '#e6f2ff', minHeight: '100vh' }}>
      <Container maxWidth="md" sx={{ pt: 6 }}>
        <Grid container spacing={4}>
          {articles.map((article: ArticleProps, i: number) => (
              <Grid key={i} size={{ xs: 12, md: 6 }}>
                <Link href={`/articles/${article.id}`} passHref legacyBehavior>
                  <a style={{ textDecoration: 'none' }}>
                    <ArticleCard
                      title={article.title}
                      fromToday={article.fromToday}
                      userName={article.user.name}
                    />
                  </a>
                </Link>
              </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default Index
