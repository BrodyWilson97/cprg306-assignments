export default function Item({ name, quantity, category, onSelect }) {
    return (
        <main>
            <li onClick={onSelect} className="cursor-pointer hover:bg-slate-200 transition-colors duration-200">
                <p className="text-2xl bg-slate-400 text-white">Name: {name}</p>
                <p className="text-xl bg-slate-300">Quantity: {quantity}</p>
                <p className="text-xl bg-slate-300">Category: {category}</p>
            </li>
        </main>
    );
}

