'use client';
import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';
import Image from 'next/image';
import { getQuestionByName } from '@/data/questions';

function WelcomeContent() {
  const searchParams = useSearchParams();
  const [mounted, setMounted] = useState(false);
  const [name, setName] = useState('Guest');

  useEffect(() => {
    setMounted(true);
    setName(searchParams.get('name') || 'Guest');
  }, [searchParams]);

  const question = getQuestionByName(name);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex flex-col">
      {/* Header with Logos */}
      <div className="bg-white shadow-md">
        <div className="px-4 py-3 flex items-center justify-between">
          <Image
            src="/logos/LatentAilogo.png"
            alt="Latent.ai Logo"
            width={100}
            height={30}
            className="h-6 w-auto"
            priority
          />
          <Image
            src="/logos/Nexus2025.jpg"
            alt="Nexus 2025"
            width={40}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-4 py-6">
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
          {/* Welcome Section */}
          <div className="text-center mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-800">
              Welcome to Latent.AI! 🚀
            </h1>
            <p className="text-lg text-gray-600 mb-4">
              Hello, {name}! 🎉
            </p>
            <div className="text-sm sm:text-base text-blue-600 italic border-l-4 border-blue-600 pl-3 py-2 bg-blue-50">
              &ldquo;At Latent.AI, we&apos;re revolutionizing edge AI deployment, making intelligent solutions accessible and efficient.&rdquo;
            </div>
          </div>

          {/* Question Section */}
          <div className="bg-blue-50 rounded-lg p-4 mb-6">
            <h2 className="text-lg font-semibold text-blue-800 mb-3">
              Your Special Question:
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
              {question}
            </p>
            <div className="mt-4 bg-white p-3 rounded-lg border border-blue-200">
              <p className="text-sm text-gray-600 mb-2">
                🎯 <span className="font-semibold">Your Mission:</span> Find the person who wrote this question at our booth!
              </p>
              <p className="text-sm text-gray-600">
                💡 <span className="font-semibold">Hint:</span> Look for someone wearing a Latent.AI badge who&apos;s an expert in this topic.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gray-50 rounded-lg p-4">
            <p className="text-sm sm:text-base font-medium text-gray-700">
              Your prize awaits at the Latent.AI booth! 🎁
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="py-3 px-4 text-center bg-white mt-auto">
        <div className="flex items-center justify-center gap-2">
          <Image
            src="/logos/everlign.png"
            alt="Everlign Logo"
            width={16}
            height={16}
            className="w-4 h-auto"
            priority
          />
          <p className="text-xs text-gray-500">
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
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    }>
      <WelcomeContent />
    </Suspense>
  );
}