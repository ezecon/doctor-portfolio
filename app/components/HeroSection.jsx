import Image from "next/image";

export default function HeroSection() {
    return (
      <div id="herosection" className=" min-h-screen flex flex-col lg:flex-row items-center justify-between pt-24 p-16">
        
          
        {/* Image Section */}
        <div className=" mb-6 lg:mb-0 flex justify-center">
          <Image
            src="/sl-1.png"
            width={500}
            height={500}
            alt="AI Ocular Detection"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="text-center lg:text-left max-w-lg">
          <h1 className="text-4xl lg:text-6xl font-extrabold text-[white] mb-4">
            Dr.<span className="text-[goldenrod]">PRIOM</span>
          </h1>
          <p className="text-lg lg:text-xl text-[white]">
          A Doctor/ General Practitioner (GP) also known as a Family Physician, <span className="text-[goldenrod] font-semibold">cares for patients of all ages,</span> treats acute and chronic illnesses, provides preventive care, and also provides health education
          </p>
          <button className="mt-6 px-6 py-3 bg-[goldenrod] text-white text-lg font-semibold rounded-full shadow-lg hover:bg-[#daa52096] transition duration-300">
            Learn More
          </button>
        </div>
       
  
      </div>
    );
  }
  