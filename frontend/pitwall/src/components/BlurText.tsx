'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface BlurTextProps {
  text: string;
  animateBy?: 'words' | 'letters';
  direction?: 'top' | 'bottom';
  delay?: number;
  stepDuration?: number;
  threshold?: number;
  rootMargin?: string;
  onAnimationComplete?: () => void;
}

const BlurText: React.FC<BlurTextProps> = ({
  text,
  animateBy = 'words',
  direction = 'top',
  delay = 200,
  stepDuration = 0.35,
  threshold = 0.1,
  rootMargin = '0px',
  onAnimationComplete,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: threshold, rootMargin });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
      if (onAnimationComplete) {
        // A simple timeout to simulate animation completion, adjust as needed
        const totalDuration = (text.split(animateBy === 'words' ? ' ' : '').length * delay) + (stepDuration * 1000);
        setTimeout(onAnimationComplete, totalDuration);
      }
    }
  }, [isInView, hasAnimated, text, animateBy, delay, stepDuration, onAnimationComplete]);

  const getVariants = (index: number) => ({
    hidden: {
      y: direction === 'top' ? '-100%' : '100%',
      opacity: 0,
      filter: 'blur(8px)',
    },
    visible: {
      y: '0%',
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        delay: hasAnimated ? index * (delay / 1000) : 0, // Only apply delay if animation is triggered by isInView
        duration: stepDuration,
        ease: 'easeOut',
      },
    },
  });

  const renderContent = () => {
    if (animateBy === 'words') {
      return text.split(' ').map((word, index) => (
        <motion.span
          key={index}
          variants={getVariants(index)}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          style={{ display: 'inline-block', whiteSpace: 'nowrap' }}
        >
          {word + (index < text.split(' ').length - 1 ? ' ' : '')}
        </motion.span>
      ));
    } else {
      return text.split('').map((char, index) => (
        <motion.span
          key={index}
          variants={getVariants(index)}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          style={{ display: 'inline-block', whiteSpace: 'nowrap' }}
        >
          {char}
        </motion.span>
      ));
    }
  };

  return (
    <div ref={ref} style={{ overflow: 'hidden' }}>
      {renderContent()}
    </div>
  );
};

export default BlurText;
