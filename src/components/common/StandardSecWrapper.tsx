import type { ReactNode } from 'react';
import Container from '../Container';

const StandardSecWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <Container className='bg-[#F7F4F8] py-24 overflow-hidden'>
      <div className='grid lg:grid-cols-2 gap-12'>{children}</div>
    </Container>
  );
};

export default StandardSecWrapper;
