import React, { useState, useEffect } from "react";

function Tasbeh() {
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem("tasbehCount");
    return savedCount ? parseInt(savedCount, 10) : 0;
  });

  useEffect(() => {
    localStorage.setItem("tasbehCount", count);
  }, [count]);

  const sonQosh = () => setCount(count + 1);
  const sonMinus = () => {
    if (count > 0) setCount(count - 1);
  };
  const sonReset = () => setCount(0);

  return (
    <div className="tasbeh-container">
      <h1 className="tasbeh-title">Tasbeh</h1>
      <div className="tasbeh-counter">{count}</div>
      <div className="tasbeh-buttons">
        <button className="tasbeh-button" onClick={sonQosh}>
          Qo'shish
        </button>
        <button className="tasbeh-button" onClick={sonMinus}>
          Ayirish
        </button>
        <button className="tasbeh-button" onClick={sonReset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Tasbeh;
