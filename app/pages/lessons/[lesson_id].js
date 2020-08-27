import { useRouter } from 'next/router'
import { MainLayout } from '../../layouts/MainLayout'

export default function Lesson() {
  const router = useRouter()
  
  return (
    <MainLayout>
      <h1>Lesson {router.query.lesson_id}</h1>
    </MainLayout>
  )
}