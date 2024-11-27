import "./Header.css";
import reactImg from "../../assets/react-core-concepts.png";

const reactDescriptions = ["Fundamental", " Crucial", "Core"];

function genRandomDescription(max: number) {
  return Math.floor(Math.random() * (max + 1));
}
export default function Header() {
  const description = reactDescriptions[genRandomDescription(2)];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom"></img>
      <h1>React Basics</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
