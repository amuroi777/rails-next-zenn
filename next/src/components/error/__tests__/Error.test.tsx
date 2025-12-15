import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Error from '../Error'

describe('Error component', () => {
  test('エラーメッセージが表示される', () => {
    render(<Error />)

    expect(
      screen.getByText(
        '現在、システムに技術的な問題が発生しています。ご不便をおかけして申し訳ありませんが、復旧までしばらくお待ちください。',
      ),
    ).toBeInTheDocument()
  })
})
