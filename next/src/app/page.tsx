'use client'

import { Box, Grid, Container, Pagination } from '@mui/material'
import camelcaseKeys from 'camelcase-keys'
import type { NextPage } from 'next'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import useSWR from 'swr'
import ArticleCard from '@/components/ArticleCard'
import Header from '@/components/Header'
import Loading from '@/components/loading/Loading'
import Error from '@/components/error/Error'
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
  const router = useRouter()
  const searchParams = useSearchParams()
  const page = Number(searchParams.get('page') ?? 1)
  const url = process.env.NEXT_PUBLIC_API_BASE_URL + '/articles/?page=' + page

  const { data, error } = useSWR(url, fetcher)
  if (error) return <Error />
  if (!data) return <Loading />

  const articles = camelcaseKeys(data.articles)
  const meta = camelcaseKeys(data.meta)

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    router.push('/?page=' + value)
  }

  return (
    <Box sx={{ backgroundColor: '#e6f2ff', minHeight: '100vh' }}>
      <Header />
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
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 6 }}>
          <Pagination
            count={meta.totalPages}
            page={meta.currentPage}
            onChange={handleChange}
          />
        </Box>
      </Container>
    </Box>
  )
}

export default Index
