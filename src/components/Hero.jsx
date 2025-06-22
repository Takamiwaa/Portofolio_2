import { useState, useEffect } from "react";
import homeData from "../data/homeData.jsx";

const Home = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const titles = homeData.typingTexts;
    const currentTitle = titles[currentIndex];

    const typeSpeed = isDeleting ? 100 : 150;
    const pauseTime = isDeleting ? 500 : 2000;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < currentTitle.length) {
          setCurrentText(currentTitle.substring(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.substring(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [currentText, currentIndex, isDeleting]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen bg-white dark:bg-gray-800 pt-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)] py-12">
          <div className="space-y-8" data-aos="fade-right" data-aos-duration="1000">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white">
                {homeData.title}
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800 dark:text-white flex items-center">
                <span className="typing-text">
                  {currentText}
                  <span
                    className={`cursor ${
                      showCursor ? "opacity-100" : "opacity-0"
                    } transition-all duration-200`}
                  >
                    |
                  </span>
                </span>
              </h2>
            </div>

          
            <p
              className="text-lg text-gray-800 dark:text-white leading-relaxed max-w-lg"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              {homeData.description}
            </p>

          
            <div
              className="flex items-center space-x-4"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1000"
            >
              <span className="text-gray-800 dark:text-white font-medium">
                Follow me on:
              </span>
              <div className="flex space-x-3">
                {homeData.socialMedia.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 text-white  dark:bg-white  rounded-full flex items-center shadow-2xl justify-center dark:text-gray-800 hover:text-white dark:hover:bg-white    dark:hover:text-gray-800 transition-all duration-300  hover:shadow-lg hover:-translate-y-1"
                    aria-label={`Visit ${social.platform}`}
                  >
                    <i className={`${social.icon} text-lg`}></i>
                  </a>
                ))}
              </div>
            </div>

           
            <div
              className="flex flex-col sm:flex-row gap-4"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="1000"
            >
              {homeData.buttons.map((btn, index) => (
                <a
                  key={index}
                  href={btn.href}
                  className={`inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 ${
                    btn.type === "primary"
                      ? "bg-gray-800 dark:bg-white text-white dark:text-gray-800 hover:bg-gray-800 dark:hover:bg-gray-100"
                      : "border-2 border-gray-800 dark:border-white text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white dark:hover:bg-white dark:hover:text-gray-800"
                  }`}
                  target={btn.href.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                >
                  <i
                    className={`bx ${
                      btn.type === "primary" ? "bx-download" : "bx-envelope"
                    } mr-2`}
                  ></i>
                  {btn.label}
                </a>
              ))}
            </div>
          </div>

        
          <div
            className="relative flex justify-center items-center"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div className="relative z-10">
              <img
                src={homeData.img}
                alt="Hizkia Siahaan Profile"
                className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover rounded-full shadow-2xl dark:shadow-gray-900/50 border-8 border-white dark:border-gray-800 hover:shadow-3xl hover:-translate-y-2 transition-all duration-300"
              />
            </div>

           
            {homeData.floatingIcons.map((tech, index) => {
              const positions = [
                "top-0 left-16 sm:left-20",
                "top-0 right-0",
                "bottom-0 left-8 sm:left-10",
                "bottom-8 sm:bottom-10 right-10 sm:right-12",
              ];
              return (
                <div
                  key={index}
                  className={`absolute ${
                    positions[index % positions.length]
                  } w-12 h-12 sm:w-16 sm:h-16 bg-gray-800 text-white dark:bg-gray-800 dark:text-white dark:border dark:hover:bg-white dark:hover:text-gray-800 rounded-full shadow-lg dark:shadow-gray-800  items-center justify-center hover:scale-110 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-float cursor-pointer hidden sm:flex`}
                  style={{
                    animationDelay: `${index * 0.5}s`
                  }}
                  title={tech.label}
                >
                  <i className={`${tech.icon} text-xl sm:text-2xl`}></i>
                </div>
              );
            })}
          </div>
        </div>

        <style>{`
          @keyframes float {
            0%,
            100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
          .shadow-3xl {
            box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
          }
          .dark .shadow-3xl {
            box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.5);
          }
          .typing-text {
            display: inline-block;
          }
          .cursor {
            font-weight: 600;
            color: #1f2937;
          }
          .dark .cursor {
            color: #d1d5db;
          }
        `}</style>
      </div>
    </section>
  );
};

export default Home;