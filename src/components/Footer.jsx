import { Link } from 'react-router-dom'
import { useLocation } from "react-router-dom"

import { SlSocialFacebook as Facebook } from "react-icons/sl"
import { LuInstagram as Instagram } from "react-icons/lu"
import { FiLinkedin as Linkedin } from "react-icons/fi"
import { IoMailOutline as Mail } from "react-icons/io5"

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
                    <div className="flex gap-6">
                        <Link href="#" className="text-gray-600 hover:text-blue-500 transition-colors">
                            <span className="sr-only">Facebook</span>
                            <Facebook className="translate-x-2 h-6 w-6" />
                        </Link>
                        <Link href="#" className="text-gray-600 hover:text-pink-500 transition-colors">
                            <span className="sr-only">Instagram</span>
                            <Instagram className="h-6 w-6" />
                        </Link>
                        <Link href="#" className="text-gray-600 hover:text-blue-700 transition-colors">
                            <span className="sr-only">LinkedIn</span>
                            <Linkedin className="h-6 w-6" />
                        </Link>
                        <Link href="#" className="text-gray-600 hover:text-green-500 transition-colors">
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
