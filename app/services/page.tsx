import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Home, Store, Building2, Warehouse, PaintBucket, Lightbulb } from 'lucide-react'


const services = [
  {
    title: 'Residential Interiors',
    description: 'Transform your home into a beautiful and functional living space with our comprehensive residential interior design services.',
    icon: Home,
    features: ['Space Planning', 'Custom Furniture', 'Color Consultation', 'Lighting Design']
  },
  {
    title: 'Commercial Spaces',
    description: 'Create impressive commercial spaces that reflect your brand identity and enhance productivity.',
    icon: Building2,
    features: ['Office Design', 'Corporate Branding', 'Ergonomic Solutions', 'Space Optimization']
  },
  {
    title: 'Retail Design',
    description: 'Design retail spaces that attract customers and maximize sales potential.',
    icon: Store,
    features: ['Store Layout', 'Display Systems', 'Lighting Solutions', 'Visual Merchandising']
  },
  {
    title: 'Renovation Services',
    description: 'Revitalize your existing space with our professional renovation services.',
    icon: Warehouse,
    features: ['Structural Changes', 'Modern Upgrades', 'Space Optimization', 'Quality Finishing']
  },
  {
    title: 'Color Consultation',
    description: 'Choose the perfect colors to create the desired atmosphere and mood in your space.',
    icon: PaintBucket,
    features: ['Color Psychology', 'Custom Color Schemes', 'Paint Selection', 'Material Coordination']
  },
  {
    title: 'Lighting Design',
    description: 'Enhance the ambiance and functionality of your space with expert lighting design.',
    icon: Lightbulb,
    features: ['Natural Light Optimization', 'Custom Lighting Plans', 'Energy-Efficient Solutions', 'Mood Lighting']
  }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16 px-4 md:px-6 lg:px-8">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-center">Our Services</h1>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
              We offer a comprehensive range of interior design and renovation services
              tailored to meet your specific needs and preferences. Our expert team is dedicated
              to creating beautiful, functional spaces that reflect your unique style.
            </p>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle>{service.title}</CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="mb-4">{service.description}</CardDescription>
                      <ul className="grid grid-cols-2 gap-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                            <span className="text-sm text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>
        <section className="py-16 px-4 md:px-6 lg:px-8 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Process</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                { step: 1, title: 'Consultation', description: 'We discuss your vision, needs, and budget.' },
                { step: 2, title: 'Design Concept', description: 'We create initial designs based on your requirements.' },
                { step: 3, title: 'Refinement', description: 'We refine the designs based on your feedback.' },
                { step: 4, title: 'Implementation', description: 'We bring the approved design to life.' },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

