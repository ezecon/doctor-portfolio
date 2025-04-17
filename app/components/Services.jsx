"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Services() {
  const [activeTab, setActiveTab] = useState("main");

  const projects = {
    main: [
      { img: "/Chronic-Illness-Care.png", title: "Chronic Illness Care" },
      { img: "/Diabetology-Treatment.png", title: "Diabetology Treatment" },
      { img: "/Follow-up-Care.png", title: "Follow-up Care" },
      { img: "/Immunizations-Vaccination.png", title: "Immunizations & Vaccination" },
      { img: "/References-to-Specialists.png", title: "Specialist Referrals" },
      { img: "/Routine-Health-Checkup.png", title: "Routine Health Checkup" },
    ],
  };

  return (
    <div id="services" className=" text-white min-h-screen py-20 px-4 md:px-10 lg:px-16">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[goldenrod] drop-shadow-md">
          SERVICES
        </h1>
        <p className="mt-4 text-sm md:text-base max-w-3xl mx-auto font-light text-gray-300">
          A general practitioner doctor is likely your first point of contact if you’re seeking treatment for a physical or mental health concern. They help everyone from newborns to aged grown-ups.
        </p>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
        {projects[activeTab].map((project, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            key={index}
            className="bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a] border-2 border-[goldenrod] rounded-2xl overflow-hidden shadow-lg shadow-[goldenrod]/30 w-full sm:w-80"
          >
            <div className="overflow-hidden h-60">
              <img
                src={project.img}
                alt={project.title}
                className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="p-4">
              <hr className="border-[goldenrod] mb-3" />
              <h2 className="text-xl font-semibold text-[goldenrod] font-mono text-center">
                {project.title}
              </h2>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
