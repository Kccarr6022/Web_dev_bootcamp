import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";

let inputProps = {
  picture: "./../../images/image1.png",
  test: "text",
};

function App() {
  //<Hero />
  return (
    <div className="App">
      <Navbar test= "work" />
      <Hero />
      <Card />
    </div>
  );
}

export default App;
