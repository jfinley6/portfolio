import { useEffect } from "react";

export default function App() {

useEffect(() => {
  document.title = "John Finley | Developer";
}, []);

  return (
      <div className="app-container">
        Home
      </div>
  );
}
