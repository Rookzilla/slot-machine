import { useState, useEffect } from 'react';

interface UseSmoothCounterProps {
    targetValue: number;
    duration: number;
  }

const useSmoothCounter = ({ targetValue, duration }: UseSmoothCounterProps): number => {
    const [currentValue, setCurrentValue] = useState<number>(targetValue);
  
    useEffect(() => {
      let intervalId: NodeJS.Timeout;
      const step = (targetValue - currentValue) / (duration / 10);
  
      if (currentValue !== targetValue) {
        intervalId = setInterval(() => {
          setCurrentValue(prev => {
            const newValue = prev + step;
            if ((step > 0 && newValue >= targetValue) || (step < 0 && newValue <= targetValue)) {
              clearInterval(intervalId);
              return targetValue;
            }
            return newValue;
          });
        }, 10);
      }
  
      return () => clearInterval(intervalId);
    }, [targetValue, currentValue, duration]);
  
    return Math.round(currentValue);
  };

export default useSmoothCounter;