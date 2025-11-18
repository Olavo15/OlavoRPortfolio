import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="flex items-center justify-between px-6 py-4 bg-gray-900 text-white text-sm">
      {/* Esquerda: ícones com links */}
      <div className="flex items-center space-x-6">
        {/* GitHub */}
        <a
          href="https://github.com/olavo15"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-gray-400"
        >
          <Image
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt="GitHub"
            width={24}
            height={24}
          />
        </a>

        {/* Email */}
        <a
          href="mailto:olavoregisdev@gmail.com"
          aria-label="Email"
          className="hover:text-gray-400"
        >
          <Image
            src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
            alt="Email"
            width={24}
            height={24}
          />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/olavo-regis/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-gray-400"
        >
          <Image
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
            alt="LinkedIn"
            width={24}
            height={24}
          />
        </a>
      </div>

      {/* Centro: Copyright */}
      <div>
        Copyright © 2025 Olavo - Todos os direitos reservados
      </div>

      {/* Direita: logo */}
      <div>
        <Image src="/logo.png" alt="Logo" width={32} height={32} />
      </div>
    </footer>
  )
}
