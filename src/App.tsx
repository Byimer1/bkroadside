import React from 'react';
import { Phone, Car, Battery, Fuel, Key, Clock, MapPin, Mail, ChevronRight } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-blue-900 text-white">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Car className="w-8 h-8" />
            <span className="text-xl font-bold">BK Budget Roadside</span>
          </div>
          <a href="tel:+12405164220" className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-2 px-4 rounded-full transition-colors">
            <Phone className="w-5 h-5" />
            <span>+1 240 516 4220</span>
          </a>
        </div>
        <nav className="container mx-auto px-4 py-4">
          <ul className="flex space-x-6">
            <li><a href="#home" className="hover:text-yellow-500 transition-colors">Home</a></li>
            <li><a href="#services" className="hover:text-yellow-500 transition-colors">Services</a></li>
            <li><a href="#about" className="hover:text-yellow-500 transition-colors">About Us</a></li>
            <li><a href="#contact" className="hover:text-yellow-500 transition-colors">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0">
          <img 
            src="https://www.shutterstock.com/image-photo/worried-young-european-woman-talking-600nw-2462890053.jpg"
            alt="Woman Calling Roadside Assistance"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/70"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h1 className="text-5xl font-bold mb-6">24/7 Emergency<br />Roadside Assistance</h1>
              <p className="text-xl mb-8">Fast, reliable, and affordable roadside assistance when you need it most. We're here to help you get back on the road. Services starting from $45.</p>
              <a href="tel:+12405164220" className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-8 rounded-full text-lg transition-colors">
                <Phone className="w-6 h-6" />
                Call Now
              </a>
            </div>
            <div className="space-y-4 hidden md:block">
              <img 
                src="https://t3.ftcdn.net/jpg/04/26/88/02/360_F_426880264_Vvpn0gjdlYuScteWx1heyAqcjVbhQHam.jpg"
                alt="Tire Change Service"
                className="w-full h-56 object-cover rounded-lg shadow-lg"
              />
              <img 
                src="https://www.shutterstock.com/image-photo/accumulator-charging-hands-terminals-car-600nw-612871751.jpg"
                alt="Battery Jump Start"
                className="w-full h-56 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Car, title: 'Tire Change', desc: 'Quick and professional tire change service' },
              { icon: Battery, title: 'Jump Start', desc: "Battery dead? We'll get you running" },
              { icon: Fuel, title: 'Fuel Delivery', desc: "Run out of gas? We'll bring fuel to you" },
              { icon: Key, title: 'Lockout Service', desc: 'Locked your keys in? We can help' }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <service.icon className="w-12 h-12 text-blue-900 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-blue-900">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
                <a href="#contact" className="inline-flex items-center text-yellow-500 hover:text-yellow-600 mt-4">
                  Learn More <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-blue-900">Why Choose BK Budget Roadside?</h2>
              <div className="space-y-4">
                {[
                  { icon: Clock, title: '24/7 Availability', desc: "We're here whenever you need us" },
                  { icon: MapPin, title: 'Quick Response Time', desc: 'Fast service throughout the area' },
                  { icon: Phone, title: 'Professional Team', desc: 'Experienced and certified technicians' },
                  { icon: Key, title: 'Affordable Service', desc: 'Services starting from $45' }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <feature.icon className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg text-blue-900">{feature.title}</h3>
                      <p className="text-gray-600">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[400px]">
              <img 
                src="https://lirp.cdn-website.com/7a30abdf/dms3rep/multi/opt/shutterstock_2131180203-432w.jpg"
                alt="Roadside Service"
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Phone className="w-8 h-8 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <p>+1 240 516 4220</p>
            </div>
            <div className="text-center">
              <Mail className="w-8 h-8 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p>birukesh92@gmail.com</p>
            </div>
            <div className="text-center">
              <MapPin className="w-8 h-8 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Location</h3>
              <p>Serving DMV Area</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Car className="w-6 h-6" />
            <span className="text-lg font-bold">BK Budget Roadside</span>
          </div>
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} BK Budget Roadside Assistance. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;