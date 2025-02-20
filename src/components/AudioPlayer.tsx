
"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward } from 'lucide-react';

export type Song = {
  title: string;
  artist: string;
  file: string;
};

interface AudioPlayerProps {
  playlist: Song[];
}

const AudioPlayer = ({ playlist }: AudioPlayerProps) => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const currentSong = playlist[currentSongIndex];

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentSongIndex]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleNext = () => {
    setCurrentSongIndex((prev) => (prev + 1) % playlist.length);
  };

  const handlePrevious = () => {
    setCurrentSongIndex((prev) => (prev - 1 + playlist.length) % playlist.length);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="w-full max-w-md mx-auto bg-gray-800 rounded-lg p-4 shadow-lg">
      <audio
        ref={audioRef}
        src={currentSong.file}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleNext}
      />
      
      <div className="text-center mb-4">
        <h2 className="text-xl font-bold text-white">{currentSong.title}</h2>
        <p className="text-gray-400">{currentSong.artist}</p>
      </div>

      <div className="mb-4">
        <div className="h-1 bg-gray-600 rounded-full">
          <div 
            className="h-1 bg-blue-500 rounded-full"
            style={{ width: `${(currentTime / duration) * 100}%` }}
          />
        </div>
        <div className="flex justify-between text-sm text-gray-400 mt-1">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      <div className="flex items-center justify-center space-x-6">
        <button 
          onClick={handlePrevious}
          className="p-2 text-gray-400 hover:text-white transition"
        >
          <SkipBack size={24} />
        </button>
        
        <button 
          onClick={handlePlayPause}
          className="p-3 bg-blue-500 rounded-full hover:bg-blue-600 transition"
        >
          {isPlaying ? <Pause size={24} /> : <Play size={24} />}
        </button>
        
        <button 
          onClick={handleNext}
          className="p-2 text-gray-400 hover:text-white transition"
        >
          <SkipForward size={24} />
        </button>
      </div>

      <div className="mt-6 w-full">
        <h3 className="text-white font-semibold mb-2">Playlist</h3>
        <div className="grid gap-2 w-full">
          {playlist.map((song, index) => (
            <div
              key={index}
              onClick={() => {
                setCurrentSongIndex(index);
                setIsPlaying(true);
              }}
              className={`p-3 rounded cursor-pointer transition w-full ${
                currentSongIndex === index
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              <p className="font-medium text-left">{song.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;