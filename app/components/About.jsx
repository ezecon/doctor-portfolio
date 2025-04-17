import Image from "next/image";
import React from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
  } from "@material-tailwind/react";

export default function About() {
    const [open, setOpen] = React.useState(false);
 
    const handleOpen = () => setOpen(!open);
  return (
    <div
      id="about"
      className="min-h-screen py-24 px-4 md:px-10 lg:px-20 text-white "
    >
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide text-[goldenrod]">
          ABOUT
        </h1>
        <p className="text-sm md:text-base text-gray-300 mt-2">
          Know about me
        </p>
      </div>

      {/* Stats Section */}
      <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-16">
        {[
          "9+ Years of Experience",
          "99% Satisfied Patients",
          "15K Patients Served",
        ].map((text, index) => (
          <p
            key={index}
            className="border-2 border-[goldenrod] rounded-xl p-6 w-72 text-center font-mono font-semibold bg-white/5 shadow-md hover:scale-105 transition-transform duration-300"
          >
            {text}
          </p>
        ))}
      </div>

      {/* Bio Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="text-center lg:text-left">
          <Image
            src="/sl-2.png"
            alt="Dr. Priom Chakraborty"
            width={500}
            height={500}
            className="w-full max-w-xs md:max-w-md lg:max-w-lg mx-auto"
          />
        </div>

        {/* Text */}
        <div className="prose prose-invert max-w-none text-gray-300">
          <h2 className="text-3xl font-semibold">
            <span className="text-[goldenrod]">Dr. Priom</span> Chakraborty
          </h2>
          <p className="mt-4 text-sm leading-relaxed">
            <strong>BM&DC No:</strong> A-75828<br />
            (Family Medicine & Diabetology)<br />
            MBBS, Eastern Medical College & Hospital (Chittagong University)<br />
            CCD, BIRDEM<br />
            FCGP (Family Medicine), BCGP, Bangladesh College of General Practitioners<br />
            DMUD, Center for Medical Ultrasound & Doppler<br /><br />
            <strong className="text-[goldenrod]">Chairman:</strong> Classic Consultation & Diagnostic Center, Cumilla<br />
            <strong className="text-[goldenrod]">Managing Director:</strong> Lab One Diagnostic Center, Cumilla
          </p>
          <button onClick={handleOpen} className="mt-6 px-6 py-3 bg-[goldenrod] text-white text-lg font-semibold rounded-full shadow-lg hover:bg-[#daa52096] transition duration-300">
            Learn More
          </button>
        </div>
      </div>
      <div>
      <Dialog open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}>
        <DialogHeader>Its a simple dialog.</DialogHeader>
        <DialogBody>
        <div className="text-lg leading-8 text-gray-200">
            <p className="mb-6">
            <span className="text-[goldenrod] font-semibold">Dr. Priom</span> Chakraborty was born on November 1st, 1987 in Cumilla, Bangladesh. From an early age, he had a strong passion for science and medicine, leading him into the medical profession.
            </p>
            <p className="mb-6">
            He earned his MBBS from Eastern Medical College (Chittagong University) and completed his internship at BIRDEM General Hospital, Dhaka. He further pursued CCD from BIRDEM, FCGP (Family Medicine), BCGP, and DMUD.
            </p>
            <p className="mb-6">
            <span className="text-[goldenrod] font-semibold">Dr. Priom</span> specializes in family medicine and diabetology. Over the last 7+ years, he has treated thousands of patients suffering from conditions like arthritis, heart disease, allergies, hormonal issues, and more.
            </p>
            <p>
            With over 15,000 patients served, Dr. Priom ensures compassionate and clear medical care. He currently leads two healthcare facilities in Cumilla, helping the community with dedication and empathy.
            </p>
        </div>
        </DialogBody>
        
      </Dialog>
      </div>
    </div>
  );
}

/*
<div className="text-lg leading-8 text-gray-200">
<p className="mb-6">
  <span className="text-[goldenrod] font-semibold">Dr. Priom</span> Chakraborty was born on November 1st, 1987 in Cumilla, Bangladesh. From an early age, he had a strong passion for science and medicine, leading him into the medical profession.
</p>
<p className="mb-6">
  He earned his MBBS from Eastern Medical College (Chittagong University) and completed his internship at BIRDEM General Hospital, Dhaka. He further pursued CCD from BIRDEM, FCGP (Family Medicine), BCGP, and DMUD.
</p>
<p className="mb-6">
  <span className="text-[goldenrod] font-semibold">Dr. Priom</span> specializes in family medicine and diabetology. Over the last 7+ years, he has treated thousands of patients suffering from conditions like arthritis, heart disease, allergies, hormonal issues, and more.
</p>
<p>
  With over 15,000 patients served, Dr. Priom ensures compassionate and clear medical care. He currently leads two healthcare facilities in Cumilla, helping the community with dedication and empathy.
</p>
</div>
*/