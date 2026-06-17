import Petal from './FloatingPetals';

export default function PetalsLayer() {
  return (
    <>
      {Array.from({ length: 8 }).map((_, index) => (
        <Petal
          key={index}
          left={`${Math.random() * 100}%`}
          delay={Math.random() * 5}
        />
      ))}
    </>
  );
}
