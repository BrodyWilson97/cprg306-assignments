export default function Item({ name, quantity, category}) {
    return(
        <main>
            <li>
                <p className = "text-2xl bg-slate-400 text-white">Name: {name}</p>
                <p className = "text-xl bg-slate-300">Quantity: {quantity}</p>
                <p className = "text-xl bg-slate-300"> Category: {category}</p>
            </li>
        </main>
    )
}
