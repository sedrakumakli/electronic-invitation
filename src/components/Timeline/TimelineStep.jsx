import { motion, type Variants } from 'framer-motion';
import {
  FaChild,
  FaSchool,
  FaBookOpen,
  FaGraduationCap,
  FaUniversity,
  FaStar,
} from 'react-icons/fa';
import Container from '../Container';

const timeline = [
  {
    year: '2008 - 2009',
    title: 'الروضة',
    desc: 'غرسنا البدايات... لنحصد الأحلام.',
    icon: <FaChild />,
  },
  {
    year: '2009 - 2015',
    title: 'المرحلة الابتدائية',
    desc: 'ومن الحروف بدأت ملامح المستقبل.',
    icon: <FaSchool />,
  },
  {
    year: '2015 - 2018',
    title: 'المرحلة الإعدادية',
    desc: 'كبر الطموح، واشتد العزم.',
    icon: <FaBookOpen />,
  },
  {
    year: '2018 - 2021',
    title: 'المرحلة الثانوية',
    desc: 'كل خطوة كانت تقرّبني مما أريد.',
    icon: <FaBookOpen />,
  },
  {
    year: '2021 - 2026',
    title: 'الهندسة المعلوماتية',
    desc: 'هنا اكتملت ملامح الحلم.',
    icon: <FaUniversity />,
  },
  {
    year: '2026',
    title: 'التخرج',
    desc: 'الحمد لله الذي بلغنا هذه اللحظة، وما توفيقي إلا بالله.',
    icon: <FaGraduationCap />,
  },
];

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
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

const Timeline = () => {
  return (
    <section className='bg-[#F7F4F8] py-24 overflow-hidden'>
      <Container>
        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-center mb-20'
        >
          <span className='text-sm tracking-[0.3em] uppercase text-[#b9a4b5]'>
            My Journey
          </span>

          <h2
            className='
          mt-4
          font-reef
          text-4xl md:text-6xl
          text-[#2E2A31]
          '
          >
            رحلة من الحلم إلى الإنجاز
          </h2>
        </motion.div>

        {/* PATH */}
        <div
          className='
        relative
        max-w-4xl
        mx-auto
        hidden md:block
        '
        >
          {timeline.map((item, index) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              initial='hidden'
              whileInView='show'
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                delay: index * 0.25,
              }}
              className={`
              relative
              flex
              items-center
              ${index % 2 === 0 ? 'justify-start' : 'justify-end'}
              h-40
              `}
            >
              {/* LINE */}
              {index !== timeline.length - 1 && (
                <div
                  className={`
                absolute
                bg-[#b9a4b5]/50
                
                ${
                  index % 2 === 0
                    ? 'left-[50%] top-1/2 w-[50%] h-[2px]'
                    : 'right-[50%] top-1/2 w-[50%] h-[2px]'
                }
                `}
                />
              )}

              {/* DOWN LINE */}
              {index !== timeline.length - 1 && (
                <div
                  className={`
                absolute
                bg-[#b9a4b5]/50
                w-[2px]
                h-20
                top-1/2
                
                ${index % 2 === 0 ? 'left-1/2' : 'right-1/2'}
                `}
                />
              )}

              {/* POINT */}
              <div
                className='
              absolute
              left-1/2
              -translate-x-1/2
              z-10
              w-14
              h-14
              rounded-full
              bg-[#F7F4F8]
              border-2
              border-[#e6c7a1]
              flex
              items-center
              justify-center
              text-[#715E72]
              text-xl
              '
              >
                {item.icon}
              </div>

              {/* CONTENT */}

              <div
                className={`
              w-[40%]
              ${index % 2 === 0 ? 'text-left' : 'text-right'}
              `}
              >
                <span
                  className='
                text-[#e6c7a1]
                font-cairo
                text-sm
                '
                >
                  {item.year}
                </span>

                <h3
                  className='
                mt-2
                text-xl
                font-cairo
                font-bold
                text-[#715E72]
                '
                >
                  {item.title}
                </h3>

                <p
                  className='
                mt-2
                font-cairo
                leading-7
                text-[#6E6773]
                '
                >
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* MOBILE */}
        <div className='md:hidden relative'>
          <div
            className='
          absolute
          right-6
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
                variants={itemVariants}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true }}
                className='
            relative
            pr-16
            '
              >
                <div
                  className='
              absolute
              right-0
              w-12
              h-12
              rounded-full
              bg-[#F7F4F8]
              border-2
              border-[#e6c7a1]
              flex
              items-center
              justify-center
              text-[#715E72]
              '
                >
                  {item.icon}
                </div>

                <span
                  className='
              text-[#e6c7a1]
              text-sm
              font-cairo
              '
                >
                  {item.year}
                </span>

                <h3
                  className='
              text-xl
              font-cairo
              font-bold
              text-[#715E72]
              mt-2
              '
                >
                  {item.title}
                </h3>

                <p
                  className='
              text-[#6E6773]
              font-cairo
              leading-7
              mt-2
              '
                >
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Timeline;
