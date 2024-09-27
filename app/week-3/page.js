import ItemList from "./item-list.js";


export default function Page() {
    return (
        <main>
            <h1 className = "p-5 text-center font-semibold text-3xl bg-slate-300">Shopping List</h1>
            <ItemList />
        </main>
    )
}