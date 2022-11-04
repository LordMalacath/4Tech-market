import { Link } from 'react-router-dom'
import CategoriesBtn from './components/categoriesBtn/CategoriesBtn'
import SearchForm from './components/searchForm/SearchForm'


export default function HeaderNav() {
    return (
        <div className='headerNav'>
            <Link to={"/categories"}>
                <CategoriesBtn />
            </Link>
            <SearchForm />
        </div>
    )
};
