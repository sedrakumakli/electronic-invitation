import { useState } from 'react';
import { motion } from 'framer-motion';

const STAMP_IMAGE =
  'https://images.rawpixel.com/image_png_social_square/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAzL3Jhd3BpeGVsX29mZmljZV80MV92aW50YWdlX3Bvc3RhZ2Vfc3RhbXBfYXV0aGVudGljX3BhcGVyX2lzb2xhdF8wNGZhYTFhZC02MGE5LTQxYzItYWM2Ni02NWUzZGM3ODQ5OTEucG5n.png';

const EnvelopeOpening = ({
  onOpen,
  onComplete,
}: {
  onOpen: () => void;
  onComplete: () => void;
}) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    if (isOpening) return;

    setIsOpening(true);

    // تشغيل الموسيقى مباشرة مع ضغطة فتح الظرف
    onOpen();

    // بعد انتهاء حركة فتح الظرف
    setTimeout(() => {
      onComplete?.();
    }, 2000);
  };

  return (
    <motion.div
      onClick={handleOpen}
      className='fixed inset-0 z-[9999] h-dvh w-screen cursor-pointer overflow-hidden bg-[#f4ede4]'
      initial={{ opacity: 1 }}
      animate={{
        opacity: isOpening ? 0 : 1,
      }}
      transition={{
        opacity: {
          duration: 0.45,
          delay: 1.8,
          ease: 'easeOut',
        },
      }}
    >
      {/* =========================================
          BACKGROUND
      ========================================= */}

      <div
        className='
          absolute inset-0
          bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.65)_0%,_rgba(246,238,229,0.9)_55%,_rgba(232,220,207,1)_100%)]
        '
      />

      {/* =========================================
          PAPER TEXTURE
      ========================================= */}

      <div
        className='
          pointer-events-none
          absolute inset-0
          opacity-[0.12]
          [background-image:radial-gradient(rgba(90,70,55,0.35)_0.6px,transparent_0.6px)]
          [background-size:7px_7px]
        '
      />

      {/* =========================================
          LEFT HALF
      ========================================= */}

      <motion.div
        className='
          absolute
          left-0
          top-0
          z-20
          h-full
          w-[calc(50%+2px)]
          border-r
          border-[#806b5940]
          bg-[#f7f0e7]
          shadow-[8px_0_30px_rgba(70,50,35,0.05)]
        '
        initial={{ x: 0 }}
        animate={{
          x: isOpening ? '-105%' : 0,
        }}
        transition={{
          duration: 1.15,
          delay: isOpening ? 0.7 : 0,
          ease: [0.76, 0, 0.24, 1],
        }}
      >
        {/* Texture */}
        <div
          className='
            pointer-events-none
            absolute inset-0
            opacity-[0.15]
            [background-image:radial-gradient(rgba(100,80,65,0.3)_0.6px,transparent_0.6px)]
            [background-size:7px_7px]
          '
        />
      </motion.div>

      {/* =========================================
          RIGHT HALF
      ========================================= */}

      <motion.div
        className='
          absolute
          right-0
          top-0
          z-30
          h-full
          w-[calc(50%+2px)]
          border-l
          border-[#806b5940]
          bg-[#f4ebe1]
          shadow-[-16px_0_35px_rgba(55,40,28,0.14),_-4px_0_12px_rgba(55,40,28,0.08)]
        '
        initial={{ x: 0 }}
        animate={{
          x: isOpening ? '105%' : 0,
        }}
        transition={{
          duration: 1.15,
          delay: isOpening ? 0.7 : 0,
          ease: [0.76, 0, 0.24, 1],
        }}
      >
        {/* Texture */}
        <div
          className='
            pointer-events-none
            absolute inset-0
            opacity-[0.15]
            [background-image:radial-gradient(rgba(100,80,65,0.3)_0.6px,transparent_0.6px)]
            [background-size:7px_7px]
          '
        />
      </motion.div>

      {/* =========================================
          STAMP GLOW
      ========================================= */}

      <motion.div
        className='
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          z-40
          h-[170px]
          w-[170px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#fff7eb]/60
          blur-[35px]
        '
        animate={
          isOpening
            ? {
                opacity: 0,
                scale: 1.2,
              }
            : {
                opacity: [0.2, 0.35, 0.2],
                scale: [1, 1.04, 1],
              }
        }
        transition={
          isOpening
            ? {
                duration: 0.25,
              }
            : {
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }
        }
      />

      {/* =========================================
          STAMP
      ========================================= */}

      <motion.div
        className='
          absolute
          left-1/2
          top-1/2
          z-50
          w-[115px]
          -translate-x-1/2
          -translate-y-1/2
          sm:w-[135px]
          md:w-[155px]
          lg:w-[175px]
        '
        initial={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        animate={
          isOpening
            ? {
                opacity: 0,
                scale: 0.72,
                y: -8,
              }
            : {
                opacity: 1,
                scale: 1,
                y: 0,
              }
        }
        transition={{
          duration: 0.55,
          ease: [0.4, 0, 0.2, 1],
        }}
      >
        <img
          src={STAMP_IMAGE}
          alt='Vintage postage stamp'
          draggable='false'
          className='
            block
            h-auto
            w-full
            select-none
            object-contain
            drop-shadow-[0_10px_18px_rgba(70,50,35,0.18)]
          '
        />
      </motion.div>

      {/* =========================================
          CLICK HINT
      ========================================= */}

      <motion.div
        className="
          absolute
          bottom-[7%]
          left-1/2
          z-[60]
          -translate-x-1/2
          whitespace-nowrap
          font-['Cairo']
          text-[12px]
          font-normal
          tracking-[0.2px]
          text-[#806e5d]
          sm:text-[13px]
        "
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: isOpening ? 0 : 0.75,
        }}
        transition={{
          delay: 0.8,
          duration: 0.7,
        }}
      >
        اضغطي لفتح الدعوة
      </motion.div>
    </motion.div>
  );
};

export default EnvelopeOpening;
