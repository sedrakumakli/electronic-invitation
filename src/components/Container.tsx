import type { ReactNode } from 'react';

const Container = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  const finalClassName = 'text-[#2E2A31] px-6 md:px-12 lg:px-24';
  return (
    <section
      className={className ? finalClassName + className : finalClassName}
    >
      <div className='mx-auto max-w-7xl'>{children}</div>
    </section>
  );
};

export default Container;
