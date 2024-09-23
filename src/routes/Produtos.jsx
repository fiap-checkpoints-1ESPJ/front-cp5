import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, Search } from 'lucide-react'

const initialProducts = [
    {
        "id": 1727100014803,
        "name": "Honda Civic",
        "category": "suv",
        "description": "aksdjb",
        "price": 120,
        "stock": 21,
        "image": "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        "id": 1727100014804,
        "name": "Toyota Corolla",
        "category": "sedan",
        "description": "Reliable and fuel-efficient sedan",
        "price": 130,
        "stock": 30,
        "image": "https://images.pexels.com/photos/159238/city-cars-car-compact-car-159238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        "id": 1727100014805,
        "name": "Ford Mustang",
        "category": "sports",
        "description": "Powerful performance car",
        "price": 550,
        "stock": 10,
        "image": "https://images.pexels.com/photos/235222/pexels-photo-235222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        "id": 1727100014806,
        "name": "Chevrolet Camaro",
        "category": "sports",
        "description": "Stylish sports car",
        "price": 500,
        "stock": 12,
        "image": "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        "id": 1727100014807,
        "name": "Jeep Wrangler",
        "category": "suv",
        "description": "Off-road SUV",
        "price": 300,
        "stock": 20,
        "image": "https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        "id": 1727100014808,
        "name": "BMW X5",
        "category": "luxury",
        "description": "Luxury SUV with premium features",
        "price": 700,
        "stock": 5,
        "image": "https://images.pexels.com/photos/243557/pexels-photo-243557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        "id": 1727100014809,
        "name": "Audi A8",
        "category": "luxury",
        "description": "Luxury sedan with advanced tech",
        "price": 800,
        "stock": 8,
        "image": "https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        "id": 1727100014810,
        "name": "Tesla Model S",
        "category": "electric",
        "description": "Electric luxury car with autopilot",
        "price": 900,
        "stock": 4,
        "image": "https://images.pexels.com/photos/979999/pexels-photo-979999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        "id": 1727100014811,
        "name": "Nissan Leaf",
        "category": "electric",
        "description": "Affordable electric vehicle",
        "price": 350,
        "stock": 15,
        "image": "https://images.pexels.com/photos/100563/pexels-photo-100563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
]

export function Produtos() {
    const [products, setProducts] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        const storedProducts = JSON.parse(sessionStorage.getItem('products') || '[]')
        const combinedProducts = [...initialProducts, ...storedProducts]

        const uniqueProducts = combinedProducts.reduce((acc, current) => {
            const x = acc.find(item => item.id === current.id)
            if (!x) {
                return acc.concat([current])
            } else {
                return acc
            }
        }, [])

        setProducts(uniqueProducts)
    }, [])

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Electric Car Products</h1>

            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
                <div className="relative w-full sm:w-64">
                    <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <Input
                        type="text"
                        placeholder="Search products..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 w-full"
                    />
                </div>
                <Button asChild>
                    <Link to="/cadastrar-produto">
                        <Plus className="mr-2 h-4 w-4" /> Add New Product
                    </Link>
                </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                    <Card key={product.id} className="flex flex-col">
                        <CardHeader>
                            <img
                                src={product.image}
                                alt={product.name}
                                width={300}
                                height={200}
                                className="w-full h-48 object-cover rounded-t-lg"
                            />
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <CardTitle className="mb-2">{product.name}</CardTitle>
                            <p className="text-sm text-gray-500 mb-2">{product.category}</p>
                            <p className="text-lg font-bold">${product.price.toLocaleString()}</p>
                        </CardContent>
                        <CardFooter className="flex justify-between items-center">
                            <span className="text-sm text-gray-500">Stock: {product.stock}</span>
                            <Button variant="outline" size="sm">View Details</Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>

            {filteredProducts.length === 0 && (
                <p className="text-center text-gray-500 mt-8">No products found. Try adjusting your search.</p>
            )}
        </div>
    )
}
