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

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      {/* Header with Logos */}
      <div className="bg-gray-800 shadow-md">
        <div className="px-4 py-3 flex items-center justify-between">
          <div className="relative w-32 h-10 sm:w-40 sm:h-12">
            <Image
              src="/logos/LatentAilogo.png"
              alt="Latent.ai Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="relative w-16 h-16 sm:w-20 sm:h-20">
            <Image
              src="/logos/Nexus2025.jpg"
              alt="Nexus 2025"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-4 py-6">
        <div className="bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6">
          {/* Welcome Section */}
          <div className="text-center mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-white">
              Welcome to Latent.AI! 🚀
            </h1>
            <p className="text-lg text-gray-300 mb-4">
              Hello, {name}! 🎉
            </p>
            <div className="text-sm sm:text-base text-blue-400 italic border-l-4 border-blue-500 pl-3 py-2 bg-gray-700 rounded-r-lg">
              &ldquo;At Latent.AI, we&apos;re revolutionizing edge AI deployment, making intelligent solutions accessible and efficient.&rdquo;
            </div>
          </div>

          {/* Question Section */}
          <div className="bg-gray-700 rounded-lg p-4 mb-6">
            <h2 className="text-lg font-semibold text-blue-300 mb-3">
              Your Special Question:
            </h2>
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed mb-4">
              {question}
            </p>
            <div className="mt-4 bg-gray-800 p-3 rounded-lg border border-gray-600">
              <p className="text-sm text-gray-300 mb-2">
                🎯 <span className="font-semibold">Your Mission:</span> Find the person who wrote this question at our booth!
              </p>
              <p className="text-sm text-gray-300">
                💡 <span className="font-semibold">Hint:</span> Look for someone wearing a Latent.AI badge who&apos;s an expert in this topic.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gray-700 rounded-lg p-4">
            <p className="text-sm sm:text-base font-medium text-gray-200">
              Your prize awaits at the Latent.AI booth! 🎁
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="py-3 px-4 text-center bg-gray-800 mt-auto">
        <div className="flex items-center justify-center gap-2">
          <div className="relative w-4 h-4">
            <Image
              src="/logos/everlign.png"
              alt="Everlign Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <p className="text-xs text-gray-400">
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
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-400"></div>
      </div>
    }>
      <WelcomeContent />
    </Suspense>
  );
}