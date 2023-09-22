import "./App.css";
import Card from "./components/card";
import NavBar from "./components/navbar";

function App() {
  document.body.style = "background: #9a77cf;";
  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="row">
          <div className="col-6 d-flex align-items-center">
            <img src={require("./assets/animal.png")} className="kitten-img" />
            <p className="h1">New way to review</p>
          </div>
          <div className="col-2">
            <Card
              title="Test Your Typing Speed"
              subtitle="This website allows users to increase and sustain their wpm."
              imgSrc={require("./assets/keyboard.png")}
            />
            <Card
              title="Memorize your notes"
              subtitle="With the custom option, you can type your notes again and again that will help you memorize each word"
              imgSrc={require("./assets/memorization.png")}
            />
          </div>
          <div className="col-2 d-flex align-items-center ms-5">
            <Card
              title="Saves paper and ink"
              subtitle="need to explain more?"
              imgSrc={require("./assets/notes.png")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
