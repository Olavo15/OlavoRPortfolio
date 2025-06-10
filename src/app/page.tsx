"use client";
import { useState } from "react";
import { Playfair_Display, Inter } from "next/font/google";
import Image from "next/image";
import SkillsSection from "./skills1";
import Exp from "./exp";
import Footer from "./Footer";

const playfair = Playfair_Display({
  weight: "700",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
});

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main
      className={`${inter.className} bg-black text-white min-h-screen relative overflow-x-hidden`}
    >
      {/* Header */}
      <header className="fixed top-0 left-0 w-full flex flex-wrap justify-between items-center py-4 px-4 sm:px-6 md:px-12 bg-zinc-900 shadow-md gap-y-4 z-50">
        <div className="flex items-center gap-3 sm:gap-4">
          <img
            src="./logo.png"
            alt="Logo"
            className="w-12 h-12 sm:w-14 sm:h-14 object-cover shadow-md border border-white/5 rounded-full"
            style={{
              clipPath:
                "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)",
              WebkitClipPath:
                "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)",
            }}
          />
          <h1
            className={`${playfair.className} text-2xl sm:text-3xl md:text-4xl tracking-tight`}
          >
            <span className="text-purple-500">O.</span>Regis
          </h1>
        </div>

        {/* Botão hamburger para mobile */}
        <button
          className="sm:hidden text-white focus:outline-none"
          aria-label="Toggle Menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {/* Ícone hamburger simples */}
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Menu */}
        <nav
          className={`
            w-full sm:w-auto
            ${menuOpen ? "block" : "hidden"}
            sm:flex
            text-sm sm:text-base md:text-lg font-medium
          `}
        >
          <ul className="flex flex-col sm:flex-row justify-center sm:justify-start gap-x-6 gap-y-2">
            {[
              { label: "Home", href: "#home" },
              { label: "Skills", href: "#Skills" },
              { label: "Experience", href: "#experience" },
            ].map((item, i) => (
              <li className="relative group" key={i}>
                <a
                  href={item.href}
                  className="hover:text-purple-400 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </nav>

        {/* Botão Let’s Work Together */}
        <div
          className={`flex w-full sm:w-auto justify-center sm:justify-start mt-4 sm:mt-0 ${
            menuOpen ? "block" : "hidden"
          } sm:block`}
        >
          <a
            href="mailto:olavoregisdev@gmail.com"
            className="bg-transparent text-white border-2 border-white px-4 py-2 sm:px-6 sm:py-2 rounded-full font-semibold hover:bg-white hover:text-zinc-900 hover:shadow-lg transition-all duration-300 inline-block text-center"
          >
            Let’s Work Together
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative pt-[140px] sm:pt-[160px] md:pt-[190px] min-h-screen py-20 px-4 sm:px-7 md:px-10 overflow-hidden bg-black text-white"
      >
        {/* Floating words */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none">
          {/* Ajustar posições para mobile */}
          <span className="absolute text-[50px] sm:text-[70px] md:text-[90px] text-white/5 font-bold transform -rotate-6 left-2 sm:left-4 top-20 sm:top-35 font-fonte animate-fade-in">
            Java
          </span>
          <span className="absolute text-[40px] sm:text-[50px] md:text-[60px] text-white/5 font-bold left-[2%] top-[75%] sm:top-[80%] transform -rotate-6 font-fonte animate-fade-in">
            JavaScript
          </span>
          <span className="absolute text-[50px] sm:text-[70px] md:text-[90px] text-white/5 font-bold left-[15%] sm:left-[20%] top-20 sm:top-35 -rotate-6 font-fonte animate-fade-in">
            PHP
          </span>
          <span className="absolute text-[50px] sm:text-[70px] md:text-[90px] text-white/5 font-bold transform rotate-21 left-2 sm:left-4 top-[22rem] font-fonte animate-fade-in">
            Python
          </span>
          <span className="absolute text-[40px] sm:text-[50px] md:text-[60px] text-white/5 font-bold left-[20%] sm:left-[25%] top-[45%] sm:top-[50%] transform rotate-16 font-fonte animate-fade-in">
            JavaScript
          </span>
          <span className="absolute text-[50px] sm:text-[70px] md:text-[80px] text-white/5 font-bold transform -rotate-12 right-[25%] sm:right-[30%] top-[30%] sm:top-1/3 font-fodao animate-fade-in">
            Python
          </span>
          <span className="absolute text-[40px] sm:text-[50px] md:text-[60px] text-white/5 font-bold transform -rotate-45 top-[12%] right-6 sm:right-10 bottom-20 sm:bottom-32 font-fonte animate-fade-in">
            RUBY
          </span>
          <span className="absolute text-[40px] sm:text-[50px] md:text-[60px] text-white/5 font-bold transform -rotate-45 right-6 sm:right-10 bottom-20 sm:bottom-32 font-fonte animate-fade-in">
            CSS
          </span>
          <span className="absolute text-[35px] sm:text-[45px] md:text-[50px] text-white/5 font-bold left-[40%] sm:left-[45%] top-[120px] sm:top-[150px] transform -rotate-46 font-fonte animate-fade-in">
            HTML
          </span>
          <span className="absolute text-[40px] sm:text-[50px] md:text-[60px] text-white/5 font-bold left-[30%] sm:left-[35%] top-[65%] sm:top-[70%] transform -rotate-45 font-fonte animate-fade-in">
            NODE.JS
          </span>
        </div>

        {/* Conteúdo */}
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-32 relative z-10 px-2 sm:px-0">
          {/* Texto principal */}
          <div className="flex-1 text-center lg:text-left">
            <h2
              className={`${playfair.className} text-4xl sm:text-5xl md:text-6xl font-bold mb-5 sm:mb-6 leading-tight`}
            >
              <span className="text-cyan-400">O.</span>Regis
            </h2>
            <p className="text-purple-500 text-lg sm:text-xl font-semibold mb-2">
              Full-Stack Developer with Security Specialization
            </p>
            <p className="text-gray-400 max-w-md mx-auto lg:mx-0 mb-6 sm:mb-8">
              I’m a passionate full-stack developer and cybersecurity enthusiast
              with hands-on skills in pentesting, programming, and system
              analysis.
            </p>
            <a
              href="https://www.linkedin.com/in/olavo-regis/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-5 py-3 rounded-full font-semibold transition duration-300"
            >
              Let’s Talk
            </a>
          </div>

          {/* Imagem com efeitos */}
          <div className="flex-1 relative w-[140px] sm:w-[160px] md:w-[180px] h-[400px] sm:h-[450px] md:h-[500px] mx-auto z-10 mt-8 lg:mt-0">
            {/* Camadas de cor para um efeito mais dark */}
            <div className="absolute inset-0 bg-[#04BFAD] opacity-40 rounded-xl transform rotate-6 -translate-y-3 -translate-x-3 z-0"></div>
            <div className="absolute inset-0 bg-[#013440] opacity-30 rounded-xl transform rotate-12 translate-y-2 translate-x-2 z-0"></div>
            <div className="absolute inset-0 bg-[#027373] opacity-20 rounded-xl transform rotate-180 -translate-y-2 -translate-x-3 z-0"></div>
            <div className="absolute inset-0 bg-[#172026] opacity-20 rounded-xl transform rotate-3 -translate-y-1 -translate-x-2 z-0"></div>

            {/* Efeito de vidro */}
            <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-lg rounded-xl z-10"></div>

            {/* Imagem de perfil */}
            <div className="relative w-full h-full rounded-xl overflow-hidden">
              <Image
                src="/perfil.png"
                alt="Profile"
                fill
                className="rounded-xl shadow-xl object-cover object-top z-20"
              />
            </div>

            {/* Elementos decorativos ao lado da foto */}
            <span className="absolute -left-8 sm:-left-10 top-1/3 text-purple-400 text-4xl sm:text-5xl font-bold z-30">
              {"{"}
            </span>
            <span className="absolute -right-8 sm:-right-10 bottom-20 sm:bottom-24 text-purple-400 text-4xl sm:text-5xl font-bold z-30">
              {">"}
            </span>
            <span className="absolute -bottom-12 sm:-bottom-10 right-0 text-2xl sm:text-3xl text-white/80 z-30 transform -rotate-6 origin-bottom-right font-fonte">
              <span className="text-teal-400">$npm</span> {"{"}{" "}
              <span className="text-purple-400">HeyThere</span> 👋
            </span>
          </div>
        </div>

        {/* Ondas decorativas suaves */}
        <div className="absolute -bottom-[0.5px] left-0 w-full z-0">
          <svg
            className="w-full h-[14px]"
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
          >
            <path
              fill="#7e22ce"
              fillOpacity="0.3"
              d="M0,64 C360,0 1080,128 1440,64 L1440,100 L0,100 Z"
            />
          </svg>
          <svg
            className="w-full h-[14px] -mt-[3px]"
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
          >
            <path
              fill="#22d3ee"
              fillOpacity="0.2"
              d="M0,80 C480,160 960,0 1440,80 L1440,100 L0,100 Z"
            />
          </svg>
          <svg
            className="w-full h-[14px] -mt-[3px]"
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
          >
            <path
              fill="#10b981"
              fillOpacity="0.2"
              d="M0,60 C480,20 960,140 1440,60 L1440,100 L0,100 Z"
            />
          </svg>
        </div>
      </section>

      {/* Skills Section COM NOVA SKIN */}
      <SkillsSection />
      <Exp />
      <Footer />
    </main>
  );
}
