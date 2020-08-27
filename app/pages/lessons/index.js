import { useRouter } from 'next/router'
import { MainLayout } from '../../layouts/MainLayout'

export default function Lesson() {
  const router = useRouter()
  
  return (
    <MainLayout>
      <h1>Lessons list</h1>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ul>
    </MainLayout>
  )
}