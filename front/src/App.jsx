import React, { useState, useEffect } from "react";

const API = "http://localhost:5000"; // backend URL

function App() {
  const [form, setForm] = useState({ name: "", email: "" });
  const [users, setUsers] = useState([]);
  const [msg, setMsg] = useState("");

  // update form fields
  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // fetch users from backend
  const fetchUsers = async () => {
    try {
      const res = await fetch(`${API}/users`);
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      console.error("fetchUsers error", err);
    }
  };

  useEffect(() => {
    fetchUsers(); // run once when component mounts
  }, []);

  // submit form -> POST to backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");
    if (!form.name || !form.email) {
      setMsg("Please enter name and email");
      return;
    }

    try {
      const res = await fetch(`${API}/createUser`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      if (res.ok) {
        const saved = await res.json();
        setUsers(prev => [saved, ...prev]); // show immediately
        setForm({ name: "", email: "" });
        setMsg("User added");
      } else {
        const err = await res.json();
        setMsg(err.error || "Failed to add");
      }
    } catch (err) {
      console.error("submit error", err);
      setMsg("Network error");
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: 30 }}>
      <h2>Add User</h2>

      <form onSubmit={handleSubmit} style={{ marginBottom: 12 }}>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
          style={{ display: "block", marginBottom: 8, padding: 8, width: "100%" }}
        />
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          style={{ display: "block", marginBottom: 8, padding: 8, width: "100%" }}
        />
        <button type="submit" style={{ padding: "8px 16px" }}>Submit</button>
      </form>

      {msg && <div style={{ marginBottom: 12 }}>{msg}</div>}

      <h3>Saved users</h3>
      {users.length === 0 ? <p>No users yet</p> : (
        <ul>
          {users.map((u, i) => (
            <li key={i}><strong>{u.name}</strong> — {u.email}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
