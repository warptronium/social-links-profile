import "./App.css"
import ButtonLink from "./components/ButtonLink/ButtonLink";
import imageAvatar from './assets/images/image_avatar.jpg';

function App() {
  return (
    <header className="App-header">
      <body>
        <div className="box">
          <div className="profile">
            <img src={imageAvatar} className="imageAvatar" alt="image_avatar" />
            <p className="title">warptronium</p>
            <p className="contry">Paris, France</p>
            <p className="description">"Front-end dev and space enthusiast."</p>
          </div>
          <div className="buttons-links">
            <ButtonLink title="Youtube"/>
            <ButtonLink title="X"/>
            <ButtonLink title="Twitch"/>
            <ButtonLink title="Tiktok"/>
            <ButtonLink title="Instagram"/>
          </div>
        </div>
      </body>
    </header>
  );
}

export default App;
