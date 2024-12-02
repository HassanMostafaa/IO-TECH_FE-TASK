import { NextResponse } from 'next/server';
import axios from 'axios';

const baseUrl = process.env.BASE_URL || 'https://jsonplaceholder.typicode.com';

// Helper function to handle CORS
function corsResponse(response: NextResponse) {
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  return response;
}

// OPTIONS handler for CORS preflight
export async function OPTIONS() {
  return corsResponse(new NextResponse(null, { status: 200 }));
}

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const response = await axios.get(`${baseUrl}/users/${params.id}`);
    return corsResponse(NextResponse.json(response.data));
  } catch (error) {
    return corsResponse(
      NextResponse.json(
        { error: 'Failed to fetch user' },
        { status: 500 }
      )
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const response = await axios.put(`${baseUrl}/users/${params.id}`, body);
    return corsResponse(NextResponse.json(response.data));
  } catch (error) {
    return corsResponse(
      NextResponse.json(
        { error: 'Failed to update user' },
        { status: 500 }
      )
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await axios.delete(`${baseUrl}/users/${params.id}`);
    return corsResponse(new NextResponse(null, { status: 204 }));
  } catch (error) {
    return corsResponse(
      NextResponse.json(
        { error: 'Failed to delete user' },
        { status: 500 }
      )
    );
  }
}
