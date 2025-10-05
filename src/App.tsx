import { useEffect, useState } from "react";
import "./App.css"; // make sure the CSS file is in the same folder

const pad = (n: number) => String(n).padStart(2, "0");

export default function App() {
  const [now, setNow] = useState<Date>(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  let hours = now.getHours();
  const minutes = pad(now.getMinutes());
  const seconds = pad(now.getSeconds());
  const ampm = hours >= 12 ? "PM" : "AM";

  // convert to 12-hour format
  hours = hours % 12 || 12;

  const dateString = now.toLocaleDateString(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="tty-container">
      <div className="tty-time">
        {pad(hours)}:{minutes}:{seconds} <span className="ampm">{ampm}</span>
      </div>
      <div className="tty-date">{dateString}</div>

      {/* footer */}
      <footer className="tty-footer">Created by Dinno Guerba</footer>
    </div>
  );
}
