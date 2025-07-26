import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      window.location.href = '/';
      return;
    }

    axios
      .get('http://localhost:5000/api/protected', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setUser(res.data.user);
        setLoading(false);
      })
      .catch(() => {
        localStorage.removeItem('token');
        window.location.href = '/';
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-100 to-green-300 text-center px-4">
      <h1 className="text-3xl font-bold text-green-800 mb-2">Welcome, {user.username}</h1>
      <p className="text-gray-700 text-lg">You’ve accessed a protected route.</p>
      <button
        className="mt-6 text-sm text-red-600 hover:underline"
        onClick={() => {
          localStorage.removeItem('token');
          window.location.href = '/';
        }}
      >
        Logout
      </button>
    </div>
  );
}
