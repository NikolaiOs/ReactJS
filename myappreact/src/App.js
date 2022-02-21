import { Provider } from "react-redux";
import { Router } from "./Components/Routes";
import { store } from "./store";

export const App = () => (
    <Provider store={ store } >
        <Router />
    </Provider>
);

export default App;