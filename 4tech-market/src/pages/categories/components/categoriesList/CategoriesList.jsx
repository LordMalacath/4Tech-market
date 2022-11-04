import { useLocalStorage } from 'hooks/useLocalStorage';
import { useLocalStorageSubscriber } from 'hooks/useLocalStorageSubscriber';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setChosenCategory } from 'redux/slices/categoriesSlice';


export default function CategoriesList() {
    const { categories } = useSelector(state => state.categories);
    const dispatch = useDispatch();
    const category = useLocalStorageSubscriber("category");
    const [localStorageCategory, setLocalStorageCategory] = useLocalStorage("category", category);

    const handleClick = (item) => {
        setLocalStorageCategory(item)
        dispatch(setChosenCategory(item))
    }

    return (
        <div className='categories__list'>
            <div className='categories__list__container'>
                <ul>
                    {categories?.map(item => (
                        <Link key={item} to={`/categories/:${item}`}>
                            <li
                                key={item}
                                onClick={() => handleClick(item)}
                            >
                                {item}
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    )
};