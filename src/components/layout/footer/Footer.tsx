import React from 'react'
import Container from '../Container'

const Footer = () => {
    return (
        <footer className='w-full border-t shadow-sm mt-10'>
            <Container className='h-14 flex justify-center items-center'>
                <p className='text-lg font-medium'>Movie Stream © 2024. All Rights Reserved</p>
            </Container>
        </footer>
    )
}

export default Footer