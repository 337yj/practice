import { useState } from 'react';
import './App.css';
// import Effect from './Effect';
import Timer from './Timer';

export default function App() {
  const [showTimer, setShowTimer] = useState(false);

  return (
    <div className="App">
      {/* <Effect /> */}
      {showTimer && <Timer />}
      <button onClick={() => setShowTimer(!showTimer)}>Toggle Timer</button>
    </div>
  );
}


