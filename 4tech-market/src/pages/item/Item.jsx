import LeftSide from './components/leftSide/LeftSide'
import RightSide from './components/rightSide/RigthSide'
import './item.scss'

export default function Item() {

    return (
        <div className='container' style={{ flex: 5 }}>
            <div className='item'>
                <div className='item__name'>Name</div>
                <div className='item__preview preview'>
                    <LeftSide />
                    <RightSide />
                </div>
            </div>
        </div>
    )
};