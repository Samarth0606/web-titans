import Link from "next/link";


export default function page() {
  return (
    <div>
        <h1>welcome to reviews page</h1>
        <Link href="reviews/1"> Review 1 </Link>
        <Link href="reviews/2"> Review 2 </Link>
        <Link href="reviews/3"> Review 3 </Link>
    </div>
  )
}
