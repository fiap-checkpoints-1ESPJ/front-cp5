import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, Search } from 'lucide-react'

const initialProducts = [
    { id: 1, name: 'Model E', category: 'Sedan', price: 49999, stock: 50, image: '/placeholder.svg?height=200&width=300&text=Model E' },
    { id: 2, name: 'EcoSUV', category: 'SUV', price: 59999, stock: 30, image: '/placeholder.svg?height=200&width=300&text=EcoSUV' },
    { id: 3, name: 'City Zip', category: 'Compact', price: 29999, stock: 100, image: '/placeholder.svg?height=200&width=300&text=City Zip' },
    { id: 4, name: 'ElectroTruck', category: 'Truck', price: 69999, stock: 20, image: '/placeholder.svg?height=200&width=300&text=ElectroTruck' },
    { id: 5, name: 'LuxuryEV', category: 'Luxury', price: 89999, stock: 15, image: '/placeholder.svg?height=200&width=300&text=LuxuryEV' },
]

export function Produtos() {
    const [products, setProducts] = useState(initialProducts)
    const [searchTerm, setSearchTerm] = useState('')

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
