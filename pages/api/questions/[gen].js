import prisma from "lib/prisma";

export default async function handler(req, res) {
    if (req.method === "GET") {
        const questionsGen = await prisma.question.findMany({
            where: {
                gender: req.query.gen,
            },
        });

        if (req.query.gen != "a" && req.query.gen != "d") {
            return res.status(400).json({ message: "Bad Request" });
        }

        res.status(200).json(questionsGen);
        return;
    } else {
        res.status(405)
            .json({
                message: "Method Not Allowed",
            })
            .send();
        return;
    }
}
