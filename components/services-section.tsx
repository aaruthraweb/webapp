import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Home, Store, Building2, Warehouse } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const services = [
  {
    title: 'Residential Interiors',
    description: 'Transform your home into a beautiful and functional living space.',
    icon: Home,
  },
  {
    title: 'Commercial Spaces',
    description: 'Create impressive commercial spaces that reflect your brand identity.',
    icon: Building2,
  },
  {
    title: 'Retail Design',
    description: 'Design retail spaces that attract customers and maximize sales potential.',
    icon: Store,
  },
  {
    title: 'Renovation Services',
    description: 'Revitalize your existing space with our professional renovation services.',
    icon: Warehouse,
  }
]

export function ServicesSection() {
  return (
    <section id="services" className="py-16 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Icon className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
        <div className="text-center">
          <Link href="/services">
            <Button>View All Services</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

