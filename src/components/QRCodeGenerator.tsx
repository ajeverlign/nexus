'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function QRCodeGenerator() {
  const [name, setName] = useState('');
  const [mounted, setMounted] = useState(false);
  const [linkUrl, setLinkUrl] = useState('');

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;
    setName(newName);
    if (mounted && newName.trim()) {
      setLinkUrl(`/landing?name=${encodeURIComponent(newName.trim())}`);
    } else {
      setLinkUrl('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 p-4 sm:p-6 flex flex-col">
      {/* Top Nexus Logo - Much Bigger for Mobile */}
      <div className="flex justify-center mb-6 mt-4">
        <div className="relative w-48 h-48 sm:w-56 sm:h-56">
          <Image
            src="/logos/Nexus2025.jpg"
            alt="Nexus 2025"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Latent.AI Title Section */}
      <div className="flex flex-col items-center justify-center gap-3 mb-8">
        <div className="relative w-48 h-16 sm:w-56 sm:h-20">
          <Image
            src="/logos/LatentAilogo.png"
            alt="Latent.ai Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-white mt-2">
          Latent.AI
        </h1>
      </div>

      {/* Content Section */}
      <div className="text-center space-y-3 mb-8">
        <p className="text-xl sm:text-2xl text-blue-400 font-semibold">
          🎁 One Step Away From Your Prize! 🎁
        </p>
        <p className="text-base sm:text-lg text-gray-300 px-2 max-w-md mx-auto">
          Welcome to our special event! Enter your name to reveal your unique question 
          and a chance to win an exciting prize! 🏆
        </p>
      </div>

      {/* Name Input */}
      <div className="mb-8 px-4 max-w-md mx-auto w-full">
        <label className="block text-base font-medium text-gray-300 mb-2">
          Enter Your Name
        </label>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          className="w-full px-4 py-3 text-lg bg-gray-800 border-2 border-gray-700 rounded-lg 
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                     shadow-sm text-white placeholder-gray-500"
          placeholder="Type your name..."
        />
      </div>

      {/* Link Display */}
      {mounted && linkUrl && (
        <div className="flex flex-col items-center px-4 max-w-md mx-auto w-full">
          <a
            href={linkUrl}
            className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 
                       active:bg-blue-800 transition-colors text-center font-medium text-lg 
                       shadow-md hover:shadow-lg"
          >
            Reveal Your Question & Get Prize! 🎉
          </a>
        </div>
      )}

      {/* Footer with Bigger Everlign Logo */}
      <div className="mt-auto pt-8 text-center">
        <div className="flex items-center justify-center gap-2">
          <div className="relative w-12 h-12">
            <Image
              src="/logos/everlign.png"
              alt="Everlign Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <p className="text-sm text-gray-400">
            Powered by Everlign. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}