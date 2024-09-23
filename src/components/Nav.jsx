import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from "../components/ui/button"
import { Car, Home, Info, Settings, Menu, X } from 'lucide-react'

export function Nav() {
    const [isOpen, setIsOpen] = useState(false)
    const { pathname } = useLocation()

    useEffect(() => {
        setIsOpen(false)
    }, [pathname])

    if (pathname === '/login') {
        return null
    }

    return (
        <nav className="bg-gradient-to-r from-blue-500 to-green-500 text-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex-shrink-0">
                            <Car className="h-8 w-8" />
                        </Link>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <NavLink href="/" icon={<Home className="h-4 w-4 mr-2" />}>Home</NavLink>
                                <NavLink href="/about" icon={<Info className="h-4 w-4 mr-2" />}>About</NavLink>
                                <NavLink href="/settings" icon={<Settings className="h-4 w-4 mr-2" />}>Settings</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <Button variant="outline" asChild>
                            <Link href="/login">Login</Link>
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
                        <MobileNavLink href="/" icon={<Home className="h-4 w-4 mr-2" />}>Home</MobileNavLink>
                        <MobileNavLink href="/about" icon={<Info className="h-4 w-4 mr-2" />}>About</MobileNavLink>
                        <MobileNavLink href="/settings" icon={<Settings className="h-4 w-4 mr-2" />}>Settings</MobileNavLink>
                    </div>
                    <div className="pt-4 pb-3 border-t border-green-700">
                        <div className="px-2">
                            <Button variant="outline" asChild className="w-full justify-center">
                                <Link href="/login">Login</Link>
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
            href={href}
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
