import Link from 'next/link'
import { MainLayout } from '../../layouts/MainLayout'

export default function Lessons({ lessons }) {
  
  return (
    <MainLayout>
      <h1>Lessons list</h1>
      <ul>
        { lessons.map( item => (
          <li key={item.id}>
            <Link href={`/lessons/[lesson_id]`} as={`lessons/${item.id}`}>
              <a>{item.title}</a>
            </Link>
          </li>

        )) }
      </ul>
    </MainLayout>
  )
}

Lessons.getInitialProps = async () => {
  const response = await fetch('http://localhost:4200/lessons')
  const lessons = await response.json()

  return {
    lessons
  }
}