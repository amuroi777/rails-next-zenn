jest.mock('zenn-content-css', () => ({}))

import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import MarkdownText from '../MarkdownText'

jest.mock('marked', () => ({
  marked: (content: string) => `<h1>${content}</h1>`,
}))

describe('MarkdownText', () => {
  test('MarkdonwnがHTML値してレンダリングされること', () => {
    const markdown = '見出し1'

    render(<MarkdownText content={markdown} />)

    const heading = screen.getByRole('heading', { level: 1 })

    expect(heading).toHaveTextContent('見出し1')
    expect(screen.getByText('見出し1')).toBeInTheDocument()
  })
})
