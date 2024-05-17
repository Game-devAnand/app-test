import Link from 'next/link'
import React from 'react'

function Home() {
  return (
    <>
    <div className='flex min-h-screen items-center justify-center bg-gray-100'>
      <h1>Home page</h1> 
      <Link href={'/login'}>Login</Link></div>
    </>
  )
}

export default Home