import { motion } from 'framer-motion';
import Container from '../Container';
import { useScreen } from '../../context/ScreenSizeContext';

const ease = [0.22, 1, 0.36, 1] as const;

const item = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease,
    },
  },
};

const UniversityJourney = () => {
  const { screenSize } = useScreen();
  const isDesktop = screenSize === 'desktop';

  return (
    <section className='bg-white py-24 overflow-hidden text-center lg:text-start'>
      <Container>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* IMAGE */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.8,
              ease,
            }}
            className={isDesktop ? 'relative' : 'relative order-2'}
          >
            <img
              src='/journey.jpg'
              alt='University journey'
              className='
                w-full
                h-[400px]
                lg:h-[550px]
                object-cover
                rounded-2xl
                shadow-lg
              '
            />

            <div
              className='
              absolute inset-0
              bg-gradient-to-t
              from-[#2E2A31]/25
              to-transparent
              rounded-2xl
              '
            />
          </motion.div>

          {/* TEXT */}

          <motion.div
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
            initial='hidden'
            whileInView='show'
            viewport={{
              once: true,
              amount: 0.3,
            }}
            className='space-y-6'
          >
            <motion.span
              variants={item}
              className='
              text-sm
              tracking-[0.3em]
              uppercase
              text-[#b9a4b5]
              font-cairo
              '
            >
              رحلتي الجامعية
            </motion.span>

            <motion.h2
              variants={item}
              className='
              font-reef
              text-4xl
              md:text-6xl
              leading-tight
              text-[#2E2A31]
              '
            >
              رحلة تركت أثرها في قلبي
            </motion.h2>

            <div className='my-4 mt-5 text-(--accent) lg:hidden'>
              ──── <span className='text-(--golden)'>✦</span> ────
            </div>

            <motion.p
              variants={item}
              className='
              text-[#5F5965]
              leading-9
              font-cairo
              '
            >
              بدأت هذه الرحلة بخطوة صغيرة نحو عالم جديد، وبين قاعات الجامعة،
              والمشاريع، والتجارب المختلفة، تعلمت الكثير. ومع كل خطوة كنت أكتشف
              أكثر ما أحب، حتى أصبحت البرمجة جزءًا من شغفي وطريقي الذي أطمح
              للاستمرار فيه. ولم تكن هذه الرحلة لتكون بهذا الجمال لولا الأشخاص
              الذين رافقوني فيها؛ عائلتي الغالية التي كانت سندي الأول، وأقاربي
              الذين أحاطوني بالمحبة والدعم، وأصدقائي ورفاق الطريق الذين شاركوني
              تفاصيل هذه السنوات بكل ما فيها من تعب وفرح وذكريات لا تُنسى.
              وأساتذتي الذين كان لهم أثرٌ كبير، الحمدلله على هذه الرحلة بكل ما
              حملته من دروس وتجارب، وعلى كل شخص كان جزءًا منها. واليوم، وأنا أصل
              إلى نهاية هذه المرحلة، أحمل معي الكثير من المعرفة والذكريات
              والامتنان، وأتطلع لما تحمله الخطوات القادمة من فرص وتجارب جديدة.
            </motion.p>

           {/*  <motion.a
              variants={item}
              href='https://portfolio-nine-zeta-56.vercel.app/'
              target='_blank'
              className='
              inline-flex
              mt-4
              px-8
              py-3
              rounded-xl
              bg-[#7B1E2B]
              text-white
              font-cairo
              font-semibold
              transition-all
              duration-300
              hover:scale-[1.03]
              hover:shadow-lg
              '
            >
              اكتشف عالمي البرمجي
            </motion.a> */}
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default UniversityJourney;
