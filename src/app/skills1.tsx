"use client";
import { useState } from "react";

const skills = [
  {
    name: "React",
    color: "text-cyan-400",
    bgColor: "bg-cyan-600/30",
    ringColor: "ring-cyan-400",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    level: 8,
    experience: "4 yrs",
  },
  {
    name: "Python",
    color: "text-yellow-400",
    bgColor: "bg-yellow-500/30",
    ringColor: "ring-yellow-400",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    level: 10,
    experience: "5 yrs",
  },
  {
    name: "PHP",
    color: "text-purple-400",
    bgColor: "bg-purple-500/30",
    ringColor: "ring-purple-400",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    level: 8,
    experience: "3 yrs",
  },
  {
    name: "Node.js",
    color: "text-green-400",
    bgColor: "bg-green-500/30",
    ringColor: "ring-green-400",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    level: 8,
    experience: "5 yrs",
  },
  {
    name: "JavaScript",
    color: "text-yellow-300",
    bgColor: "bg-yellow-400/30",
    ringColor: "ring-yellow-300",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    level: 9.5,
    experience: "5 yrs",
  },
  {
    name: "HTML",
    color: "text-orange-400",
    bgColor: "bg-orange-500/30",
    ringColor: "ring-orange-400",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    level: 9,
    experience: "5 yrs",
  },
  {
    name: "CSS",
    color: "text-blue-300",
    bgColor: "bg-blue-400/30",
    ringColor: "ring-blue-300",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    level: 9,
    experience: "5 yrs",
  },
  {
    name: "Tailwind",
    color: "text-teal-400",
    bgColor: "bg-teal-500/30",
    ringColor: "ring-teal-400",
    img: "https://raw.githubusercontent.com/tomowang/hugo-theme-tailwind/main/static/logo.svg",
    level: 10,
    experience: "5 yrs",
  },
  {
    name: "Docker",
    color: "text-sky-400",
    bgColor: "bg-sky-500/30",
    ringColor: "ring-sky-400",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    level: 7,
    experience: "4 yrs",
  },
  {
    name: "MySQL",
    color: "text-blue-400",
    bgColor: "bg-blue-600/30",
    ringColor: "ring-blue-500",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    level: 8,
    experience: "6 yrs",
  },
  {
    name: "MariaDB",
    color: "text-indigo-400",
    bgColor: "bg-indigo-500/30",
    ringColor: "ring-indigo-400",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mariadb/mariadb-original.svg",
    level: 7,
    experience: "5 yrs",
  },
  {
    name: "Kali",
    color: "text-[#A9D9D0]",
    bgColor: "bg-[#F2E7DC]/30",
    img: "https://www.svgrepo.com/show/330767/kalilinux.svg",
    level: 8,
    experience: "6yrs",
  }
];

export default function SkillsSection() {
  const [showAll, setShowAll] = useState(false);
  const displayedSkills = showAll ? skills : skills.slice(0, 6);

  return (
    <section className="relative py-24 px-6 md:px-10 bg-gradient-to-br from-[#042326] via-[#0A3A40] to-[#0F5959] text-white bg-[#012E40]" id="Skills">
      {/* Cabeçalho */}
      <div className="mx-auto text-start mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="text-cyan-400">Skills</span>
        </h2>
        <p className="text-gray-300">Programming languages /<br />Management / Hobbies</p>
      </div>

      {/* Grade de skills */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 place-items-center">
        {displayedSkills.map((skill, index) => {
          // Determine a classe de animação com base no nome da habilidade
          let animationClass = "";

          switch (skill.name) {
            case "React":
              animationClass = "animate-move-react";
              break;
            case "Python":
              animationClass = "animate-move-python";
              break;
            case "PHP":
              animationClass = "animate-move-php";
              break;
            case "Node.js":
              animationClass = "animate-move-nodejs";
              break;
            case "JavaScript":
              animationClass = "animate-move-js";
              break;
            case "HTML":
              animationClass = "animate-move-html";
              break;
            case "CSS":
              animationClass = "animate-move-css";
              break;
            case "Tailwind":
              animationClass = "animate-move-tailwind";
              break;
            case "Docker":
              animationClass = "animate-move-docker";
              break;
            case "MySQL":
              animationClass = "animate-move-mysql";
              break;
            case "MariaDB":
              animationClass = "animate-move-mariadb";
              break;
            case "Kali":
              animationClass = "animate-move-kali"
            default:
              break;
          }

          return (
            <div key={index} className={`flex flex-col items-center group transition-all duration-300 ${animationClass}`}>
              <div
                className={`w-28 h-28 ${skill.bgColor} backdrop-blur-lg rounded-full flex justify-center items-center shadow-2xl ${skill.ringColor} ring-2 hover:scale-110 transition-transform`}
              >
                <img src={skill.img} alt={`${skill.name} Icon`} className="w-24 h-24" />
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 mt-4 p-3 bg-white/10 backdrop-blur-md rounded-2xl shadow-xl text-center transform scale-95 group-hover:scale-100">
                <span className={`${skill.color} font-semibold text-lg`}>{skill.name}</span>
                <div className="text-xs text-gray-200 mt-1">
                  <p>Level: <span className="text-teal-300">{skill.level}</span></p>
                  <p>Experience: <span className="text-teal-300">{skill.experience}</span></p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Botão Mostrar Mais */}
      {skills.length > 7 && (
        <div className="mt-12 text-center">
          <button
            className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-full font-semibold transition duration-300"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "See Less skills" : "See All skills"}
          </button>
        </div>
      )}
    </section>
  );
}
