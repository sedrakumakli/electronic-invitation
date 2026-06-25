import { motion } from 'framer-motion';
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

const FeaturesList = () => {
  return (
    <div className='mt-6 grid sm:grid-cols-2 gap-6'>
      {features.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 + i * 0.1 }}
          className='flex gap-4'
        >
          {/* icon */}
          <div className='text-2xl text-(--golden) mt-1'>{item.icon}</div>

          {/* text */}
          <div className='space-y-1'>
            <h3 className='font-semibold text-[#2E2A31] font-cairo'>
              {item.title}
            </h3>

            <p className='text-sm leading-7 text-[#6E6773] font-cairo max-w-sm'>
              {item.desc}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default FeaturesList;
