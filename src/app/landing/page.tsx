'use client';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Image from 'next/image';

function WelcomeContent() {
  const searchParams = useSearchParams();
  const name = searchParams.get('name') || 'Guest';

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 min-h-screen">
      {/* Header with Logos */}
      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Image
              src="/logos/NexusByEverlign.jpg"
              alt="Nexus Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
            <Image
              src="/logos/LatentAilogo.png"
              alt="Latent.ai Logo"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </div>
          <Image
            src="/logos/Nexus2025.jpg"
            alt="Nexus 2025"
            width={60}
            height={60}
            className="h-12 w-auto"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 backdrop-blur-lg bg-opacity-90">
          {/* Welcome Section */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              Welcome to Nexus 2025
            </h1>
            <p className="text-lg text-gray-600">
              Hello, {name}!
            </p>
          </div>

          {/* Question Section */}
          <div className="bg-blue-50 rounded-xl p-6 mb-8">
            <h2 className="text-xl font-semibold text-blue-800 mb-4">
              Your Question:
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              What innovative approaches would you suggest for optimizing AI model performance in edge computing scenarios?
            </p>
          </div>

          {/* Response Section */}
          <div className="space-y-4">
            <button 
              onClick={() => alert('Response submitted!')}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium text-lg"
            >
              Submit Response
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LandingPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    }>
      <WelcomeContent />
    </Suspense>
  );
}