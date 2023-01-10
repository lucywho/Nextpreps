import MiniLogo from "./minilogo"
import { useState, useEffect } from "react"
import { useRouter } from "next/router"

export default function Test(props) {
    const [questions, setQuestions] = useState([])
    const [error, setError] = useState(false)
    const router = useRouter()
    let kas = router.query.kasus

    useEffect(() => {
        async function fetchQuestions() {
            let response

            response = await fetch(`/api/questions/${kas}`)

            const data = await response.json()

            if (data.message) {
                setError(true)
                return
            } else {
                setQuestions(data)
                console.log(data)
            }
        }
        fetchQuestions()
    }, [])

    return (
        <div className="question-container">
            <h1>Test Questions for {kas} arrive here</h1>
            <MiniLogo />
            <h2>this is a test</h2>
            <div className="questions">
                {error ? (
                    <p>Sorry, something went wrong. Please try again.</p>
                ) : (
                    <ul>
                        {questions.map((question, index) => {
                            return (
                                <li key={index}>
                                    {question.first} {question.answer}{" "}
                                    {question.second}
                                </li>
                            )
                        })}
                    </ul>
                )}
            </div>
        </div>
    )
}
