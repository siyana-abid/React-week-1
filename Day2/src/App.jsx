import { useState } from "react";
import ConditionalText from "./practice";

function Student(props) {
  const [age, setAge] = useState(18);

  return (
    <div>
      <h2>Name: {props.name}</h2>
      <p>Course: {props.course}</p>
      <p>Age: {age}</p>

      <button onClick={() => setAge(age + 1)}>
        Increase Age
      </button>
    </div>
  );
}

function App() {
  return (
    <div>
      <Student name="Siyana" course="React" />

      <hr />

      <ConditionalText />
    </div>
  );
}

export default App;