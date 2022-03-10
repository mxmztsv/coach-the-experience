import logo from './logo.svg';
import './App.css';
import {Main} from "./sections/Main";
import {Header} from "./components/Header";
import {Packages} from "./sections/Packages";

function App() {
  return (
    <div className="App">
        <Header/>
        <Main/>
        <Packages/>
    </div>
  );
}

export default App;
