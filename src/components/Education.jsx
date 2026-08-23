import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { School, MapPin, Calendar, Award, Trophy, ChevronRight } from 'lucide-react';

// Import local image assets
import schoolImg from '../assets/school.webp';
import collegeImg from '../assets/college.png';

// Education Data Array
const educationData = [
  {
    id: 'ssc',
    stepNumber: '01',
    level: '10th Class (SSC)',
    shortLevel: '10th SSC',
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Sri Chaitanya Techno High School',
    location: 'Anantapur',
    duration: '2019 – 2020',
    score: 'GPA: 10.00 / 10',
    achievement: 'School Topper',
    image: schoolImg,
    color: 'from-blue-600 to-blue-500',
    activeBorder: 'border-blue-500',
    badgeBg: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    accentColor: '#4285F4', // Google Blue
  },
  {
    id: 'puc',
    stepNumber: '02',
    level: '12th Class (PUC)',
    shortLevel: '12th PUC',
    degree: 'Pre-University Course (PUC) – MPC',
    institution: 'Rajiv Gandhi University of Knowledge Technologies – RK Valley',
    location: 'Idupulapaya, Andhra Pradesh',
    duration: '2020 – 2022',
    score: 'CGPA: 9.64 / 10',
    achievement: 'Strong Academic Performance',
    image: collegeImg,
    color: 'from-yellow-500 to-amber-500',
    activeBorder: 'border-yellow-500',
    badgeBg: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
    accentColor: '#FBBC05', // Google Yellow
  },
  {
    id: 'btech',
    stepNumber: '03',
    level: 'B.Tech',
    shortLevel: 'B.Tech',
    degree: 'B.Tech in Computer Science',
    institution: 'Rajiv Gandhi University of Knowledge Technologies – RK Valley',
    location: 'Idupulapaya, Andhra Pradesh',
    duration: '2022 – 2026',
    score: 'CGPA: 8.83 / 10',
    achievement: 'GATE CSE Qualified',
    image: collegeImg,
    color: 'from-red-600 to-red-500',
    activeBorder: 'border-red-500',
    badgeBg: 'bg-red-500/10 text-red-400 border-red-500/20',
    accentColor: '#EA4335', // Google Red
  },
];

export default function Education() {
  const [selectedEdu, setSelectedEdu] = useState(educationData[2]); // Default selected B.Tech

  return (
<section 
  id="education" 
  className="bg-slate-950 text-slate-100 min-h-[85vh] pt-8 md:pt-10 pb-32 md:pb-44 px-4 sm:px-8 flex flex-col items-center justify-start scroll-mt-16 relative overflow-hidden"
>
      {/* Header */}
      <div className="text-center mb-8 md:mb-10 z-10">
        <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-yellow-400 to-red-400 bg-clip-text text-transparent">
          My Academic Journey
        </h2>
        <p className="text-slate-400 mt-1.5 text-xs md:text-sm">
          Select any level to explore detailed information & campus view
        </p>
      </div>

      {/* MOBILE ONLY: Horizontal Tab Switcher (< lg screens) */}
      <div className="w-full max-w-md lg:hidden mb-6 flex bg-slate-900/80 p-1.5 rounded-2xl border border-slate-800 gap-1.5 z-10">
        {educationData.map((item) => {
          const isSelected = selectedEdu.id === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setSelectedEdu(item)}
              className={`flex-1 py-2.5 px-2 rounded-xl text-xs font-semibold transition-all duration-300 relative flex items-center justify-center gap-1.5 ${
                isSelected
                  ? 'bg-slate-800 text-white shadow-lg border border-slate-700'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <span
                className="w-2 h-2 rounded-full shrink-0"
                style={{ backgroundColor: item.accentColor }}
              />
              <span className="truncate">{item.shortLevel}</span>
            </button>
          );
        })}
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center z-10">
        
        {/* DESKTOP ONLY: Vertical Staircase Layout (>= lg screens) */}
        <div className="hidden lg:flex lg:col-span-5 flex-col-reverse gap-4 relative py-2">
          {/* Background Growth Line Visual */}
          <div className="absolute right-4 top-0 bottom-0 w-1 bg-gradient-to-t from-blue-500 via-yellow-500 to-red-500 opacity-20 rounded-full" />

          {educationData.map((item, index) => {
            const isSelected = selectedEdu.id === item.id;
            return (
              <motion.button
                key={item.id}
                onClick={() => setSelectedEdu(item)}
                whileHover={{ scale: 1.02, x: 8 }}
                whileTap={{ scale: 0.98 }}
                className={`relative flex items-center justify-between p-4 rounded-2xl border transition-all duration-300 shadow-lg text-left overflow-hidden ${
                  isSelected
                    ? `${item.activeBorder} bg-slate-900 shadow-2xl ring-2 ring-opacity-50`
                    : 'border-slate-800 bg-slate-900/60 hover:bg-slate-900'
                }`}
                style={{
                  marginLeft: `${index * 1.5}rem`,
                  boxShadow: isSelected ? `0 10px 30px -10px ${item.accentColor}40` : undefined,
                }}
              >
                <div className={`absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b ${item.color}`} />

                <div className="flex items-center gap-3.5 pl-3">
                  <span className="text-2xl font-black opacity-40 font-mono">
                    {item.stepNumber}
                  </span>
                  <div>
                    <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block">
                      Step {index + 1}
                    </span>
                    <h3 className="text-base font-bold text-white">
                      {item.level}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {isSelected && (
                    <motion.div 
                      layoutId="activeDot" 
                      className="w-2.5 h-2.5 rounded-full" 
                      style={{ backgroundColor: item.accentColor }} 
                    />
                  )}
                  <ChevronRight className={`w-5 h-5 transition-transform ${isSelected ? 'translate-x-1 text-white' : 'text-slate-600'}`} />
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Details Card View (Mobile + Desktop) */}
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedEdu.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="bg-slate-900 border border-slate-800 rounded-2xl md:rounded-3xl p-5 md:p-7 shadow-2xl relative overflow-hidden"
            >
              {/* Top Accent Gradient Ribbon */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${selectedEdu.color}`} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 items-center">
                
                {/* Left Info Column */}
                <div className="space-y-3.5">
                  <div>
                    <span className={`inline-block px-2.5 py-0.5 text-[11px] font-bold rounded-full border ${selectedEdu.badgeBg} mb-2`}>
                      {selectedEdu.level}
                    </span>
                    <h3 className="text-lg md:text-2xl font-bold text-white leading-snug">
                      {selectedEdu.degree}
                    </h3>
                  </div>

                  <div className="space-y-2 text-xs md:text-sm text-slate-300">
                    <div className="flex items-start gap-2.5">
                      <School className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                      <span>{selectedEdu.institution}</span>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                      <span>{selectedEdu.location}</span>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <Calendar className="w-4 h-4 text-slate-400 shrink-0" />
                      <span>{selectedEdu.duration}</span>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <Award className="w-4 h-4 text-slate-400 shrink-0" />
                      <span className="font-semibold text-white">{selectedEdu.score}</span>
                    </div>

                    {selectedEdu.achievement && (
                      <div className="flex items-center gap-2.5 pt-1 text-amber-400 font-medium">
                        <Trophy className="w-4 h-4 shrink-0" />
                        <span>{selectedEdu.achievement}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Right Image Column */}
                <div className="relative group rounded-xl md:rounded-2xl overflow-hidden border border-slate-800 h-44 md:h-60 shadow-md">
                  <img
                    src={selectedEdu.image}
                    alt={selectedEdu.institution}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 text-[11px] text-slate-300 bg-slate-900/80 backdrop-blur-md p-2 rounded-lg border border-slate-700/50 truncate">
                    📍 {selectedEdu.institution}
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>

     {/* ASYMMETRICAL ANGLED PEAK DIVIDER WITH ACCENT STRIPE */}
<div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none">
  <svg 
    className="relative block w-full h-[60px] sm:h-[90px] md:h-[130px]" 
    viewBox="0 0 1200 120" 
    preserveAspectRatio="none"
  >
    {/* Accent Outline / Highlight Layer */}
    <path 
      d="M0,80 L350,15 L1200,95 L1200,120 L0,120 Z" 
      className="fill-indigo-500/40" 
    />

    {/* Main Foreground Cutout matching Projects background (#E2EAF1) */}
    <path 
      d="M0,90 L350,25 L1200,105 L1200,120 L0,120 Z" 
      className="fill-[#E2EAF1]" 
    />
  </svg>
</div>
    </section>
  );
}