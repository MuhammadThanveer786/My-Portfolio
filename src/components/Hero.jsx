import { useEffect, useState } from "react";

import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import Navbar from "./Navbar";

import heroImage from "../assets/Hero_sec_img.png";
import mobilePerson from "../assets/hero_person_mobile.png";
import mobileBackground from "../assets/hero_background_mobile.png";


const roles = [
  "Full Stack Developer",
  "Java Developer",
  "React Developer",
  "Web Developer",
];


const Hero = () => {




  return (

    <section id="home">

      <Navbar />


      {/* ================================================= */}
      {/* DESKTOP HERO */}
      {/* ================================================= */}

      <div
        className="
          hidden
          md:block
          relative
          min-h-screen
          bg-cover
          bg-center
          bg-no-repeat
        "
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >

        <div
          className="
            relative
            z-10
            min-h-screen
            max-w-7xl
            mx-auto
            px-10
            lg:px-12
            flex
            items-center
          "
        >

          <HeroContent />

        </div>

      </div>


      {/* ================================================= */}
      {/* MOBILE HERO */}
      {/* ================================================= */}

      <div className="md:hidden">

        {/* PERSON IMAGE */}
        <div
          className="
            relative
            w-full
            h-[75vh]
            bg-cover
            bg-center
            bg-no-repeat
          "
          style={{
            backgroundImage: `url(${mobilePerson})`,
          }}
        >
          {/* Intentionally empty */}
        </div>


        {/* CONTENT BACKGROUND */}
        <div
          className="
            relative
            w-full
            min-h-screen
            bg-cover
            bg-center
            bg-no-repeat
            px-6
            py-16
          "
          style={{
            backgroundImage: `url(${mobileBackground})`,
          }}
        >

          <HeroContent />

        </div>

      </div>

    </section>
  );
};


/* ===================================================== */
/* HERO CONTENT                                          */
/* ===================================================== */

const HeroContent = () => {

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);


  useEffect(() => {

    const currentRole = roles[roleIndex];

    const timer = setTimeout(
      () => {

        if (!isDeleting) {

          setDisplayText(
            currentRole.substring(
              0,
              displayText.length + 1
            )
          );

          if (displayText === currentRole) {

            setTimeout(() => {
              setIsDeleting(true);
            }, 1200);

          }

        } else {

          setDisplayText(
            currentRole.substring(
              0,
              displayText.length - 1
            )
          );

          if (displayText === "") {

            setIsDeleting(false);

            setRoleIndex(
              (prev) =>
                (prev + 1) % roles.length
            );

          }

        }

      },
      isDeleting ? 60 : 100
    );


    return () => clearTimeout(timer);

  }, [
    displayText,
    isDeleting,
    roleIndex,
  ]);


  return (

    <div
      className="
        w-full
        md:w-[55%]
        lg:w-[52%]
        xl:w-[50%]
        ml-auto

        pt-20

        lg:translate-x-16
        xl:translate-x-20
      "
    >

      {/* Heading */}

      <h1
  className="
    text-3xl
    sm:text-4xl
    md:text-5xl
    lg:text-5xl
    xl:text-6xl
    font-bold
    text-white
    leading-tight
    whitespace-nowrap
  "
>
  Hello, It's Me{" "}
  <span className="text-red-400">
    Thanveer
  </span>
</h1>


      {/* Animated Role */}

      <div
        className="
          mt-5
          text-xl
          sm:text-2xl
          md:text-3xl
          lg:text-3xl
          xl:text-4xl
          font-semibold
          text-white
        "
      >

        I'm a{" "}

        <span className="text-red-400">

          {displayText}

          <span className="text-white animate-pulse">
            |
          </span>

        </span>

      </div>


      {/* Description */}

      <p
        className="
          mt-6
          max-w-xl
          text-sm
          sm:text-base
          md:text-lg
          leading-relaxed
          text-gray-200
        "
      >
        Passionate about building responsive, scalable
        and user-friendly web applications using modern
        technologies. I enjoy turning ideas into
        real-world digital experiences and continuously
        improving my skills as a developer.
      </p>


      {/* Social Icons */}

      <div className="mt-7 flex items-center gap-4">

        <SocialIcon
          href="https://www.linkedin.com/in/muhammad-thanveer-akula-897521280/"
          label="LinkedIn"
        >
          <FaLinkedinIn />
        </SocialIcon>


        <SocialIcon
          href="https://github.com/MuhammadThanveer786"
          label="GitHub"
        >
          <FaGithub />
        </SocialIcon>


        <SocialIcon
          href="https://www.instagram.com/thannu_789/"
          label="Instagram"
        >
          <FaInstagram />
        </SocialIcon>

      </div>


      {/* Buttons */}

      <div
        className="
          mt-8
          flex
          flex-wrap
          gap-4
        "
      >

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="
            px-6
            sm:px-7
            py-3
            rounded-full
            bg-red-500
            text-white
            font-semibold
            hover:bg-red-600
            hover:-translate-y-1
            transition-all
            duration-300
            shadow-lg
            shadow-red-500/30
          "
        >
          View Resume
        </a>


        <a
          href="#contact"
          className="
            px-6
            sm:px-7
            py-3
            rounded-full
            border-2
            border-red-400
            text-red-400
            font-semibold
            hover:bg-red-400
            hover:text-white
            hover:-translate-y-1
            transition-all
            duration-300
          "
        >
          Contact Me
        </a>

      </div>

    </div>
  );
};


/* ===================================================== */
/* SOCIAL ICON COMPONENT                                 */
/* ===================================================== */

const SocialIcon = ({
  href,
  label,
  children,
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="
        w-10
        h-10
        sm:w-11
        sm:h-11
        rounded-full

        border-2
        border-red-400

        flex
        items-center
        justify-center

        text-red-400

        hover:bg-red-400
        hover:text-white
        hover:-translate-y-1

        active:bg-red-400
        active:text-white
        active:scale-95

        focus-visible:bg-red-400
        focus-visible:text-white

        transition-all
        duration-300
      "
    >
      {children}
    </a>
  );
};

export default Hero;