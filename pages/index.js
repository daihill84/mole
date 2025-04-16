import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';
// Import motion directly (remove dynamic import to fix unused variable warning)
import { motion } from 'framer-motion';

export default function Home() {
  const [motionLib, setMotionLib] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitStatus, setSubmitStatus] = useState(null);
  const [modalImage, setModalImage] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const loadMotion = async () => {
      try {
        const mod = await import('framer-motion');
        setMotionLib(mod);
      } catch (error) {
        // Use error to suppress the unused variable warning
        console.warn('Framer Motion failed to load. Animations disabled.', error);
      }
    };
    loadMotion();
  }, []);

  const MotionWrapper = motionLib ? motionLib.motion.div : 'div';

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
    <div>
      <Head>
        <title>Welsh Mole Catcher | Traditional Pest Control in Wales</title>
        <meta name="description" content="Expert mole catching and pest control in Wales. Family-run service for farms and rural homes using traditional methods. Call 07375 303124!" />
        <meta name="keywords" content="mole catching Wales, pest control farm, Welsh mole catcher, rural pest services, traditional mole traps" />
        <meta name="author" content="Welsh Mole Catcher" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet" />
      </Head>

      <nav className="bg-[#2f2a1d] text-[#f5e8c7] p-3 sm:p-4 sticky top-0 z-20 shadow-lg">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <Link href="/">
            <a className="text-xl sm:text-2xl mb-2 sm:mb-0 font-heading tracking-wide">Welsh Mole Catcher</a>
          </Link>
          <button className="sm:hidden text-2xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? '✕' : '☰'}
          </button>
          <ul className={`sm:flex sm:space-x-3 ${isMenuOpen ? 'flex flex-col space-y-2 mt-2' : 'hidden sm:flex'}`}>
            <li><Link href="/"><a className="text-sm sm:text-base hover:text-[#a8c686] transition-colors duration-300 block px-2 py-1">Home</a></Link></li>
            <li><Link href="#services"><a className="text-sm sm:text-base hover:text-[#a8c686] transition-colors duration-300 block px-2 py-1">Services</a></Link></li>
            <li><Link href="#gallery"><a className="text-sm sm:text-base hover:text-[#a8c686] transition-colors duration-300 block px-2 py-1">Gallery</a></Link></li>
            <li><Link href="#contact"><a className="text-sm sm:text-base hover:text-[#a8c686] transition-colors duration-300 block px-2 py-1">Contact</a></Link></li>
            <li><Link href="#faqs"><a className="text-sm sm:text-base hover:text-[#a8c686] transition-colors duration-300 block px-2 py-1">FAQs</a></Link></li>
          </ul>
        </div>
      </nav>

      <motion.div // Use motion directly instead of MotionWrapper
        className="relative h-screen text-[#f5e8c7] bg-cover bg-center bg-fixed hero-parallax"
        style={{ backgroundImage: "url('/moles_collage.jpg')" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70 flex flex-col items-center justify-center text-center px-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <Image
              src="/logo.png"
              alt="Welsh Mole Catcher Logo"
              width={100}
              height={100}
              className="w-24 sm:w-32 md:w-48 rounded-full border-4 border-[#a8c686] shadow-xl mb-4"
              onError={(e) => { e.target.src = 'https://via.placeholder.com/180?text=Logo'; }}
            />
          </motion.div>
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-5xl md:text-8xl font-heading tracking-tight">Welsh Mole Catcher</h1>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <p className="text-base sm:text-xl md:text-3xl mt-4 font-body italic">Traditional Pest Control in the Heart of Wales</p>
            <Link href="#contact">
              <a className="mt-6 inline-block bg-[#a8c686] text-[#3e2d20] px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-[#8ba567] transition-all duration-300 transform hover:scale-105 wooden-btn shadow-md">
                Get in Touch
              </a>
            </Link>
          </motion.div>
        </div>
      </motion.div>

      <section className="py-12 sm:py-20 bg-[#fefbf6]">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-heading text-[#3e2d20] border-b-4 border-[#a8c686] inline-block mb-6 text-center">Rooted in the Welsh Countryside</h2>
            <p className="text-base sm:text-lg text-[#4a3b30] font-body max-w-3xl mx-auto text-center leading-relaxed">
              At Welsh Mole Catcher, we bring the charm and grit of rural life to every job. Specializing in traditional mole trapping, we serve farms and countryside homes across South and Mid Wales with a family-run touch. Let us tackle your pest problems with methods as timeless as the rolling hills.
            </p>
          </motion.div>
        </div>
        <div className="leafy-divider mt-6 sm:mt-10"></div>
      </section>

      <section id="services" className="py-12 sm:py-20 bg-[#f0ead6]">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-heading text-[#3e2d20] border-b-4 border-[#a8c686] inline-block mb-6 text-center">Our Countryside Services</h2>
            <div className="grid gap-6 sm:gap-8 max-w-3xl mx-auto">
              <motion.div
                className="bg-[#f9f5e8] p-4 sm:p-6 rounded-2xl shadow-lg border border-[#d4c9a5] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                whileHover={{ scale: 1.03 }}
              >
                <h3 className="text-2xl sm:text-3xl font-heading text-[#3e2d20] mb-3">Mole Trapping</h3>
                <p className="text-base sm:text-lg text-[#4a3b30] font-body leading-relaxed">
                  Using time-honored traps, we provide effective mole control that’s gentle on your land and safe for livestock.
                </p>
              </motion.div>
              <motion.div
                className="bg-[#f9f5e8] p-4 sm:p-6 rounded-2xl shadow-lg border border-[#d4c9a5] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                whileHover={{ scale: 1.03 }}
              >
                <h3 className="text-2xl sm:text-3xl font-heading text-[#3e2d20] mb-3">Pest Control</h3>
                <p className="text-base sm:text-lg text-[#4a3b30] font-body leading-relaxed">
                  From rats and mice to wasps, bees, and squirrels, we manage all rural pests with care and expertise.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
        <div className="leafy-divider mt-6 sm:mt-10"></div>
      </section>

      <section id="gallery" className="py-12 sm:py-20 bg-[#fefbf6]">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-heading text-[#3e2d20] border-b-4 border-[#a8c686] inline-block mb-6 text-center">A Glimpse of Our Work</h2>
            <div className="masonry-grid max-w-3xl mx-auto">
              <motion.div
                className="masonry-item cursor-pointer"
                whileHover={{ scale: 1.05 }}
                onClick={() => openModal('/moles_collage.jpg')}
              >
                <Image
                  src="/moles_collage.jpg"
                  alt="Moles caught on Welsh farms"
                  width={300}
                  height={200}
                  className="w-full object-cover rounded-lg shadow-md gallery-img border-2 border-[#d4c9a5]"
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/300x200?text=Mole+Catch+Highlights'; }}
                />
                <figcaption className="text-center py-2 bg-[#d4c9a5] text-[#4a3b30] font-body rounded-b-lg text-sm">Mole Catch Highlights</figcaption>
              </motion.div>
              <motion.div
                className="masonry-item cursor-pointer"
                whileHover={{ scale: 1.05 }}
                onClick={() => openModal('/farm_moles.jpg')}
              >
                <Image
                  src="/farm_moles.jpg"
                  alt="Dead moles on a Welsh farm"
                  width={300}
                  height={250}
                  className="w-full object-cover rounded-lg shadow-md gallery-img border-2 border-[#d4c9a5]"
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/300x250?text=Farm+Results'; }}
                />
                <figcaption className="text-center py-2 bg-[#d4c9a5] text-[#4a3b30] font-body rounded-b-lg text-sm">Farm Results</figcaption>
              </motion.div>
              <motion.div
                className="masonry-item cursor-pointer"
                whileHover={{ scale: 1.05 }}
                onClick={() => openModal('/farm_son.jpg')}
              >
                <Image
                  src="/farm_son.jpg"
                  alt="Father and son team mole trapping"
                  width={300}
                  height={300}
                  className="w-full object-cover rounded-lg shadow-md gallery-img border-2 border-[#d4c9a5]"
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/300x300?text=Family+Team'; }}
                />
                <figcaption className="text-center py-2 bg-[#d4c9a5] text-[#4a3b30] font-body rounded-b-lg text-sm">Family Team</figcaption>
              </motion.div>
              <motion.div
                className="masonry-item cursor-pointer"
                whileHover={{ scale: 1.05 }}
                onClick={() => openModal('/farm_john_mole.jpg')}
              >
                <Image
                  src="/farm_john_mole.jpg"
                  alt="Mole catching expert in field"
                  width={300}
                  height={200}
                  className="w-full object-cover rounded-lg shadow-md gallery-img border-2 border-[#d4c9a5]"
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/300x200?text=In+The+Field'; }}
                />
                <figcaption className="text-center py-2 bg-[#d4c9a5] text-[#4a3b30] font-body rounded-b-lg text-sm">In The Field</figcaption>
              </motion.div>
            </div>
          </motion.div>
        </div>
        <div id="modal" className="modal hidden" onClick={closeModal}>
          {modalImage && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <Image
                src={modalImage}
                alt="Gallery Image"
                width={800}
                height={600}
                className="rounded-lg border-4 border-[#d4c9a5] shadow-2xl"
              />
              <button
                className="absolute top-4 right-4 bg-[#3e2d20] text-[#f5e8c7] p-2 sm:p-3 rounded-full hover:bg-[#785f45] transition-colors duration-300"
                onClick={closeModal}
              >
                ✕
              </button>
            </motion.div>
          )}
        </div>
        <div className="leafy-divider mt-6 sm:mt-10"></div>
      </section>

      <section id="contact" className="py-12 sm:py-20 bg-[#f0ead6]">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-heading text-[#3e2d20] border-b-4 border-[#a8c686] inline-block mb-6 text-center">Reach Out to Us</h2>
            <div className="bg-[#f9f5e8] p-4 sm:p-6 rounded-2xl shadow-lg max-w-lg mx-auto border border-[#d4c9a5]">
              <p className="text-base sm:text-lg text-[#4a3b30] mb-4 font-body text-center leading-relaxed">
                Call us at <a href="tel:07375303124" className="text-[#3e2d20] hover:text-[#785f45] transition-colors duration-300">07375 303124</a> or send us a message:
              </p>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-[#4a3b30] mb-2 font-body text-base sm:text-lg" htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 sm:p-3 border rounded-lg border-[#d4c9a5] focus:outline-none focus:ring-2 focus:ring-[#a8c686] bg-[#fefbf6] font-body text-base"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-[#4a3b30] mb-2 font-body text-base sm:text-lg" htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 sm:p-3 border rounded-lg border-[#d4c9a5] focus:outline-none focus:ring-2 focus:ring-[#a8c686] bg-[#fefbf6] font-body text-base"
                    placeholder="Your email"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-[#4a3b30] mb-2 font-body text-base sm:text-lg" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-2 sm:p-3 border rounded-lg border-[#d4c9a5] focus:outline-none focus:ring-2 focus:ring-[#a8c686] bg-[#fefbf6] font-body text-base"
                    placeholder="How can we help?"
                    rows="4"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#3e2d20] text-[#f5e8c7] p-2 sm:p-3 rounded-lg hover:bg-[#785f45] transition-all duration-300 font-body wooden-btn text-base transform hover:scale-105 shadow-md"
                >
                  Send Message
                </button>
                {submitStatus === 'success' && (
                  <p className="text-[#a8c686] mt-4 text-center font-body text-base">Thank you! We’ll get back to you soon.</p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
        <div className="leafy-divider mt-6 sm:mt-10"></div>
      </section>

      <section id="faqs" className="py-12 sm:py-20 bg-[#fefbf6]">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-heading text-[#3e2d20] border-b-4 border-[#a8c686] inline-block mb-6 text-center">Frequently Asked Questions</h2>
            <div className="bg-[#f9f5e8] p-4 sm:p-6 rounded-2xl shadow-lg border border-[#d4c9a5] max-w-3xl mx-auto">
              <div className="faq-item mb-4">
                <h3 className="text-xl sm:text-2xl font-heading text-[#3e2d20] mb-2">How do I get rid of moles on my farm in Wales?</h3>
                <p className="text-base sm:text-lg text-[#4a3b30] font-body leading-relaxed">
                  The most effective way to get rid of moles on your farm in Wales is through traditional mole trapping. At Welsh Mole Catcher, we use safe, time-tested traps to remove moles without harming your land or livestock. Contact us at <a href="tel:07375303124" className="text-[#3e2d20] hover:text-[#785f45] transition-colors duration-300">07375 303124</a> for expert service.
                </p>
              </div>
              <div className="faq-item mb-4">
                <h3 className="text-xl sm:text-2xl font-heading text-[#3e2d20] mb-2">What is traditional mole catching?</h3>
                <p className="text-base sm:text-lg text-[#4a3b30] font-body leading-relaxed">
                  Traditional mole catching involves using manual traps, like spring traps or scissor traps, placed in mole tunnels. This method avoids chemicals, making it safe for farms and rural homes. It’s a skill passed down through generations, and we’ve perfected it here in Wales.
                </p>
              </div>
              <div className="faq-item mb-4">
                <h3 className="text-xl sm:text-2xl font-heading text-[#3e2d20] mb-2">How much does mole catching cost in Wales?</h3>
                <p className="text-base sm:text-lg text-[#4a3b30] font-body leading-relaxed">
                  The cost of mole catching in Wales depends on the size of your property and the extent of the infestation. At Welsh Mole Catcher, we offer competitive pricing tailored to your needs. Call us at <a href="tel:07375303124" className="text-[#3e2d20] hover:text-[#785f45] transition-colors duration-300">07375 303124</a> for a personalized quote.
                </p>
              </div>
              <div className="faq-item mb-4">
                <h3 className="text-xl sm:text-2xl font-heading text-[#3e2d20] mb-2">Can you help with other pests besides moles?</h3>
                <p className="text-base sm:text-lg text-[#4a3b30] font-body leading-relaxed">
                  Yes, we handle a range of rural pests including rats, mice, wasps, bees, and squirrels. Our methods are safe for farms and countryside homes, ensuring your property stays pest-free without harming the environment.
                </p>
              </div>
              <div className="faq-item">
                <h3 className="text-xl sm:text-2xl font-heading text-[#3e2d20] mb-2">Why are moles a problem for farms?</h3>
                <p className="text-base sm:text-lg text-[#4a3b30] font-body leading-relaxed">
                  Moles can damage farmland by creating tunnels and molehills, which disrupt soil, harm crops, and create hazards for livestock. Their activity can also affect machinery and lead to uneven terrain, making mole control essential for Welsh farms.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="leafy-divider mt-6 sm:mt-10"></div>
      </section>

      <footer className="bg-[#2f2a1d] text-[#f5e8c7] py-6 sm:py-12 text-center">
        <p className="font-body text-base sm:text-lg">© 2025 Welsh Mole Catcher | <a href="https://www.welshtownandcountry.co.uk" className="text-[#a8c686] hover:underline transition-colors duration-300">Back to Main Site</a></p>
      </footer>

      <style jsx global>{`
        body {
          font-family: 'Open Sans', sans-serif;
          background-color: #fefbf6;
          color: #4a3b30;
          line-height: 1.6;
          scroll-behavior: smooth;
          background-image: url('https://www.transparenttextures.com/patterns/light-paper-fibers.png');
          background-attachment: fixed;
          background-size: cover;
        }
        .font-heading {
          font-family: 'Playfair Display', serif;
        }
        .font-body {
          font-family: 'Open Sans', sans-serif;
        }
        .hero-parallax {
          background-attachment: fixed;
          background-position: center;
          background-size: cover;
        }
        @media (max-width: 640px) {
          .hero-parallax {
            background-attachment: scroll;
          }
          .hero-parallax .font-heading {
            font-size: 1.875rem;
          }
          .hero-parallax .font-body {
            font-size: 1rem;
          }
          nav {
            padding: 0.75rem;
          }
          nav a {
            font-size: 0.75rem;
          }
          nav ul {
            padding: 0;
            margin: 0;
          }
          h2 {
            font-size: 1.5rem;
          }
          .faq-item h3 {
            font-size: 1rem;
          }
          .faq-item p {
            font-size: 0.875rem;
          }
          input, textarea, button {
            font-size: 0.875rem;
            padding: 0.5rem;
          }
          .leafy-divider {
            height: 15px;
          }
        }
        .leafy-divider {
          height: 20px;
          background-image: url('https://www.transparenttextures.com/patterns/leaves.png');
          background-size: 100px;
          background-repeat: repeat-x;
          background-position: center;
          opacity: 0.6;
        }
        .wooden-btn {
          background-image: url('https://www.transparenttextures.com/patterns/wood-pattern.png');
          background-size: cover;
          border: 1px solid #d4c9a5;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }
        .masonry-grid {
          column-count: 1;
          column-gap: 1rem;
          margin-top: 1rem;
        }
        @media (min-width: 640px) {
          .masonry-grid {
            column-count: 2;
            column-gap: 1.5rem;
            margin-top: 1.5rem;
          }
        }
        @media (min-width: 1024px) {
          .masonry-grid {
            column-count: 4;
          }
        }
        .masonry-item {
          break-inside: avoid;
          margin-bottom: 1rem;
        }
        .masonry-item img {
          width: 100%;
          height: auto;
        }
        .gallery-img {
          transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
        }
        .gallery-img:hover {
          transform: scale(1.05);
          opacity: 0.95;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }
        .modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.85);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
          transition: opacity 0.3s ease-in-out;
        }
        .modal.hidden {
          opacity: 0;
          pointer-events: none;
        }
        .modal:not(.hidden) {
          opacity: 1;
        }
        .modal img {
          max-width: 90%;
          max-height: 90%;
          border-radius: 12px;
          border: 4px solid #d4c9a5;
        }
      `}</style>
    </div>
  );
}