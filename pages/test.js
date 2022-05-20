import MiniLogo from "./minilogo";
import { useState, useEffect } from "react";

export default function Test() {
    const [questions, setQuestions] = useState([]);

    async function fetchQuestions() {
        const response = await fetch("/api/questions");
        const data = await response.json();
        setQuestions(data);
    }

    useEffect(() => {
        fetchQuestions();
    }, []);

    return (
        <div className="test">
            <h1>testing the routing</h1>
            <MiniLogo />
            <h2>this is a test</h2>
            <div>
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
