import { motion, type Easing } from 'framer-motion';

const Image = ({ easeSmooth }: { easeSmooth: Easing[] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50, scale: 0.96 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.9, ease: easeSmooth }}
      className='relative'
    >
      <div className='relative overflow-hidden rounded-2xl'>
        <motion.img
          src='/project.jpg'
          alt=''
          initial={{ scale: 1.12 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.1, ease: easeSmooth }}
          whileHover={{ scale: 1.04 }}
          className='w-full h-[550px] object-cover'
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.25 }}
          className='absolute inset-0 bg-linear-to-t from-[#2E2A31]/30 via-transparent to-transparent'
        />
      </div>
    </motion.div>
  );
};

export default Image;
