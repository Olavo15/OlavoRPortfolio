import { Playfair_Display, Inter } from 'next/font/google';

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
      <header className="flex flex-wrap justify-between items-center py-6 px-6 md:px-12 bg-zinc-900 shadow-md gap-y-4 z-10 relative">
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
          <span className="absolute text-[90px] text-white/5 overflow-x-auto font-bold transform -rotate-6 left-4 top-12 font-fonte animate-fade-in">Java</span>
          <span className="absolute text-[60px] text-white/5 overflow-x-auto font-bold left-[2%] top-[60%] transform -rotate-6 font-fonte animate-fade-in">JavaScript</span>
          <span className="absolute text-[90px] text-white/5 overflow-x-auto font-bold left-[20%] right-[30%] -rotate-6 font-fonte animate-fade-in">PHP</span>
          <span className="absolute text-[80px] text-white/5 overflow-x-auto font-bold transform -rotate-12 right-[30%] top-1/3 font-fodao animate-fade-in">Python</span>
          <span className="absolute text-[60px] text-white/5 overflow-x-auto font-bold transform -rotate-45 top-[10%] right-10 bottom-32 font-fonte animate-fade-in">RUBY</span>
          <span className="absolute text-[60px] text-white/5 overflow-x-auto font-bold transform -rotate-45 right-10 bottom-32 font-fonte animate-fade-in">CSS</span>
          <span className="absolute text-[50px] text-white/5 overflow-x-auto font-bold left-[45%] top-[70px] transform -rotate-46 font-fonte animate-fade-in">HTML</span>
          <span className="absolute text-[40px] text-white/5 overflow-x-auto font-bold left-[35%] top-[60%] transform -rotate-6 font-fonte animate-fade-in">NODE.JS</span>
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
      <section className="relative py-24 px-6 md:px-10 bg-gradient-to-br from-[#042326] via-[#0A3A40] to-[#0F5959] text-white bg-[#012E40]">
        {/* ONDA NO TOPO */}
        <div className="absolute -top-[1px] left-0 w-full z-0">
          <svg className="w-full h-[100px]" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path
              fill="#000"
              fillOpacity="1"
              d="M0,96L60,106.7C120,117,240,139,360,144C480,149,600,139,720,128C840,117,960,107,1080,122.7C1200,139,1320,181,1380,202.7L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
            />
          </svg>
        </div>
                
        <div className="mx-auto text-start mb-16">
          <h2 className={`${playfair.className} text-3xl md:text-4xl font-bold mb-4`}>
            <span className="text-cyan-400">Skills</span>
          </h2>
          <p className="text-gray-300">Programming languages /<br />Management / Hobbies</p>
        </div>
                
        <div className="relative flex justify-center items-center">
          <div className="relative w-full h-[800px] flex justify-center items-center">
            {/* React */}
            <div className="absolute flex flex-col items-center group transition-all duration-300 top-1/5 left-1/5 animate-move-react">
              <div className="w-28 h-28 bg-cyan-600/30 backdrop-blur-lg rounded-full flex justify-center items-center shadow-2xl ring-2 ring-cyan-400 hover:scale-110 transition-transform">
              <div className="w-28 h-28 bg-cyan-600/30 backdrop-blur-lg rounded-full flex justify-center items-center shadow-2xl ring-2 ring-cyan-400 hover:scale-110 transition-transform">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React Icon" className="w-24 h-24" />
              </div>
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 mt-4 p-3 bg-cyan-50/10 backdrop-blur-md rounded-2xl shadow-xl text-center transform scale-95 group-hover:scale-100 ">
                <span className="text-cyan-400 font-semibold text-lg">React</span>
                <div className="text-xs text-gray-200 mt-1">
                  <p>Level: <span className="text-teal-300">8</span></p>
                  <p>Experience: <span className="text-teal-300">4 yrs</span></p>
                </div>
              </div>
            </div>
                
            {/* Python */}
            <div className="absolute flex flex-col items-center group transition-all duration-300 top-[25rem] left-[30rem] animate-move-python">
              <div className="w-28 h-28 bg-yellow-500/30 backdrop-blur-lg rounded-full flex justify-center items-center shadow-2xl ring-2 ring-yellow-400 hover:scale-110 transition-transform move-python">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python Icon" className="w-24 h-24" />
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 mt-4 p-3 bg-yellow-50/10 backdrop-blur-md rounded-2xl shadow-xl text-center transform scale-95 group-hover:scale-100">
                <span className="text-yellow-400 font-semibold text-lg">Python</span>
                <div className="text-xs text-gray-200 mt-1">
                  <p>Level: <span className="text-teal-300">9</span></p>
                  <p>Experience: <span className="text-teal-300">6 yrs</span></p>
                </div>
              </div>
            </div>
                
            {/* PHP */}
            <div className="absolute flex flex-col items-center group transition-all duration-300 top-2/5 left-1/12 animate-move-php">
              <div className="w-28 h-28 bg-purple-500/30 backdrop-blur-lg rounded-full flex justify-center items-center shadow-2xl ring-2 ring-purple-400 hover:scale-110 transition-transform">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP Icon" className="w-24 h-24" />
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 mt-4 p-3 bg-purple-50/10 backdrop-blur-md rounded-2xl shadow-xl text-center transform scale-95 group-hover:scale-100">
                <span className="text-purple-400 font-semibold text-lg">PHP</span>
                <div className="text-xs text-gray-200 mt-1">
                  <p>Level: <span className="text-teal-300">7</span></p>
                  <p>Experience: <span className="text-teal-300">5 yrs</span></p>
                </div>
              </div>
            </div>
                
            {/* Node.js */}
            <div className="absolute flex flex-col items-center group transition-all duration-300 top-1/3 left-2/5 animate-move-nodejs">
              <div className="w-28 h-28 bg-green-500/30 backdrop-blur-lg rounded-full flex justify-center items-center shadow-2xl ring-2 ring-green-400 hover:scale-110 transition-transform">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js Icon" className="w-24 h-24" />
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 mt-4 p-3 bg-green-50/10 backdrop-blur-md rounded-2xl shadow-xl text-center transform scale-95 group-hover:scale-100">
                <span className="text-green-400 font-semibold text-lg">Node.js</span>
                <div className="text-xs text-gray-200 mt-1">
                  <p>Level: <span className="text-teal-300">8</span></p>
                  <p>Experience: <span className="text-teal-300">5 yrs</span></p>
                </div>
              </div>
            </div>
                
            {/* JavaScript */}
            <div className="absolute flex flex-col items-center group transition-all duration-300 top-1/3 left-3/5 animate-move-js">
              <div className="w-28 h-28 bg-yellow-400/30 backdrop-blur-lg rounded-full flex justify-center items-center shadow-2xl ring-2 ring-yellow-300 hover:scale-110 transition-transform">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JS Icon" className="w-24 h-24" />
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 mt-4 p-3 bg-yellow-50/10 backdrop-blur-md rounded-2xl shadow-xl text-center transform scale-95 group-hover:scale-100">
                <span className="text-yellow-300 font-semibold text-lg">JavaScript</span>
                <div className="text-xs text-gray-200 mt-1">
                  <p>Level: <span className="text-teal-300">9</span></p>
                  <p>Experience: <span className="text-teal-300">7 yrs</span></p>
                </div>
              </div>
            </div>
                
            {/* HTML */}
            <div className="absolute flex flex-col items-center group transition-all duration-300 top-1/5 left-1/2 animate-move-html">
              <div className="w-28 h-28 bg-orange-500/30 backdrop-blur-lg rounded-full flex justify-center items-center shadow-2xl ring-2 ring-orange-400 hover:scale-110 transition-transform">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML Icon" className="w-24 h-24" />
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 mt-4 p-3 bg-orange-50/10 backdrop-blur-md rounded-2xl shadow-xl text-center transform scale-95 group-hover:scale-100">
                <span className="text-orange-400 font-semibold text-lg">HTML</span>
                <div className="text-xs text-gray-200 mt-1">
                  <p>Level: <span className="text-teal-300">9</span></p>
                  <p>Experience: <span className="text-teal-300">7 yrs</span></p>
                </div>
              </div>
            </div>
                
            {/* CSS */}
            <div className="absolute flex flex-col items-center group transition-all duration-300 top-2/3 left-3/4 animate-move-css">
              <div className="w-28 h-28 bg-blue-400/30 backdrop-blur-lg rounded-full flex justify-center items-center shadow-2xl ring-2 ring-blue-300 hover:scale-110 transition-transform">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS Icon" className="w-24 h-24" />
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 mt-4 p-3 bg-blue-50/10 backdrop-blur-md rounded-2xl shadow-xl text-center transform scale-95 group-hover:scale-100">
                <span className="text-blue-300 font-semibold text-lg">CSS</span>
                <div className="text-xs text-gray-200 mt-1">
                  <p>Level: <span className="text-teal-300">8</span></p>
                  <p>Experience: <span className="text-teal-300">7 yrs</span></p>
                </div>
              </div>
            </div>
                
            {/* Tailwind */}
            <div className="absolute flex flex-col items-center group transition-all duration-300 top-1/2 left-2/3 animate-move-tailwind">
              <div className="w-28 h-28 bg-teal-500/30 backdrop-blur-lg rounded-full flex justify-center items-center shadow-2xl ring-2 ring-teal-400 hover:scale-110 transition-transform">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt="Tailwind Icon" className="w-24 h-24"/>
             </div>
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 mt-4 p-3 bg-teal-50/10 backdrop-blur-md rounded-2xl shadow-xl text-center transform scale-95 group-hover:scale-100">
                <span className="text-teal-400 font-semibold text-lg">Tailwind</span>
                <div className="text-xs text-gray-200 mt-1">
                  <p>Level: <span className="text-teal-300">7</span></p>
                  <p>Experience: <span className="text-teal-300">3 yrs</span></p>
                </div>
              </div>
            </div>
                
            {/* Docker */}
            <div className="absolute flex flex-col items-center group transition-all duration-300 top-2/3 left-1/3 animate-move-docker">
              <div className="w-28 h-28 bg-sky-500/30 backdrop-blur-lg rounded-full flex justify-center items-center shadow-2xl ring-2 ring-sky-400 hover:scale-110 transition-transform">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker Icon" className="w-24 h-24" />
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 mt-4 p-3 bg-sky-50/10 backdrop-blur-md rounded-2xl shadow-xl text-center transform scale-95 group-hover:scale-100">
                <span className="text-sky-400 font-semibold text-lg">Docker</span>
                <div className="text-xs text-gray-200 mt-1">
                  <p>Level: <span className="text-teal-300">7</span></p>
                  <p>Experience: <span className="text-teal-300">4 yrs</span></p>
                </div>
              </div>
            </div>
                
            {/* MySQL */}
            <div className="absolute flex flex-col items-center group transition-all duration-300 top-5/6 left-1/4 animate-move-mysql">
              <div className="w-28 h-28 bg-blue-600/30 backdrop-blur-lg rounded-full flex justify-center items-center shadow-2xl ring-2 ring-blue-500 hover:scale-110 transition-transform">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL Icon" className="w-24 h-24" />
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 mt-4 p-3 bg-blue-50/10 backdrop-blur-md rounded-2xl shadow-xl text-center transform scale-95 group-hover:scale-100">
                <span className="text-blue-400 font-semibold text-lg">MySQL</span>
                <div className="text-xs text-gray-200 mt-1">
                  <p>Level: <span className="text-teal-300">8</span></p>
                  <p>Experience: <span className="text-teal-300">6 yrs</span></p>
                </div>
              </div>
            </div>
                
            {/* MariaDB */}
            <div className="absolute flex flex-col items-center group transition-all duration-300 top-5/6 left-2/3 animate-move-mariadb">
              <div className="w-28 h-28 bg-indigo-500/30 backdrop-blur-lg rounded-full flex justify-center items-center shadow-2xl ring-2 ring-indigo-400 hover:scale-110 transition-transform ">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mariadb/mariadb-original.svg" alt="MariaDB Icon" className="w-24 h-24" />
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 mt-4 p-3 bg-indigo-50/10 backdrop-blur-md rounded-2xl shadow-xl text-center transform scale-95 group-hover:scale-100">
                <span className="text-indigo-400 font-semibold text-lg">MariaDB</span>
                <div className="text-xs text-gray-200 mt-1">
                  <p>Level: <span className="text-teal-300">7</span></p>
                  <p>Experience: <span className="text-teal-300">5 yrs</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
                
        <div className="mt-16 text-center">
          <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-full font-semibold transition duration-300">
            See All Projects
          </button>
        </div>
    </section>

    </main>
  );
}
