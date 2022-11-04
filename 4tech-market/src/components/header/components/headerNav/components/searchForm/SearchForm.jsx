import { useForm } from 'react-hook-form';
import SearchIcon from '@mui/icons-material/Search';


export default function SearchForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);


    return (
        <form className='searchForm' onSubmit={handleSubmit(onSubmit)}>
            <div className='searchForm__input'>
                <SearchIcon />
                <input type="search" placeholder="Search for items" {...register("Search", {})} />
            </div>

            <button className='searchForm__btn' type="submit" >Search</button>
        </form>
    )
};
