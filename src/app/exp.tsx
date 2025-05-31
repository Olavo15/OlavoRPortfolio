"use client";

import ClientCarousel from "../components/ClientCarousel";

export default function Exp() {
  const projects = [
    {
      title: "menu",
      media: [
        { type: "image", src: "/cardapio/cardapio.png" },
        { type: "image", src: "/cardapio/pedidos.png" },
        { type: "image", src: "/cardapio/finalizando.png" },
      ],
      description:
        "This digital menu was developed especially for Company X, which was looking for a practical, modern, and efficient solution to speed up ordering. With the user experience in mind, we created an intuitive, easy-to-navigate, and responsive interface that allows customers to select their favorite items and complete their orders quickly and without complications.\n\n" +
        "In addition to making life easier for consumers, the system also optimizes the workflow of the service team by reducing errors and ensuring greater agility in order processing. This integrated solution promotes clearer communication between customers and employees, increasing overall satisfaction and boosting sales.\n\n" +
        "If you want to implement a customized digital menu that adapts to the needs of your business and offers a practical and pleasant experience for your customers, get in touch. We are ready to offer a customized, no-obligation quote and help you transform the way your orders are placed.",
      languages: [
        "TypeScript",
        "Tailwind CSS",
        "React.js",
        "JavaScript",
        "Vite",
        "Swiper",
        "ESLint",
        "ts-node",
        "sucrase",
      ],
      progress: 100,
    },
    {
      title: "iClínica",
      media: [
        { type: "image", src: "/iclinica/iclinica.png" },
        { type: "image", src: "/iclinica/iclinicaHome.png" },
        { type: "image", src: "/iclinica/iclinicaAgenda.png" },
        { type: "image", src: "/iclinica/iclinicaPaciente.png" },
      ],
      description:
        "iClínica is a digital system developed for Clínica X to resolve critical issues related to excessive paperwork and disorganized patient management. The platform was designed to streamline administrative and clinical processes through key features such as:\n\n" +
        "- Real-time appointment scheduling and availability for patients;\n" +
        "- Access to medical prescriptions and consultation history;\n" +
        "- Tools for physicians to issue electronic prescriptions and review patient records.\n\n" +
        "Although the project achieved an advanced stage of development, it was ultimately paused due to budget limitations. As a result, the system remains incomplete but showcases significant progress and potential.\n\n" +
        "If you know someone who might be interested in helping bring this project to completion, feel free to get in touch.",
      languages: [
        "JavaScript",
        "TypeScript",
        "Vite",
        "Tailwind CSS",
        "PostCSS",
        "ESLint",
        "TypeScript Compiler",
      ],
      progress: 52,
    },
  ];

  return (
    <section
      className="relative py-24 px-6 md:px-10 bg-gradient-to-br from-[#8C1F28] via-[#591C21] to-[#D92525] text-white"
      id="experience"
    >
      <div className="mx-auto text-start mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="text-cyan-400">Experience</span>
        </h2>
        <p className="text-gray-300">
          Programming languages /<br />
          Management / Hobbies
        </p>
      </div>

      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative w-full h-96 [perspective:1000px] group overflow-hidden"
          >
            <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              {/* Frente do card: carrossel com vidro */}
              <div className="absolute w-full h-full backface-hidden rounded-xl overflow-hidden">
                <div className="w-full h-full bg-white/10 backdrop-blur-xl border border-white/30 shadow-lg rounded-xl p-4 flex items-center justify-center ring-1 ring-white/20">
                  <ClientCarousel media={project.media} />
                </div>
              </div>

              {/* Verso do card: descrição com vidro e texto ajustado */}
              <div
                className="
                  absolute w-full h-full backface-hidden rounded-xl p-6
                  bg-white/10 backdrop-blur-xl border border-white/30 shadow-lg
                  ring-1 ring-white/20 flex flex-col
                  [transform:rotateY(180deg)]
                "
              >
                <div className="bg-black/30 rounded-md p-4 flex-1 overflow-auto">
                  <h3 className="text-xl font-bold mb-4 text-center text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-200 whitespace-pre-line mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <p className="text-sm mb-2 text-gray-300">
                    <strong>Linguagens:</strong> {project.languages.join(", ")}
                  </p>
                  <p className="text-sm text-gray-300">
                    <strong>Progresso:</strong>{" "}
                    <span className="text-cyan-400">{project.progress}%</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
