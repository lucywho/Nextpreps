import prisma from "lib/prisma";
import createTens from "tens";

export default async function handler(req, res) {
    const questions = [];
    if (req.method === "GET") {
        if (req.query.gen != "a" && req.query.gen != "d") {
            return res.status(400).json({ message: "Bad Request" });
        }
        //TODO: find out if db can return random selection of entries that meet condition - wld reduce amt of data being fetched and get rid of lines 17-37

        const caseQuestions = await prisma.question.findMany({
            where: {
                gender: req.query.gen,
            },
        });

        const testQuestions = createTens(caseQuestions);

        res.status(200).json(testQuestions);
    } else {
        res.status(405)
            .json({
                message: "Method Not Allowed",
            })
            .send();
        return;
    }
}
