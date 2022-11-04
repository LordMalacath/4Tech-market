import LoginModal from "pop-ups/login/LoginModal";
import { useState } from "react";



export default function LoginBtn() {
    const [isOpen, setIsOpen] = useState(false);

    function toggleModal() {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <button className='loginBtn' onClick={toggleModal}>
                Login
            </button>
            <LoginModal isOpen={isOpen} toggleModal={toggleModal}/>
        </div>
    )
};
