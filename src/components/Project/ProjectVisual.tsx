import { motion } from 'framer-motion';

const ProjectVisual = () => {
  return (
    <div className='relative w-full flex justify-end items-center py-15'>
      {/* BACK SHAPE (المستطيل الخلفي) */}
      <div
        className='
        absolute left-0 top-0
        w-[55%] h-full
        bg-[#715E72]/20
        rounded-[60px]
        blur-[0px]
      '
      />

      {/* IMAGE */}
      <motion.img
        src='/project.jpg'
        alt=''
        initial={{ opacity: 0, x: 60, scale: 0.95 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className='
          relative z-10
          w-[85%]
          left-15
          top-[50%]
          max-w-[700px]
          rounded-2xl
          
          object-cover
        '
      />
    </div>
  );
};

export default ProjectVisual;
