import { motion } from 'framer-motion';

export default function FogLayer() {
  return (
    <motion.div
      animate={{
        x: [-50, 50, -50],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
      }}
      className='
      absolute
      bottom-[-100px]
      left-0
      w-full
      h-[250px]
      bg-white/10
      blur-[100px]
      pointer-events-none
      '
    />
  );
}
