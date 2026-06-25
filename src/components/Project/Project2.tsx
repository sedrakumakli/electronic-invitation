import { motion } from 'framer-motion';
import { MdCampaign } from 'react-icons/md';
import {
  FaChartLine,
  FaHandHoldingHeart,
  FaShieldHeart,
} from 'react-icons/fa6';
import Container from '../Container';
import FeaturesList from './FeaturesList';
import ProjectVisual from './ProjectVisual';

const features = [
  { icon: <MdCampaign />, title: 'تنظيم الحملات' },
  { icon: <FaHandHoldingHeart />, title: 'متابعة التبرعات' },
  { icon: <FaChartLine />, title: 'التقارير' },
  { icon: <FaShieldHeart />, title: 'الشفافية' },
];

const Project = () => {
  return (
    <Container className='relative bg-[#F7F4F8] overflow-hidden py-20'>
      <div className='grid lg:grid-cols-2 gap-16 items-center'>
        {/* TEXT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className='space-y-6'
        >
          <span className='text-sm tracking-[0.3em] text-[#b9a4b5] uppercase'>
            مشروع التخرج
          </span>

          <h2 className='font-reef text-4xl md:text-6xl leading-tight'>
            من فكرة إلى أثر
          </h2>

          <p className='text-[#5F5965] leading-9 max-w-xl font-cairo'>
            بعد أن أكرمنا الله عز وجل بتحرير بلادنا الحبيبة سوريا، بدأت في مختلف
            المحافظات حملات تبرع ومبادرات إنسانية بشكل متفرّق، يقودها أفراد
            وجهات محلية للمساهمة في تحسين واقع البلد. لكن هذا الانتشار، رغم
            إيجابيته، كان يفتقد إلى وجود جهة موحّدة تنظم هذه الجهود، مما أدى إلى
            تشتت الحملات، وصعوبة متابعة التبرعات، وغياب الوضوح في بعض العمليات.
            ومن هنا جاءت فكرة هذا المشروع: بناء نظام مركزي لإدارة حملات التبرع
            في سوريا، يهدف إلى توحيد الجهود، وتنظيم المبادرات، وتسهيل متابعة
            التبرعات، وتعزيز الشفافية والثقة بين جميع الأطراف المشاركة.
          </p>

          <FeaturesList />
        </motion.div>

        {/* IMAGE SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className='relative'
        >
          {/* IMAGE */}
          <ProjectVisual />
        </motion.div>
      </div>
    </Container>
  );
};

export default Project;
