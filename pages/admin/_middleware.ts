import { NextRequest, NextResponse } from 'next/server'

export function middleware (req: NextRequest) {
  const accessToken = req.cookies['accessToken']
  let {pathname} = req.nextUrl
 
  if (accessToken) {
     NextResponse.next()
   
  } else {
    NextResponse.next()
  }
}
