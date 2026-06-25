import { motion, type Variants } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaGraduationCap } from 'react-icons/fa6';
import Container from '../Container';

const TARGET_DATE = new Date('2026-08-26T10:00:00');

const getTimeLeft = () => {
  const now = new Date().getTime();
  const target = TARGET_DATE.getTime();
  const diff = Math.max(target - now, 0);

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },

  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.8,
      ease: 'easeOut',
    },
  }),
};

const Countdown = () => {
  const [time, setTime] = useState(getTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const data = [
    { label: 'يوم', value: time.days },
    { label: 'ساعة', value: time.hours },
    { label: 'دقيقة', value: time.minutes },
    { label: 'ثانية', value: time.seconds },
  ];

  return (
    <section className='py-20 relative w-full flex items-center justify-center overflow-hidden'>
      {/* BACKGROUND TEXTURE (LAVENDER) */}
      <div
        className="
          absolute inset-0
          bg-[url('/texture1.jpg')]
          bg-cover
          bg-center
          scale-110
        "
      />

      {/* MAIN OVERLAY (soft lavender + depth) */}
      <div className='absolute inset-0 bg-[#715E72]/40' />

      {/* SECOND OVERLAY (blur depth layer) */}
      <div className='absolute inset-0 backdrop-blur-[2px] bg-white/10' />

      {/* VIGNETTE (gives cinematic feel) */}
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.25))]' />

      {/* CONTENT */}
      <Container className='relative z-10 w-full text-center'>
        <div className='grid grid-cols-4 gap-4 md:gap-10'>
          {data.map((itemData, i) => (
            <motion.div
              key={itemData.label}
              custom={i}
              variants={item}
              initial='hidden'
              animate='show'
              className='flex flex-col items-center justify-center'
            >
              {/* NUMBER */}
              <span className='font-reef text-5xl md:text-7xl text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.25)]'>
                <FaGraduationCap className='text-(--golden) text-2xl mx-auto md:text-3xl' />
                {itemData.value}
              </span>

              {/* LABEL */}
              <span className='mt-2 text-sm md:text-base tracking-[0.25em] text-(--silver) font-cairo'>
                {itemData.label}
              </span>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Countdown;
