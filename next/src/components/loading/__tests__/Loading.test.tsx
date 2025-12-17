import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Loading from '../Loading'

describe('Loading component', () => {
  test('ローディング用の画像が表示されること', () => {
    render(<Loading />)

    const loadingImage = screen.getByRole('img', {
      name: 'loading...',
    }) as HTMLImageElement

    expect(loadingImage).toBeInTheDocument()
  })
})
