import { useForm } from 'react-hook-form';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import searchItems from 'api/firebase/searchItems';
import SearchResult from './components/SearchResult';


export default function SearchForm() {
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();
    const { searchResult } = useSelector(state => state.viewItem)
    const onSubmit = data => {
        searchItems(data, dispatch);
    };

    return (
        <form className='searchForm' onSubmit={handleSubmit(onSubmit)}>
            <div className='searchForm__input'>
                <SearchIcon />
                <input type="search" placeholder="Search for items" {...register("search", {})} />
                {searchResult?.length > 0 &&
                    <div className='searchForm__input__results'>
                        {searchResult.map((item, index) => <SearchResult data={item} key={index} />)}
                    </div>
                }
            </div>
            <button className='searchForm__btn' type="submit" >Search</button>
        </form>
    )
};
