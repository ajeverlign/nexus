'use client';
import { useSearchParams } from 'next/navigation';

export default function LandingPage() {
  const searchParams = useSearchParams();
  const name = searchParams.get('name') || 'Guest';

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        {/* Logos */}
        <div className="flex justify-between items-center mb-6">
          <div className="w-12 h-12 bg-blue-500 rounded-full"></div>
          <div className="w-12 h-12 bg-green-500 rounded-full"></div>
          <div className="w-12 h-12 bg-red-500 rounded-full"></div>
        </div>
        
        {/* Welcome Message */}
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Welcome, {name}!
        </h1>
        
        {/* Button */}
        <div className="text-center">
          <button 
            onClick={() => alert('Hello ' + name + '!')}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Click Me
          </button>
        </div>
      </div>
    </div>
  );
}