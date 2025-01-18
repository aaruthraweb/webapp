import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'

const projects = [
  { id: 1, title: 'Modern Living Room', category: 'Residential', image: '/work1.jpg?height=400&width=600' },
  { id: 2, title: 'Elegant Bedroom', category: 'Residential', image: '/work2.jpg?height=400&width=600' },
  { id: 3, title: 'Stylish Office Space', category: 'Commercial', image: '/work3.jpg?height=400&width=600' },
  { id: 4, title: 'Luxurious Bathroom', category: 'Residential', image: '/work4.jpg?height=400&width=600' },
  { id: 5, title: 'Cozy Cafe Interior', category: 'Commercial', image: '/work5.jpg?height=400&width=600' },
  { id: 6, title: 'Modern Retail Store', category: 'Retail', image: '/work6.jpg?height=400&width=600' },
  { id: 7, title: 'Minimalist Kitchen', category: 'Residential', image: '/work7.jpg?height=400&width=600' },
  { id: 8, title: 'Corporate Boardroom', category: 'Commercial', image: '/work8.jpg?height=400&width=600' },
]

export default function WorksPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16 px-4 md:px-6 lg:px-8">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-center">Our Works</h1>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
              Explore our portfolio of stunning interior design projects. From residential spaces to commercial
              interiors, we've transformed numerous environments into beautiful, functional areas.
            </p>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-[250px]"
                  />
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-xl mb-2">{project.title}</h3>
                    <p className="text-gray-600">{project.category}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

