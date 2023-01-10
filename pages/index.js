import MiniLogo from "./minilogo"
import Splash from "./welcome"
import Link from "next/link"
import { useRouter } from "next/router"

export default function Home() {
    return (
        <div className="app-container">
            <div className="strapline">
                <MiniLogo /> | Return Home | Restart
            </div>
            <Splash />
        </div>
    )
}
