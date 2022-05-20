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

            <button id="start" onClick={handleClick}>
                Click here to start the quiz
            </button>
        </div>
    );
}
