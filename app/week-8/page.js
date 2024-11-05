"use client";

import { useState } from "react";
import ItemList from "./item-list.js";
import NewItem from "./new-item.js";
import MealIdeas from "./meal-ideas.js";
import itemsData from './items.json';

export default function Page() {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState('');

    const handleAddItem = (item) => {
        setItems((prevItems) => [...prevItems, item]);
    };

    const handleItemSelect = (itemName) => {
        const cleanedName = itemName
            .split(',')[0]
            .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g, '')
            .trim();
        setSelectedItemName(cleanedName);
    };

    return (
        <main className="flex flex-col md:flex-row justify-around p-5">
            <div className="bg-white shadow-lg rounded-lg p-5 m-2 flex-1 transition-transform duration-200 hover:scale-105">
                <h1 className="text-center font-semibold text-3xl mb-4 text-gray-800">Shopping List</h1>
                <NewItem onAddItem={handleAddItem} />
                <ItemList items={items} onItemSelect={handleItemSelect} />
            </div>
            <div className="bg-white shadow-lg rounded-lg p-5 m-2 flex-1 transition-transform duration-200 hover:scale-105">
                <MealIdeas ingredient={selectedItemName} />
            </div>
        </main>
    );
    
}
