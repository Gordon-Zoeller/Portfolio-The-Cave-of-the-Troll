import GitHubLogo from "../../assets/GitHubLogo.png"
import LinkedInLogo from "../../assets/LinkedInLogo.png"
export default function Footer() {
    return (
        <>
            <footer>
                <a href="https://github.com/Gordon-Zoeller" target={"_blank"}><img className="gitHubLogo" src={GitHubLogo} alt="GitHub Logo"/></a>
                <a href="https://linkedin.com/in/gordon-zöller-01b254294" target={"_blank"}><img src={LinkedInLogo} alt="LinkedIn Logo"/></a>
            </footer>
        </>
    );
};