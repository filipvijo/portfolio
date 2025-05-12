import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faDatabase, faServer, faPalette, faCloud, faPlug } from "@fortawesome/free-solid-svg-icons";

const skills = [
  {
    title: "Frontend Development",
    icon: faCode,
    items: [
      "React & React Native",
      "Next.js & Vite",
      "JavaScript & TypeScript",
      "HTML5 & CSS3",
      "TailwindCSS & Styled Components"
    ]
  },
  {
    title: "Backend Development",
    icon: faServer,
    items: [
      "Node.js & Express",
      "Python & Django",
      "RESTful APIs",
      "GraphQL",
      "Authentication & Security"
    ]
  },
  {
    title: "Database Management",
    icon: faDatabase,
    items: [
      "MongoDB",
      "PostgreSQL",
      "Firebase",
      "Supabase",
      "Data Modeling"
    ]
  },
  {
    title: "UI/UX Design",
    icon: faPalette,
    items: [
      "Responsive Design",
      "User Experience (UX)",
      "Figma & Adobe XD",
      "Design Systems",
      "Accessibility (a11y)"
    ]
  },
  {
    title: "DevOps & Deployment",
    icon: faCloud,
    items: [
      "Vercel",
      "AWS",
      "Netlify",
      "Docker",
      "Kubernetes"
    ]
  },
  {
    title: "APIs Integration",
    icon: faPlug,
    items: [
      "GPT",
      "Grok",
      "ElevenLabs",
      "NASA API",
      "OpenAI API"
    ]
  }
];

const Skills = () => (
  <section
    id="skills"
    className="py-20 px-4 bg-gradient-to-b from-transparent to-purple-900/10 dark:bg-gradient-to-b dark:from-[#181f2a] dark:to-[#232946]"
  >
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-extrabold mb-12 tracking-tight gradient-text text-center">
        Skills & Tech Stack
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill) => (
          <div
            key={skill.title}
            className="rounded-xl border border-purple-700/30 dark:border-purple-400/20 bg-[#191724]/80 dark:bg-[#232946]/80 shadow-lg p-8 flex flex-col items-start hover:border-purple-500 hover:shadow-2xl transition-all"
          >
            <div className="text-3xl mb-4 drop-shadow-xl text-purple-400">
              <FontAwesomeIcon icon={skill.icon} />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white gradient-text">
              {skill.title}
            </h3>
            <ul className="space-y-2">
              {skill.items.map((item) => (
                <li key={item} className="flex items-center text-gray-300 dark:text-gray-200">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <style jsx>{`
      .gradient-text {
        background: linear-gradient(90deg, #a18fff 0%, #e879f9 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
      }
    `}</style>
  </section>
);

export default Skills;
