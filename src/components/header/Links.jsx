import {NavLink} from "react-router-dom";

export default function Links() {
    return (
        <>
            <ul>
                <li><NavLink className="navlink" to="/" state={{page: "home"}}>Home</NavLink></li>
                <li><NavLink className="navlink" to="/about" state={{page: "about"}}>About</NavLink></li>
                <li><NavLink className="navlink" to="/contact" state={{page: "contact"}}>Contact</NavLink></li>
            </ul>
        </>
    );
};