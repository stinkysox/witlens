"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../ui/aurora-background";
import "./Home.css";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-main-bg">
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="gradient-container"
        >
          <h1>Witlens</h1>
          <h2>Seeing the World in Aesthetic Detail </h2>
          <h2>A Photography Journal By Hevit Aron Kopela </h2>
        </motion.div>
      </AuroraBackground>
      <div className="home-image-container">
        <button
          className="explore-btn"
          onClick={() => {
            console.log("Button clicked");
            navigate("/gallery");
          }}
        >
          Explore
        </button>
      </div>
    </div>
  );
};

export { Home };
