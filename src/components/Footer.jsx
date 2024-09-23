import { useLocation } from "react-router-dom"

export function Footer() {

    const { pathname } = useLocation()

    if (pathname === '/login') {
        return null
    }

    return (
        <>
            Footer
        </>
    )
}
