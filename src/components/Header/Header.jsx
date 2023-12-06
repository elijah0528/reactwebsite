import "./Header.css";
import React, { useState } from 'react';
import { easeInOut, motion } from 'framer-motion';
const variants = {
    initial: {
        opacity: 0,
        x: -500,

    },
    animate: {
        opacity: 1,
        x:50,
        scale:1.2,
        transition: {
            duration: 1,
            staggerChildren: 0.5,
        }
    },
};

const Header = () => {
    return (
        <div>
            <div className="mainpage">
                <motion.div variants={variants} initial= "initial" animate= "animate" className="titlebox">
                    <motion.div variants={variants} className="title">
                        Barely
                    </motion.div>
                    <motion.div variants={variants} className="title">
                        Operational
                    </motion.div>
                    <motion.div variants={variants} className="title">
                        Autonomous
                    </motion.div>
                    <motion.div variants={variants} className="title">
                        Tank Test
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

export default Header