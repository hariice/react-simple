import './App.css';
import Menu from "./components/menu";
import { BrowserRouter } from "react-router-dom";
import Routers from "./router";
const App = () => {
    return (<BrowserRouter><div>

        <Menu />
        <Routers />

    </div>
    </BrowserRouter>
    );
}

export default App;