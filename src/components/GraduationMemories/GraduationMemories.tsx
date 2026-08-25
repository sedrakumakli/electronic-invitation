import { motion, type Variants } from 'framer-motion';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaCamera, FaHeart, FaXmark } from 'react-icons/fa6';
import Container from '../Container';

declare global {
  interface Window {
    cloudinary: any;
  }
}

const CLOUDINARY_CLOUD_NAME = 'YOUR_CLOUD_NAME';
const CLOUDINARY_UPLOAD_PRESET = 'YOUR_UPLOAD_PRESET';

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
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

const GraduationMemories = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const widgetRef = useRef<any>(null);

  const [memoryType, setMemoryType] = useState('');
  const [images, setImages] = useState<string[]>([]);
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  /*
   * CLOUDINARY WIDGET
   */
  const openUploadWidget = () => {
    if (!window.cloudinary) {
      setError('تعذر فتح أداة رفع الصور، يرجى المحاولة مرة أخرى.');
      return;
    }

    if (!widgetRef.current) {
      widgetRef.current = window.cloudinary.createUploadWidget(
        {
          cloudName: CLOUDINARY_CLOUD_NAME,
          uploadPreset: CLOUDINARY_UPLOAD_PRESET,

          sources: ['local', 'camera'],
          multiple: true,
          maxFiles: 6,

          resourceType: 'image',

          clientAllowedFormats: ['jpg', 'jpeg', 'png', 'webp'],
          maxImageFileSize: 10000000,

          folder: 'graduation-invitation',

          showAdvancedOptions: false,
          cropping: false,
          showPoweredBy: false,

          styles: {
            palette: {
              window: '#F7F4F8',
              windowBorder: '#E6C7A1',
              tabIcon: '#715E72',
              menuIcons: '#715E72',
              textDark: '#2E2A31',
              textLight: '#F7F4F8',
              link: '#715E72',
              action: '#715E72',
              inactiveTabIcon: '#9B929F',
              error: '#B85C5C',
              inProgress: '#715E72',
              complete: '#718B73',
              sourceBg: '#FFFFFF',
            },
          },
        },
        (error: any, result: any) => {
          if (error) {
            setError('حدث خطأ أثناء رفع الصور.');
            return;
          }

          if (result?.event === 'success' && result?.info?.secure_url) {
            setImages((prev) => {
              if (prev.includes(result.info.secure_url)) {
                return prev;
              }

              return [...prev, result.info.secure_url];
            });

            setError('');
          }
        },
      );
    }

    widgetRef.current.open();
  };

  /*
   * REMOVE IMAGE
   */
  const removeImage = (url: string) => {
    setImages((prev) => prev.filter((image) => image !== url));
  };

  /*
   * SEND FORM
   */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!memoryType) {
      setError('اختاري نوع الذكرى أولًا 🤍');
      return;
    }

    setIsSending(true);
    setError('');

    try {
      const form = formRef.current;

      if (!form) return;

      const formData = new FormData(form);

      formData.set('memory_type', memoryType);
      formData.set('images', images.join('\n'));

      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          name: formData.get('name')?.toString() || 'بدون اسم',
          email: formData.get('email')?.toString() || 'غير متوفر',
          memory_type: memoryType,
          message: formData.get('message')?.toString() || '',
          images: images.join('\n'),
          submitted_at: new Date().toLocaleString('ar-SY'),
        },
        {
          publicKey: 'YOUR_PUBLIC_KEY',
        },
      );

      setSent(true);

      form.reset();
      setMemoryType('');
      setImages([]);
    } catch (err) {
      console.error(err);
      setError('ما قدرنا نرسل الذكرى حاليًا، جربي مرة ثانية 🤍');
    } finally {
      setIsSending(false);
    }
  };

  /*
   * SUCCESS STATE
   */
  if (sent) {
    return (
      <section dir='rtl' className='bg-white py-24 overflow-hidden'>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='
              mx-auto
              max-w-2xl
              text-center
              py-16
              px-6
            '
          >
            <div
              className='
              mx-auto
              mb-6
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-full
              bg-[#F7F4F8]
              text-[#715E72]
              text-2xl
            '
            >
              <FaHeart />
            </div>

            <h2
              className='
              font-cairo
              text-3xl
              md:text-4xl
              font-semibold
              text-[#2E2A31]
            '
            >
              وصلتني ذكراك 🤍
            </h2>

            <p
              className='
              mt-4
              font-cairo
              leading-8
              text-[#6E6773]
            '
            >
              شكرًا لأنك أخذت لحظة من وقتك وشاركتني شيئًا من هذا اليوم.
              <br />
              بعض التفاصيل الصغيرة هي التي تجعل الذكريات أجمل.
            </p>

            <button
              type='button'
              onClick={() => setSent(false)}
              className='
                mt-8
                font-cairo
                text-sm
                text-[#715E72]
                underline
                underline-offset-4
              '
            >
              مشاركة ذكرى أخرى
            </button>
          </motion.div>
        </Container>
      </section>
    );
  }

  return (
    <section dir='rtl' className='bg-white py-20 md:py-24 overflow-hidden'>
      <Container>
        <div
          className='
          grid
          lg:grid-cols-2
          gap-12
          lg:gap-16
          items-center
        '
        >
          {/* ================= IMAGE ================= */}
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
              amount: 0.25,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className='
              relative
              order-2
              lg:order-1
            '
          >
            <div className='relative overflow-hidden rounded-3xl'>
              <img
                src='/memory.jpg'
                alt='ذكريات يوم التخرج'
                className='
                  w-full
                  xs:h-[400px]
                  sm:h-[500px]
                  lg:h-[700px]
                  object-cover
                '
              />

              <div
                className='
                absolute
                inset-0
                bg-gradient-to-t
                from-[#2E2A31]/45
                via-transparent
                to-transparent
              '
              />

              <div
                className='
                absolute
                bottom-7
                right-7
                left-7
                text-white
              '
              >
                <div
                  className='
                  flex
                  items-center
                  gap-2
                  text-[#E6C7A1]
                  text-sm
                  font-cairo
                '
                >
                  <FaHeart />
                  <span>من يومٍ أتمنى أن يبقى في الذاكرة</span>
                </div>

                <p
                  className='
                  mt-2
                  font-cairo
                  text-sm
                  leading-7
                  text-white/90
                '
                >
                  وبعد أن ينتهي كل شيء، تبقى الصور والكلمات والتفاصيل الصغيرة
                  أجمل ما نحمله معنا.
                </p>
              </div>
            </div>
          </motion.div>

          {/* ================= FORM ================= */}
          <motion.div
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            initial='hidden'
            whileInView='show'
            viewport={{
              once: true,
              amount: 0.25,
            }}
            className='
              order-1
              lg:order-2
            '
          >
            {/* heading */}
            <motion.div variants={itemVariants}>
              <span
                className='
                text-sm
                tracking-[0.25em]
                text-[#B9A4B5]
                font-cairo
              '
              >
                ذكريات ما بعد التخرج
              </span>

              <h2
                className='
                mt-4
                font-reef
                text-4xl
                md:text-5xl
                leading-tight
                text-[#2E2A31]
              '
              >
                لتبقى الذكرى
              </h2>

              <p
                className='
                mt-4
                max-w-xl
                font-cairo
                leading-8
                text-[#6E6773]
              '
              >
                بعد أن ينتهي هذا اليوم، تبقى بعض التفاصيل التي نتمنى ألا تُنسى.
                إن التقطت صورة جميلة أو كان لديك شيء تحب أن تقوله، اتركه هنا
                ليكون جزءًا من ذكريات هذا اليوم.
              </p>
            </motion.div>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className='mt-8 space-y-6'
            >
              {/* NAME + EMAIL */}
              <div className='grid sm:grid-cols-2 gap-5'>
                <motion.div variants={itemVariants}>
                  <label
                    className='
                    mb-2
                    block
                    font-cairo
                    text-sm
                    text-[#5F5965]
                  '
                  >
                    الاسم
                    <span className='text-[#A59CA8]'> · اختياري</span>
                  </label>

                  <input
                    type='text'
                    name='name'
                    placeholder='اكتبي اسمك إن أحببتِ'
                    className='
                      w-full
                      rounded-xl
                      border
                      border-[#E4DFE5]
                      bg-white
                      px-4
                      py-3
                      font-cairo
                      text-sm
                      text-[#2E2A31]
                      outline-none
                      transition-all
                      placeholder:text-[#B9B1BA]
                      focus:border-[#715E72]
                      focus:ring-2
                      focus:ring-[#715E72]/10
                    '
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label
                    className='
                    mb-2
                    block
                    font-cairo
                    text-sm
                    text-[#5F5965]
                  '
                  >
                    البريد الإلكتروني
                    <span className='text-[#A59CA8]'> · اختياري</span>
                  </label>

                  <input
                    type='email'
                    name='email'
                    placeholder='example@email.com'
                    className='
                      w-full
                      rounded-xl
                      border
                      border-[#E4DFE5]
                      bg-white
                      px-4
                      py-3
                      font-cairo
                      text-sm
                      text-[#2E2A31]
                      outline-none
                      transition-all
                      placeholder:text-[#B9B1BA]
                      focus:border-[#715E72]
                      focus:ring-2
                      focus:ring-[#715E72]/10
                    '
                  />
                </motion.div>
              </div>

              {/* UPLOAD */}
              <motion.div variants={itemVariants}>
                <label
                  className='
    mb-3
    block
    font-cairo
    text-sm
    text-[#5F5965]
  '
                >
                  صور من اليوم
                  <span className='text-[#A59CA8]'> · اختياري</span>
                </label>

                <button
                  type='button'
                  onClick={openUploadWidget}
                  disabled={images.length >= 6}
                  className='
                    flex
                    min-h-[110px]
                    w-full
                    flex-col
                    items-center
                    justify-center
                    gap-2
                    rounded-2xl
                    border
                    border-dashed
                    border-[#CFC7D1]
                    bg-[#FCFBFC]
                    text-[#715E72]
                    transition-all
                    hover:border-[#E6C7A1]
                    hover:bg-[#E6C7A1]/5
                    disabled:cursor-not-allowed
                    disabled:opacity-50
                  '
                >
                  <FaCamera className='text-2xl' />

                  <span className='font-cairo text-sm'>
                    أضيفي صورك من هذا اليوم
                  </span>

                  <span
                    className='
                    font-cairo
                    text-xs
                    text-[#A59CA8]
                  '
                  >
                    يمكنك اختيار أكثر من صورة
                  </span>
                </button>

                {/* IMAGE PREVIEWS */}
                {images.length > 0 && (
                  <div
                    className='
                    mt-4
                    grid
                    grid-cols-3
                    sm:grid-cols-4
                    gap-3
                  '
                  >
                    {images.map((url) => (
                      <div
                        key={url}
                        className='
                          group
                          relative
                          aspect-square
                          overflow-hidden
                          rounded-xl
                          bg-[#F7F4F8]
                        '
                      >
                        <img
                          src={url}
                          alt='صورة من يوم التخرج'
                          className='
                            h-full
                            w-full
                            object-cover
                          '
                        />

                        <button
                          type='button'
                          onClick={() => removeImage(url)}
                          className='
                            absolute
                            right-2
                            top-2
                            flex
                            h-7
                            w-7
                            items-center
                            justify-center
                            rounded-full
                            bg-[#2E2A31]/70
                            text-white
                            opacity-0
                            transition-opacity
                            group-hover:opacity-100
                          '
                        >
                          <FaXmark className='text-xs' />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>

              {/* MESSAGE */}
              <motion.div variants={itemVariants}>
                <label
                  className='
                  mb-2
                  block
                  font-cairo
                  text-sm
                  text-[#5F5965]
                '
                >
                  كلمة صغيرة
                </label>

                <textarea
                  name='message'
                  rows={4}
                  placeholder='اكتبلي شيئًا تحب أن يبقى من هذا اليوم...'
                  className='
                    w-full
                    resize-none
                    rounded-xl
                    border
                    border-[#E4DFE5]
                    bg-white
                    px-4
                    py-3
                    font-cairo
                    text-sm
                    leading-7
                    text-[#2E2A31]
                    outline-none
                    transition-all
                    placeholder:text-[#B9B1BA]
                    focus:border-[#715E72]
                    focus:ring-2
                    focus:ring-[#715E72]/10
                  '
                />
              </motion.div>

              {/* ERROR */}
              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className='
                    font-cairo
                    text-sm
                    text-[#B85C5C]
                  '
                >
                  {error}
                </motion.p>
              )}

              {/* SUBMIT */}
              <motion.div variants={itemVariants}>
                <button
                  type='submit'
                  disabled={true}
                  /* disabled={isSending} */
                  className='
                    inline-flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-[#715E72]
                    px-6
                    py-3.5
                    font-cairo
                    font-semibold
                    text-white
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:bg-[#624F63]
                    hover:shadow-lg
                    disabled:cursor-not-allowed
                    disabled:opacity-60
                  '
                >
                  {
                    isSending ? (
                      <>
                        <span
                          className='
                        h-4
                        w-4
                        animate-spin
                        rounded-full
                        border-2
                        border-white/30
                        border-t-white'
                        />
                        جاري الإرسال...
                      </>
                    ) : (
                      <>بانتظار ذكرياتكم بعد المناقشة 🩶</>
                    )
                    /*  (
                    <>
                      <FaPaperPlane />
                      أرسل الذكرى
                    </>
                  ) */
                  }
                </button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default GraduationMemories;
