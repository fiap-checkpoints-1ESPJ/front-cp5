import { useState } from 'react'
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card"
import { Alert, AlertDescription } from "../components/ui/alert"
import { BatteryCharging, Car } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const SALT = 'Ab!23@0((*0basdbelh'

export function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loginStatus, setLoginStatus] = useState('idle') //<'idle' | 'success' | 'error'>

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        if (email && password) {
            sessionStorage.setItem('user', JSON.stringify({ userId: btoa(email + password + SALT) }))
            setLoginStatus('success')
            navigate('/')
        } else {
            setLoginStatus('error')
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-green-100">
            <Card className="w-full max-w-md">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold text-center flex items-center justify-center">
                        <Car className="mr-2 h-6 w-6 text-green-500" />
                        Electric Car Login
                    </CardTitle>
                    <CardDescription className="text-center">
                        Enter your credentials to access your electric vehicle account
                    </CardDescription>
                </CardHeader>
                <form onSubmit={handleSubmit}>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="m@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full" type="submit">
                            <BatteryCharging className="mr-2 h-4 w-4" />
                            Charge Up & Login
                        </Button>
                    </CardFooter>
                </form>
                {loginStatus === 'success' && (
                    <Alert className="mt-4 mx-4 mb-4 bg-green-100 text-green-800 border-green-300">
                        <AlertDescription>
                            Login successful! Welcome to your electric vehicle dashboard.
                        </AlertDescription>
                    </Alert>
                )}
                {loginStatus === 'error' && (
                    <Alert className="mt-4 mx-4 mb-4 bg-red-100 text-red-800 border-red-300">
                        <AlertDescription>
                            Login failed. Please check your email and password.
                        </AlertDescription>
                    </Alert>
                )}
            </Card>
        </div>
    )
}
