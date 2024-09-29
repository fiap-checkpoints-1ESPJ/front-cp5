import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Button } from "../components/ui/button"
import { Home, Info, Menu, X, Package, ShoppingBag } from 'lucide-react'

export function Nav() {
    const [isOpen, setIsOpen] = useState(false)
    const { pathname } = useLocation()

    const navigate = useNavigate()

    useEffect(() => {
        setIsOpen(false)
    }, [pathname])

    if (pathname === '/login') {
        return null
    }

    const logout = () => {
        navigate('/login')
        sessionStorage.removeItem("user")
    }


    return (
        <nav className="bg-gradient-to-r from-blue-500 to-green-500 text-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <NavLink href="/" icon={<Home className="h-4 w-4 mr-2" />}>Home</NavLink>
                            <NavLink href="/produtos" icon={<ShoppingBag className="h-4 w-4 mr-2" />}>Produtos</NavLink>
                            <NavLink href="/sobre" icon={<Info className="h-4 w-4 mr-2" />}>Sobre</NavLink>
                            <NavLink href="/cadastrar-produto" icon={<Package className="h-4 w-4 mr-2" />}>Cadastrar Produto</NavLink>
                        </div>
                    </div>
                    <div className="hidden md:flex gap-3">
                        <Button variant="outline" className='text-primary hover:text-background hover:bg-green-600' asChild>
                            <Link to="/login">Login</Link>
                        </Button>
                        <Button variant="secondary" onClick={() => logout()}>
                            Logout
                        </Button>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </Button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <NavLink href="/" icon={<Home className="h-4 w-4 mr-2" />}>Home</NavLink>
                        <NavLink href="/produtos" icon={<ShoppingBag className="h-4 w-4 mr-2" />}>Produtos</NavLink>
                        <NavLink href="/sobre" icon={<Info className="h-4 w-4 mr-2" />}>Sobre</NavLink>
                        <NavLink href="/cadastrar-produto" icon={<Package className="h-4 w-4 mr-2" />}>Cadastrar Produto</NavLink>
                    </div>
                    <div className="pt-4 pb-3 border-t border-green-700">
                        <div className="flex justify-between px-2">
                            <Button variant="outline" className='text-primary hover:text-background hover:bg-green-600' asChild>
                                <Link to="/login">Login</Link>
                            </Button>
                            <Button variant="secondary" onClick={() => logout()}>
                                Logout
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}

function NavLink({ href, children, icon }) {
    const { pathname } = useLocation()
    const isActive = pathname === href

    return (
        <Link
            to={href}
            className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${isActive
                ? 'bg-green-700 text-white'
                : 'text-green-100 hover:bg-green-600 hover:text-white'
                }`}
        >
            {icon}
            {children}
        </Link>
    )
}

function MobileNavLink({ href, children, icon }) {
    const { pathname } = useLocation()
    const isActive = pathname === href

    return (
        <Link
            href={href}
            className={`flex items-center px-3 py-2 rounded-md text-base font-medium ${isActive
                ? 'bg-green-700 text-white'
                : 'text-green-100 hover:bg-green-600 hover:text-white'
                }`}
        >
            {icon}
            {children}
        </Link>
    )
}
