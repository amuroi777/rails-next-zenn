import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { usePathname } from 'next/navigation'
import SuccessSnackbar from '../Snackbar'
import { useSnackbarState } from '@/hooks/useGlobalState'

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}))

jest.mock('@/hooks/useGlobalState', () => ({
  useSnackbarState: jest.fn(),
}))

describe('Snackbar Component', () => {
  const mockSetSnackbar = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('スナックバーの状態が空の時は何も表示されないこと', () => {
    ;(useSnackbarState as jest.Mock).mockReturnValue([
      { message: null, severity: null, pathname: null },
      mockSetSnackbar,
    ])
    ;(usePathname as jest.Mock).mockReturnValue('/')

    const { container } = render(<SuccessSnackbar />)
    expect(container.firstChild).toBeNull()
  })

  test('pathnameが一致する場合にスナックバーが表示されること', () => {
    ;(useSnackbarState as jest.Mock).mockReturnValue([
      { message: 'Success', severity: 'success', pathname: '/articles' },
      mockSetSnackbar,
    ])
    ;(usePathname as jest.Mock).mockReturnValue('/articles')

    render(<SuccessSnackbar />)
    expect(screen.getByText('Success')).toBeInTheDocument()
  })

  test('pathnameが一致しない場合にスナックバーが表示されないこと', () => {
    ;(useSnackbarState as jest.Mock).mockReturnValue([
      { message: 'Success', severity: 'success', pathname: '/articles' },
      mockSetSnackbar,
    ])
    ;(usePathname as jest.Mock).mockReturnValue('/profile')

    const { queryByText } = render(<SuccessSnackbar />)
    expect(queryByText('Success')).toBeNull()
  })
})
