import { motion, type Variants } from 'framer-motion';
import {
  FaGraduationCap,
  FaSchool,
  FaChild,
  FaBookOpen,
  FaUniversity,
} from 'react-icons/fa';
import Container from '../Container';

const timeline = [
  {
    year: '2008 - 2009',
    title: 'الروضة',
    icon: <FaChild />,
  },
  {
    year: '2009 - 2015',
    title: 'المرحلة الابتدائية',
    icon: <FaSchool />,
  },
  {
    year: '2015 - 2018',
    title: 'المرحلة الإعدادية',
    icon: <FaBookOpen />,
  },
  {
    year: '2018 - 2021',
    title: 'المرحلة الثانوية',
    icon: <FaBookOpen />,
  },
  {
    year: '2021 - 2026',
    title: 'الهندسة المعلوماتية',
    icon: <FaUniversity />,
  },
  {
    year: '2026',
    title: 'التخرج',
    icon: <FaGraduationCap />,
  },
];

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
    scale: 0.95,
  },

  show: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: index * 0.18,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const Timeline = () => {
  return (
    <section className='bg-[#F8F3EC] py-24 overflow-hidden'>
      <Container>
        {/* HEADER */}
        {/*  <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className='text-center mb-20 lg:hidden'
        >
          <span className='text-sm tracking-[0.3em] uppercase text-[#b9a4b5]'>
            My Journey
          </span>

          <h2 className='mt-4 font-reef text-4xl md:text-6xl text-[#2E2A31]'>
            رحلة من الحلم إلى الإنجاز
          </h2>
        </motion.div> */}

        {/* DESKTOP */}
        <div className='hidden lg:block relative'>
          {/* LINE */}
          <motion.div
            initial={{
              scaleX: 0,
            }}
            whileInView={{
              scaleX: 1,
            }}
            viewport={{
              once: true,
              amount: 0.5,
            }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className='
              absolute
              top-[52px]
              left-0
              right-0
              h-[2px]
              bg-[#e6c7a1]/40
              origin-left
            '
          />

          <div className='grid grid-cols-6 gap-4 relative'>
            {timeline.map((item, index) => (
              <motion.div
                key={item.title}
                custom={index}
                variants={itemVariants}
                initial='hidden'
                whileInView='show'
                viewport={{
                  once: true,
                  amount: 0.5,
                }}
                className='flex flex-col items-center text-center'
              >
                {/* POINT */}
                <div
                  className={`
                  relative z-10
                  w-12 h-12
                  rounded-full
                  flex items-center justify-center
                  text-lg
                  ${
                    index === timeline.length - 1
                      ? 'bg-[#7B1E2B] text-white shadow-lg'
                      : 'bg-[#F7F4F8] border-2 border-[#e6c7a1] text-[#e6c7a1]'
                  }
                  `}
                >
                  {item.icon}
                </div>

                <span className='mt-5 text-sm text-[#e6c7a1] font-cairo'>
                  {item.year}
                </span>

                <h3 className='mt-2 font-cairo font-semibold text-[#2F2523]'>
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>

        {/* TABLET + MOBILE */}

        <div className='lg:hidden relative max-w-md mx-auto'>
          <div
            className='
            absolute
            right-1/2
            translate-x-1/2
            top-0
            bottom-0
            w-[2px]
            bg-[#b9a4b5]/50
            '
          />

          <div className='space-y-12'>
            {timeline.map((item, index) => (
              <motion.div
                key={item.title}
                custom={index}
                variants={itemVariants}
                initial='hidden'
                whileInView='show'
                viewport={{
                  once: true,
                  amount: 0.4,
                }}
                className='relative flex flex-col items-center text-center'
              >
                <div
                  className={`
                  z-10
                  w-12 h-12
                  rounded-full
                  flex items-center justify-center
                  ${
                    index === timeline.length - 1
                      ? 'bg-[#715E72] text-white'
                      : 'bg-[#F7F4F8] border-2 border-[#e6c7a1] text-[#e6c7a1]'
                  }
                  `}
                >
                  {item.icon}
                </div>

                <span className='mt-4 text-sm text-[#e6c7a1] font-cairo'>
                  {item.year}
                </span>

                <h3 className='mt-2 font-cairo font-semibold text-[#715E72]'>
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Timeline;
