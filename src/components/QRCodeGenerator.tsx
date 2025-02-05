'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { questions } from '@/data/questions';

export default function QRCodeGenerator() {
  const [name, setName] = useState('');
  const [qrCodeUrl, setQrCodeUrl] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    if (name.trim()) {
      const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
      const landingUrl = `${baseUrl}/landing?name=${encodeURIComponent(name)}`;
      setQrCodeUrl(`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(landingUrl)}`);
    } else {
      setQrCodeUrl('');
    }
  }, [name]);

  const filteredNames = questions
    .map(q => q.name)
    .filter(n => n.toLowerCase().includes(name.toLowerCase()));

  return (
    <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
      {/* Header with Logos */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-4">
          <Image
            src="/logos/NexusByEverlign.jpg"
            alt="Nexus Logo"
            width={100}
            height={30}
            className="h-8 w-auto"
          />
          <Image
            src="/logos/LatentAilogo.png"
            alt="Latent.ai Logo"
            width={100}
            height={30}
            className="h-6 w-auto"
          />
        </div>
        <Image
          src="/logos/Nexus2025.jpg"
          alt="Nexus 2025"
          width={40}
          height={40}
          className="h-10 w-auto"
        />
      </div>

      <h1 className="text-2xl font-bold mb-2 text-center text-gray-800">
        Nexus 2025 QR Generator
      </h1>
      <p className="text-gray-600 text-center mb-6">
        Generate your personalized event QR code
      </p>
      
      {/* Name Input with Suggestions */}
      <div className="mb-6 relative">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Enter Your Name
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setShowSuggestions(true);
          }}
          onFocus={() => setShowSuggestions(true)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Type your name..."
        />
        
        {/* Name Suggestions */}
        {showSuggestions && name && filteredNames.length > 0 && (
          <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg">
            {filteredNames.map((suggestion) => (
              <div
                key={suggestion}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setName(suggestion);
                  setShowSuggestions(false);
                }}
              >
                {suggestion}
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* QR Code Display */}
      {qrCodeUrl && (
        <div className="flex flex-col items-center">
          <div className="relative w-[200px] h-[200px] mb-4">
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
            href={qrCodeUrl.replace('https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=', '')} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 text-sm font-medium"
          >
            Open Link Directly
          </a>
        </div>
      )}
    </div>
  );
}