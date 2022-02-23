import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Router } from "./Components/Routes";
import { persistor, store } from "./store";

export const App = () => (
    <Provider store={ store } >
        <PersistGate persistor={persistor}>
            <Router />
        </PersistGate>
    </Provider>
);

export default App; 