import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchItemData } from 'redux/slices/itemSlice';
import './sideBar.scss'
import { testFunc3, testFunc2 } from '../../test';

export default function SideBar() {
    const { user } = useSelector(state => state.loggedUser);
    const dispatch = useDispatch()
    const handleClick1 = () => {
        testFunc3()
    }

    const handleClick2 = () => {
        testFunc2()
    }

    return (
        <aside style={{ flex: 1 }} >
            <div className='navigation'>
                {user?.admin &&
                    <Link to={"/additem"}>
                        <div className='adminPanelButton'>Admin Panel</div>
                    </Link>
                }
                <button onClick={handleClick1}>Test 1</button>
                {/* <button onClick={handleClick2}>Test 2</button> */}
            </div>
        </aside>
    )
};
