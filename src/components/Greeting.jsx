import React from 'react';

// Greeting component: accepts `name` and optional `now` (Date) for testability
const Greeting = ({ name = 'friend', now = new Date() }) => {
  const hour = now.getHours();

  let text;
  if (hour >= 20 && hour <= 23) {
    text = `Good night ${name}`;
  } else if (hour < 12) {
    text = `Good morning ${name}`;
  } else {
    text = `Good afternoon ${name}`;
  }

  return (
    <div>
      <h2>{text}</h2>
    </div>
  );
};

export default Greeting;
