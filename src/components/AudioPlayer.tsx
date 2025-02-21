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
        audioRef.current.play().catch(error => {
          console.error("Playback failed:", error);
          setIsPlaying(false);
        });
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
    if (currentSongIndex < playlist.length - 1) {
      setCurrentSongIndex(prev => prev + 1);
      setIsPlaying(true);
    } else {
      setCurrentSongIndex(0);
      setIsPlaying(false);
    }
  };

  const handlePrevious = () => {
    if (currentSongIndex > 0) {
      setCurrentSongIndex(prev => prev - 1);
      setIsPlaying(true);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-gray-800 rounded-lg p-6 shadow-lg">
      <audio
        ref={audioRef}
        src={currentSong.file}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
      />
      
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-white mb-2">{currentSong.title}</h2>
        <p className="text-gray-400 text-lg">Now Playing</p>
      </div>

      <div className="mb-6">
        <div className="h-2 bg-gray-600 rounded-full">
          <div 
            className="h-2 bg-blue-500 rounded-full"
            style={{ width: `${(currentTime / duration) * 100}%` }}
          />
        </div>
        <div className="flex justify-between text-sm text-gray-400 mt-2">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      <div className="flex items-center justify-center space-x-8 mb-8">
        <button 
          onClick={handlePrevious}
          className="p-3 text-gray-400 hover:text-white transition"
          disabled={currentSongIndex === 0}
        >
          <SkipBack size={28} />
        </button>
        
        <button 
          onClick={handlePlayPause}
          className="p-4 bg-blue-500 rounded-full hover:bg-blue-600 transition"
        >
          {isPlaying ? <Pause size={32} /> : <Play size={32} />}
        </button>
        
        <button 
          onClick={handleNext}
          className="p-3 text-gray-400 hover:text-white transition"
        >
          <SkipForward size={28} />
        </button>
      </div>

      <div className="w-full">
        <h3 className="text-white font-semibold mb-4 text-xl">Playlist</h3>
        <div className="grid gap-2">
          {playlist.map((song, index) => (
            <div
              key={index}
              onClick={() => {
                setCurrentSongIndex(index);
                setIsPlaying(true);
              }}
              className={`p-4 rounded cursor-pointer transition ${
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