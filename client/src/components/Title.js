import React from "react";
import { motion } from "framer-motion";
import "./Title.css";
function Title() {
  return (
    <div>
      <motion.div
        animate={{ opacity: 0 }}
        transition={{ duration: 10 }}
        className="title text-center"
      >
        FULLSTACKERS
      </motion.div>{" "}
    </div>
  );
}

export default Title;
