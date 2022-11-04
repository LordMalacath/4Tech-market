import CategoriesList from './components/categoriesList/CategoriesList';
import './categories.scss';
import SubCategories from './components/subCategories/SubCategories';

export default function Categories() {
    return (
        <div style={{ flex: 5 }}>
            <div className='categories'>
                <CategoriesList />
                <SubCategories />
            </div>
        </div>
    )
};