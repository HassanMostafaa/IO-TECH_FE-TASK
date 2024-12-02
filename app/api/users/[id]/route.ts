import { NextResponse } from 'next/server';
import axios from 'axios';

const baseUrl = process.env.BASE_URL || 'https://jsonplaceholder.typicode.com';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const response = await axios.get(`${baseUrl}/users/${params.id}`);
    return NextResponse.json(response.data);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch user' },
      { status: 500 }
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
    return NextResponse.json(response.data);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to update user' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await axios.delete(`${baseUrl}/users/${params.id}`);
    return new NextResponse(null, { status: 204 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to delete user' },
      { status: 500 }
    );
  }
}
