import './App.css';
import {useRoutes} from "./routes";
import {WalletConnectContext} from './services/walletContext'
import {BrowserRouter as Router} from "react-router-dom";

function App() {

    const routes = useRoutes()

    return (
        <WalletConnectContext>
            <div className="App">
                <Router>
                    <div>
                        {routes}
                    </div>
                </Router>
            </div>
        </WalletConnectContext>
    );
}

export default App;
