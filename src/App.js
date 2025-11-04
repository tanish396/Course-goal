import React, { useEffect, useState } from "react";
import Page from "../../course-goal/src/components/Gallery";

function App() {
  return (
    <div>
      <Page />
      <Page />
    </div>
  );
}
export default App;

// import Todo from "./components/Todo";

// function App() {
//   const DUMMY_TODO = ["Learn React", "Practice React", "Profit!"];
//   return (
//     <div className="list">
//       {DUMMY_TODO.map((item, index) => (
//         <Todo key={index} text={item} />
//       ))}
//     </div>
//   );
// }
// export default App;

// import { useState } from "react";
// function App() {
//   const [isVisible, setIsVisible] = useState(false);

//   function toggleMessageHandler() {
//     setIsVisible(!isVisible);
//   }
//   return (
//     <div>
//       <h1>Toggle Message</h1>
//       <button onClick={toggleMessageHandler}>
//         {isVisible ? "Hide Message" : "Show Message"}
//       </button>
//       {isVisible && <p>This is a secret message</p>}
//     </div>
//   );
// }
// export default App;

// import React, { useState } from "react";

// function App() {
//   const [showWarning, setShowWarning] = useState(false);

//   function showWarningHandler() {
//     setShowWarning(true);
//   }

//   function hideWarningHandler() {
//     setShowWarning(false);
//   }

//   return (
//     <div className="container">
//       {!showWarning ? (
//         <button className="btn" onClick={showWarningHandler}>
//           {" "}
//           Delete{" "}
//         </button>
//       ) : (
//         <div id="alert" className="warning-box">
//           <h1> Are you sure? </h1>
//           <p> These changes can't be reverted </p>

//           <button className="proceed-btn" onClick={hideWarningHandler}>
//             Proceed
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;

// function Product() {
//   const isAvailable = true;

//   return (
//     <div>
//       <h3>Product Name: Headphones </h3>
//       <p>{isAvailable ? "In Stock" : "Out Of Stock"} </p>
//     </div>
//   );
// }

// export default Product;

// function App() {
//   const status

//   return (
//     <div>{isLoggedIn ? <button>Logout</button> : <button>Login</button>}</div>
//   );
// }

// export default App;

// import { useState } from "react";

// function App() {
//   const [price, setPrice] = useState(100);
//   const handleClick = () => {
//     setPrice(75);
//   };

//   return (
//     <div>
//       <h1> Online Shop</h1>
//       <p>
//         Product Price: <strong>${price}</strong>
//       </p>
//       <button onClick={handleClick}>Discount</button>
//     </div>
//   );
// }

// export default App;

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

// import React, { useState } from "react";

// const user = {
//   email: "",
//   password: "",
//   loggedIn: false,
// };

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleLogin = () => {
//     if (user.email === email) {
//       setError("Email Id is already exists");
//       return;
//     }
//     user.email = email;
//     user.password = password;
//     user.loggedIn = true;
//     setError("");

//     alert("Login Successful");
//     setEmail("");
//     setPassword("");
//   };
//   return (
//     <div className="container mt-5">
//       <div className="mb-3">
//         <label className="form-label">Email</label>
//         <div className="col-sm-10">
//           <input
//             type="email"
//             className="form-control"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Enter your email"
//           ></input>
//         </div>
//       </div>
//       <div className="mb-3">
//         <label className="form-label">Password</label>
//         <div className="col-sm-10">
//           <input
//             type="password"
//             className="form-control"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Enter your password"
//           ></input>
//         </div>
//       </div>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       <button type="button" className="btn btn-primary" onClick={handleLogin}>
//         Login
//       </button>
//     </div>
//   );
// }

// export default Login;
