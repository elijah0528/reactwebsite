import './Portfolio.css';
import React, { useState, useEffect } from 'react';

const Portfolio = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const [color, setColor] = useState("blue")
    const handleResize = () => {
        setWindowWidth(window.innerWidth)
    }

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then((response) => response.json())
            .then((json) => setItems(json));
    }, [resourceType])


    useEffect(() => {
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }

    }, [])


    return (
        <>
            <div className="wrapper" style={{background: color}}>
                <div className="buttons">
                    <button onClick={() => setColor("red")}>Red</button>
                    <button onClick={() => setColor("blue")}>Blue</button>
                    <button onClick={() => setColor('green')}>Green</button>
                </div>
                <div className="content">
                        <h1>{resourceType}</h1>
                        {/* {items.map(item => {
                            return <pre>{JSON.stringify(item)}</pre>
                        })} */}
                        <h1>{windowWidth}</h1>
                </div>


                
            </div>
        </>
    )
}
export default Portfolio