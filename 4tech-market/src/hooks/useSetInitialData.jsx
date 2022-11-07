import useSetGategoriesList from "./useSetGategoriesList";
import { useSetLoggedUser } from "./useSetLoggedUser";


export default function useSetInitialData() {
    useSetLoggedUser();
    useSetGategoriesList();
};