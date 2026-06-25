import Hero from '../components/Hero/Hero';
import { useEffect, useRef, useState } from 'react';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import Project from '../components/Project/Project';
import Countdown from '../components/Countdown/Countdown';

const audio = '/graduationSoundTrack.mp3'; // حطي ملفك هون

const Home = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(audio);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.4;

    return () => {
      audioRef.current?.pause();
    };
  }, []);
  const toggleSound = async () => {
    if (!audioRef.current) return;

    try {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        await audioRef.current.play();
      }

      setIsPlaying((prev) => !prev);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <Hero />
      <Project />
      <Countdown />
      <button
        onClick={toggleSound}
        className='
    fixed
    bottom-6
    right-6
    w-12 h-12
    rounded-full
    bg-[#715E72]/40
    backdrop-blur-md
    border border-white/10
    flex items-center justify-center
    text-[#F7F4F8]
    transition-all
    duration-300
    hover:bg-[#715E72]/60
    hover:scale-110
    z-50
  '
      >
        {isPlaying ? <FaVolumeUp /> : <FaVolumeMute />}
      </button>
    </>
  );
};

export default Home;
