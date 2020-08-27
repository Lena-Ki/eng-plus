import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { MainLayout } from '../../layouts/MainLayout'
import Link from 'next/link'

export default function Lesson({ lesson: serverLesson }) {
  const [lesson, setLesson] = useState(serverLesson)
  const router = useRouter()

  useEffect(() => {
    async function load() {
      const response = await fetch(`http://localhost:4200/lessons/${router.query.lesson_id}`)
      const data = await response.json()
      setLesson(data)
    }

    if (!serverLesson) {
      load()
    }
  }, [])
  
  if (!lesson) {
    return (
      <MainLayout>
        <p> Loading ...</p>
      </MainLayout>
    )
  }

  return (
    <MainLayout>
      <h1 className="h4">Lesson {lesson.title}</h1>
      <hr />
      <p>{lesson.body}</p>
      <Link href="/lessons"><a>Back to all lessons</a></Link>
    </MainLayout>
  )
}

Lesson.getInitialProps = async ({ req, query }) => {
  if (!req) {
    return {post: undefined}
  }

  const response = await fetch(`http://localhost:4200/lessons/${query.lesson_id}`)
  const lesson = await response.json()

  return { lesson }
}