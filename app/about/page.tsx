import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16 px-4 md:px-6 lg:px-8">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-center">About Aaruthra Interiors</h1>
            <div className="grid gap-12 md:grid-cols-2 items-center">
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
                <p className="text-gray-600">
                  Our team of experienced designers and craftsmen work collaboratively to deliver exceptional results
                  that exceed our clients&apos; expectations. We pride ourselves on our attention to detail, quality
                  workmanship, and commitment to customer satisfaction.
                </p>
              </div>
              <div className="relative h-[400px] md:h-[600px]">
                <Image
                  src="/hero.png?height=600&width=800"
                  alt="Interior Design Showcase"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 px-4 md:px-6 lg:px-8 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Mission</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto">
              Our mission is to create inspiring and functional spaces that enhance the lives of our clients. We strive to blend aesthetics with practicality, ensuring that each design not only looks beautiful but also serves its purpose effectively. Through innovative design solutions and a client-centric approach, we aim to transform spaces into environments that inspire, comfort, and delight.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

