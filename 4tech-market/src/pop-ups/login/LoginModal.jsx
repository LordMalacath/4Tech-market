import "./loginModal.scss"
import Modal from "react-modal";
import LoginForm from "./components/loginForm/LoginForm";
import SocialLogin from "./components/socialLogin/SocialLogin";

Modal.setAppElement("#root");

const customStyles = {
    content: {
        borderRadius: '25px',
        width: '50%',
        height: '50%',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

export default function LoginModal({ isOpen, toggleModal }) {

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={toggleModal}
            contentLabel="My dialog"
            style={customStyles}
        >
            <div className="loginModalContent">
                <div className="loginModalContent__left">
                    <LoginForm />
                </div>
                <span>OR</span>
                <div className="loginModalContent__right">
                    <SocialLogin />
                </div>
                <span className="closeModal" onClick={toggleModal}>X</span>
            </div>
        </Modal>
    )
};