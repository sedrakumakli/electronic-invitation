import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import { FaGraduationCap } from 'react-icons/fa6';
import type { Variants } from 'framer-motion';
import { useScreen } from '../../context/ScreenSizeContext';

const desktopImages = [
  '/16.jpg',
  '/u16.webp',
  '/u9.webp',
  '/u10.webp',
  '/u12.webp',
  '/u17.webp',
  '/u18.webp',
];

const mobileImages = [
  '/17.jpg',
  '/20.jpg',
  '/u9.webp',
  '/3.jpg',
  '/16.jpg',
  '/u17.webp',
  '/u18.webp',
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
  const [loadedImages, setLoadedImages] = useState<string[]>([]);

  const { screenSize } = useScreen();

  const isMobile = screenSize === 'mobile';

  const images = useMemo(
    () => (isMobile ? mobileImages : desktopImages),
    [isMobile],
  );

  /*
   * Preload image
   */
  const preloadImage = (src: string) => {
    return new Promise<void>((resolve) => {
      const img = new Image();

      img.onload = () => {
        setLoadedImages((prev) => (prev.includes(src) ? prev : [...prev, src]));

        resolve();
      };

      img.onerror = () => {
        resolve();
      };

      img.src = src;
    });
  };

  /*
   * Load first image immediately
   */
  useEffect(() => {
    setCurrent(0);
    setLoadedImages([]);

    preloadImage(images[0]);
  }, [images]);

  /*
   * Load next image in the background
   *
   * We only preload ONE image ahead.
   * This is important for slow internet.
   */
  useEffect(() => {
    const nextIndex = (current + 1) % images.length;
    const nextImage = images[nextIndex];

    if (!loadedImages.includes(nextImage)) {
      preloadImage(nextImage);
    }
  }, [current, images, loadedImages]);

  /*
   * Change image only when the next image
   * has actually finished loading.
   */
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (current + 1) % images.length;
      const nextImage = images[nextIndex];

      if (loadedImages.includes(nextImage)) {
        setCurrent(nextIndex);
      }
    }, 4500);

    return () => clearInterval(interval);
  }, [current, images, loadedImages]);

  const currentImage = images[current];

  return (
    <section className='relative h-[100svh] min-h-[600px] overflow-hidden'>
      {/* BACKGROUND SLIDER */}
      <AnimatePresence mode='sync'>
        <motion.img
          key={currentImage}
          src={currentImage}
          alt=''
          fetchPriority={current === 0 ? 'high' : 'auto'}
          decoding='async'
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

      {/* OVERLAY */}
      <div className='absolute inset-0 z-10 bg-linear-to-b from-[#2E2A31]/35 via-[#2E2A31]/50 to-[#2E2A31]/65' />

      {/* CONTENT */}
      <motion.div
        variants={containerVariants}
        initial='hidden'
        animate='show'
        className='relative z-20 flex h-full flex-col items-center justify-center px-6 text-center md:px-12 lg:px-24'
      >
        {/* CLASS */}
        <motion.p
          variants={itemVariants}
          className='mb-1 text-sm tracking-[0.3em] text-[#DAD4DF] uppercase'
          dir='ltr'
        >
          <FaGraduationCap className='text-(--golden)' />
          <span>Class of 2026</span>
        </motion.p>

        {/* NAME */}
        <motion.h1
          variants={itemVariants}
          className='font-reef text-5xl text-white md:text-7xl lg:text-8xl'
        >
         المهندسة سدرة محمد طاهر قومقلي
        </motion.h1>

        {/* MOTHER */}
        <motion.p
          variants={itemVariants}
          className='mt-4 font-cairo text-lg text-[#fffc]'
        >
         والدتي رحاب السيوفي
        </motion.p>

        {/* DECORATION */}
        <motion.div
          variants={itemVariants}
          className='my-4 mt-5 text-(--accent)'
        >
          ──── <span className='text-(--golden)'>✦</span> ────
        </motion.div>

        {/* INVITATION */}
        <motion.p
          variants={itemVariants}
          className='font-cairo text-lg leading-8 text-[#fffc]'
        >
          أتشرف بدعوتكم لحضور مناقشة مشروع تخرّجي الذي أعد لنيل درجة الإجازة في
          الهندسة المعلوماتية بعنوان
        </motion.p>

        {/* PROJECT TITLE */}
        <motion.p
          variants={itemVariants}
          className='font-cairo text-base leading-8 italic text-[#fffc]'
        >
          نظام إدارة حملات التبرع - أثر
        </motion.p>

        {/* EVENT DETAILS */}
        <motion.div
          variants={itemVariants}
          className='mt-6 space-y-2 font-cairo text-[#fffc]'
        >
          <p>يوم الأحد 30 آب 2026</p>
          <p>كلية الهندسة المعلوماتية - جامعة حمص</p>
        </motion.div>

        {/* ADD TO CALENDAR */}
        <motion.a
          variants={itemVariants}
          href={`https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
            'مناقشة مشروع تخرج - سدرة',
          )}&dates=20260830T110000/20260830T120000&ctz=Asia/Damascus&details=${encodeURIComponent(
            'مناقشة مشروع التخرج بعنوان: نظام إدارة حملات التبرع - أثر',
          )}&location=${encodeURIComponent(
            'القاعة العاشرة - كلية الهندسة المعلوماتية (مبنى كلية العلوم) - جامعة حمص',
          )}`}
          target='_blank'
          rel='noopener noreferrer'
          className='mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-[#7B1E2B]/80 px-8 py-3 font-cairo font-semibold tracking-wide text-[#F7F4F8] transition-all duration-300 hover:scale-[1.03] hover:bg-[#7B1E2B]/90 hover:shadow-[0_0_20px_rgba(113,94,114,0.4)] active:scale-[0.98]'
        >
          إضافة إلى التقويم
        </motion.a>

        {/* SCROLL INDICATOR */}
        <motion.a
          href='#event-info'
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            y: [0, 7, 0],
          }}
          transition={{
            opacity: {
              delay: 1.8,
              duration: 0.8,
            },
            y: {
              delay: 1.8,
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
          className='absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center gap-1 font-cairo text-xs text-white/85 transition-opacity duration-300 hover:text-white md:bottom-8 md:text-sm'
        >
          <span>مرّر للأسفل</span>

          <span className='text-xl leading-none text-(--golden) md:text-2xl'>
            ↓
          </span>
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
