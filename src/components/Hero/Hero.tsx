import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';

const desktopImages = [
  '/u14.jpg',
  '/u16.jpg',
  '/u9.jpg',
  '/u10.jpg',
  '/u12.jpg',
  '/u17.jpg',
  '/u18.jpg',
];

const mobileImages = [
  '/u14.jpg',
  '/u15.jpg',
  '/u9.jpg',
  '/u11.jpg',
  '/u12.jpg',
  '/u17.jpg',
  '/u18.jpg',
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const images = useMemo(
    () => (isMobile ? mobileImages : desktopImages),
    [isMobile],
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className='relative h-screen overflow-hidden'>
      <AnimatePresence mode='sync'>
        <motion.img
          key={images[current]}
          src={images[current]}
          alt=''
          className='absolute inset-0 h-full w-full object-cover'
          initial={{
            opacity: 0,
            scale: 1,
          }}
          animate={{
            opacity: 1,
            scale: 1.15,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 5,
            ease: 'easeOut',
          }}
        />
      </AnimatePresence>

      <div className='absolute inset-0 bg-black/25' />
    </section>
  );
};

export default Hero;
