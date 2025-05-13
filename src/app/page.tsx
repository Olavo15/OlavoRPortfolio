import { Playfair_Display, Inter } from 'next/font/google';
import SkillsSection from './skills1';
import Exp from './exp';

// Carregar fontes com as configurações apropriadas
const playfair = Playfair_Display({
  weight: '700',
  subsets: ['latin'],
});

const inter = Inter({
  subsets: ['latin'],
});

export default function Home() {
  return (
    <main className={`${inter.className} bg-black text-white min-h-screen relative overflow-hidden`}>
      {/* Header */}
      <header className="fixed top-0 left-0 w-full flex flex-wrap justify-between items-center py-6 px-6 md:px-12 bg-zinc-900 shadow-md gap-y-4 z-50">
        <div className="flex items-center gap-4">
          <img
            src="./logo.png"
            alt="Logo"
            className="w-14 h-14 object-cover shadow-md border border-white/5 rounded-full"
            style={{
              clipPath: 'polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)',
              WebkitClipPath: 'polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)',
            }}
          />
          <h1 className={`${playfair.className} text-3xl md:text-4xl tracking-tight`}>
            <span className="text-purple-500">O.</span>Regis
          </h1>
        </div>

        <nav className="text-base md:text-lg font-medium">
          <ul className="flex flex-wrap gap-x-8 gap-y-2 justify-center md:justify-start">
            {[
              { label: 'Home', href: '#home' },
              { label: 'Skills', href: '#Skills' },
              { label: 'Experience', href: '#experience' },
              { label: 'Contact', href: '#contact' },
            ].map((item, i) => (
              <li className="relative group" key={i}>
                <a href={item.href} className="hover:text-purple-400 transition">
                  {item.label}
                </a>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex">
          <button className="bg-transparent text-white border-2 border-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-zinc-900 hover:shadow-lg transition-all duration-300">
            Let’s Work Together
          </button>
        </div>
      </header>

      {/* Hero Section */}
<section id="home" className="relative pt-[190px] min-h-screen py-24 px-7 md:px-10 overflow-hidden bg-black text-white">
        {/* Floating words */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none">
          <span className="absolute text-[90px] text-white/5 overflow-x-auto font-bold transform -rotate-6 left-4 top-35 font-fonte animate-fade-in">Java</span>
          <span className="absolute text-[60px] text-white/5 overflow-x-auto font-bold left-[2%] top-[80%] transform -rotate-6 font-fonte animate-fade-in">JavaScript</span>
          <span className="absolute text-[90px] text-white/5 overflow-x-auto font-bold left-[20%] right-[30%] -rotate-6 top-35 font-fonte animate-fade-in">PHP</span>
          <span className="absolute text-[90px] text-white/5 overflow-x-auto font-bold transform rotate-21 left-4 top-[25rem] font-fonte animate-fade-in">Python</span>
          <span className="absolute text-[60px] text-white/5 overflow-x-auto font-bold left-[25%] top-[50%] transform rotate-16 font-fonte animate-fade-in">JavaScript</span>
          <span className="absolute text-[80px] text-white/5 overflow-x-auto font-bold transform -rotate-12 right-[30%] top-1/3 font-fodao animate-fade-in">Python</span>
          <span className="absolute text-[60px] text-white/5 overflow-x-auto font-bold transform -rotate-45 top-[10%] right-10 bottom-32 font-fonte animate-fade-in">RUBY</span>
          <span className="absolute text-[60px] text-white/5 overflow-x-auto font-bold transform -rotate-45 right-10 bottom-32 font-fonte animate-fade-in">CSS</span>
          <span className="absolute text-[50px] text-white/5 overflow-x-auto font-bold left-[45%] top-[150px] transform -rotate-46  font-fonte animate-fade-in">HTML</span>
          <span className="absolute text-[60px] text-white/5 overflow-x-auto font-bold left-[35%] top-[70%] transform -rotate-45 font-fonte animate-fade-in">NODE.JS</span>
        </div>

        {/* Conteúdo */}
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-20 lg:gap-32 relative z-10">
          {/* Texto principal */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className={`${playfair.className} text-5xl md:text-6xl font-bold mb-6 leading-tight`}>
              <span className="text-cyan-400">O.</span>Regis
            </h2>
            <p className="text-purple-500 text-xl font-semibold mb-2">
              Full-Stack Developer with Security Specialization
            </p>
            <p className="text-gray-400 max-w-md mx-auto lg:mx-0 mb-8">
              I’m a passionate full-stack developer and cybersecurity enthusiast with hands-on skills in pentesting, programming, and system analysis.
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-semibold transition duration-300">
              Let’s Talk
            </button>
          </div>

          {/* Imagem com efeitos */}
          <div className="flex-1 relative w-[180px] h-[500px] mx-auto z-10 mt-10 lg:mt-0">
            {/* Camadas de cor para um efeito mais dark */}
            <div className="absolute inset-0 bg-[#04BFAD] opacity-40 rounded-xl transform rotate-6 -translate-y-3 -translate-x-3 z-0"></div>
            <div className="absolute inset-0 bg-[#013440] opacity-30 rounded-xl transform rotate-12 translate-y-2 translate-x-2 z-0"></div>
            <div className="absolute inset-0 bg-[#027373] opacity-20 rounded-xl transform rotate-180 -translate-y-2 -translate-x-3 z-0"></div>
            <div className="absolute inset-0 bg-[#172026] opacity-20 rounded-xl transform rotate-3 -translate-y-1 -translate-x-2 z-0"></div>

            {/* Efeito de vidro */}
            <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-lg rounded-xl z-10"></div>

            {/* Imagem de perfil */}
            <img
              src="https://i.pinimg.com/736x/4b/86/8d/4b868d31ed242b849f1798f397adddca.jpg"
              alt="Profile"
              className="relative rounded-xl shadow-xl w-full h-full object-cover object-top z-20"
            />

            {/* Elementos decorativos ao lado da foto */}
            <span className="absolute -left-10 top-1/3 text-purple-400 text-5xl font-bold z-30">{'{'}</span>
            <span className="absolute -right-10 bottom-1/4 text-purple-400 text-5xl font-bold z-30">{'>'}</span>
            <span className="absolute -bottom-10 right-0 text-3xl text-white/80 z-30 transform -rotate-6 origin-bottom-right font-fonte">
              <span className="text-teal-400">$npm</span> {'{'} <span className="text-purple-400">HeyThere</span> 👋
            </span>
          </div>
        </div>

        {/* Ondas decorativas suaves */}
        <div className="absolute -bottom-[0.5px] left-0 w-full z-0">
          <svg className="w-full h-[14px]" viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path fill="#7e22ce" fillOpacity="0.3" d="M0,64 C360,0 1080,128 1440,64 L1440,100 L0,100 Z" />
          </svg>
          <svg className="w-full h-[14px] -mt-[3px]" viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path fill="#22d3ee" fillOpacity="0.2" d="M0,80 C480,160 960,0 1440,80 L1440,100 L0,100 Z" />
          </svg>
          <svg className="w-full h-[14px] -mt-[3px]" viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path fill="#10b981" fillOpacity="0.2" d="M0,60 C480,20 960,140 1440,60 L1440,100 L0,100 Z" />
          </svg>
        </div>
      </section>

      {/* Skills Section COM NOVA SKIN */}
     <SkillsSection/>
     <Exp/>

    </main>
  );
}
