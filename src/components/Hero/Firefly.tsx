import { motion } from 'framer-motion';

type Props = {
  left: string;
  delay: number;
};

export default function Firefly({ left, delay }: Props) {
  return (
    <motion.div
      initial={{
        y: 0,
        opacity: 0,
      }}
      animate={{
        y: -300,
        x: [0, 20, -10, 15],
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        delay,
      }}
      style={{ left }}
      className='
      absolute
      bottom-0
      w-2
      h-2
      rounded-full
      bg-yellow-200
      shadow-[0_0_20px_rgba(255,255,180,.8)]
      '
    />
  );
}
