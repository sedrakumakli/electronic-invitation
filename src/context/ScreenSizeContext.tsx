import { createContext, useContext, useEffect, useState } from 'react';

type ScreenSize = 'mobile' | 'tablet' | 'desktop';

interface ScreenContextType {
  screenSize: ScreenSize;
}

const ScreenContext = createContext<ScreenContextType | undefined>(undefined);

function getScreenSize(): ScreenSize {
  if (window.innerWidth < 768) return 'mobile';
  if (window.innerWidth < 1024) return 'tablet';

  return 'desktop';
}

function ScreenProvider({ children }: { children: React.ReactNode }) {
  const [screenSize, setScreenSize] = useState<ScreenSize>(getScreenSize());

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(getScreenSize());
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <ScreenContext.Provider value={{ screenSize }}>
      {children}
    </ScreenContext.Provider>
  );
}

function useScreen() {
  const context = useContext(ScreenContext);

  if (!context) {
    throw new Error('useScreen must be used within a ScreenProvider');
  }

  return context;
}

export { ScreenProvider, useScreen };
