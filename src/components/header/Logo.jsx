import {Link} from "react-router-dom";
import logo from "../../assets/theCaveOfTheTroll.jpg";

export default function Logo() {
    return (
        <>
            <ul>
                <li><Link className="navlink" to="/"><img className="logo" src={logo} alt="Logo" /></Link></li>
            </ul>
        </>
    );
};