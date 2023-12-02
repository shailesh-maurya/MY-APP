import Image from 'next/image'
import Link from '../../node_modules/next/link'


export default function Home() {
  return (
    <main className="text-center">
        <h1 className='w-full block mb-[20px]'>Bright home page</h1>
        <p className='w-full block mb-[20px]'>Product List page</p>
        <Link className='w-full relative block mb-[20px]' href='/productlist'>Go to Product List age</Link>
        <Link className='w-full relative block mb-[20px]' href="/section">Go to Section Page</Link>
        <Link className='w-full relative block mb-[20px]' href='/shift'>Go To Shift Page</Link>
        <Link className='w-full relative block mb-[20px]' href='/components'>Go To Tab Page</Link>
      </main>
  )
}
