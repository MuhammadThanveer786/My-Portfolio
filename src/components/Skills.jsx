import React, { useState, useEffect } from "react";
import {
  FaCode,
  FaDesktop,
  FaServer,
  FaDatabase,
  FaTimes,
  FaArrowRight,
  FaReact,
  FaNodeJs,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  
} from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiSpringboot,
  SiMysql,
} from "react-icons/si";

// Skill Categories & Data Configuration
const skillCategories = {
  programming: {
    id: 1,
    title: "Programming Languages",
    shortTitle: "Programming",
    description:
      "Core languages for building reliable, scalable, and high-performance software logic.",
    icon: <FaCode />,
    bgColor: "bg-[#3b82f6]",
    accentHex: "#3b82f6",
    glowShadow: "shadow-[0_15px_30px_-5px_rgba(59,130,246,0.45)]",
    rating: 8.5,
    skills: [
      { name: "Java", percentage: 90, icon: <FaJava className="text-orange-500" /> },
      { name: "JavaScript", percentage: 88, icon: <FaJsSquare className="text-yellow-500" /> },
     
      { name: "C", percentage: 75, icon: <FaCode className="text-slate-600" /> },
    ],
  },
  frontend: {
    id: 2,
    title: "Frontend Technologies",
    shortTitle: "Frontend",
    description:
      "Creating intuitive, pixel-perfect user interfaces and modern web applications.",
    icon: <FaDesktop />,
    bgColor: "bg-[#ef4444]",
    accentHex: "#ef4444",
    glowShadow: "shadow-[0_15px_30px_-5px_rgba(239,68,68,0.45)]",
    rating: 8.8,
    skills: [
      { name: "HTML", percentage: 95, icon: <FaHtml5 className="text-orange-600" /> },
      { name: "CSS", percentage: 90, icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "JavaScript", percentage: 88, icon: <FaJsSquare className="text-yellow-500" /> },
      { name: "React.js", percentage: 88, icon: <FaReact className="text-cyan-500" /> },
      { name: "Next.js", percentage: 82, icon: <SiNextdotjs className="text-black" /> },
      { name: "Tailwind CSS", percentage: 90, icon: <SiTailwindcss className="text-sky-400" /> },
    ],
  },
  backend: {
    id: 3,
    title: "Backend Technologies",
    shortTitle: "Backend",
    description:
      "Developing robust server architectures, secure REST APIs, and microservices.",
    icon: <FaServer />,
    bgColor: "bg-[#eab308]",
    accentHex: "#eab308",
    glowShadow: "shadow-[0_15px_30px_-5px_rgba(234,179,8,0.45)]",
    rating: 8.6,
    skills: [
      { name: "Node.js", percentage: 88, icon: <FaNodeJs className="text-green-600" /> },
      { name: "Express.js", percentage: 88, icon: <SiExpress className="text-slate-800" /> },
      { name: "Spring Boot", percentage: 50, icon: <SiSpringboot className="text-emerald-500" /> },
      { name: "REST APIs", percentage: 88, icon: <FaServer className="text-amber-600" /> },
    ],
  },
  database: {
    id: 4,
    title: "Database Knowledge",
    shortTitle: "Database",
    description:
      "Designing efficient schemas and managing relational and NoSQL databases.",
    icon: <FaDatabase />,
    bgColor: "bg-[#22c55e]",
    accentHex: "#22c55e",
    glowShadow: "shadow-[0_15px_30px_-5px_rgba(34,197,94,0.45)]",
    rating: 8.4,
    skills: [
      { name: "Oracle SQL", percentage: 88, icon: <FaDatabase className="text-red-600" /> },
      { name: "MySQL", percentage: 85, icon: <SiMysql className="text-blue-600" /> },
      { name: "MongoDB", percentage: 85, icon: <SiMongodb className="text-green-500" /> },
      { name: "Database Design", percentage: 78, icon: <FaDatabase className="text-teal-600" /> },
    ],
  },
};

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  return (
    <section
      id="skills"
      className="relative min-h-screen bg-[#FAFBFD] text-gray-900 pb-20 overflow-hidden select-none"
    >
      <style>{`
        .lite-grid-bg {
          background-image: 
            linear-gradient(to right, rgba(0, 0, 0, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.04) 1px, transparent 1px);
          background-size: 38px 38px;
        }

        @keyframes flowDash {
          0% { stroke-dashoffset: 36; }
          100% { stroke-dashoffset: 0; }
        }

        .animated-flow-path {
          stroke-dasharray: 6 6;
          animation: flowDash 1.6s linear infinite;
        }

        @keyframes cardFloat {
          0%, 100% { transform: translateY(0px) rotate(var(--rot, 0deg)); }
          50% { transform: translateY(-6px) rotate(var(--rot, 0deg)); }
        }

        .floating-card {
          animation: cardFloat 5s ease-in-out infinite;
        }

        @keyframes stickerBob {
          0%, 100% { transform: translateY(0px) rotate(var(--rot, 0deg)); }
          50% { transform: translateY(-5px) rotate(var(--rot, 0deg)); }
        }

        .tech-sticker {
          animation: stickerBob 4.5s ease-in-out infinite;
        }

        @import url('https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap');
        .handwritten-font {
          font-family: 'Architects Daughter', cursive, sans-serif;
        }
      `}</style>

      {/* Top Wave Divider */}
      <div className="relative -mx-6 -mt-1 w-[calc(100%+3rem)] overflow-hidden leading-none z-20 pointer-events-none">
        <svg
          className="relative block w-full h-[60px] sm:h-[120px] md:h-[160px]"
          viewBox="0 0 1440 240"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 L1440,0 L1440,80 C1100,220 850,220 540,80 C320,-20 120,40 0,100 Z"
            fill="#000000"
          />
        </svg>
      </div>

      <div className="absolute inset-0 lite-grid-bg pointer-events-none z-0" />

      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 -left-32 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-blue-100/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] rounded-full bg-slate-200/50 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center pt-4 pb-6 sm:pb-12">
          <p className="text-red-500 uppercase tracking-[0.3em] text-[10px] sm:text-sm font-extrabold mb-1">
            WHAT I WORK WITH
          </p>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-gray-900">
            My <span className="text-red-500">Skills</span>
          </h2>
          <p className="mt-2 text-gray-600 text-xs sm:text-sm font-medium max-w-xs sm:max-w-md mx-auto">
            Click on any item to view detailed technology proficiencies and overall metrics.
          </p>
        </div>

        {/* UNIFIED ASYMMETRIC STAGE */}
        <div className="relative min-h-[580px] sm:min-h-[720px] lg:min-h-[850px] w-full mx-auto">
          {/* Animated SVG Path Lines */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            viewBox="0 0 1000 800"
            preserveAspectRatio="none"
          >
            <path
              d="M 280 80 C 480 50, 700 80, 750 220"
              fill="none"
              stroke="#1e293b"
              strokeWidth="2.5"
              className="animated-flow-path"
            />
            <path
              d="M 720 330 C 580 460, 380 400, 280 480"
              fill="none"
              stroke="#1e293b"
              strokeWidth="2.5"
              className="animated-flow-path"
            />
            <path
              d="M 280 590 C 460 620, 650 640, 750 700"
              fill="none"
              stroke="#cbd5e1"
              strokeWidth="2.5"
              className="animated-flow-path"
            />
          </svg>

          {/* Handwritten Note (Top Right) */}
          <div className="absolute right-[2%] sm:right-[8%] lg:right-[12%] top-[1%] sm:top-[3%] max-w-[140px] sm:max-w-[220px] lg:max-w-[260px] handwritten-font text-gray-700 select-none z-10 rotate-2">
            <p className="text-xs sm:text-base lg:text-xl font-bold leading-tight sm:leading-snug">
              Architecting scalable web solutions from client to server...
            </p>
          </div>

          {/* 5 FLOATING TECH STICKERS */}
          <div
            className="absolute left-[45%] top-[5%] tech-sticker z-10 w-9 h-9 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-white rounded-full shadow-md sm:shadow-lg border border-gray-100 flex items-center justify-center text-lg sm:text-2xl lg:text-3xl text-cyan-500"
            style={{ "--rot": "-8deg", animationDelay: "0.2s" }}
            title="React.js"
          >
            <FaReact />
          </div>

          <div
            className="absolute right-[2%] sm:right-[4%] top-[48%] tech-sticker z-10 w-9 h-9 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-white rounded-full shadow-md sm:shadow-lg border border-gray-100 flex items-center justify-center text-lg sm:text-2xl lg:text-3xl text-green-600"
            style={{ "--rot": "10deg", animationDelay: "1.1s" }}
            title="Node.js"
          >
            <FaNodeJs />
          </div>

          <div
            className="absolute left-[43%] top-[42%] tech-sticker z-10 w-9 h-9 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-white rounded-full shadow-md sm:shadow-lg border border-gray-100 flex items-center justify-center text-lg sm:text-2xl lg:text-3xl text-emerald-500"
            style={{ "--rot": "-6deg", animationDelay: "1.8s" }}
            title="MongoDB"
          >
            <SiMongodb />
          </div>

          <div
            className="absolute left-[2%] sm:left-[4%] top-[38%] tech-sticker z-10 w-9 h-9 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-white rounded-full shadow-md sm:shadow-lg border border-gray-100 flex items-center justify-center text-lg sm:text-2xl lg:text-3xl text-sky-400"
            style={{ "--rot": "-12deg", animationDelay: "2.3s" }}
            title="Tailwind CSS"
          >
            <SiTailwindcss />
          </div>

          <div
            className="absolute left-[46%] top-[80%] tech-sticker z-10 w-9 h-9 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-white rounded-full shadow-md sm:shadow-lg border border-gray-100 flex items-center justify-center text-lg sm:text-2xl lg:text-3xl text-orange-600"
            style={{ "--rot": "6deg", animationDelay: "0.7s" }}
            title="Java"
          >
            <FaJava />
          </div>

          {/* SKILL NODES */}
          <div
            className="absolute left-[22%] sm:left-[24%] lg:left-[8%] top-[3.5%] sm:top-[4%] lg:top-[2%] floating-card z-10"
            style={{ "--rot": "-4deg", animationDelay: "0s" }}
          >
            <ResponsiveSkillItem
              category={skillCategories.programming}
              onClick={() => setSelectedSkill(skillCategories.programming)}
            />
          </div>

          <div
            className="absolute right-[14%] sm:right-[18%] lg:right-[8%] top-[20%] sm:top-[21%] lg:top-[22%] floating-card z-10"
            style={{ "--rot": "5deg", animationDelay: "1.2s" }}
          >
            <ResponsiveSkillItem
              category={skillCategories.frontend}
              onClick={() => setSelectedSkill(skillCategories.frontend)}
            />
          </div>

          <div
            className="absolute left-[18%] sm:left-[22%] lg:left-[8%] top-[53%] sm:top-[53%] lg:top-[52%] floating-card z-10"
            style={{ "--rot": "-5deg", animationDelay: "2.4s" }}
          >
            <ResponsiveSkillItem
              category={skillCategories.backend}
              onClick={() => setSelectedSkill(skillCategories.backend)}
            />
          </div>

          <div
            className="absolute right-[13%] sm:right-[17%] lg:right-[8%] top-[78%] sm:top-[76%] lg:top-[72%] floating-card z-10"
            style={{ "--rot": "4deg", animationDelay: "3.6s" }}
          >
            <ResponsiveSkillItem
              category={skillCategories.database}
              onClick={() => setSelectedSkill(skillCategories.database)}
            />
          </div>

          {/* Bottom Handwritten Note */}
          <div className="absolute left-[4%] sm:left-[8%] bottom-[1%] handwritten-font text-sm sm:text-xl lg:text-2xl font-bold text-gray-700 -rotate-3 select-none pointer-events-none">
            Built with precision & passion!
          </div>
        </div>
      </div>

      {/* Skill Detail Modal */}
      {selectedSkill && (
        <SkillModal
          category={selectedSkill}
          onClose={() => setSelectedSkill(null)}
        />
      )}
    </section>
  );
};

/* RESPONSIVE SKILL ITEM COMPONENT */
const ResponsiveSkillItem = ({ category, onClick }) => {
  return (
    <>
      <button
        onClick={onClick}
        className={`
          lg:hidden group relative w-24 h-24 sm:w-28 sm:h-28 rounded-full ${category.bgColor} ${category.glowShadow}
          text-white border-2 border-white flex flex-col items-center justify-center p-2 text-center
          hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer shadow-lg
        `}
      >
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-b from-slate-100 via-slate-300 to-slate-400 border border-white shadow-md flex items-center justify-center z-20">
          <div className="w-1.5 h-1.5 rounded-full bg-slate-600" />
        </div>
        <span className="text-[10px] font-serif italic font-extrabold text-white/80">
          0{category.id}
        </span>
        <span className="text-xs sm:text-sm font-black leading-none mt-0.5 tracking-tight text-white drop-shadow-sm">
          {category.shortTitle}
        </span>
        <div className="mt-1 text-base sm:text-lg text-white/90">
          {category.icon}
        </div>
      </button>

      <button
        onClick={onClick}
        className={`
          hidden lg:block group relative w-[280px] xl:w-[300px] rounded-[26px] pt-9 pb-7 px-6 text-left transition-all duration-300
          ${category.bgColor} ${category.glowShadow} text-white border border-white/20
          hover:scale-105 hover:z-30 focus:outline-none cursor-pointer
        `}
      >
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-b from-slate-100 via-slate-300 to-slate-400 border-2 border-white shadow-[0_4px_8px_rgba(0,0,0,0.35)] flex items-center justify-center z-20">
          <div className="w-2 h-2 rounded-full bg-gradient-to-b from-slate-500 to-slate-700 shadow-inner" />
        </div>
        <div className="absolute top-0 left-0 right-0 h-10 rounded-t-[26px] pointer-events-none bg-black/15 border-b border-white/10" />
        <div className="relative z-10 text-sm font-serif italic font-extrabold tracking-widest text-white/90">
          0{category.id}
        </div>
        <h3 className="relative z-10 mt-1 text-2xl xl:text-3xl font-black leading-tight tracking-tight text-white">
          {category.shortTitle}
        </h3>
        <p className="relative z-10 mt-3 text-xs xl:text-sm font-medium leading-relaxed text-white/95">
          {category.description}
        </p>
        <div className="relative z-10 mt-5 pt-3 flex items-center justify-between text-xs font-bold border-t border-white/25 text-white group-hover:translate-x-0.5 transition-transform">
          <span>Explore Skills</span>
          <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
        </div>
      </button>
    </>
  );
};

/* SKILL MODAL COMPONENT WITH ANIMATED PROGRESS BARS */
const SkillModal = ({ category, onClose }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation after render
    const timer = setTimeout(() => setAnimate(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="fixed inset-0 z-[200] bg-black/60 backdrop-blur-md flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="
          relative w-full max-w-3xl bg-white rounded-[28px] sm:rounded-[32px]
          shadow-2xl p-5 sm:p-8 md:p-10 transition-all transform scale-100
          max-h-[90vh] overflow-y-auto border border-gray-100
        "
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="
            absolute top-5 right-5 sm:top-6 sm:right-6 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-100 text-gray-600
            flex items-center justify-center hover:bg-gray-900 hover:text-white transition-all
            cursor-pointer z-10
          "
        >
          <FaTimes />
        </button>

        <div className="flex items-center gap-3 sm:gap-4 border-b border-gray-100 pb-5 sm:pb-6">
          <div
            className={`w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl ${category.bgColor} text-white flex items-center justify-center text-xl sm:text-2xl shadow-lg shrink-0`}
          >
            {category.icon}
          </div>
          <div>
            <h3 className="text-xl sm:text-3xl font-black text-gray-900 leading-tight">
              {category.title}
            </h3>
            <p className="text-[11px] sm:text-sm font-semibold text-gray-400 mt-0.5">
              Proficiency overview and evaluation metrics
            </p>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
          <div className="lg:col-span-7 space-y-3.5 sm:space-y-4">
            {category.skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between items-center text-xs sm:text-sm font-bold text-gray-800 mb-1">
                  <div className="flex items-center gap-2 text-sm sm:text-base">
                    <span className="text-lg sm:text-xl flex items-center justify-center">
                      {skill.icon}
                    </span>
                    <span>{skill.name}</span>
                  </div>
                  <span
                    className="font-extrabold"
                    style={{ color: category.accentHex }}
                  >
                    {skill.percentage}%
                  </span>
                </div>
                <div className="h-2.5 sm:h-3 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: animate ? `${skill.percentage}%` : "0%",
                      backgroundColor: category.accentHex,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-5 flex flex-col items-center justify-center bg-slate-50 p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-slate-100">
            <GaugeMeter rating={category.rating} />
            <p className="mt-2 sm:mt-3 text-[10px] sm:text-xs uppercase tracking-widest font-extrabold text-gray-400">
              Overall Rating
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

/* SEGMENTED SPEEDOMETER GAUGE METER WITH NEEDLE ANIMATION */
const GaugeMeter = ({ rating }) => {
  // Angle mapping: Rating 0 => -90 deg, Rating 10 => +90 deg
  const targetAngle = (rating / 10) * 180 - 90;
  const maxAngle = 90; // Peak point (10/10 rating)
  const [currentAngle, setCurrentAngle] = useState(-90);

  useEffect(() => {
    // Stage 1: Sweep needle from 0 up to 10 (Max)
    const sweepUp = setTimeout(() => {
      setCurrentAngle(maxAngle);
    }, 100);

    // Stage 2: Settle back from 10 down to the target score
    const settleBack = setTimeout(() => {
      setCurrentAngle(targetAngle);
    }, 900);

    return () => {
      clearTimeout(sweepUp);
      clearTimeout(settleBack);
    };
  }, [targetAngle]);

  const segmentColors = [
    "#E52521", // 0-1 Red
    "#EB4B24", // 1-2 Red-Orange
    "#EF6C23", // 2-3 Dark Orange
    "#F48C21", // 3-4 Orange
    "#F8A81B", // 4-5 Light Orange
    "#FBBA08", // 5-6 Yellow-Orange
    "#F3CE13", // 6-7 Bright Yellow
    "#D3D522", // 7-8 Yellow-Green
    "#99C636", // 8-9 Light Green
    "#39A948", // 9-10 Dark Green
  ];

  return (
    <div className="relative w-[210px] sm:w-[240px] h-[125px] sm:h-[140px] flex justify-center items-end overflow-hidden">
      <svg viewBox="0 0 220 120" className="w-full h-full">
        <defs>
          <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.15" />
          </filter>
        </defs>

        {/* Outer White Arch Frame */}
        <path
          d="M 12 110 A 98 98 0 0 1 208 110"
          fill="none"
          stroke="#F1F5F9"
          strokeWidth="20"
          strokeLinecap="round"
        />

        {/* 10 Color Gradient Segments */}
        {segmentColors.map((color, index) => {
          const startAngle = (index * 18) - 180;
          const endAngle = ((index + 1) * 18) - 180;

          const startRad = (startAngle * Math.PI) / 180;
          const endRad = (endAngle * Math.PI) / 180;

          const radius = 95;
          const cx = 110;
          const cy = 110;

          const x1 = cx + radius * Math.cos(startRad);
          const y1 = cy + radius * Math.sin(startRad);
          const x2 = cx + radius * Math.cos(endRad);
          const y2 = cy + radius * Math.sin(endRad);

          return (
            <path
              key={index}
              d={`M ${x1} ${y1} A ${radius} ${radius} 0 0 1 ${x2} ${y2}`}
              fill="none"
              stroke={color}
              strokeWidth="18"
            />
          );
        })}

        {/* Segment Labels 0 through 10 */}
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => {
          const angle = (num * 18) - 180;
          const rad = (angle * Math.PI) / 180;
          const labelRadius = 72;
          const x = 110 + labelRadius * Math.cos(rad);
          const y = 110 + labelRadius * Math.sin(rad);

          return (
            <text
              key={num}
              x={x}
              y={y + 4}
              fill="#FFFFFF"
              fontSize="9"
              fontWeight="900"
              textAnchor="middle"
              className="select-none pointer-events-none drop-shadow-sm"
            >
              {num}
            </text>
          );
        })}
      </svg>

      {/* Speedometer Needle */}
      <div
        className="absolute bottom-2 w-full flex justify-center origin-bottom transition-transform duration-700 ease-out z-10"
        style={{ transform: `rotate(${currentAngle}deg)` }}
      >
        <div className="w-1.5 h-16 sm:h-20 bg-slate-900 rounded-t-full shadow-md" />
      </div>

      {/* Center Pivot Pin */}
      <div className="absolute bottom-0 w-6 h-6 bg-slate-900 rounded-full border-4 border-white shadow-lg z-20" />

      {/* Numerical Rating Display */}
      <div className="absolute bottom-5 text-center z-0">
        <span className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight">
          {rating.toFixed(1)}
        </span>
      </div>
    </div>
  );
};

export default Skills;