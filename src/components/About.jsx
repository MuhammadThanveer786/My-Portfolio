import { useEffect, useRef, useState } from "react";
import {
  FaJava,
  FaReact,
  FaNodeJs,
  FaJsSquare,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiMongodb,
  SiMysql,
} from "react-icons/si";

import aboutImage from "../assets/about-person.jpeg";

const About = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden bg-black text-white"
    >
      {/* DECORATIVE STARS */}
      <div className="absolute top-16 left-[8%] text-white/20 text-4xl">
        ✦
      </div>

      <div className="absolute top-32 right-[8%] text-red-400/30 text-5xl">
        ✦
      </div>

      <div className="absolute bottom-20 left-[15%] text-red-400/20 text-3xl">
        ✦
      </div>

      {/* MAIN CONTENT */}
      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-6
          sm:px-8
          md:px-10
          lg:px-12
          pt-8
          pb-8
          flex
          items-center
        "
      >
        <div className="w-full">
          {/* SECTION HEADING */}
          <div
            className={`
              text-center
              mb-8
              transition-all
              duration-1000
              ease-out
              ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }
            `}
          >
            <p
              className="
                text-red-400
                uppercase
                tracking-[0.35em]
                text-sm
                font-semibold
                mb-2
              "
            >
              Get To Know Me
            </p>

            <h2
              className="
                text-4xl
                sm:text-5xl
                md:text-6xl
                font-black
                tracking-tight
                text-white
              "
            >
              About
              <span className="text-red-400">
                .
              </span>
            </h2>

            <div className="mx-auto mt-3 h-1 w-16 bg-red-400 rounded-full" />
          </div>

          {/* CONTENT GRID */}
          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-2
              gap-10
              lg:gap-16
              items-center
            "
          >
            {/* LEFT - TEXT */}
            <div
              className={`
                order-2
                lg:order-1
                transition-all
                duration-1000
                ease-out
                ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-20"
                }
              `}
            >
              <h3
                className="
                  text-2xl
                  sm:text-3xl
                  font-bold
                  tracking-tight
                  text-white
                "
              >
                I'm{" "}
                <span className="text-red-400">
                  Muhammad Thanveer Akula
                </span>
              </h3>

              <p
                className="
                  mt-4
                  text-base
                  md:text-lg
                  leading-relaxed
                  tracking-wide
                  text-gray-300
                  max-w-2xl
                "
              >
                I'm a passionate{" "}
                <span className="text-white font-semibold">
                  Full Stack Developer
                </span>{" "}
                who enjoys building responsive, scalable and
                user-friendly web applications.
              </p>

              <p
                className="
                  mt-3
                  text-sm
                  md:text-base
                  leading-relaxed
                  tracking-wide
                  text-gray-400
                  max-w-2xl
                "
              >
                I enjoy transforming ideas into real-world
                applications and working with modern technologies
                to create meaningful digital experiences. I'm
                constantly learning, experimenting and improving
                my skills to become a better software developer.
              </p>

              {/* TECHNOLOGIES */}
              <div className="mt-6">
                <p
                  className="
                    text-xs
                    uppercase
                    tracking-[0.35em]
                    font-bold
                    text-red-400
                  "
                >
                  Technologies I Work With
                </p>

                <div
                  className="
                    mt-4
                    flex
                    flex-wrap
                    items-center
                    gap-4
                  "
                >
                  <TechIcon icon={<FaJava />} label="Java" />
                  <TechIcon icon={<FaJsSquare />} label="JavaScript" />
                  <TechIcon icon={<FaReact />} label="React" />
                  <TechIcon icon={<FaNodeJs />} label="Node.js" />
                  <TechIcon icon={<SiSpringboot />} label="Spring Boot" />
                  <TechIcon icon={<SiMongodb />} label="MongoDB" />
                  <TechIcon icon={<SiMysql />} label="MySQL" />
                </div>
              </div>
            </div>

            {/* RIGHT - HANGING IMAGE */}
            <div
              className={`
                order-1
                lg:order-2
                flex
                justify-center
                lg:justify-end
                transition-all
                duration-1000
                delay-200
                ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-20"
                }
              `}
            >
              <div
                className="
                  relative
                  flex
                  flex-col
                  items-center
                  animate-[swing_5s_ease-in-out_infinite]
                  origin-top
                "
              >
                {/* ROPE (Reduced height) */}
                <div
                  className="
                    w-[3px]
                    h-12
                    sm:h-16
                    md:h-20
                    bg-gradient-to-b
                    from-gray-400
                    via-gray-500
                    to-gray-700
                  "
                />

                {/* ROPE HOLDER */}
                <div
                  className="
                    absolute
                    top-0
                    w-4
                    h-4
                    rounded-full
                    bg-red-400
                    shadow-[0_0_20px_rgba(248,113,113,0.7)]
                  "
                />

                {/* IMAGE */}
                <div
                  className="
                    relative
                    w-[220px]
                    h-[220px]
                    sm:w-[280px]
                    sm:h-[280px]
                    md:w-[320px]
                    md:h-[320px]
                    lg:w-[360px]
                    lg:h-[360px]
                    rounded-full
                    overflow-hidden
                    border-[5px]
                    border-white/90
                    bg-black
                    shadow-[0_20px_70px_rgba(255,255,255,0.12)]
                  "
                >
                  <img
                    src={aboutImage}
                    alt="Muhammad Thanveer Akula"
                    className="
                      w-full
                      h-full
                      object-cover
                    "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* TECHNOLOGY ICON */
const TechIcon = ({ icon, label }) => {
  return (
    <div
      className="
        group
        flex
        flex-col
        items-center
        gap-1.5
      "
    >
      <div
        className="
          w-12
          h-12
          rounded-full
          border
          border-red-400/50
          bg-white/5
          text-red-400
          flex
          items-center
          justify-center
          text-xl
          group-hover:bg-red-400
          group-hover:text-black
          group-hover:border-red-400
          group-hover:-translate-y-1
          transition-all
          duration-300
        "
      >
        {icon}
      </div>

      <span
        className="
          text-[10px]
          font-semibold
          text-gray-400
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-300
        "
      >
        {label}
      </span>
    </div>
  );
};

export default About;