import React, { useState } from 'react';

function App() {
  const [reactCount, setReactCount] = useState(0);
  const [vanillaCount, setVanillaCount] = useState(0);

  const handleVanillaClick = () => {
    const element = document.getElementById('vanilla-title');
    element.innerText = `Vanilla Title ${vanillaCount + 1}`;
    setVanillaCount(vanillaCount + 1);
  };

  const handleReactClick = () => {
    setReactCount(reactCount + 1);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1 id="vanilla-title">Vanilla Title</h1>
      <h1>React Title {reactCount}</h1>

      <button onClick={handleVanillaClick} style={{ marginRight: '10px' }}>
        Change Title (Vanilla JS)
      </button>
      <button onClick={handleReactClick}>
        Change Title (React)
      </button>

      <div style={{ marginTop: '20px' }}>
        <p>Vanilla DOM Updates: {vanillaCount}</p>
        <p>React Virtual DOM Updates: {reactCount}</p>
      </div>
    </div>
  );
}

export default App;
