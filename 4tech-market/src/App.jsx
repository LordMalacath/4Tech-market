import { router } from "routes/Routes";
import { RouterProvider } from "react-router-dom";
import useSetInitialData from "hooks/useSetInitialData";


function App() {
    useSetInitialData();

    return (
        <div className="wrapper">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
