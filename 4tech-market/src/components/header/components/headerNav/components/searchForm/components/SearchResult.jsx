import { useLocalStorage } from "hooks/useLocalStorage";
import { useLocalStorageSubscriber } from "hooks/useLocalStorageSubscriber";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeSearchResults, setItem } from "redux/slices/itemSlice";


export default function SearchResult({ data }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const lastViewedItem = useLocalStorageSubscriber("lastViewedItem");
    // eslint-disable-next-line no-unused-vars
    const [_, setLocalStorageLastViewedItem] = useLocalStorage("lastViewedItem", lastViewedItem);
    const handleClick = () => {
        setLocalStorageLastViewedItem(data.name);
        dispatch(setItem(data));
        dispatch(removeSearchResults());
        navigate(`/item/${data.name}`);
    };

    return (
        <div className='result' onClick={handleClick}>
            <div className='result__img'>
                <img src={data.imgURL[0]} alt={data.name} />
            </div>
            <div className='result__name'>
                {data.name}
            </div>
        </div>
    )
}
