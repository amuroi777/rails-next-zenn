export function GET() {
  // JSON を返す（レスポンスコードはデフォルト 200）
  return Response.json(
    { status: 'OK' },
    { status: 200, headers: { 'Content-Type': 'application/json' } },
  )
}
