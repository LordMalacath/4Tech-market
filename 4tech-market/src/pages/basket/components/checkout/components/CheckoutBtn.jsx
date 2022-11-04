

export default function CheckoutBtn({ handleOpen }) {

    return (
        <button
            className='checkout__button'
            onClick={handleOpen}
        >
            Checkout
        </button>
    )
};