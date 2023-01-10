import prisma from "lib/prisma"
import createTens from "tens"

export default async function handler(req, res) {
    const questions = []

    if (req.method === "GET") {
        if (req.query.kas != "a" && req.query.kas != "d") {
            return res.status(400).json({ message: "Bad Request" })
        }
        //TODO: find out if db can return random selection of entries that meet condition - wld reduce amt of data being fetched and get rid of test.js function

        const caseQuestions = await prisma.question.findMany({
            where: {
                kasus: req.query.kas,
            },
        })

        const testQuestions = createTens(caseQuestions)
        return res.status(200).json(testQuestions)
    } else {
        res.status(405)
            .json({
                message: "Method Not Allowed",
            })
            .send()
        return
    }
}
