import { useState } from 'react';
import Item from './item.js';
import itemsData from './items.json'; 

export default function ItemList() {
    const [sortBy, setSortBy] = useState('name');

    const sortedItems = [...itemsData].sort((a, b) => {
        if (sortBy === 'name') {
            return a.name.localeCompare(b.name);
        } else if (sortBy === 'category') {
            return a.category.localeCompare(b.category);
        }
        return 0;
    });

    const groupedItems = sortedItems.reduce((acc, item) => {
        if (!acc[item.category]) acc[item.category] = [];
        acc[item.category].push(item);
        return acc;
    }, {});

    return (
        <div className="p-4">
            <div className="flex space-x-4 mb-4">
                <button
                    onClick={() => setSortBy('name')}
                    className={`px-4 py-2 rounded ${sortBy === 'name' ? 'bg-gray-300' : 'bg-white'} border`}
                >
                    Sort by Name
                </button>
                <button
                    onClick={() => setSortBy('category')}
                    className={`px-4 py-2 rounded ${sortBy === 'category' ? 'bg-gray-300' : 'bg-white'} border`}
                >
                    Sort by Category
                </button>
                <button
                    onClick={() => setSortBy('group')}
                    className={`px-4 py-2 rounded ${sortBy === 'group' ? 'bg-gray-300' : 'bg-white'} border`}
                >
                    Group by Category
                </button>
            </div>
            <ul className="space-y-2">
                {sortBy === 'group'
                    ? Object.entries(groupedItems).map(([category, items]) => (
                        <li key={category}>
                            <h2 className="capitalize font-bold">{category}</h2>
                            <ul className="ml-4 space-y-1">
                                {items.sort((a, b) => a.name.localeCompare(b.name)).map(item => (
                                    <Item key={item.id} {...item} />
                                ))}
                            </ul>
                        </li>
                    ))
                    : sortedItems.map(item => <Item key={item.id} {...item} />)}
            </ul>
        </div>
    );
}




