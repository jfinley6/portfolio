import { useEffect } from "react";

export default function Home() {

useEffect(() => {
  document.title = "John Finley | Developer";
}, []);

  return (
      <div>
        Home
      </div>
  );
}
