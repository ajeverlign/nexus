// src/data/playlist.ts
export type Song = {
  title: string;
  artist: string;
  file: string;
};

export const playlist: Song[] = [
  {
    title: "Last Scene - Golmaal Song",
    artist: "Nexus Team",
    file: "/songs/Last Scene - Golmaal Song.mp3"
  },
  {
    title: "Scene 1 Song 1 - Golmaal Hai Bhai Sab Golmaal Hai 1",
    artist: "Nexus Team",
    file: "/songs/Scene 1 Song 1 - Golmaal Hai Bhai Sab Golmaal Hai 1.mp3"
  },
  {
    title: "Scene 2 - AI entry on the Stage",
    artist: "Nexus Team",
    file: "/songs/Scene 2 - AI entry on the Stage.mp3"
  },
  {
    title: "Scene 2 - Reel Tue Voice Final",
    artist: "Nexus Team",
    file: "/songs/Scene 2 - Reel Tue Voice Final.mp3"
  },
  {
    title: "Scene 3 - Apne kursi ki peti bandh lo, Mausam bigadne wala hai",
    artist: "Nexus Team",
    file: "/songs/Scene 3 - Apne kursi ki peti bandh lo, Mausam bigadne wala hai.mp3"
  }
];