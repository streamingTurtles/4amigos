import React from "react";
import { motion } from "framer-motion";
import "./Title.css";
import boot from "/Users/nataliacarvajal/Desktop/gitrepos/FULLSTACKERS/4amigos/client/src/img/boot.png";
function Title() {
  return (
    <motion.div
      animate={{ x: 75 }}
      transition={{ ease: "easeOut", duration: 1 }}
      className="title text-center"
    >
      FULLSTACKERS
    </motion.div> 
  );
}

export default Title;
