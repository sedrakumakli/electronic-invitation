import { motion, useInView, type Variants } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa6';
import { useRef } from 'react';
import Container from '../Container';

const timeline = [
  {
    year: '2008 - 2009',
    title: 'الروضة',
    desc: 'البداية الأولى في رحلة التعلم واكتشاف العالم.',
  },
  {
    year: '2009 - 2015',
    title: 'المرحلة الابتدائية',
    desc: 'ست سنوات من بناء الأساس الأول للمعرفة والتعلم.',
  },
  {
    year: '2015 - 2018',
    title: 'المرحلة الإعدادية',
    desc: 'مرحلة النمو وتطوير المهارات والطموحات.',
  },
  {
    year: '2018 - 2021',
    title: 'المرحلة الثانوية',
    desc: 'الخطوة التي قادتني نحو تحقيق حلم الدراسة الجامعية.',
  },
  {
    year: '2021 - 2026',
    title: 'الهندسة المعلوماتية',
    desc: 'خمس سنوات من التعلم، التحديات، وبناء الخبرة في عالم البرمجيات.',
  },
  {
    year: '2026',
    title: 'التخرج 🎓',
    desc: 'ثمرة سنوات من السعي والاجتهاد، وبداية مرحلة جديدة.',
  },
];

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const TimelineItem = ({
  itemData,
  index,
}: {
  itemData: (typeof timeline)[number];
  index: number;
}) => {
  const ref = useRef(null);

  const isVisible = useInView(ref, {
    once: false,
    amount: 0.5,
  });

  return (
    <motion.div
      ref={ref}
      variants={item}
      initial='hidden'
      animate={isVisible ? 'show' : 'hidden'}
      className={`
        relative mb-12
        md:flex
        ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}
      `}
    >
      {/* Point / Graduation Cap */}
      <motion.div
        animate={{
          scale: isVisible ? 1 : 0.8,
          rotate: isVisible ? 360 : 0,
        }}
        transition={{
          duration: 0.5,
        }}
        className='
          absolute
          left-1/2
          -translate-x-1/2
          hidden md:flex
          items-center
          justify-center
          w-10
          h-10
          rounded-full
          bg-[#F7F4F8]
          ring-8
          ring-[#F7F4F8]
          z-10
        '
      >
        {isVisible ? (
          <FaGraduationCap
            className='
              text-(--golden)
              text-2xl
            '
          />
        ) : (
          <div
            className='
              w-4
              h-4
              rounded-full
              bg-(--golden)
            '
          />
        )}
      </motion.div>

      {/* Card */}
      <div
        className='
          md:w-[45%]
          bg-white/60
          backdrop-blur-sm
          rounded-2xl
          p-6
          shadow-sm
          border
          border-[#b9a4b5]/20
        '
      >
        <span
          className='
          text-(--golden)
          font-cairo
          text-sm
        '
        >
          {itemData.year}
        </span>

        <h3
          className='
          mt-2
          text-2xl
          font-cairo
          font-semibold
          text-[#2E2A31]
        '
        >
          {itemData.title}
        </h3>

        <p
          className='
          mt-3
          leading-8
          text-[#6E6773]
          font-cairo
        '
        >
          {itemData.desc}
        </p>
      </div>
    </motion.div>
  );
};

const Timeline = () => {
  return (
    <section className='bg-[#F7F4F8] py-24 overflow-hidden'>
      <Container>
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <span className='text-sm tracking-[0.3em] uppercase text-[#b9a4b5]'>
            My Journey
          </span>

          <h2 className='font-reef text-4xl md:text-6xl text-[#2E2A31] mt-4'>
            رحلة من الحلم إلى الإنجاز
          </h2>
        </motion.div>

        <div className='relative max-w-5xl mx-auto'>
          {/* Line */}

          <div
            className='
absolute
left-1/2
top-0
h-full
w-[2px]
bg-[#b9a4b5]/40
hidden md:block
'
          />

          {timeline.map((itemData, index) => (
            <TimelineItem key={index} itemData={itemData} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Timeline;
