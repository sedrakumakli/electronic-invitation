import { motion } from 'framer-motion';
import { FiCalendar, FiClock, FiMapPin, FiNavigation } from 'react-icons/fi';
import Container from '../Container';
import { useScreen } from '../../context/ScreenSizeContext';

const ease = [0.22, 1, 0.36, 1] as const;

const info = [
  {
    icon: <FiCalendar />,
    title: 'التاريخ',
    value: 'الأحد 30 آب 2026',
  },
  {
    icon: <FiClock />,
    title: 'الوقت',
    value: '11:00 صباحًا',
  },
  {
    icon: <FiMapPin />,
    title: 'المكان',
    value: 'كلية الهندسة المعلوماتية - جامعة حمص',
  },
  {
    icon: <FiMapPin />,
    title: 'القاعة',
    value: 'القاعة العاشرة - بناء كلية العلوم',
  },
];

export default function EventInfo() {
  const { screenSize } = useScreen();
  const isDesktop = screenSize === 'desktop';

  return (
    <section id='event-info' className='bg-[#F7F4F8] py-24 overflow-hidden'>
      <Container>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease }}
            viewport={{ once: true }}
            className='space-y-8 relative'
          >
            {!isDesktop && (
              <img
                src='/sparkle.png'
                className='absolute sm:w-[150px] w-[120px] -top-20 -left-4'
              />
            )}

            <span className='text-sm tracking-[0.3em] text-[#b9a4b5] uppercase'>
              تفاصيل المناقشة
            </span>

            <h2 className='font-reef text-4xl md:text-6xl leading-tight text-[#2E2A31]'>
              وجودكم يعني لي الكثير
            </h2>

            {/*  <p className='leading-9 text-[#5F5965] max-w-xl font-cairo'>
              وجودكم من أجمل ما يكتمل به هذا الإنجاز، ويسعدني أن أشارككم تفاصيل
              المناسبة.
            </p> */}

            <div className='grid gap-y-8 gap-x-8 sm:grid-cols-2 lg:grid-cols-1'>
              {info.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.6,
                    ease,
                  }}
                  viewport={{ once: true }}
                  className='flex items-start gap-4'
                >
                  <div className='flex h-12 w-12 items-center justify-center rounded-full bg-(--golden)/20 text-(--golden) text-xl shrink-0'>
                    {item.icon}
                  </div>

                  <div>
                    <h4 className='font-semibold text-[#2E2A31] font-cairo'>
                      {item.title}
                    </h4>

                    <p className='text-[#6E6773] mt-1 leading-7 font-cairo'>
                      {item.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease }}
            viewport={{ once: true }}
            className='relative'
          >
            <img
              src='/collage.png'
              className='rounded-3xl w-full h-[520px] object-cover shadow-xl'
            />

            <div className='absolute inset-0 rounded-3xl bg-gradient-to-t from-[#2E2A31]/25 to-transparent' />
          </motion.div>
        </div>

        {/* MAP */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='mt-12'
        >
          <div className='overflow-hidden rounded-3xl shadow-xl'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6559.385593746157!2d36.71917790642092!3d34.712927600000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15230f258b2e0cf5%3A0x91f7d1c0ded729e9!2z2YPZhNmK2Kkg2KfZhNi52YTZiNmF!5e0!3m2!1sar!2s!4v1784854322577!5m2!1sar!2s'
              className='w-full h-[380px] border-0'
              loading='lazy'
              allowFullScreen
            />
          </div>

          <div className='flex justify-center mt-8'>
            <a
              href='https://maps.google.com'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-3 rounded-xl bg-[#715E72] px-7 py-3 text-white font-cairo transition-all duration-300 hover:scale-105 hover:bg-[#604e61]'
            >
              <FiNavigation />
              الحصول على الاتجاهات
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
