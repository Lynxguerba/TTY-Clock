import { useEffect, useState } from "react";
import "./App.css"; // make sure the CSS file is in the same folder

const pad = (n: number) => String(n).padStart(2, "0");

export default function App() {
  const [now, setNow] = useState<Date>(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const hours = pad(now.getHours());
  const minutes = pad(now.getMinutes());
  const seconds = pad(now.getSeconds());

  const dateString = now.toLocaleDateString(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="tty-container">
      <div className="tty-time">
        {hours}:{minutes}:{seconds}
      </div>
      <div className="tty-date">{dateString}</div>

       {/* footer */}
      <footer className="tty-footer">
        Created by Dinno Guerba
      </footer>
    </div>
  );
}
