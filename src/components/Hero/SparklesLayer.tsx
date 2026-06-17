import Sparkle from './Sparkle';

export default function SparklesLayer() {
  return (
    <>
      {Array.from({ length: 15 }).map((_, index) => (
        <Sparkle
          key={index}
          top={`${Math.random() * 70}%`}
          left={`${Math.random() * 100}%`}
          delay={Math.random() * 3}
        />
      ))}
    </>
  );
}
