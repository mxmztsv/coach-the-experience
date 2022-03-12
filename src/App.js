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
import {Sponsors} from "./sections/Sponsors";
import {SponsorPerks} from "./sections/SponsorPerks";
import {Charities} from "./sections/Charities";
import {Massage} from "./sections/Massage";
import {Trip} from "./sections/Trip";
import {ScavengerHunt} from "./sections/ScavengerHunt";

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
        <Sponsors/>
        <SponsorPerks/>
        <Charities/>
        <Massage/>
        <Trip/>
        <ScavengerHunt/>
    </div>
  );
}

export default App;
