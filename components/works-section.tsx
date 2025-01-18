import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const projects = [
  { id: 1, title: 'Modern Living Room', image: '/work1.jpg?height=300&width=400' },
  { id: 2, title: 'Elegant Bedroom', image: '/work2.jpg?height=300&width=400' },
  { id: 3, title: 'Stylish Office Space', image: '/work3.jpg?height=300&width=400' },
  { id: 4, title: 'Luxurious Bathroom', image: '/work4.jpg?height=300&width=400' },
]

export function WorksSection() {
  return (
    <section id="works" className="py-16 px-4 md:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Recent Works</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          {projects.map((project) => (
            <div key={project.id} className="relative group overflow-hidden rounded-lg">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={400}
                height={300}
                className="object-cover w-full h-[300px] transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-xl font-semibold">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link href="/works">
            <Button>View All Projects</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

