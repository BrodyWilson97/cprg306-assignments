import Link from "next/link";

export default function Page() {
  return (
  <main>
    <h1>CPRG 306: Web Development 2 - Assignments</h1>

    <ul>
      <li> 
        <Link href = "week-2"  className = 'underline hover:text-cyan-300'> Week 2</Link>
      </li>
      <li> 
        <Link href = "week-3"  className = 'underline hover:text-cyan-300'> Week 3</Link>
      </li>
      <li> 
        <Link href = "week-4"  className = 'underline hover:text-cyan-300'> Week 4</Link>
      </li>
      <li> 
        <Link href = "week-5"  className = 'underline hover:text-cyan-300'> Week 5</Link>
      </li>
    </ul>
  </main>
  );
}