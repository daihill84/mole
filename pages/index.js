import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react'; // Ensure useState is imported
import { motion } from 'framer-motion';

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitStatus, setSubmitStatus] = useState(null);
  const [modalImage, setModalImage] = useState(null); // Fixed: Changed 'state' to 'useState'
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitStatus('success');
    setFormData({ name: '', email: '', message: '' });
  };

  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
    document.getElementById('modal').classList.remove('hidden');
  };

  const closeModal = () => {
    setModalImage(null);
    document.getElementById('modal').classList.add('hidden');
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5] text-[#333333] font-sans">
      <Head>
        <title>Welsh Mole Catcher - Expert Mole Control in Wales</title>
        <meta name="description" content="Professional mole catching services in Wales. Humane, effective, and affordable solutions for farms, gardens, and properties." />
      </Head>

      {/* Header with Navigation */}
      <header className="bg-[#1a3c34] text-[#d4c9a5] p-4 sticky top-0 z-50 shadow-md">
        <nav className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            Welsh Mole Catcher
          </Link>
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
          <ul className={`md:flex space-x-6 ${isMenuOpen ? 'block' : 'hidden'} md:block absolute md:static top-16 left-0 right-0 bg-[#1a3c34] md:bg-transparent p-4 md:p-0 z-40`}>
            <li><Link href="#about" className="hover:text-[#f5f5f5] transition-colors">About</Link></li>
            <li><Link href="#services" className="hover:text-[#f5f5f5] transition-colors">Services</Link></li>
            <li><Link href="#gallery" className="hover:text-[#f5f5f5] transition-colors">Gallery</Link></li>
            <li><Link href="#contact" className="hover:text-[#f5f5f5] transition-colors">Contact</Link></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-[#1a3c34] text-[#d4c9a5] py-20">
        <div className="container mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Expert Mole Control in Wales
          </motion.h1>
          <p className="text-lg md:text-xl mb-8">
            Humane, effective, and affordable mole catching services for farms, gardens, and properties.
          </p>
          <Link href="#contact" className="bg-[#d4c9a5] text-[#1a3c34] px-6 py-3 rounded-full font-semibold hover:bg-[#f5f5f5] transition-colors">
            Get a Quote
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">About Welsh Mole Catcher</h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <Image
                src="/mole/farm_john_mole.jpg"
                alt="John the Mole Catcher on a Welsh farm"
                width={500}
                height={300}
                className="w-full object-cover rounded-lg shadow-md border-2 border-[#d4c9a5]"
                onError={(e) => { e.target.src = 'https://via.placeholder.com/500x300?text=John+the+Mole+Catcher'; }}
              />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <p className="text-lg mb-4">
                With over 20 years of experience, Welsh Mole Catcher provides professional mole control services across Wales. We specialize in humane trapping methods, ensuring minimal disruption to your land while effectively managing mole populations.
              </p>
              <p className="text-lg">
                Based in the heart of Wales, we work with farmers, homeowners, and businesses to protect properties from mole damage. Trust us to deliver fast, reliable, and environmentally friendly solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-[#e8e8e8] py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-[#ffffff] p-6 rounded-lg shadow-lg border-2 border-[#d4c9a5]"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-4">Farm Mole Control</h3>
              <Image
                src="/mole/farm_moles.jpg"
                alt="Mole control on Welsh farms"
                width={300}
                height={200}
                className="w-full object-cover rounded-lg mb-4 border-2 border-[#d4c9a5]"
                onError={(e) => { e.target.src = 'https://via.placeholder.com/300x200?text=Farm+Mole+Control'; }}
              />
              <p>
                Protect your farmland from mole damage. We use traditional trapping methods to ensure your fields remain productive and mole-free.
              </p>
            </motion.div>
            <motion.div
              className="bg-[#ffffff] p-6 rounded-lg shadow-lg border-2 border-[#d4c9a5]"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-4">Garden Mole Removal</h3>
              <Image
                src="/mole/farm_son.jpg"
                alt="Mole removal in Welsh gardens"
                width={300}
                height={200}
                className="w-full object-cover rounded-lg mb-4 border-2 border-[#d4c9a5]"
                onError={(e) => { e.target.src = 'https://via.placeholder.com/300x200?text=Garden+Mole+Removal'; }}
              />
              <p>
                Keep your garden pristine with our expert mole removal services. We’ll remove moles quickly and prevent future infestations.
              </p>
            </motion.div>
            <motion.div
              className="bg-[#ffffff] p-6 rounded-lg shadow-lg border-2 border-[#d4c9a5]"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-4">Commercial Mole Management</h3>
              <Image
                src="/mole/moles_collage.jpg"
                alt="Commercial mole management in Wales"
                width={300}
                height={200}
                className="w-full object-cover rounded-lg mb-4 border-2 border-[#d4c9a5]"
                onError={(e) => { e.target.src = 'https://via.placeholder.com/300x200?text=Commercial+Mole+Management'; }}
              />
              <p>
                We offer tailored solutions for businesses, ensuring your grounds remain mole-free with minimal disruption to your operations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="cursor-pointer">
              <Image
                src="/mole/moles_collage.jpg"
                alt="Moles caught on Welsh farms"
                width={300}
                height={200}
                className="w-full object-cover rounded-lg shadow-md gallery-img border-2 border-[#d4c9a5]"
                onClick={() => openModal('/mole/moles_collage.jpg')}
                onError={(e) => { e.target.src = 'https://via.placeholder.com/300x200?text=Mole+Catch+Highlights'; }}
              />
            </div>
            <div className="cursor-pointer">
              <Image
                src="/mole/farm_moles.jpg"
                alt="Moles on a Welsh farm"
                width={300}
                height={200}
                className="w-full object-cover rounded-lg shadow-md gallery-img border-2 border-[#d4c9a5]"
                onClick={() => openModal('/mole/farm_moles.jpg')}
                onError={(e) => { e.target.src = 'https://via.placeholder.com/300x200?text=Farm+Moles'; }}
              />
            </div>
            <div className="cursor-pointer">
              <Image
                src="/mole/farm_john_mole.jpg"
                alt="John catching moles"
                width={300}
                height={200}
                className="w-full object-cover rounded-lg shadow-md gallery-img border-2 border-[#d4c9a5]"
                onClick={() => openModal('/mole/farm_john_mole.jpg')}
                onError={(e) => { e.target.src = 'https://via.placeholder.com/300x200?text=John+Catching+Moles'; }}
              />
            </div>
            <div className="cursor-pointer">
              <Image
                src="/mole/moleintrap.jpg"
                alt="Mole in a trap"
                width={300}
                height={200}
                className="w-full object-cover rounded-lg shadow-md gallery-img border-2 border-[#d4c9a5]"
                onClick={() => openModal('/mole/moleintrap.jpg')}
                onError={(e) => { e.target.src = 'https://via.placeholder.com/300x200?text=Mole+in+Trap'; }}
              />
            </div>
            <div className="cursor-pointer">
              <Image
                src="/mole/rat1.jpg"
                alt="Rat control service"
                width={300}
                height={200}
                className="w-full object-cover rounded-lg shadow-md gallery-img border-2 border-[#d4c9a5]"
                onClick={() => openModal('/mole/rat1.jpg')}
                onError={(e) => { e.target.src = 'https://via.placeholder.com/300x200?text=Rat+Control'; }}
              />
            </div>
            <div className="cursor-pointer">
              <Image
                src="/mole/waspnest.jpg"
                alt="Wasp nest removal"
                width={300}
                height={200}
                className="w-full object-cover rounded-lg shadow-md gallery-img border-2 border-[#d4c9a5]"
                onClick={() => openModal('/mole/waspnest.jpg')}
                onError={(e) => { e.target.src = 'https://via.placeholder.com/300x200?text=Wasp+Nest+Removal'; }}
              />
            </div>
          </div>
        </div>

        {/* Modal for Image Zoom */}
        <div id="modal" className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 hidden">
          <div className="relative">
            {modalImage && (
              <Image
                src={modalImage}
                alt="Zoomed image"
                width={800}
                height={600}
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
              />
            )}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-3xl font-bold focus:outline-none"
            >
              ×
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-[#1a3c34] text-[#d4c9a5] py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-[#f5f5f5] text-[#333333] focus:outline-none focus:ring-2 focus:ring-[#d4c9a5]"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-lg mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-[#f5f5f5] text-[#333333] focus:outline-none focus:ring-2 focus:ring-[#d4c9a5]"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-lg mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-[#f5f5f5] text-[#333333] focus:outline-none focus:ring-2 focus:ring-[#d4c9a5]"
                rows="5"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#d4c9a5] text-[#1a3c34] px-6 py-3 rounded-full font-semibold hover:bg-[#f5f5f5] transition-colors w-full"
            >
              Send Message
            </button>
            {submitStatus === 'success' && (
              <p className="mt-4 text-center text-lg text-[#f5f5f5]">
                Thank you! We’ll get back to you soon.
              </p>
            )}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a3c34] text-[#d4c9a5] py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Welsh Mole Catcher. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <Image src="/mole/facebook_logo.png" alt="Facebook" width={24} height={24} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <Image src="/mole/Instagram_icon.png" alt="Instagram" width={24} height={24} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <Image src="/mole/linked-in.jpg" alt="LinkedIn" width={24} height={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}