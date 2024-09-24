import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import gabrielFoto from "../assets/FotoGabriel.jpg"

export function Sobre() {
  const developers = [
    { name: "João Romero", image: "/placeholder.svg?height=200&width=200&text=João" },
    { name: "Kayky Stiliano", image: "/placeholder.svg?height=200&width=200&text=Kayky" },
    { name: "Pedro Mendes", image: "/placeholder.svg?height=200&width=200&text=Pedro+M" },
    { name: "Pedro Bizzo", image: "/placeholder.svg?height=200&width=200&text=Pedro+B" },
    { name: "Gabriel Barros", image: gabrielFoto }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">About Electric Car World</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            At Electric Car World, we're committed to revolutionizing the automotive industry by providing cutting-edge electric vehicles that combine performance, sustainability, and style. Our mission is to accelerate the world's transition to sustainable energy through innovative electric transportation solutions.
          </p>
          <p className="text-gray-700 mb-4">
            We believe that the future of mobility is electric, and we're dedicated to making that future a reality today. By continuously pushing the boundaries of technology and design, we aim to create electric vehicles that not only reduce carbon emissions but also enhance the driving experience for our customers.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Innovation: We constantly strive to develop new technologies and improve existing ones.</li>
            <li>Sustainability: We're committed to reducing our environmental impact at every stage of our operations.</li>
            <li>Quality: We maintain the highest standards in design, manufacturing, and customer service.</li>
            <li>Customer-Centric: We put our customers first, ensuring their needs and expectations are met and exceeded.</li>
            <li>Collaboration: We believe in the power of teamwork and fostering a collaborative work environment.</li>
          </ul>
        </div>
      </div>

      <Card className="mb-12">
        <CardHeader>
          <CardTitle>Meet Our Development Team</CardTitle>
          <CardDescription>The brilliant minds behind Electric Car World's technology</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {developers.map((developer, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="relative w-32 h-32 mb-2">
                  <img
                    src={developer.image}
                    alt={developer.name}
                    layout="fill"
                    className="rounded-full"
                  />
                </div>
                <span className="text-sm font-medium text-center">{developer.name}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Join Us in Shaping the Future</h2>
        <p className="text-gray-700 mb-4">
          We're always looking for passionate individuals to join our team. If you're excited about electric vehicles and want to make a difference in the world, we'd love to hear from you. Check out our careers page for current openings and opportunities to be part of the electric revolution.
        </p>
      </div>
    </div>
  )
}
