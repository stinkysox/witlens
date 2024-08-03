import React from "react";
import { motion, useVelocity } from "framer-motion";
import "./ScrollContainer.css";
import { WavyBackground } from "../ui/wavy-background";
import { images } from "../../assets/imagesArray";
import { useNavigate } from "react-router-dom";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Adjust this value to control the stagger effect
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ScrollContainer = () => {
  const navigate = useNavigate();

  return (
    <div className="wavy-background">
      <WavyBackground className="max-width">
        <h1 className="heading">Wit Gallery</h1>

        <motion.div
          className="cards-container"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {images.map((image, index) => (
            <motion.div key={index} className="card" variants={itemVariants}>
              <img src={image} alt={`Image ${index + 1}`} />
            </motion.div>
          ))}
        </motion.div>
        <div className="footer">
          <p className="footer-text">Photographs by Hevit Aron</p>
          <p className="footer-text">All Rights Reserved ©</p>
          <button className="home-button" onClick={() => navigate("/")}>
            Home
          </button>
        </div>
      </WavyBackground>
    </div>
  );
};

export default ScrollContainer;
