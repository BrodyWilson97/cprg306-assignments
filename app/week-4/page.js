"use client";

import {useState} from "react";
import NewItem from "./new-item.js";

export default function Page() {
    const [quantity, setQuantity] = useState(1);

    const incrementQuantity = () => {
        setQuantity(currentQuantity => (currentQuantity < 20 ? currentQuantity + 1 : currentQuantity));
    };

    const decrementQuantity = () => {
        setQuantity(currentQuantity => (currentQuantity > 1 ? currentQuantity - 1 : currentQuantity));
    };
    
        const resetQuantity = () => setQuantity(1);

    return (
        <main>
            <NewItem
                quantity={quantity}
                incrementQuantity={incrementQuantity}
                decrementQuantity={decrementQuantity}
                resetQuantity={resetQuantity} />
        </main>
    )
}
