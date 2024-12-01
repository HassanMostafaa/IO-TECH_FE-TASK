import axios from "axios";

export default async function NextjsPage() {

  const allUsers = async () => {
    const response = await axios.get('http://localhost:3000/api/users');
    return response.data;
  }

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold text-blue-600">Hello Tailwind!</h1>
      </div>
    </div>
  );
}
