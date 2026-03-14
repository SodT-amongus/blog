import { useState } from "react";

export const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (!firstName || !lastName || !email || !password) {
      alert("fill the sign up fully please");
      return;
    } else {
      console.log(firstName, lastName, email, password);
    }
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <form
        style={{
          backgroundColor: "#fff",
          borderRadius: "5px",
          boxShadow: "0 0 10px #0003",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          padding: "30px",
          width: "300px",
        }}
      >
        <h1>Sign Up</h1>
        <input
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "10px",
          }}
          type="text"
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
        />
        <input
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "10px",
          }}
          type="text"
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
        />
        <input
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "10px",
          }}
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "10px",
          }}
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button
          style={{
            backgroundColor: "#4b6bfb",
            border: "none",
            borderRadius: "6px",
            color: "#fff",
            cursor: "pointer",
            height: "36px",
            padding: "10px 16px",
            width: "100%",
          }}
          type="submit"
          onClick={handleSubmit}
        >
          Sign up
        </button>
        <a
          style={{ textDecoration: "none", color: "black", fontSize: "14px" }}
          href="/sign-in"
        >
          Already have an account?
        </a>
      </form>
    </div>
  );
};
