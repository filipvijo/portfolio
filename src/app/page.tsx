'use client';

import Image from "next/image";
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Process from '@/components/Process';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
