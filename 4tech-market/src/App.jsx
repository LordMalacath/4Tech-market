import { router } from "routes/Routes";
import { RouterProvider } from "react-router-dom";
import { useSetLoggedUser } from "hooks/useSetLoggedUser";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCategoriesList } from "redux/slices/categoriesSlice";


function App() {
    const dispatch = useDispatch();
    useSetLoggedUser();
    useEffect(() => {
        dispatch(fetchCategoriesList());
        
    }, []);
    return (
        <div className="wrapper">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
