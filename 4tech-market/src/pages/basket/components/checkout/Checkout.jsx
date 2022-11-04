import Modal from "components/modal/Modal";
import { useState } from "react";
import { useSelector } from "react-redux"
import CheckoutBtn from "./components/CheckoutBtn";


export default function Checkout() {
    const { totalPayment } = useSelector(state => state.basket);
    const [modalState, setModalState] = useState('close');
    const handleOpen = () => { setModalState('open') };
    const handleClose = () => { setModalState('close') };

    return (
        <div className='checkout' >
            <div className='checkout__counter'>
                {totalPayment} $
            </div>
            <CheckoutBtn handleOpen={handleOpen} />
            <Modal
                modalState={modalState}
                handleClose={handleClose}
            >
                <p>Modal Content</p>
            </Modal>
        </div >
    )
};