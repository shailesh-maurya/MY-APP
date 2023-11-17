import Image from 'next/image'
import Link from '../../node_modules/next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>Bright home page</h1>
        <p>Product List page</p>
        <Link href='/productlist'>Go to Product List age</Link>
        <Link href="/section">Go to Section Page</Link>
      </main>
  )
}
