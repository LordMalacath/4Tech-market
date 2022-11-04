import './Modal.scss'

export default function Modal({ children, modalState, handleClose }) {

    if (modalState === "open") {
        return (
            <div className="modal">
                <div
                    className="modal__back"
                    onClick={handleClose}
                >
                </div>
                <div
                    className='modal__content'
                >
                    {children}
                    <button onClick={handleClose}>
                        &#10060;
                    </button>
                </div>
            </div>
        )
    }
}