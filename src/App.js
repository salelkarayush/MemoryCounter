import './App.css';
import Header from './components/Header';
import GamePlay from './components/GamePlay';
import { useState } from 'react';
function App() {
  const [score, setScore] = useState(0);
  const [bestScore,setBestScore]=useState(0)
  return (
    <div className="App">
      <Header currscore={score} bestscore={bestScore}/>
      <GamePlay
        setScore={setScore}
        score={score}
        bestScore={bestScore}
        setBestScore={setBestScore}      
      />
    </div>
  );
}

export default App;
