import "./Hero.css";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {

    const [item, setItem] = useState('');
    const [todos, settodos] = useState([])

    function handleSubmit () {
        if (item.trim()){
            settodos([...todos, item.trim()]);
            setItem('')
        }
    }

    function handleDelete(index){
        settodos(todos.filter((_, i) => i !== index))
    }
 


    return(
        <div className="hero">
            <div>
                <div className="intro">
                    <input type="text" onChange={e => setItem(e.target.value)}/>
                    <button onClick={handleSubmit}>Add Todo</button>
                    <ul>
                        {todos.map((todo,index) => (
                            <li key={index}>
                                {todo}
                                <button onClick={() => handleDelete(index)}></button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Hero