import React, { useState, useEffect } from 'react';

function Main() {
  const [showHero, setShowHero] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowHero(false);
    }, 10);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      {showHero && (
        <div className="hero">
          <div className="hero-content">
            <h1>MÁRO</h1>
            <h2>Design Studio</h2>
          </div>
        </div>
      )}
      <div className="content">
        <h1>Название вашей фирмы</h1>
      </div>
    </div>
  );
}

export default Main;
