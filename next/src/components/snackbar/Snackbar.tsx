'use client'

import { Alert, Snackbar } from '@mui/material'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useSnackbarState } from '@/hooks/useGlobalState'

const SuccessSnackbar = () => {
  const pathname = usePathname()
  const [snackbar, setSnackbar] = useSnackbarState()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (snackbar.pathname == pathname) {
      setOpen(true)
    }
  }, [snackbar, pathname])

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
    setSnackbar({ message: null, severity: null, pathname: null })
  }

  return (
    <>
      {snackbar.severity != null && (
        <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity={snackbar.severity}
            sx={{ width: '100%' }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      )}
    </>
  )
}

export default SuccessSnackbar
