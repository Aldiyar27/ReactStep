import React, { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <h1>Текущее время:</h1>
      <p>{time.toLocaleTimeString()}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <Clock />
    </div>
  );
}

export default App;