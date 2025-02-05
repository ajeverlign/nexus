'use client';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Image from 'next/image';
import { getQuestionByName } from '@/data/questions';

function WelcomeContent() {
  const searchParams = useSearchParams();
  const name = searchParams.get('name') || 'Guest';
  const question = getQuestionByName(name);

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 min-h-screen">
      {/* Header with Logos */}
      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Image
              src="/logos/LatentAilogo.png"
              alt="Latent.ai Logo"
              width={120}
              height={40}
              className="h-8 w-auto"
              priority
            />
            <Image
              src="/logos/Nexus2025.jpg"
              alt="Nexus 2025"
              width={60}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 backdrop-blur-lg bg-opacity-90">
          {/* Welcome Section */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold mb-3 text-center text-gray-800 flex items-center justify-center">
              Welcome to Latent.AI! 🚀
            </h1>
            <p className="text-lg text-gray-600">
              Hello, {name}! 🎉
            </p>
          </div>

          {/* Question Section */}
          <div className="bg-blue-50 rounded-xl p-6 mb-8">
            <h2 className="text-xl font-semibold text-blue-800 mb-4">
              Your Prize Question:
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {question}
            </p>
          </div>

          {/* Response Section */}
          <div className="space-y-4">
            <textarea 
              className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type your answer here..."
            />
            <button 
              onClick={() => alert('Thanks for your response! Our team will review it shortly.')}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium text-lg"
            >
              Submit Response
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="fixed bottom-4 left-0 right-0 text-center">
        <div className="flex items-center justify-center gap-2">
          <Image
            src="/logos/everlign.png"
            alt="Everlign Logo"
            width={24}
            height={24}
            className="w-6 h-auto"
            priority
          />
          <p className="text-sm text-gray-500">
            Powered by Everlign. All rights reserved.
          </p>
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