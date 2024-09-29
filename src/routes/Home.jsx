import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import carRed from '../assets/car-red.jpg'
import road from '../assets/road.jpg'
import electricCar from '../assets/electric-car.jpg'
import city from '../assets/city.jpg'
import tesla from '../assets/tesla.jpg'
import suv from '../assets/suv.jpg'

const slideData = [
    {
        image: carRed,
        title: 'The Future of Driving',
        description: 'Experience the power and efficiency of electric vehicles.'
    },
    {
        image: road,
        title: 'Eco-Friendly Transportation',
        description: 'Reduce your carbon footprint with zero-emission electric cars.'
    },
    {
        image: electricCar,
        title: 'Cutting-Edge Technology',
        description: 'Enjoy advanced features and smart connectivity in our electric vehicles.'
    }
]

const carData = [
    {
        name: 'Model E',
        image: tesla,
        description: 'Our flagship electric sedan with long range and luxurious interior.',
        price: '$49,999'
    },
    {
        name: 'EcoSUV',
        image: suv,
        description: 'Spacious electric SUV perfect for family adventures and daily commutes.',
        price: '$59,999'
    },
    {
        name: 'City Zip',
        image: city,
        description: 'Compact electric car designed for urban living and easy parking.',
        price: '$29,999'
    }
]

export function Home() {
    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slideData.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [])

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slideData.length)
    }

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slideData.length) % slideData.length)
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-center mb-8">Welcome to Electric Car World</h1>

            {/* Slideshow */}
            <div className="relative mb-12">
                <div className="overflow-hidden rounded-lg shadow-lg">
                    <img
                        src={slideData[currentSlide].image}
                        alt={slideData[currentSlide].title}
                        width={800}
                        height={400}
                        className="w-full h-[400px] object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                        <h2 className="text-2xl font-bold">{slideData[currentSlide].title}</h2>
                        <p>{slideData[currentSlide].description}</p>
                    </div>
                </div>
                <Button
                    variant="outline"
                    size="icon"
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75"
                    onClick={prevSlide}
                >
                    <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button
                    variant="outline"
                    size="icon"
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75"
                    onClick={nextSlide}
                >
                    <ChevronRight className="h-6 w-6" />
                </Button>
            </div>

            {/* Car Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {carData.map((car, index) => (
                    <Card key={index}>
                        <CardHeader>
                            <CardTitle>{car.name}</CardTitle>
                            <CardDescription>{car.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <img
                                src={car.image}
                                alt={car.name}
                                width={300}
                                height={200}
                                className="w-full h-[200px] object-cover rounded-md"
                            />
                        </CardContent>
                        <CardFooter className="flex justify-between items-center">
                            <span className="text-2xl font-bold">{car.price}</span>
                            <Button>Learn More</Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    )
}
