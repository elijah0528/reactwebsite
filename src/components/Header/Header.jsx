import "./Header.css";
import React, { useState, useMemo } from 'react';



const Header = () => {

    const [number, SetNumber] = useState(0);
    const doubleNumber = useMemo(() => { 
        return slowfunction(number)},[number]);
    const [dark, setDark] = useState();
    const themeStyles = {
        backgroundColor: dark ? 'black' : 'white',
        color: dark? 'white' : 'black'
    }

    return (
        <div>
            <div className="mainpage">
                <input type = "number" value={number} onChange={e => SetNumber(parseInt(e.target.value))}/>
                <button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
                <div style={themeStyles}>{doubleNumber}</div>


            </div>
        </div>
    )
}

function slowfunction(num){
    for (let i = 0; i < 100000000; i++){}
    return num * 2
}

export default Header