import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCategoriesList } from "redux/slices/categoriesSlice";

export default function useSetGategoriesList() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCategoriesList());
    }, []);
};
