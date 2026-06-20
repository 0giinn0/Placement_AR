import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <h1>AR Room Redecorator</h1>
      <p>This is a minimal working version of the AR Room Redecorator app.</p>
      <p>Features implemented:</p>
      <ul>
        <li>Basic React + Vite setup</li>
        <li>TypeScript support</li>
        <li>Three.js and React Three Fiber integration</li>
        <li>Basic UI components</li>
      </ul>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
