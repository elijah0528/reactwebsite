import "./Navbar.css";
import "../../assets/react.svg";
import { motion } from 'framer-motion'

const Navbar = () => {
    return(
        <div className="navbar">
            <div className="name">
                Elijah Kurien
            </div>
            <motion.div className="links" staggeredChildren>
                <motion.p initial= {{scale: 0.75}} animate={{scale: 1}} transition = {{duration: 0.5}}><a href = "#home"> Home </a></motion.p>
                <motion.p initial= {{scale: 0.75}} animate={{scale: 1}} transition = {{duration: 0.5}}><a href = "#elijah"> Elijah </a></motion.p>
                <motion.p initial= {{scale: 0.75}} animate={{scale: 1}} transition = {{duration: 0.5}}><a href = "#section"> Section </a></motion.p>
            </motion.div>
        </div>
    )
}

export default Navbar