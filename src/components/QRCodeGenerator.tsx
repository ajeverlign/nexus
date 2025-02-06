'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function QRCodeGenerator() {
  const [name, setName] = useState('');
  const [mounted, setMounted] = useState(false);
  const [url, setUrl] = useState('');

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && name.trim()) {
      const path = `/landing?name=${encodeURIComponent(name.trim())}`;
      setUrl(path);
    } else {
      setUrl('');
    }
  }, [name, mounted]);

  return (
    <div className="min-h-screen bg-white p-4 sm:p-6 flex flex-col">
      {/* Top Nexus Logo - Made Much Bigger */}
      <div className="flex justify-center mb-8">
        <Image
          src="/logos/Nexus2025.jpg"
          alt="Nexus 2025"
          width={200}
          height={200}
          className="h-32 w-auto"
          priority
        />
      </div>

      {/* Latent.AI Title Section - Enhanced */}
      <div className="flex flex-col items-center justify-center gap-3 mb-8">
        <Image
          src="/logos/LatentAilogo.png"
          alt="Latent.ai Logo"
          width={180}
          height={60}
          className="h-12 w-auto"
          priority
        />
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mt-2">
          Latent.AI
        </h1>
      </div>

      {/* Content Section */}
      <div className="text-center space-y-3 mb-8">
        <p className="text-xl sm:text-2xl text-blue-600 font-semibold">
          🎁 One Step Away From Your Prize! 🎁
        </p>
        <p className="text-base sm:text-lg text-gray-600 px-2 max-w-md mx-auto">
          Welcome to our special event! Enter your name to reveal your unique question 
          and a chance to win an exciting prize! 🏆
        </p>
      </div>

      {/* Name Input - Made More Prominent */}
      <div className="mb-8 px-4 max-w-md mx-auto w-full">
        <label className="block text-base font-medium text-gray-700 mb-2">
          Enter Your Name
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
          placeholder="Type your name..."
        />
      </div>

      {/* Link Display - Enhanced Button */}
      {mounted && url && (
        <div className="flex flex-col items-center px-4 max-w-md mx-auto w-full">
          <a
            href={url}
            className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-colors text-center font-medium text-lg shadow-md hover:shadow-lg"
          >
            Reveal Your Question & Get Prize! 🎉
          </a>
        </div>
      )}

      {/* Footer - Kept Minimal */}
      <div className="mt-auto pt-8 text-center">
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