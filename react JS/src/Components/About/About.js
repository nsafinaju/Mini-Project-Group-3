import "../About/About.css";
import { useState } from "react";

function About()
{
    const [branch, setBranch] = useState("Kuala Lumpur");
   
    const handleClick = () =>
    {
        setBranch('Johor');
    }

    return(
        <div id="about">
            <h1>About {branch} Maybank Cafe</h1>
            <button onClick = {handleClick} >Click Me!</button>
        </div>
    )
}

export default About;