import { NextRequest, NextResponse } from 'next/server'

export function middleware (req: NextRequest) {
  const accessToken = req.cookies['accessToken']
  if (accessToken) {
    req.headers.append("accessToken",accessToken)
    return NextResponse.next()
  } else {
    return NextResponse.json({
      message: `Unauthenticated User`,
      statusCode: 401
    })
  }
}
