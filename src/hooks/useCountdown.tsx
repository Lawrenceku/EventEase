import { useState, useEffect } from "react";

interface TimeLeft {
  minutes: string | number;
  seconds: string | number;
}

interface CountdownHookReturnType {
  seconds: number;
  timeLeft: TimeLeft;
  timeLeftString: string;
}

const useCountdown = (
  initialSeconds: number,
  onComplete: (() => void) | undefined = undefined,
): CountdownHookReturnType => {
  const [seconds, setSeconds] = useState<number>(initialSeconds);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    minutes: Math.floor(seconds / 60),
    seconds: seconds % 60,
  });

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [seconds]);

  useEffect(() => {
    if (seconds === 0 && onComplete) {
      onComplete();
    }
  }, [seconds, onComplete]);

  useEffect(() => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    setTimeLeft({
      minutes: minutes < 10 ? `0${minutes}` : minutes,
      seconds:
        remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds,
    });
  }, [seconds]);

  const timeLeftString: string = `${timeLeft.minutes}:${timeLeft.seconds}`;

  return { seconds, timeLeft, timeLeftString };
};

export default useCountdown;
