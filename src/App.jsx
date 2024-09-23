import { Outlet, useNavigate } from 'react-router-dom'
import { Nav } from './components/Nav'
import { Footer } from './components/Footer'
import { useMount } from './hooks/useMount'

export default function App() {

    const navigate = useNavigate()

    useMount(() => {
        const user = JSON.parse(sessionStorage.getItem('user'))
        if (!user || !user.email || user.email.length === 0) navigate('/login')
    })

    return (
        <main className='overflow-x-hidden min-w-[320px] min-h-dvh'>
            <Nav />
            <Outlet />
            <Footer />
        </main>
    )
}

