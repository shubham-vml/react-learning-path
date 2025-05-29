import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="card">
      <div className="data">
        <Intro />
        {}
        <SkillList />
      </div>
      <div className="image-container">
        <Avtar />
      </div>
    </div>
  );
}

function Avtar() {
  return <img className="avtar" src="1-hero-image.png" alt="Profile" />;
}
function Intro() {
  return (
    <div>
      <h1>Shubham</h1>
      <p>Frontend & Android Developer | Java Enthusiast</p>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      <Skills skill="React" color="Gray" />
      <Skills skill="HTML+CSS" color="orange" />
      <Skills skill="JavaScript" color="MediumSeaGreen" />
      <Skills skill="Java" color="orangered" />
      <Skills skill="SpringBoot" color="purple" />
      <Skills skill="Kotlin" color="Pink" />
    </div>
  );
}

function Skills(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}
export default App;
