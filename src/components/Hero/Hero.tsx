import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import { FaGraduationCap } from 'react-icons/fa6';
import type { Variants } from 'framer-motion';
import { useScreen } from '../../context/ScreenSizeContext';

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

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const { screenSize } = useScreen();
  const isMobile = screenSize === 'mobile';

  const images = useMemo(
    () => (isMobile ? mobileImages : desktopImages),
    [isMobile],
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4500);

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
            opacity: {
              duration: 0.5,
            },
            scale: {
              duration: 5,
              ease: 'linear',
            },
          }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className='absolute inset-0 z-10 bg-linear-to-b from-[#2E2A31]/35 via-[#2E2A31]/50 to-[#2E2A31]/65' />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial='hidden'
        animate='show'
        className='relative z-20 flex h-full flex-col items-center justify-center px-6 md:px-12 lg:px-24 text-center'
      >
        <motion.p
          variants={itemVariants}
          className='mb-1 text-sm tracking-[0.3em] text-[#DAD4DF] uppercase'
          dir='ltr'
        >
          <FaGraduationCap className='text-(--golden)' />
          <span>Class of 2026</span>
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className='font-reef text-5xl text-white md:text-7xl lg:text-8xl'
        >
          المهندسة سلاف عبدالحليم الفارس
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className='mt-4 text-lg text-[#DAD4DF] font-cairo'
        >
          ابنة نجوى نديم شربك
        </motion.p>

        <motion.div
          variants={itemVariants}
          className='my-4 mt-5 text-(--accent)'
        >
          ──── <span className='text-(--golden)'>✦</span> ────
        </motion.div>

        <motion.p
          variants={itemVariants}
          className='text-[#DAD4DF] font-cairo text-lg leading-8'
        >
          تمّ بحمد الله وفضله تخرّجي من كلية الهندسة المعلوماتية – قسم البرمجيات
        </motion.p>

        <motion.p
          variants={itemVariants}
          className='text-[#DAD4DF] font-cairo text-base leading-8 italic'
        >
          ولأن الأفراح لا تكتمل إلا بحضور من نحب، يسعدني ويشرفني دعوتكم لحضور
          مناقشة مشروع تخرّجي
        </motion.p>
        <motion.div
          variants={itemVariants}
          className='mt-6 space-y-2 text-(--silver)'
        >
          <p>يوم الخميس 18 تموز 2026</p>
          <p>كلية العلوم - جامعة حمص</p>
        </motion.div>

        <motion.a
          variants={itemVariants}
          href={`https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
            'مناقشة مشروع التخرج - سلاف الفارس',
          )}&dates=20260718T080000Z/20260718T100000Z&details=${encodeURIComponent(
            'مناقشة مشروع التخرج',
          )}&location=${encodeURIComponent(
            'كلية الهندسة المعلوماتية - جامعة حمص',
          )}`}
          target='_blank'
          className='mt-6 inline-flex rounded-xl items-center justify-center gap-2 px-8 py-3 bg-[#715E72]/80 text-[#F7F4F8] font-cairo font-semibold tracking-wide transition-all duration-300 hover:bg-[#715E72]/90 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(113,94,114,0.4)] active:scale-[0.98]'
        >
          إضافة إلى التقويم
        </motion.a>

        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className='absolute bottom-10 text-3xl text-(--golden)'
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
