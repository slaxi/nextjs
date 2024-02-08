"use client"
import { useRouter } from "next/navigation"
import { useState } from "react"

const AboutPage = () => {
  const [title, setTitle] = useState('About page')
  const router = useRouter()
  const handleClick = () => {
    setTitle('Something else...')
  }
  const handleRedirect = () => {
    router.push('/')
  }
  return (
    <div>
      <h2>{title}</h2>
      <button onClick={handleClick}>Change title</button>
      <button onClick={handleRedirect}>Back home</button>
    </div>
  )
}

export default AboutPage