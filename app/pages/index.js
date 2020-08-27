import Head from 'next/head'
import Link from 'next/link'
import { MainLayout } from '../layouts/MainLayout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title>Next.js Home</title>
      </Head>

      <h3 className="text-center mt-3 mb-4">Hello Next.JS!</h3>
      <p><Link href={'/about'}><a>About</a></Link></p>
      <p><Link href={'/lessons/1'}><a>Lesson #1</a></Link></p>
      <p><Link href={'/api'}><a>Api</a></Link></p>
    </MainLayout>
  )
}
