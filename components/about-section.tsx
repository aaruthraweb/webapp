import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function AboutSection() {
  return (
    <section id="about" className="py-16 px-4 md:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">About Aaruthra Interiors</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-600">
              Established in 2011, Aaruthra Interior Work has been at the forefront of interior design and renovation
              services for over a decade. Our unwavering commitment to excellence and innovation has enabled us
              to bring our clients&apos; visions to life across a wide range of projects.
            </p>
            <p className="text-gray-600">
              At Aaruthra Interior Work, we understand the importance of creating spaces that are both functional
              and aesthetically pleasing. Our services extend to residences, shops, showrooms, and offices, ensuring
              that each project receives our dedicated attention and expertise.
            </p>
            <br/>
            <Link href="/about">
              <Button>Learn More About Us</Button>
            </Link>
          </div>
          <div className="relative h-[400px]">
            <Image
              src="/hero.png?height=400&width=600"
              alt="Interior Design Showcase"
              fill
              priority
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

