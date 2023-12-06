import "./Hero.css";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const textVariants = {
    initial: {
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
  
const Hero = () => {

    const [state, setState] = useState(18)


    function decrementAge () {
        setState(prevState => prevState - 1)
    }
    function incrementAge () {
        setState(prevState => prevState + 1)
    }
    function resetAge () {
        setState(0)
    }


    return(
        <div className="hero">
            <div>
                <div className="intro">
                    <div className="title">
                        
                        <h1>Elijah Kurien <span>{state}</span></h1>
                    </div>
                    <motion.div variants={textVariants} initial = "initial" animate = "animate" className="buttons">
                        <motion.button variants={textVariants} onClick={decrementAge}>
                            -
                        </motion.button>
                        <motion.button variants={textVariants} onClick={incrementAge}>
                            +
                        </motion.button>
                        <motion.button variants={textVariants} onClick={resetAge}>
                            Reset
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Hero