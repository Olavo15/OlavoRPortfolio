import { Playfair_Display, Inter } from 'next/font/google';

const playfair = Playfair_Display({
  weight: '700',
  subsets: ['latin'],
});

const inter = Inter({
  subsets: ['latin'],
});

export default function HomePage() {
  return (
    <main className={`${inter.className} bg-black text-white min-h-screen relative overflow-hidden`}>
      {/* Header */}
      <header className="flex flex-wrap justify-between items-center py-6 px-6 md:px-12 bg-zinc-900 shadow-md gap-y-4 z-10 relative">
        <div className="flex items-center gap-4">
          <img
            src="./logo.png"
            alt="Logo"
            className="w-14 h-14 object-cover shadow-md border border-white/10 rounded-full"
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
            {['Home', 'About Me', 'Experience', 'Contact'].map((item, i) => (
              <li className="relative group" key={i}>
                <a href="#" className="hover:text-purple-400 transition">
                  {item}
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
      <section className="relative py-24 px-6 md:px-10 overflow-hidden bg-black text-white">
        {/* Floating words */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none">
          <span className="absolute text-[90px] text-white/20 font-bold left-4 top-12">Java</span>
          <span className="absolute text-[80px] text-white/20 font-bold right-[30%] top-1/3">Python</span>
          <span className="absolute text-[60px] text-white/20 font-bold right-10 bottom-32">CSS</span>
          <span className="absolute text-[50px] text-white/20 font-bold left-[20%] bottom-20">HTML</span>
          <span className="absolute text-[40px] text-white/20 font-bold left-[35%] top-[60%]">NODE.JS</span>
        </div>

        {/* Conteúdo */}
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-20 relative z-10">
          <div className="flex-1 text-center lg:text-left">
            <h2 className={`${playfair.className} text-5xl md:text-6xl font-bold mb-6 leading-tight`}>
              <span className="text-cyan-400">O.</span>Regis
            </h2>
            <p className="text-purple-500 text-xl font-semibold mb-2">Front-End Lead</p>
            <p className="text-gray-300 text-lg mb-6">Full-Stack Software Developer</p>
            <p className="text-gray-400 max-w-md mx-auto lg:mx-0 mb-8">
              I’m an enthusiastic and creative technologist with hands-on skills in a wide range of software, tools, and programming languages.
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-semibold transition duration-300">
              Let’s Talk
            </button>
          </div>

          <div className="flex-1 relative w-[300px] h-[400px]">
            <div className="absolute inset-0 bg-purple-600 opacity-30 rounded-xl transform rotate-6 -translate-y-3 -translate-x-3 z-0"></div>
            <div className="absolute inset-0 bg-purple-800 opacity-20 rounded-xl transform rotate-12 translate-y-2 translate-x-2 z-0"></div>
            <img
              src="https://i.pinimg.com/736x/4b/86/8d/4b868d31ed242b849f1798f397adddca.jpg"
              alt="Profile"
              className="relative rounded-xl shadow-xl w-full h-full object-cover z-10"
            />
          </div>
        </div>

        {/* Ondas decorativas suaves */}
        <div className="absolute -bottom-[2px] left-0 w-full z-0">
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
    </main>
  );
}
