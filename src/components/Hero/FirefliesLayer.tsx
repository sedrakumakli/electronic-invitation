import Firefly from './FireFly';

export default function FirefliesLayer() {
  return (
    <>
      {Array.from({ length: 25 }).map((_, index) => (
        <Firefly
          key={index}
          left={`${Math.random() * 100}%`}
          delay={Math.random() * 5}
        />
      ))}
    </>
  );
}
