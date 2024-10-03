export default function NewItem(props) {
    const baseStyles = 'bg-cyan-300 hover:bg-cyan-600 active:bg-white text-black rounded py-2 px-4 mt-5';
    const disabledStyles = 'bg-red-500 cursor-not-allowed text-black rounded py-2 px-4 mt-5';

    const incrementButtonStyles = props.quantity < 20 ? baseStyles : disabledStyles;
    const decrementButtonStyles = props.quantity > 1 ? baseStyles : disabledStyles;
    const resetStyles = baseStyles;

    return (
        <section>
            <h2 className = 'font-bold py-2 px-4 mt-5 bg-center'>Quantity: {props.quantity}</h2>
            <button className={incrementButtonStyles} onClick={props.incrementQuantity} disabled={props.quantity >= 20}>+</button>
            <button className={decrementButtonStyles} onClick={props.decrementQuantity} disabled={props.quantity <= 1}>-</button>
            <button className={resetStyles} onClick={props.resetQuantity}>Reset</button>
        </section>
    );
}

