import '@testing-library/jest-dom'

// Prefer using undici's WHATWG-compatible Response in tests so behavior is close to runtime.
// If undici is not installed, fall back to a minimal polyfill that provides the
// static Response.json helper used by the route handlers.
try {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const undici = require('undici')
  if (
    undici &&
    typeof undici.Response !== 'undefined' &&
    typeof globalThis.Response === 'undefined'
  ) {
    globalThis.Response = undici.Response
  }
} catch (e) {
  if (typeof globalThis.Response === 'undefined') {
    class TestResponse {
      status: number
      private _body: string
      headers: { get: (name: string) => string | null }

      constructor(
        body: string,
        init?: { status?: number; headers?: Record<string, string> },
      ) {
        this._body = body
        this.status = init?.status ?? 200
        const headerObj = init?.headers ?? {}
        this.headers = { get: (name: string) => headerObj[name] ?? null }
      }

      json() {
        return Promise.resolve(this._body ? JSON.parse(this._body) : null)
      }

      static json(
        obj: unknown,
        init?: { status?: number; headers?: Record<string, string> },
      ) {
        return new TestResponse(JSON.stringify(obj), init)
      }
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ;(globalThis as any).Response = TestResponse
  }
}
