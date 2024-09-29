import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { Nav } from './components/Nav'
import { Footer } from './components/Footer'
import { useEffect } from 'react'

export default function App() {

    const { pathname } = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        const user = JSON.parse(sessionStorage.getItem('user'))
        if (!user || !user.userId || user.userId.length === 0) navigate('/login')
    }, [pathname])

    return (
        <main className='flex flex-col justify-between overflow-x-hidden min-w-[320px] min-h-dvh'>
            <Nav />
            <Outlet />
            <Footer />
        </main>
    )
}

