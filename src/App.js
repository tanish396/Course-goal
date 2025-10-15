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

import Card from "./components/Card";
import "./App.css";

function App() {
  return (
    <div className="appContainer">
      <Card className="name.card" name="Maria Miles">
        <p id="card-body">
          Maria is a professor of Computer Science at the University of
          Illinois.
        </p>
        <p>
          <a id="card-footer" href="mailto:blake@example.com">
            Email Maria
          </a>
        </p>
      </Card>
    </div>
  );
}

export default App;
