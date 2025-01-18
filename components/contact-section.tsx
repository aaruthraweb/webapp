import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Phone, Mail, MapPin } from 'lucide-react'

export function ContactSection() {
  return (
    <section id="contact" className="py-16 px-4 md:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <form className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <Input placeholder="First Name" />
                <Input placeholder="Last Name" />
              </div>
              <Input placeholder="Email" type="email" />
              <Input placeholder="Phone" type="tel" />
              <Textarea placeholder="Your Message" className="min-h-[150px]" />
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </div>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Phone className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-600">(+91) 9865343636 , 9659597788</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-600">aaruthrakarthik@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold">Address</h3>
                <p className="text-gray-600">
                Show Room - No. 136, Nasiyanur Main Road,<br/>
                 Veerappampalayam Privu, Erode - 638107.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

