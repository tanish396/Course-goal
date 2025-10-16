// import CourseGoal from "./components/CourseGoal";
// import Heading from "./components/Heading";
// import "./App.css";
// function App() {
//   return (
//     <div className="appContainer">
//       <h1> TIME TO PRACTICE</h1>
//       <p id="paragraph">One course, many goals!🎯 </p>
//       <CourseGoal title="LEARN REACT" description="IN DEPTH" />
//       <CourseGoal
//         title="PRACTICE"
//         description="PRACTICE WORKING WITH REACT COMPONENTS"
//       />
//     </div>
//   );
// }

// export default App;

// import Card from "./components/Card";
// import "./App.css";

// function App() {
//   return (
//     <div className="appContainer">
//       <Card name="Maria Miles">
//         <p id="card-body">
//           Maria is a professor of Computer Science at the University of
//           Illinois.
//         </p>
//         <p>
//           <a id="card-footer" href="mailto:blake@example.com">
//             Email Maria
//           </a>
//         </p>
//       </Card>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";

const user = {
  email: "",
  password: "",
  loggedIn: false,
};

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (user.email === email) {
      setError("Email Id is already exists");
      return;
    }
    user.email = email;
    user.password = password;
    user.loggedIn = true;
    setError("");

    alert("Login Successful");
    setEmail("");
    setPassword("");
  };
  return (
    <div className="container mt-5">
      <div className="mb-3">
        <label className="form-label">Email</label>
        <div className="col-sm-10">
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          ></input>
        </div>
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <div className="col-sm-10">
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          ></input>
        </div>
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button type="button" className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default Login;
