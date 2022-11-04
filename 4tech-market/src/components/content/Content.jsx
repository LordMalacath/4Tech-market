import { useLocalStorageSubscriber } from 'hooks/useLocalStorageSubscriber';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchItemsCollection } from 'redux/slices/categoriesSlice';
import ItemCardVertical from './components/itemCardVertical/ItemCardVertical'
import './content.scss'

export default function Content() {
    const { itemsCollection } = useSelector(state => state.categories);
    const dispatch = useDispatch()
    const category = useLocalStorageSubscriber("category")

    useEffect(() => {
        dispatch(fetchItemsCollection(category));
    }, [category])
    return (
        <div style={{ "flex": 5 }}>
            <div className='content vertical'>
                {itemsCollection &&
                    itemsCollection?.map((item) => (
                        <ItemCardVertical key={item.name} data={item} />
                    ))}
            </div>
        </div>
    )
};
