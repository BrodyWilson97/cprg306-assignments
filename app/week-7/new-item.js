import { useState } from "react";

export default function NewItem({ onAddItem }) {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newItem = {
            id: Math.random().toString(36).substr(2, 9), // Random string for id
            name,
            quantity,
            category,
        };
        onAddItem(newItem); // Invoke the onAddItem prop with the new item object
        // Reset the input fields after submission
        setName("");
        setQuantity(1);
        setCategory("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="Item Name" 
                required 
            />
            <input 
                type="number" 
                value={quantity} 
                onChange={(e) => setQuantity(Number(e.target.value))} 
                min="1" 
                required 
            />
            <input 
                type="text" 
                value={category} 
                onChange={(e) => setCategory(e.target.value)} 
                placeholder="Category" 
                required 
            />
            <button type="submit">Add Item</button>
        </form>
    );
}
