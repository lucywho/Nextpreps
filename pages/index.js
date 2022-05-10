// import Head from "next/head";
// import Image from "next/image";
import styles from "../styles/Home.module.css";
import prisma from "lib/prisma";

export default function Home({ questions }) {
    return (
        <div className={styles.container}>
            <h1>Setting up Next and Prisma</h1>
            <ul>
                {questions.map((question, index) => {
                    return (
                        <li key={index}>
                            {question.first} {question.answer} {question.second}
                        </li>
                    );
                })}
            </ul>
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
