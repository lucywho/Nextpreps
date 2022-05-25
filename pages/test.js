import MiniLogo from "./minilogo";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Test(props) {
    const [questions, setQuestions] = useState([]);
    const router = useRouter();
    let kas = router.query.kasus;

    useEffect(() => {
        async function fetchQuestions() {
            let response;

            response = await fetch(`/api/questions/${kas}`);

            const data = await response.json();
            setQuestions(data);
        }
        fetchQuestions();
    }, []);

    return (
        <div className="test">
            <h1>Test Questions for {kas} arrive here</h1>
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
