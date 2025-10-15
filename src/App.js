import CourseGoal from "./components/CourseGoal";
import Heading from "./components/Heading";
import "./App.css";
function App() {
  return (
    <div className="appContainer">
      <h1> TIME TO PRACTICE</h1>
      <p id="paragraph">One course, many goals!🎯 </p>
      <CourseGoal title="LEARN REACT" description="IN DEPTH" />
      <CourseGoal
        title="PRACTICE"
        description="PRACTICE WORKING WITH REACT COMPONENTS"
      />
    </div>
  );
}

export default App;
