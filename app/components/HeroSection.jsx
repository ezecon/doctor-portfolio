import Image from "next/image";

export default function HeroSection() {
    return (
       <div
      id="herosection"
      className="min-h-screen flex flex-col lg:flex-row items-center justify-between px-4 md:px-8 lg:px-16 py-24 gap-12"
    >
      {/* Animated Title */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <div className="mt-10 text-center title-container flex gap-4 text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] font-bold text-white">
          <p className="letter slide-in-left">P</p>
          <p className="letter slide-in-top">R</p>
          <p className="letter slide-in-right">I</p>
          <p className="letter slide-in-bottom">O</p>
          <p className="letter fade-in">M</p>
        </div>
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-1/2 text-center lg:text-left max-w-2xl">
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white mb-4">
          Dr.<span className="text-[goldenrod]">PRIOM</span>
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-white leading-relaxed">
          A Doctor/ General Practitioner (GP) also known as a Family Physician,{" "}
          <span className="text-[goldenrod] font-semibold">
            cares for patients of all ages,
          </span>{" "}
          treats acute and chronic illnesses, provides preventive care, and also provides
          health education
        </p>
        <button type="button" className="mt-4 btn">
        <strong>Learn More</strong>
        <div id="container-stars">
          <div id="stars"></div>
        </div>

        <div id="glow">
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
      </button>
      </div>
    </div>
    );
  }
  