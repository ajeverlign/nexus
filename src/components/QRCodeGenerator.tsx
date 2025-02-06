'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function QRCodeGenerator() {
  const [name, setName] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const getLandingUrl = () => {
    if (!mounted || !name.trim()) return '';
    return `/landing?name=${encodeURIComponent(name)}`;
  };

  return (
    <div className="min-h-screen bg-white p-4 sm:p-6 flex flex-col">
      {/* Top Logos */}
      <div className="flex justify-center mb-4">
        <Image
          src="/logos/Nexus2025.jpg"
          alt="Nexus 2025"
          width={40}
          height={40}
          className="h-10 w-auto"
          priority
        />
      </div>

      {/* Title with Latent.AI logo */}
      <div className="flex items-center justify-center gap-2 mb-6">
        <Image
          src="/logos/LatentAilogo.png"
          alt="Latent.ai Logo"
          width={30}
          height={30}
          className="h-6 w-auto"
          priority
        />
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Latent.AI
        </h1>
      </div>

      <div className="text-center space-y-2 mb-6">
        <p className="text-lg sm:text-xl text-blue-600 font-semibold">
          🎁 One Step Away From Your Prize! 🎁
        </p>
        <p className="text-sm sm:text-base text-gray-600 px-2">
          Welcome to our special event! Enter your name to reveal your unique question 
          and a chance to win an exciting prize! 🏆
        </p>
      </div>

      {/* Name Input */}
      <div className="mb-6 px-2">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Enter Your Name
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Type your name..."
        />
      </div>

      {/* Link Display */}
      {mounted && name.trim() && (
        <div className="flex flex-col items-center px-2">
          <a
            href={getLandingUrl()}
            className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-colors text-center font-medium text-lg"
          >
            Reveal Your Question & Get Prize! 🎉
          </a>
        </div>
      )}

      {/* Footer */}
      <div className="mt-auto pt-6 text-center">
        <div className="flex items-center justify-center gap-2">
          <Image
            src="/logos/everlign.png"
            alt="Everlign Logo"
            width={20}
            height={20}
            className="w-5 h-auto"
            priority
          />
          <p className="text-xs sm:text-sm text-gray-500">
            Powered by Everlign. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}