import { motion, type Variants } from 'framer-motion';
import { MdCampaign } from 'react-icons/md';
import {
  FaChartLine,
  FaHandHoldingHeart,
  FaShieldHeart,
} from 'react-icons/fa6';

const features = [
  {
    icon: <MdCampaign />,
    title: 'تنظيم الحملات',
    desc: 'إدارة الحملات الإنسانية من مكان واحد بطريقة سهلة وواضحة.',
  },
  {
    icon: <FaHandHoldingHeart />,
    title: 'متابعة التبرعات',
    desc: 'تتبع التبرعات والتحقق من حالتها وتعزيز موثوقيتها.',
  },
  {
    icon: <FaChartLine />,
    title: 'تقارير وإحصائيات',
    desc: 'عرض مؤشرات تساعد على فهم أداء الحملات بشكل أفضل.',
  },
  {
    icon: <FaShieldHeart />,
    title: 'الشفافية والثقة',
    desc: 'تعزيز الثقة من خلال وضوح المعلومات وسهولة الوصول.',
  },
];

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
};

const FeaturesList = () => {
  return (
    <motion.div
      variants={container}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.3 }}
      className='mt-6 grid gap-6 sm:grid-cols-2'
    >
      {features.map((feature, i) => (
        <motion.div key={i} variants={item} className='flex gap-4'>
          {/* icon */}
          <div className='mt-1 text-2xl text-(--golden)'>{feature.icon}</div>

          {/* text */}
          <div className='space-y-1'>
            <h3 className='font-cairo font-semibold text-[#2E2A31]'>
              {feature.title}
            </h3>

            <p className='max-w-sm font-cairo text-sm leading-7 text-[#6E6773]'>
              {feature.desc}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default FeaturesList;
