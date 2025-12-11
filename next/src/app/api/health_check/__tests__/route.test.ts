import { GET } from '../route'

describe('GET /api/health_check', () => {
  test('200 OK と status: OK を返す', async () => {
    const response = GET()

    expect(response.status).toBe(200)

    const json = await response.json()
    expect(json).toEqual({ status: 'OK' })

    expect(response.headers.get('Content-Type')).toBe('application/json')
  })
})
