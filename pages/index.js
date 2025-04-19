import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitStatus, setSubmitStatus] = useState(null);
  const [modalImage, setModalImage] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const mailtoLink = mailto:info@welshmolecatcher.co.uk?subject=Contact Form Submission from &body=Name: %0D%0AEmail: %0D%0AMessage: ;
    window.location.href = mailtoLink;
    setSubmitStatus('success');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitStatus(null), 5000);
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
    <div className="min-h-screen bg-gray-50 text-gray-900 antialiased">
      <Head>
        <title>Welsh Mole Catcher | Expert Mole Control Services Across Wales</title>
        <meta
          name="description"
          content="Professional mole catching services in Wales. Humane, effective, and affordable solutions for farms, gardens, and properties."
        />
        <meta
          name="keywords"
          content="mole catcher Wales, pest control Wales, mole removal, mole trapping Wales, farm pest control, garden moles, mole man, mole trapping services, mole catcher for farms"
        />
        <meta name="geo.region" content="GB-WLS" />
        <meta name="geo.placename" content="Wales" />
        <meta name="geo.position" content="52.0189;-3.2332" />
        <meta name="ICBM" content="52.0189, -3.2332" />
        <link rel="canonical" href="https://www.welshmolecatcher.co.uk/" />
        <link rel="icon" href="/icons/favicon.ico" />
        <link rel="apple-touch-icon" href="/icons/apple_touch_icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="Welsh Mole Catcher | Expert Mole Control Services Across Wales"
        />
        <meta
          property="og:description"
          content="Professional mole catching services in Wales. Humane, effective, and affordable solutions for farms, homes, and gardens."
        />
        <meta property="og:url" content="https://www.welshmolecatcher.co.uk/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/logo.png" />
        <meta
          httpEquiv="Content-Security-Policy"
          content="
            default-src 'self';
            script-src 'self' 'unsafe-eval' https://www.googletagmanager.com;
            style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
            font-src 'self' https://fonts.gstatic.com;
            img-src 'self' https://via.placeholder.com;
            connect-src 'self' https://www.googletagmanager.com;
            frame-src 'self' https://www.googletagmanager.com;
          "
        />
        <meta
          httpEquiv="Cache-Control"
          content="public, max-age=31536000, immutable"
        />
      </Head>

      {/* Google Tag Manager */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtm.js?id=GTM-PBCN4VDL"
        onLoad={() => {
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
        }}
      />
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-PBCN4VDL"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        ></iframe>
      </noscript>

      {/* Header with Navigation */}
      <header className="bg-gradient-to-r from-green-800 to-teal-700 text-amber-50 p-6 sticky top-0 z-50 shadow-lg">
        <nav className="container mx-auto flex justify-between items-center max-w-7xl">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/images/logo.png"
              alt="Welsh Mole Catcher Logo"
              width={50}
              height={50}
              className="rounded-full shadow-md"
              priority
            />
            <span className="text-2xl font-bold tracking-tight font-display">
              Welsh Mole Catcher
            </span>
          </Link>
          <button
            className="md:hidden p-2 rounded-lg hover:bg-teal-600/50 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? 'M6 18L18 6M6 6l12 12'
                    : 'M4 6h16M4 12h16M4 18h16'
                }
              />
            </svg>
          </button>
          <ul
            className={md:flex space-x-8  md:block absolute md:static top-16 left-0 right-0 bg-green-800 md:bg-transparent p-6 md:p-0 z-40 rounded-b-xl shadow-lg md:shadow-none}
          >
            {['About', 'Services', 'Testimonials', 'Gallery', 'Area', 'Contact'].map(
              (item) => (
                <li key={item}>
                  <Link
                    href={#}
                    className="text-lg font-medium hover:text-amber-100 transition-colors duration-300 hover:underline underline-offset-4 font-body"
                  >
                    {item}
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-800 to-teal-700 text-amber-50 py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/farm_john_mole.jpg"
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="filter blur-sm"
            priority
          />
        </div>
        <div className="container mx-auto text-center relative z-10 max-w-4xl px-4">
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg font-display"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Expert Mole Control in Wales
          </motion.h1>
          <p className="text-xl md:text-2xl mb-10 font-light tracking-wide drop-shadow-md font-body">
            Humane, effective, and affordable solutions for farms, gardens, and
            properties.
          </p>
          <Link
            href="#contact"
            className="inline-block bg-amber-50 text-green-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-amber-100 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg font-body"
          >
            Get a Quote
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-green-800 tracking-tight font-display">
            About Welsh Mole Catcher
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/images/farm_john_mole.jpg"
                alt="John the Mole Catcher on a Welsh farm"
                width={600}
                height={400}
                className="w-full h-80 object-cover rounded-xl shadow-lg border-2 border-amber-50 hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.target.src =
                    'https://via.placeholder.com/600x400?text=John+the+Mole+Catcher';
                }}
              />
            </motion.div>
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-lg mb-6 leading-relaxed text-gray-700 font-body">
                With over 20 years of experience, Welsh Mole Catcher provides
                professional mole control services across Wales. We specialize in
                humane trapping methods, ensuring minimal disruption to your land
                while effectively managing mole populations.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 font-body">
                Based in the heart of Wales, we work with farmers, homeowners, and
                businesses to protect properties from mole damage. Trust us to
                deliver fast, reliable, and environmentally friendly solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-gray-100 py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-green-800 tracking-tight font-display">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: 'Farm Mole Control',
                img: '/images/farm_moles.jpg',
                alt: 'Mole control on Welsh farms',
                desc: 'Protect your farmland from mole damage with our traditional trapping methods, ensuring productive fields.',
              },
              {
                title: 'Garden Mole Removal',
                img: '/images/farm_son.jpg',
                alt: 'Mole removal in Welsh gardens',
                desc: 'Keep your garden pristine with expert mole removal, preventing future infestations swiftly.',
              },
              {
                title: 'Commercial Mole Management',
                img: '/images/moles_collage.jpg',
                alt: 'Commercial mole management in Wales',
                desc: 'Tailored solutions for businesses, keeping grounds mole-free with minimal disruption.',
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-500"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <h3 className="text-2xl font-semibold mb-4 text-green-800 font-display">
                  {service.title}
                </h3>
                <Image
                  src={service.img}
                  alt={service.alt}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg mb-4 border border-amber-50 hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src = https://via.placeholder.com/300x200?text=;
                  }}
                />
                <p className="text-gray-700 text-base leading-relaxed font-body">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-green-800 tracking-tight font-display">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                name: 'John Davies, Farmer',
                quote:
                  'Welsh Mole Catcher saved my fields! They were quick, professional, and the moles are gone for good.',
              },
              {
                name: 'Sarah Evans, Homeowner',
                quote:
                  'My garden looks perfect again thanks to their humane and effective service. Highly recommend!',
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gray-100 p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <p className="text-lg italic text-gray-700 mb-4 font-body">
                  “{testimonial.quote}”
                </p>
                <p className="text-green-800 font-semibold font-body">
                  {testimonial.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-green-800 tracking-tight font-display">
            Gallery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { src: '/images/moles_collage.jpg', alt: 'Moles caught on Welsh farms' },
              { src: '/images/farm_moles.jpg', alt: 'Moles on a Welsh farm' },
              { src: '/images/farm_john_mole.jpg', alt: 'John catching moles' },
              { src: '/images/moleintrap.jpg', alt: 'Mole in a trap' },
              { src: '/images/rat1.jpg', alt: 'Rat control service' },
              { src: '/images/waspnest.jpg', alt: 'Wasp nest removal' },
              { src: '/icons/tube-icon.jpg', alt: 'Mole trapping method' },
            ].map((img, index) => (
              <motion.div
                key={index}
                className="cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={300}
                  height={200}
                  className="w-full h-56 object-cover rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 border border-amber-50"
                  onClick={() => openModal(img.src)}
                  onError={(e) => {
                    e.target.src = https://via.placeholder.com/300x200?text=;
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Modal for Image Zoom */}
        <div
          id="modal"
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 hidden"
        >
          <div className="relative max-w-4xl w-full p-6">
            {modalImage && (
              <Image
                src={modalImage}
                alt="Zoomed image"
                width={800}
                height={600}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl"
              />
            )}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-4xl font-bold hover:text-amber-50 transition-colors duration-300"
              aria-label="Close modal"
            >
              ×
            </button>
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section id="area" className="py-24 bg-gray-100">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-green-800 tracking-tight font-display">
            Our Service Area
          </h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/images/area.png"
              alt="Service area map"
              width={600}
              height={400}
              className="w-full max-w-3xl mx-auto object-cover rounded-lg shadow-lg border-2 border-amber-50 hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                e.target.src =
                  'https://via.placeholder.com/600x400?text=Service+Area+Map';
              }}
            />
          </motion.div>
          <div className="mt-8 text-center">
            <h3 className="text-2xl font-semibold text-green-800 mb-4 font-display">
              Other Areas Covered
            </h3>
            <ul className="flex flex-wrap justify-center gap-4">
              {[
                {
                  name: 'Talgarth Mole Catcher',
                  href: 'https://talgarth.welshtownandcountry.co.uk',
                },
                {
                  name: 'Brecon Mole Catcher',
                  href: 'https://brecon.welshtownandcountry.co.uk',
                },
                {
                  name: 'Neath Mole Catcher',
                  href: 'https://neath.welshtownandcountry.co.uk',
                },
              ].map((area, index) => (
                <li key={index}>
                  <a
                    href={area.href}
                    className="text-lg text-green-800 hover:underline underline-offset-4 font-body"
                  >
                    {area.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="bg-gradient-to-r from-green-800 to-teal-700 text-amber-50 py-24"
      >
        <div className="container mx-auto px-6 max-w-lg">
          <h2 className="text-4xl font-bold text-center mb-12 tracking-tight font-display">
            Contact Us
          </h2>
          <motion.form
            onSubmit={handleSubmit}
            className="bg-white text-gray-900 p-8 rounded-xl shadow-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-lg mb-2 font-medium font-body"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-800 transition-all duration-300 font-body"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-lg mb-2 font-medium font-body"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-800 transition-all duration-300 font-body"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-lg mb-2 font-medium font-body"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-800 transition-all duration-300 font-body"
                rows="5"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-800 text-amber-50 px-6 py-4 rounded-full font-semibold text-lg hover:bg-teal-700 hover:scale-105 transition-all duration-300 shadow-md font-body"
            >
              Send Message
            </button>
            {submitStatus === 'success' && (
              <p className="mt-6 text-center text-lg text-green-800 font-medium font-body">
                Thank you! We’ll get back to you soon.
              </p>
            )}
          </motion.form>
          <div className="mt-8 text-center">
            <p className="text-lg font-body">
              Or call us directly at:{' '}
              <a
                href="tel:07375303124"
                className="underline hover:text-amber-100"
              >
                07375 303124
              </a>
            </p>
            <p className="text-lg mt-2 font-body">
              Email:{' '}
              <a
                href="mailto:info@welshmolecatcher.co.uk"
                className="underline hover:text-amber-100"
              >
                info@welshmolecatcher.co.uk
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Floating CTA Banner */}
      <div className="fixed bottom-6 right-6 z-50">
        <Link
          href="#contact"
          className="flex items-center bg-amber-50 text-green-800 px-6 py-3 rounded-full shadow-lg hover:bg-amber-100 hover:scale-105 transition-all duration-300 font-body"
          aria-label="Contact us for help"
        >
          <span className="font-semibold text-lg mr-2">Need Help Now?</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>

      {/* Footer */}
      <footer className="bg-green-800 text-amber-50 py-12">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <p className="text-lg mb-4 font-body">
            © {new Date().getFullYear()} Welsh Mole Catcher. All rights reserved.
          </p>
          <p className="text-lg mb-4 font-body">
            <Link
              href="/privacy-policy/"
              className="hover:underline underline-offset-4"
            >
              Privacy Policy
            </Link>{' '}
            |{' '}
            <Link
              href="/terms-conditions/"
              className="hover:underline underline-offset-4"
            >
              Terms & Conditions
            </Link>
          </p>
          <div className="flex justify-center space-x-6">
            {[
              {
                href: 'https://www.facebook.com/profile.php?id=61564861332160',
                src: '/icons/facebook_logo.png',
                alt: 'Facebook',
              },
              {
                href: 'https://www.instagram.com/welshtownandcountry.co.uk/',
                src: '/icons/Instagram_icon.png',
                alt: 'Instagram',
              },
              {
                href: 'https://www.linkedin.com',
                src: '/icons/linked-in.jpg',
                alt: 'LinkedIn',
              },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-300"
              >
                <Image
                  src={social.src}
                  alt={social.alt}
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </a>
            ))}
          </div>
        </div>
      </footer>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Welsh Mole Catcher',
            image: '/images/logo.png',
            telephone: '07375 303124',
            email: 'info@welshmolecatcher.co.uk',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Wales',
              addressRegion: 'Wales',
              postalCode: 'LD3',
              streetAddress: '11 Glynneath Road',
            },
            url: 'https://www.welshmolecatcher.co.uk/',
            sameAs: [
              'https://www.facebook.com/profile.php?id=61564861332160',
              'https://www.instagram.com/welshtownandcountry.co.uk/',
            ],
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 52.0189,
              longitude: -3.2332,
            },
            openingHours: 'Mo-Su 24/7',
            description:
              'Humane and effective mole catching services for homes and farms across Wales. Local pest control expert for moles, rats, mice, and more.',
          }),
        }}
      />
    </div>
  );
}
