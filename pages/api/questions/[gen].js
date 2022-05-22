import prisma from "lib/prisma";
import createTens from "tens";

export default async function handler(req, res) {
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

        let idResult = caseQuestions.map((index) => index.id);

        const questions = createTens(idResult);

        console.log("case questions: ", questions);

        res.status(200).json(questions);
    } else {
        res.status(405)
            .json({
                message: "Method Not Allowed",
            })
            .send();
        return;
    }
}
