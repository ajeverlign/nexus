'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function QRCodeGenerator() {
  const [name, setName] = useState('');
  const [qrCodeUrl, setQrCodeUrl] = useState('');
  const [landingUrl, setLandingUrl] = useState('');

  useEffect(() => {
    if (name.trim()) {
      const baseUrl = window.location.origin;
      const newLandingUrl = `${baseUrl}/landing?name=${encodeURIComponent(name)}`;
      setLandingUrl(newLandingUrl);
      setQrCodeUrl(`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(newLandingUrl)}`);
    } else {
      setQrCodeUrl('');
      setLandingUrl('');
    }
  }, [name]);

  return (
    <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full relative min-h-[600px]">
      {/* Top Logos */}
      <div className="flex justify-center mb-6">
        <Image
          src="/logos/Nexus2025.jpg"
          alt="Nexus 2025"
          width={40}
          height={40}
          className="h-12 w-auto center"
          
        />
      </div>

      {/* Title with Latent.AI logo */}
      <div className="flex items-center justify-center gap-3 mb-6">
        <Image
          src="/logos/LatentAilogo.png"
          alt="Latent.ai Logo"
          width={35}
          height={35}
          className="h-8 w-auto"
        />
        <h1 className="text-3xl font-bold text-gray-800">
          Latent.AI
        </h1>
      </div>

      <div className="text-center space-y-2 mb-6">
        <p className="text-xl text-blue-600 font-semibold">
          🎁 One Step Away From Your Prize! 🎁
        </p>
        <p className="text-gray-600">
          Welcome to our special event! Enter your name to reveal your unique question 
          and a chance to win an exciting prize! 🏆
        </p>
      </div>

      {/* Name Input */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Enter Your Name
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Type your name..."
        />
      </div>

      {/* QR Code Display */}
      {qrCodeUrl && landingUrl && (
        <div className="flex flex-col items-center">
          <div className="relative w-[150px] h-[150px] mb-4">
            <Image
              src={qrCodeUrl}
              alt="QR Code"
              fill
              className="border rounded-lg shadow-md"
            />
          </div>
          <p className="text-sm text-gray-600 text-center mb-4">
            Scan this QR code to view your question
          </p>
          <a
            href={landingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 text-sm font-medium"
          >
            Open Link Directly
          </a>
        </div>
      )}

      {/* Footer */}
      <div className="absolute bottom-4 left-0 right-0 text-center">
        <div className="flex items-center justify-center gap-2">
          <Image
            src="/logos/everlign.png"
            alt="Everlign Logo"
            width={24}
            height={24}
            className="w-6 h-auto"
          />
          <p className="text-sm text-gray-500">
            Powered by Everlign. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}