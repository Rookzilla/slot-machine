import React from 'react';
import useSmoothCounter from './useSmoothCounter';

interface SmoothCounterProps {
    value: number;
    duration: number;
  }

const SmoothCounter: React.FC<SmoothCounterProps> = ({ value, duration }) => {
  const smoothValue = useSmoothCounter({ targetValue: value, duration });
  return <span>{smoothValue}</span>;
};

export default SmoothCounter;