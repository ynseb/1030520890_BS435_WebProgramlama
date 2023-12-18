import React, { useState, useEffect } from 'react';

const Countdown = () => {
 const [time, setTime] = useState(10);
 const [countdown, setCountdown] = useState(null);
 const [disabled, setDisabled] = useState(false);

 useEffect(() => {
    return () => {
      clearTimeout(countdown);
    };
 }, [countdown]);

 const submitHandler = () => {
    console.log('Time left:', time);
 };

 const Start = () => {
    setDisabled(true);
    setCountdown(setTimeout(() => setTime(time - 1), 1000));
 };

 return (
    <div>
      <p>Time left: {time}</p>
      <button disabled={disabled} onClick={submitHandler}>Tahmin Et</button>
      <button onClick={Start}>Reset Countdown</button>
    </div>
 );
};

export default Countdown;