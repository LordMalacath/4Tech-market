import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './sideBar.scss'


export default function SideBar() {
    const { user } = useSelector(state => state.loggedUser);


    return (
        <aside style={{ flex: 1 }} >
            <div className='navigation'>
                {user?.admin &&
                    <Link to={"/additem"}>
                        <div className='adminPanelButton'>Admin Panel</div>
                    </Link>
                }
            </div>
        </aside>
    )
};
