import { useState, useEffect, useRef } from "react";
import "./styles.css";

export default function App() {
  const [email, setEmail] = useState("");
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const emailRef = useRef();

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  });

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (document.activeElement.isSameNode(emailRef.current)) {
        console.log("search", email);
      }
      emailRef.current.focus();
    }
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      Search: by email:{" "}
      <input
        ref={emailRef}
        className="border border-gray-500"
        type="text"
        placeholder="email"
        value={email}
        onChange={handleEmail}
      />
    </div>
  );
}
