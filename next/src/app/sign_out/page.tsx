'use client'

import { NextPage } from 'next'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useSnackbarState, useUserState } from '@/hooks/useGlobalState'

const SignOut: NextPage = () => {
  const router = useRouter()
  const [, setUser] = useUserState()
  const [, setSnackbar] = useSnackbarState()

  useEffect(() => {
    localStorage.clear()
    setUser({
      id: 0,
      name: '',
      email: '',
      isSignedIn: false,
      isFetched: true,
    })
    setSnackbar({
      message: 'サインアウトに成功しました',
      severity: 'success',
      pathname: '/',
    })
    // 次のtickで遷移して、スナックバー状態を確実に反映させる
    setTimeout(() => {
      router.push('/')
    }, 0)
  }, [router, setUser, setSnackbar])

  return <></>
}

export default SignOut
