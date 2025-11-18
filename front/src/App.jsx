import { useState } from 'react';
// import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [form, setForm] = useState("");
  const [submittedName, setSubmittedName] = useState(""); // Renamed for clarity

  const handleInputChange = (e) => { // Renamed for clarity
    setForm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    setSubmittedName(form); // Update the displayed name
    setForm(""); // Clear the input field after submission
  };

  return (
    <>
      <div>Friotn + backend </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={form}
          placeholder='Enter your name'
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button> {/* Added type="submit" */}
      </form>
      {submittedName && <p>Your Name: {submittedName}</p>} {/* Conditionally render */}
    </>
  );
}

export default App;