//import Head from "next/head";
// import Image from "next/image";
//import styles from "../styles/Home.module.css";
// import prisma from "lib/prisma";
import MiniLogo from "./minilogo";

export default function Home({ questions }) {
    const endpoints = [
        {
            name: "GET /questions",
            description: "fetch questions from database",
        },
    ];

    return (
        <div className="app-container">
            <div className="strapline">
                <MiniLogo />
            </div>

            <div>prepositioner homepage</div>

            <div>
                {endpoints.name} {endpoints.description}
            </div>
        </div>
    );
}
