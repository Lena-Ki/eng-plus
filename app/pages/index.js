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

      <h1 className="h2 text-center mt-3 mb-4">Hello English!</h1>
      <p><Link href={'/about'}><a>Контакты</a></Link></p>
      <p><Link href={'/lessons/'}><a>Учебник</a></Link></p>
      <p><Link href={'/api'}><a>Api</a></Link></p>
    </MainLayout>
  )
}
