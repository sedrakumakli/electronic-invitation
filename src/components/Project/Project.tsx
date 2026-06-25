import { motion } from 'framer-motion';
import Container from '../Container';
import FeaturesList from './FeaturesList';
import { useScreen } from '../../context/ScreenSizeContext';

const ease = [0.22, 1, 0.36, 1];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease },
  },
};

const Project = () => {
  const { screenSize } = useScreen();
  const isDesktop = screenSize === 'desktop';
  const isTablet = screenSize === 'tablet';
  const isMobile = screenSize === 'mobile';
  return (
    <Container className='bg-[#F7F4F8] py-24 overflow-hidden'>
      {/* TOP SECTION */}
      <div className='grid lg:grid-cols-2 gap-12 items-center'>
        {/* TEXT */}
        <motion.div
          variants={container}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.3 }}
          className='relative space-y-6'
        >
          {!isDesktop && (
            <img
              src='/sectionPassionDecoration.png'
              className='absolute w-[150px] top-[-83px] left-[-3%]'
            />
          )}
          <motion.span
            variants={item}
            className='text-sm tracking-[0.3em] text-[#b9a4b5] uppercase'
          >
            عن المشروع
          </motion.span>

          <motion.h2
            variants={item}
            className='font-reef text-4xl md:text-6xl leading-tight text-[#2E2A31]'
          >
            من فكرة إلى أثر
          </motion.h2>

          <motion.p
            variants={item}
            className='text-[#5F5965] leading-9 font-cairo'
          >
            بعد أن أكرمنا الله عز وجل بتحرير بلادنا الحبيبة سوريا، بدأت في مختلف
            المحافظات حملات تبرع ومبادرات إنسانية بشكل متفرّق، يقودها أفراد
            وجهات محلية للمساهمة في تحسين واقع البلد. لكن هذا الانتشار، رغم
            إيجابيته، كان يفتقد إلى وجود جهة موحّدة تنظم هذه الجهود، مما أدى إلى
            تشتت الحملات، وصعوبة متابعة التبرعات، وغياب الوضوح في بعض العمليات.
            ومن هنا جاءت فكرة هذا المشروع: بناء نظام مركزي لإدارة حملات التبرع
            في سوريا، يهدف إلى توحيد الجهود، وتنظيم المبادرات، وتسهيل متابعة
            التبرعات، وتعزيز الشفافية والثقة بين جميع الأطراف المشاركة.
          </motion.p>
          {/* FEATURES SECTION */}
          <FeaturesList />
        </motion.div>

        {/* IMAGE */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease }}
            className='relative'
          >
            {isDesktop && (
              <img
                src='/decorations.webp'
                className='absolute w-[195px] top-[-62px] left-[-84px]'
              />
            )}
            <img
              src='/project.jpg'
              className='w-full h-[450px] md:h-150 lg:h-[700px] object-cover rounded-2xl shadow-lg'
            />

            <div className='absolute inset-0 bg-gradient-to-t from-[#2E2A31]/30 to-transparent rounded-2xl' />
          </motion.div>
        </div>
      </div>
    </Container>
  );
};

export default Project;
