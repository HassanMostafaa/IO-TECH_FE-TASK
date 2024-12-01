import { NextResponse } from "next/server";
import axios from "axios";

const baseUrl = "https://jsonplaceholder.typicode.com";

export async function GET() {
  try {
    const response = await axios.get(`${baseUrl}/users`);
    return NextResponse.json(response.data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch users" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const response = await axios.post(`${baseUrl}/users`, body);
    return NextResponse.json(response.data, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create user" },
      { status: 500 }
    );
  }
}
