import logo from './logo.svg';
import './App.css';
import {Main} from "./sections/Main";
import {Header} from "./components/Header";
import {Packages} from "./sections/Packages";
import {PhotoCarousel} from "./sections/PhotoCarousel";
import {WhatIsHappening} from "./sections/WhatIsHappening";
import {Coach} from "./sections/Coach";
import {Activities} from "./sections/Activities";
import {Network} from "./sections/Network";

function App() {
  return (
    <div className="App">
        <Header/>
        <Main/>
        <Packages/>
        <PhotoCarousel/>
        <WhatIsHappening/>
        <Coach/>
        <Activities/>
        <Network/>
    </div>
  );
}

export default App;
