import { MainLayout } from '../../layouts/MainLayout'
import Link from 'next/link'

function Lesson({ lesson }) {
  // const router = useRouter()
  
  return (
    <MainLayout>
      <h1>Lesson {lesson.title}</h1>
      <hr />
      <p>{lesson.body}</p>
      <Link href="/lessons"><a>Back to all lessons</a></Link>
    </MainLayout>
  )
}

Lesson.getInitialProps = async (ctx) => {
  const response = await fetch(`http://localhost:4200/lessons/${ctx.query.lesson_id}`)
  const lesson = await response.json()
  console.log(lesson)

  return {
    lesson
  }
}

export default Lesson