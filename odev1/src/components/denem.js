import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
 const [timeLeft, setTimeLeft] = useState("5");
 const [countdown, setCountdown] = useState(null);

 useEffect(() => {
    if (timeLeft > 0) {
      setCountdown(setTimeout(() => setTimeLeft(time - 1), 1000));
    } else {
      clearTimeout(countdown);
      setTimeLeft(5);
    }
 }, [timeLeft, countdown]);

 const resetCountdown = () => {
    clearTimeout(countdown);
    setTimeLeft(5);
 };

 return (
    <div>
      <p>Time left: {time}</p>
      <button onClick={resetCountdown}>Reset Countdown</button>
    </div>
 );
};

export default CountdownTimer;