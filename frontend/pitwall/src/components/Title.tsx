import React from 'react';
import BlurText from './BlurText';

const Title = () => {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center pointer-events-none" style={{ color: 'var(--color-text)' }}>
      <h1 style={{ fontSize: 'var(--font-size-6xl)', fontWeight: 'bold' }}>
        <BlurText text="Pitwall" animateBy="words" delay={100} />
      </h1>
      <p style={{ fontSize: 'var(--font-size-xl)', marginTop: '0.5rem' }}>
        <BlurText text="A modern F1 tech dashboard" animateBy="words" delay={400} />
      </p>
    </div>
  );
};

export default Title;
