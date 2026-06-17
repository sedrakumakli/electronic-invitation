import { motion } from 'framer-motion';

type Props = {
  left: string;
  delay: number;
};

export default function Petal({ left, delay }: Props) {
  return (
    <motion.div
      style={{ left }}
      animate={{
        y: [0, 400],
        x: [0, 20, -20, 30],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        delay,
      }}
      className='
      absolute
      top-0
      text-pink-200
      text-xl
      '
    >
      🌸
    </motion.div>
  );
}
