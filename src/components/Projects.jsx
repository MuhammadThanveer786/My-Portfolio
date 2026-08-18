import React, { useState } from 'react';
import { ExternalLink, Sparkles } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

// Import Swiper React components and styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import Swiper core modules
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

// ================================
// Project Images
// ================================
const blueCollorHubImg = "/projects/BlueCollorHub.png.png";

const medicalImg = "/projects/RGUKT-Health-Companion.png.png";

const stayInTouchImg = "/projects/StayInTouch.png.png";

const realEstateImg = "/projects/RealEstateLandingPage.png.png";

const imageSearchImg = "/projects/ImageFinder.png.png";


// ================================
// Projects Data
// ================================
const projectsData = [
  {
    id: 1,
    title: "BlueCollorHub",
    tagline: "Bringing Local Talent to Global Opportunities",
    description:
      "A full-stack platform connecting blue-collar workers directly with clients. Features location-based search and middleman-free hiring.",
    category: "Full Stack",
    isFeatured: true,
    isLive: true,
    image: blueCollorHubImg,
    techStack: ["Next.js", "Tailwind CSS", "MongoDB", "Node.js"],
    liveUrl: "https://blue-collor-hub-final.vercel.app/",
    githubUrl:
      "https://github.com/MuhammadThanveer786/BlueCollorHub-Extended",
  },

  {
    id: 2,
    title: "RGUKT-Health Companion",
    tagline: "ML-Powered Disease Prediction",
    description:
      "A Flask web app predicting diseases from symptoms. Includes full health plans: precautions, diets, and workout suggestions.",
    category: "Full Stack",
    isFeatured: false,
    isLive: true,
    image: medicalImg,
    techStack: ["Flask", "Python", "ML Models", "MongoDB"],
    liveUrl: "https://ai-disease-predicition.vercel.app/",
    githubUrl:
      "https://github.com/MuhammadThanveer786/AI-disease-predicition",
  },

  {
    id: 3,
    title: "StayInTouch",
    tagline: "Full-Stack Social Media App",
    description:
      "Built with the MERN stack. Features include posts, likes, comments, real-time messaging, and secure JWT authentication.",
    category: "Full Stack",
    isFeatured: false,
    isLive: true,
    image: stayInTouchImg,
    techStack: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    liveUrl: "https://stay-in-touch-social-media-app.vercel.app/",
    githubUrl:
      "https://github.com/MuhammadThanveer786/StayInTouch-Social-Media-App",
  },

  {
    id: 4,
    title: "Real Estate Landing Page",
    tagline: "Modern Property Showcase",
    description:
      "Visually appealing landing page built using React.js and Tailwind CSS to highlight modern property listings.",
    category: "Frontend",
    isFeatured: false,
    isLive: true,
    image: realEstateImg,
    techStack: ["React.js", "Tailwind CSS", "JavaScript"],
    liveUrl: "https://real-estate-landing-page-lake.vercel.app/",
    githubUrl:
      "https://github.com/MuhammadThanveer786/Real-estate-landing",
  },

  {
    id: 5,
    title: "Image Search Engine",
    tagline: "Powered by Unsplash API",
    description:
      "A legacy project built with native web tech. Allows photo searching, high-res downloads, and continuous pagination.",
    category: "Frontend",
    isFeatured: false,
    isLive: true,
    image: imageSearchImg,
    techStack: ["HTML", "CSS", "JavaScript", "Unsplash API"],
    liveUrl: "https://image-searching-project.vercel.app/",
    githubUrl:
      "https://github.com/MuhammadThanveer786/Image-searching-Project",
  },
];


// ================================
// Projects Component
// ================================
const Projects = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects =
    activeTab === "All"
      ? projectsData
      : projectsData.filter(
          (project) => project.category === activeTab
        );

  // Enable loop ONLY when there are enough slides
  const isLoopEnabled = filteredProjects.length >= 4;

  return (
    <div className="relative bg-[#E2EAF1]">

      {/* ================================
          Projects Section
      ================================= */}
      <section
        id="projects"
        className="pb-10 pt-4 text-slate-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* ================================
              Section Header
          ================================= */}
          <div className="text-center max-w-2xl mx-auto mb-6 md:mb-8">

            <span className="text-indigo-600 text-xs sm:text-sm font-semibold tracking-wider uppercase bg-indigo-100 px-4 py-1 rounded-full border border-indigo-200 shadow-inner">
              Portfolio Showcase
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 bg-gradient-to-r from-slate-900 via-slate-700 to-indigo-900 bg-clip-text text-transparent">
              Featured Projects
            </h2>

            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              Here are some of the major full-stack applications and frontend
              interfaces I’ve built.
            </p>

          </div>


          {/* ================================
              Filter Buttons
          ================================= */}
          <div className="flex justify-center items-center gap-2.5 sm:gap-3.5 mb-6 md:mb-8">

            {["All", "Full Stack", "Frontend"].map((tab) => (

              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 border ${
                  activeTab === tab
                    ? "bg-indigo-600 border-indigo-700 text-white shadow-lg shadow-indigo-200"
                    : "bg-white border-slate-200 text-slate-700 hover:text-indigo-700 hover:border-indigo-300 hover:bg-indigo-50"
                }`}
              >
                {tab}
              </button>

            ))}

          </div>


          {/* ================================
              Projects Carousel
          ================================= */}
          <div className="pb-8 -mx-4 sm:-mx-6 px-4 sm:px-6 relative group">

            <Swiper
              key={activeTab}
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              loop={isLoopEnabled}
              speed={600}
              allowTouchMove={true}
              touchRatio={1.2}
              resistanceRatio={0.85}

              coverflowEffect={{
                rotate: 15,
                stretch: 0,
                depth: 200,
                modifier: 1,
                slideShadows: false,
              }}

              pagination={{
                clickable: true,
                bulletClass:
                  "swiper-pagination-bullet !bg-slate-400 !opacity-100 !w-2.5 !h-2.5",
                bulletActiveClass:
                  "!bg-indigo-600 !w-6 !rounded-full",
              }}

              navigation={{
                nextEl: ".swiper-button-next-custom",
                prevEl: ".swiper-button-prev-custom",
              }}

              modules={[
                EffectCoverflow,
                Pagination,
                Navigation
              ]}

              className="mySwiper !py-2"
            >

              {filteredProjects.map((project) => (

                <SwiperSlide
                  key={project.id}
                  className="!w-[280px] sm:!w-[340px] md:!w-[420px] transition-transform duration-300"
                >

                  {/* ================================
                      Project Card
                  ================================= */}
                  <div
                    className={`bg-white border rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-xl group-hover:shadow-2xl group-hover:shadow-indigo-100/50 ${
                      project.isFeatured
                        ? "border-indigo-200 bg-gradient-to-b from-white to-indigo-50/50"
                        : "border-slate-100"
                    }`}
                  >

                    {/* ================================
                        Project Image
                    ================================= */}
                    <div className="h-40 sm:h-48 md:h-56 overflow-hidden relative">

                      <img
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />

                      {/* Project Badges */}
                      <div className="absolute inset-x-0 top-0 p-3 sm:p-5 flex items-center justify-between z-10">

                        {/* Category */}
                        <span className="text-[10px] sm:text-xs font-semibold text-indigo-700 bg-white/90 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full shadow-sm backdrop-blur-sm">
                          {project.category}
                        </span>


                        <div className="flex items-center gap-1.5 sm:gap-2.5">

                          {/* Featured Badge */}
                          {project.isFeatured && (

                            <span className="flex items-center gap-1 text-[10px] sm:text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full shadow-sm">

                              <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3" />

                              Featured

                            </span>

                          )}


                          {/* Live Badge */}
                          {project.isLive && (

                            <span className="flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full shadow-sm">

                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>

                              Live

                            </span>

                          )}

                        </div>

                      </div>

                    </div>


                    {/* ================================
                        Project Content
                    ================================= */}
                    <div className="p-5 sm:p-7 flex flex-col flex-grow">

                      <div>

                        <h3 className="text-xl sm:text-2xl font-bold text-slate-950">
                          {project.title}
                        </h3>


                        <p className="text-xs sm:text-sm font-medium text-slate-600 mb-3 sm:mb-4 italic">
                          {project.tagline}
                        </p>


                        <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-5 sm:mb-6 h-[72px] sm:h-[80px] overflow-hidden text-ellipsis">
                          {project.description}
                        </p>

                      </div>


                      {/* ================================
                          Tech Stack
                      ================================= */}
                      <div className="mt-auto">

                        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-5 sm:mb-7">

                          {project.techStack.map((tech, index) => (

                            <span
                              key={index}
                              className="text-[11px] sm:text-[12px] font-semibold bg-slate-100 text-slate-800 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg border border-slate-200"
                            >
                              {tech}
                            </span>

                          ))}

                        </div>


                        {/* ================================
                            Action Buttons
                        ================================= */}
                        <div className="flex items-center gap-2.5 sm:gap-3.5 pt-4 sm:pt-5 border-t border-slate-100">

                          {/* GitHub */}
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-slate-700 bg-white hover:bg-slate-100 py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl transition-colors border border-slate-200 shadow-sm"
                          >

                            <FaGithub className="w-4 h-4" />

                            Code

                          </a>


                          {/* Live Demo */}
                          {project.liveUrl && (

                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl transition-colors shadow-lg shadow-indigo-200"
                            >

                              <ExternalLink className="w-4 h-4" />

                              Live Demo

                            </a>

                          )}

                        </div>

                      </div>

                    </div>

                  </div>

                </SwiperSlide>

              ))}

            </Swiper>


            {/* ================================
                Navigation Arrows
            ================================= */}

            <button
              className="swiper-button-prev-custom absolute left-2 sm:left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full border border-slate-200 flex items-center justify-center shadow-xl text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 transition-all opacity-0 group-hover:opacity-100"
            >
              &larr;
            </button>


            <button
              className="swiper-button-next-custom absolute right-2 sm:right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full border border-slate-200 flex items-center justify-center shadow-xl text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 transition-all opacity-0 group-hover:opacity-100"
            >
              &rarr;
            </button>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Projects;