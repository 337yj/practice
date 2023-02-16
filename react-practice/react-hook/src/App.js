import { useState } from 'react';
import './App.css';
import Effect from './components/Effect';
import Timer from './components/Timer';

function App() {
  const [showTimer, setShowTimer] = useState(false);

  return (
    <div className="App">
      {/* <Effect /> */}
      {showTimer && <Timer />}
      <button onClick={() => setShowTimer(!showTimer)}>Toggle Timer</button>
    </div>
  );
}

export default App;
