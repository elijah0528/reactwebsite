import "./Header.css";
import React, { useState, useMemo, useRef, useEffect } from 'react';



const Header = () => {

    const [number, SetNumber] = useState(0);
    const [dark, setDark] = useState();
    const doubleNumber = useMemo(() => { 
        return slowfunction(number)
    },[dark]);

    const themeStyles = {
        backgroundColor: dark ? 'black' : 'white',
        color: dark? 'white' : 'black'
    }
    const [bgColor, setbgColor] = useState('');
    function colorChangeHandler (e){
        setbgColor(e.target.value);
    }
    const rendered = useRef(1);
    useEffect(() => {
         rendered.current = rendered.current + 1
    })

    return (
        <div>
            <div className="mainpage">
                <input type = "number" value={number} onChange={e => SetNumber(parseInt(e.target.value))}/>
                <button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
                <div style={themeStyles}>{doubleNumber}</div>
                <div>I rendered {rendered.current} times</div>


            </div>
            <div style={{backgroundColor: bgColor}} >
                <select onChange={colorChangeHandler}>
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                </select>
            </div>
        </div>
    )
}

function slowfunction(num){
    for (let i = 0; i < 100000000; i++){}
    return num * 2
}

export default Header