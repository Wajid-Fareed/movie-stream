import React from 'react'
import Container from '../layout/Container'
import Link from 'next/link'

const Suggestion = () => {
  return (
    <Container className='mt-10'>
        <Link href='/' className='px-6 py-3 font-medium bg-cta hover:bg-ctaHover text-white rounded-md shadow-md'>Suggestion</Link>
    </Container>
  )
}

export default Suggestion