import Link from "next/link"
import Logo from "./logo"
import Router from "next/router"

export default function Splash() {
    const router = Router

    const handleClick = (e, kas) => {
        e.preventDefault()
        console.log("kasus at handle click: ", kas)
        router.push({
            pathname: "/test",
            query: { kasus: kas },
        })
    }

    return (
        <div className="splash">
            <h1>Welcome to</h1>
            <Logo />

            <h2>Ten questions to help you practice your German prepositions</h2>

            <p>Choose your test: </p>

            <button
                id="akk"
                className="start"
                onClick={(e) => {
                    handleClick(e, "a")
                }}
            >
                Accusative
            </button>
            <button
                id="dat"
                className="start"
                onClick={(e) => {
                    handleClick(e, "d")
                }}
            >
                Dative
            </button>
            <button
                id="all"
                className="start"
                onClick={(e) => {
                    handleClick(e)
                }}
            >
                Mixed cases
            </button>
        </div>
    )
}
