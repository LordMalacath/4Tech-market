import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchLastViewedItem } from 'redux/slices/itemSlice';
import { useLocalStorageSubscriber } from 'hooks/useLocalStorageSubscriber';
import LeftSide from './components/leftSide/LeftSide'
import RightSide from './components/rightSide/RigthSide'
import './item.scss'

export default function Item() {
    const { item } = useSelector(state => state.viewItem);
    const dispatch = useDispatch();
    const lastViewedItem = useLocalStorageSubscriber("lastViewedItem");

    useEffect(() => {
        dispatch(fetchLastViewedItem(lastViewedItem));
    }, [lastViewedItem]
    )

    return (
        <div className='container' style={{ flex: 5 }}>
            {item &&
                <div className='item'>
                    <div className='item__name'>{item.name}</div>
                    <div className='item__preview preview'>
                        <LeftSide imgCollection={item.imgURL} />
                        <RightSide item={item} />
                    </div>
                </div>
            }
        </div >
    )
};