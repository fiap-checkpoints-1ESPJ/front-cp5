import { Link } from 'react-router-dom'
import { Facebook, Instagram, Linkedin, Mail } from 'lucide-react'
import { useLocation } from "react-router-dom"

export function Footer() {

    const { pathname } = useLocation()

    if (pathname === '/login') {
        return null
    }

    return (
        <footer className="bg-gray-100 border-t">
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
                    <div className="text-center md:text-left">
                        <h2 className="text-lg font-semibold text-gray-800">Electric Car World</h2>
                        <p className="mt-2 text-sm text-gray-600">Driving the future of sustainable transportation</p>
                    </div>
                    <div className="flex space-x-6">
                        <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500 transition-colors">
                            <span className="sr-only">Facebook</span>
                            <Facebook className="h-6 w-6" />
                        </Link>
                        <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-500 transition-colors">
                            <span className="sr-only">Instagram</span>
                            <Instagram className="h-6 w-6" />
                        </Link>
                        <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-700 transition-colors">
                            <span className="sr-only">LinkedIn</span>
                            <Linkedin className="h-6 w-6" />
                        </Link>
                        <Link href="mailto:info@electriccarworld.com" className="text-gray-600 hover:text-green-500 transition-colors">
                            <span className="sr-only">Email</span>
                            <Mail className="h-6 w-6" />
                        </Link>
                    </div>
                </div>
                <div className="mt-8 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} Electric Car World. All rights reserved.
                </div>
            </div>
        </footer>
    )
}
