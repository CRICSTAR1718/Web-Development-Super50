import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [timeInSeconds, setTimeInSeconds] = useState(0);
  const [laps, setLaps] = useState([]);
  const [isTimerRunning, setIsTimerRunning] = useState(true);

  useEffect(() => {
    if (!isTimerRunning) return;

    const id = setInterval(() => {
      setTimeInSeconds((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(id);
  }, [isTimerRunning]);

  const seconds = timeInSeconds % 60;
  const minutes = Math.floor(timeInSeconds / 60) % 60;
  const hours = Math.floor(timeInSeconds / 3600);
  const uniformSecondValue = seconds.toString().padStart(2, "0");

  const formattedTime = `${hours}:${minutes}:${uniformSecondValue}`;

  const handleAddLap = () => {
    setLaps((prev) => [...prev, formattedTime]);
  };

  const toggleTimer = () => {
    setIsTimerRunning((prev) => !prev);
  };

  const handleReset = () => {
    setIsTimerRunning(false);
    setTimeInSeconds(0);
    setLaps([]);
  };

  return (
    <div className="sw-app">
      <div className="sw-card">
        <header className="sw-header">
          <div className="sw-title">Stopwatch</div>
          <div className="sw-subtitle">
            {isTimerRunning ? "Running" : "Paused"}
          </div>
        </header>

        <main className="sw-main">
          <div className="sw-time" aria-live="polite">
            {formattedTime}
          </div>

          <div className="sw-controls">
            <button className="sw-btn sw-btn-secondary" onClick={handleAddLap}>
              Lap
            </button>

            {isTimerRunning ? (
              <button className="sw-btn sw-btn-primary" onClick={toggleTimer}>
                Pause
              </button>
            ) : (
              <button className="sw-btn sw-btn-primary" onClick={toggleTimer}>
                Play
              </button>
            )}

            <button className="sw-btn sw-btn-danger" onClick={handleReset}>
              Reset
            </button>
          </div>
        </main>

        <section className="sw-laps" aria-label="Lap list">
          <div className="sw-laps-header">Laps</div>
          {laps.length === 0 ? (
            <div className="sw-empty">No laps yet. Click “Lap”.</div>
          ) : (
            <ol className="sw-lap-list">
              {laps.map((lap, idx) => (
                <li key={idx} className="sw-lap-item">
                  <span className="sw-lap-index">#{idx + 1}</span>
                  <span className="sw-lap-time">{lap}</span>
                </li>
              ))}
            </ol>
          )}
        </section>
      </div>
    </div>
  );
};

export default App;

