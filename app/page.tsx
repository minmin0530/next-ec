import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <Link href="/about">About</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/contents">Contents</Link>
    </>
  )
}
