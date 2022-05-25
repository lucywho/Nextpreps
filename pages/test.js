import MiniLogo from "./minilogo";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Test(props) {
    const [questions, setQuestions] = useState([]);
    const router = useRouter();
    let gen = router.query.gender;

    console.log("fetch: ", gen);

    useEffect(() => {
        async function fetchQuestions() {
            let response;
            if (gen === "all") {
                response = await fetch(`/api/questions`);
            } else {
                response = await fetch(`/api/questions/${gen}`);
            }
            const data = await response.json();
            setQuestions(data);
        }
        fetchQuestions();

        console.log("resp: ", router.res);
        console.log("questions returned: ", questions);
    }, []);

    return (
        <div className="test">
            <h1>Test Questions for {gen} arrive here</h1>
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
