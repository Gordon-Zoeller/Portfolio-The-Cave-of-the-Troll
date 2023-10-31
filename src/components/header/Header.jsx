import Logo from "./Logo";
import Links from "./Links";

export default function Header() {
    return (
        <>
            <header>
                <nav>
                    <Logo/>
                    <Links/>
                </nav>
            </header>
        </>
    );
};