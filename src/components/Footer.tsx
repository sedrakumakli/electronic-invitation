import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa6';
import Container from './Container';

const Footer = () => {
  return (
    <footer className='relative overflow-hidden bg-[#7B1E2B] py-16'>
      {/* soft decoration */}
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(113,94,114,0.35),transparent_45%)]' />

      <Container className='relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className='flex flex-col items-center text-center'
        >
          {/* graduation icon */}
          <motion.div
            animate={{
              y: [0, -6, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className='mb-6 text-[#e6c7a1] text-3xl'
          >
            <FaGraduationCap />
          </motion.div>

          <p className='font-cairo text-lg md:text-xl leading-9 text-[#DAD4DF] max-w-2xl'>
            لكل بداية حكاية، ولكل نهاية ذكرى...
            <br />
            شكرًا لكل من كان جزءًا من هذه الرحلة، ولكل أثر جميل تركه في قلبي.
          </p>

          <div className='my-8 flex items-center gap-3'>
            <span className='h-px w-12 bg-[#e6c7a1]/40' />
            <span className='text-[#e6c7a1]'>✦</span>
            <span className='h-px w-12 bg-[#e6c7a1]/40' />
          </div>

          <p className='font-cairo text-sm text-[#b9a4b5]'>
            © 2026 Sedra Komakli
          </p>

          <p className='mt-2 font-cairo text-sm text-[#b9a4b5]'>
            Graduation Invitation
          </p>
        </motion.div>
      </Container>
    </footer>
  );
};

export default Footer;
