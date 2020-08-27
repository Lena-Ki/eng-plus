import Router from 'next/router'
import { MainLayout } from '../../layouts/MainLayout'

export default function About() {
  return (
    <MainLayout>
      <h1 className="h3 text-center mt-3">О нас</h1>

      <button onClick={() => Router.push('/')}>Go back to Home</button>
    </MainLayout>
  )
}