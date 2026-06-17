import { motion } from 'framer-motion';

type Props = {
  top: string;
  left: string;
  delay: number;
};

export default function Sparkle({ top, left, delay }: Props) {
  return (
    <motion.div
      style={{ top, left }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0.5, 1.4, 0.5],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        delay,
      }}
      className='
      absolute
      text-white
      text-xl
      '
    >
      ✨
    </motion.div>
  );
}
