import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Get allowed origins from environment variable or allow all in development
const allowedOrigins = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(',')
  : ['*']

export function middleware(request: NextRequest) {
  // Get the origin of the request
  const origin = request.headers.get('origin') || ''

  // Check if the origin is allowed or if we're allowing all origins
  const isAllowedOrigin = allowedOrigins.includes('*') || allowedOrigins.includes(origin)

  // Only handle API routes
  if (request.nextUrl.pathname.startsWith('/api/')) {
    // If origin is not allowed, return 403
    if (!isAllowedOrigin) {
      return new NextResponse(null, {
        status: 403,
        statusText: 'Forbidden',
      })
    }

    // Handle OPTIONS request for CORS preflight
    if (request.method === 'OPTIONS') {
      return new NextResponse(null, {
        status: 200,
        headers: {
          'Access-Control-Allow-Origin': origin,
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
          'Access-Control-Max-Age': '86400',
        },
      })
    }

    // Get the response
    const response = NextResponse.next()

    // Add CORS headers to the response
    response.headers.set('Access-Control-Allow-Origin', origin)
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization')

    return response
  }

  return NextResponse.next()
}

// Configure the middleware to only run on API routes
export const config = {
  matcher: '/api/:path*',
}
