import { useEffect, useState } from 'react';

type time = {
  duration: number;
  start: () => void;
  stop: () => void;
  pause: () => void;
  isRunning: boolean;
};

/**
 * A custom hook to track time. It returns the current time in seconds and provides methods to start, stop and reset the timer.
 * @returns {time: number, start: () => void, pause: () => void, stop: () => void}
 */
const useTimeTracker = (): time => {
  const [duration, setDuration] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const start = () => {
    setIsRunning(true);
  };

  const pause = () => {
    setIsRunning(false);
  };

  const stop = () => {
    setDuration(0);
    setIsRunning(false);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning) {
      interval = setInterval(() => {
        setDuration((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval!);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  return { duration, start, pause, stop, isRunning };
};

export default useTimeTracker;
