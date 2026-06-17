import { motion } from 'framer-motion';

export default function GlowLayer() {
  return (
    <motion.div
      animate={{
        scale: [1, 1.15, 1],
        opacity: [0.4, 0.8, 0.4],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
      }}
      className='
      absolute
      left-1/2
      top-1/2
      -translate-x-1/2
      -translate-y-1/2
      w-[500px]
      h-[500px]
      rounded-full
      blur-[120px]
      bg-yellow-300/30
      pointer-events-none
      '
    />
  );
}
