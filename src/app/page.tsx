"use client";
import Image from 'next/image';
import AudioPlayer from '@/components/AudioPlayer';
import { playlist } from '@/data/playlist';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Logo Section */}
        <div className="flex justify-center space-x-4 mb-8">
          <Image
            src="/logos/Nexus2025.jpg"
            alt="Nexus Logo"
            width={100}
            height={50}
            className="object-contain"
          />
          <Image
            src="/logos/LatentAilogo.png"
            alt="Latent.AI Logo"
            width={100}
            height={50}
            className="object-contain"
          />
          <Image
            src="/logos/everlign.png"
            alt="Everlign Logo"
            width={100}
            height={50}
            className="object-contain"
          />
        </div>

        <h1 className="text-3xl font-bold text-center text-white mb-8">
          Nexus Skit Songs
        </h1>

        <AudioPlayer playlist={playlist} />
      </div>
    </main>
  );
}