import Link from "next/link";
import Logo from "./logo";
import Router from "next/router";

export default function Splash() {
    const router = Router;

    const handleClick = (e) => {
        e.preventDefault();
        router.push("/test");
    };

    return (
        <div className="splash">
            <h1>Welcome to</h1>
            <Logo />

            <h2>Ten questions to help you practice your German prepositions</h2>

            <p>Choose your test: </p>

            <button id="akk" className="start" onClick={handleClick}>
                Accusative
            </button>
            <button id="dat" className="start" onClick={handleClick}>
                Dative
            </button>
            <button id="all" className="start" onClick={handleClick}>
                Mixed cases
            </button>
        </div>
    );
}
