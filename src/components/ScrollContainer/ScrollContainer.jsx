import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./ScrollContainer.css";
import { WavyBackground } from "../ui/wavy-background";
import { images } from "../../assets/imagesArray";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import { FaEnvelope } from "react-icons/fa"; // Import the envelope icon

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ScrollContainer = () => {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const loadingScreen = () => (
    <div className="loader-container">
      <ThreeDots color="white" height="50" width="50" />
    </div>
  );

  return (
    <div className="wavy-background">
      <WavyBackground className="max-width">
        {isLoading ? (
          loadingScreen()
        ) : (
          <>
            <h1 className="heading">Wit Gallery</h1>
            <motion.div
              className="cards-container"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  className="card"
                  variants={itemVariants}
                >
                  <img
                    src={image}
                    alt={`Image ${index + 1}`}
                    loading="lazy"
                    className="image"
                  />
                </motion.div>
              ))}
            </motion.div>
            <div className="footer">
              <p className="footer-text">Photographs by Hevit Aron</p>
              <p className="footer-text">All Rights Reserved ©</p>
              <div className="buttons-container">
                <button onClick={() => navigate("/")}>Home</button>
                <button
                  className="contact-button"
                  onClick={() => navigate("/contact")}
                >
                  <FaEnvelope className="contact-icon" />
                </button>
              </div>
            </div>
          </>
        )}
      </WavyBackground>
    </div>
  );
};

export default ScrollContainer;
