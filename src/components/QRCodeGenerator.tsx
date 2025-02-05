'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function QRCodeGenerator() {
  const [name, setName] = useState('');
  const [qrCodeUrl, setQrCodeUrl] = useState('');

  useEffect(() => {
    if (name.trim()) {
      const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
      const landingUrl = `${baseUrl}/landing?name=${encodeURIComponent(name)}`;
      setQrCodeUrl(`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(landingUrl)}`);
    } else {
      setQrCodeUrl('');
    }
  }, [name]);

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
      <h1 className="text-2xl font-bold mb-6 text-center">QR Code Generator</h1>
      
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Enter Name
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type a name..."
        />
      </div>
      
      {qrCodeUrl && (
        <div className="flex flex-col items-center">
          <div className="relative w-[200px] h-[200px] mb-4">
            <Image
              src={qrCodeUrl}
              alt="QR Code"
              fill
              className="border rounded-lg"
            />
          </div>
          <p className="text-sm text-gray-500 text-center">
            Scan this QR code to view the welcome page
          </p>
          <a 
            href={qrCodeUrl.replace('https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=', '')} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 mt-2 text-sm"
          >
            Open Link Directly
          </a>
        </div>
      )}
    </div>
  );
}