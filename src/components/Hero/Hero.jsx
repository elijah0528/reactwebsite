import "./Hero.css";
import { motion } from 'framer-motion';


/* const variants = {
    initial: {
        opacity: 0,
        scale: 0.75,
    },
    animate: {
        opacitiy: 0.9,
        scale: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
    
        }
    },
} */
const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };
  
  const buttonVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };
const Hero = () => {
    return(
        <div className="hero">
            <div>
                <div className="intro">
                    <div className="title">
                        
                        <h1>Elijah Kurien</h1>
                    </div>
                    <motion.div variants={textVariants} initial = "initial" animate = "animate" className="buttons">
                        <motion.button variants={textVariants}>
                            See the Latest Works
                        </motion.button>
                        <motion.button variants={textVariants}>
                            Contact Me
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Hero