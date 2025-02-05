'use client';
import { useState, useEffect } from 'react';

export default function QRCodeGenerator() {
  const [name, setName] = useState('');
  const [qrCodeUrl, setQrCodeUrl] = useState('');

  useEffect(() => {
    if (name) {
      const landingUrl = `${window.location.origin}/landing?name=${name}`;
      setQrCodeUrl(`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(landingUrl)}`);
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
      
      {name && (
        <div className="flex flex-col items-center">
          <img
            src={qrCodeUrl}
            alt="QR Code"
            className="border rounded-lg mb-4"
          />
          <p className="text-sm text-gray-500 text-center">
            Scan to open the landing page
          </p>
        </div>
      )}
    </div>
  );
}