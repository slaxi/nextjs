"use client"

import Link from "next/link"

const NavigationPage = ({id}: {id: number}) => {
  return (
    <Link href={`/blog/${id}`}>Navigate to blog: {id} </Link>
  )
}

export default NavigationPage