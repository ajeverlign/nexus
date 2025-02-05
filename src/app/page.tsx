'use client';
import QRCodeGenerator from '../components/QRCodeGenerator';

export default function Home() {
  return (
    <main className="min-h-screen p-8 flex items-center justify-center">
      <QRCodeGenerator />
    </main>
  );
}