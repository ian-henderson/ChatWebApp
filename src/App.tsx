import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import router from "./router";
import store from "./store";

export default function App() {
    return (
        <Provider {...{ store }}>
            <RouterProvider {...{ router }} />
        </Provider>
    );
}
