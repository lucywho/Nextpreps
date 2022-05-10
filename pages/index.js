//import Head from "next/head";
// import Image from "next/image";
//import styles from "../styles/Home.module.css";
import prisma from "lib/prisma";
import MiniLogo from "./minilogo";

export default function Home({ questions }) {
    return (
        <div className="app-container">
            <div className="strapline">
                <MiniLogo />
            </div>
            <div className="app-contents">
                <ul>
                    {questions.map((question, index) => {
                        return (
                            <li key={index}>
                                {question.first} {question.answer}{" "}
                                {question.second}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export async function getServerSideProps() {
    let questions = await prisma.question.findMany();

    return {
        props: {
            questions,
        },
    };
}
