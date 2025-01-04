import "./App.css"
import ButtonLink from "./components/ButtonLink/ButtonLink";

function App() {
  return (
    <header className="App-header">
      <body>
        <div className="box">
          <div className="nameProfile">
            <p className="title">hello</p>
          </div>
          <div className="buttons-links">
            <ButtonLink title="Youtube"/>
            <ButtonLink title="X"/>
            <ButtonLink title="Twitch"/>
          </div>
        </div>
      </body>
    </header>
  );
}

export default App;
