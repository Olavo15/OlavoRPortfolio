"use client";
import { useState, useEffect } from "react";
import ClientCarousel from "./ClientCarousel";

interface Project {
  title: string;
  description: string;
  languages: string[];
  progress: number;
  media: string[]; 
}

export default function ProjectCard({ project }: { project: Project }) {
  const [isMobile, setIsMobile] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const handleClick = () => {
    if (isMobile) {
      setIsFlipped((prev) => !prev);
    }
  };

  return (
    <div
      className="relative w-full h-96 [perspective:1000px] led-border group"
      onClick={handleClick}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] rounded-xl ${
          isMobile
            ? isFlipped
              ? "[transform:rotateY(180deg)]"
              : ""
            : "group-hover:[transform:rotateY(180deg)]"
        }`}
      >
        {/* Frente */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-xl border border-white/30 shadow-lg p-4 flex items-center justify-center [backface-visibility:hidden] rounded-xl">
          <ClientCarousel media={project.media} />
        </div>

        {/* Verso */}
        <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden] bg-[#051326]/90 rounded-xl px-6 py-5 flex flex-col backdrop-blur-sm">
          <h3 className="text-xl font-bold mb-4 text-center text-white">
            {project.title}
          </h3>
          <div className="flex-1 overflow-auto pr-2">
            <p className="text-sm text-gray-200 whitespace-pre-line mb-4 leading-relaxed">
              {project.description}
            </p>
            <p className="text-sm mb-2 text-gray-300">
              <strong>Languages:</strong> {project.languages.join(", ")}
            </p>
            <p className="text-sm text-gray-300">
              <strong>Progress:</strong>{" "}
              <span className="text-cyan-400">{project.progress}%</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
