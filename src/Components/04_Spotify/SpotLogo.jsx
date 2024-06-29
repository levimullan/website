import PropTypes from "prop-types";
import { motion } from "framer-motion";

function SpotLogo({ isPlaying }) {
  SpotLogo.propTypes = {
    isPlaying: PropTypes.bool,
  };

  return (
    <motion.div
      className="spot-logo"
      initial={{ scale: 1 }}
      animate={
        isPlaying
          ? {
              scale: 1.3,
            }
          : {
              scale: 0.8,
            }
      }
      transition={
        isPlaying
          ? {
              duration: 0.8,
              repeat: Infinity,
              repeatType: "reverse",
            }
          : {}
      }>
      <svg className="curve" xmlns="http://www.w3.org/2000/svg" width="64" height="59" viewBox="0 0 64 59" fill="none">
        <path
          d="M15 16.6232C27.0762 14.2115 36.5332 15.5509 48 21.9332"
          stroke="LightGray"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19.689 38.0281C25.5263 37.2765 29.4953 38.0917 34.9198 40.6831"
          stroke="LightGray"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.4519 27.0279C26.4971 25.1475 32.8196 27.0278 42.3619 31.8485"
          stroke="LightGray"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.div>
  );
}

export default SpotLogo;
