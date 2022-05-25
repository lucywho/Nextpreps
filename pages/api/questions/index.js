// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import prisma from "lib/prisma";
import createTens from "tens";

export default async function handler(req, res) {
    if (req.method !== "GET") {
        res.status(405).json({
            message: "Method Not Allowed",
        });
        return;
    }

    const allQuestions = await prisma.question.findMany();

    const testQuestions = createTens(allQuestions);

    res.status(200).json(testQuestions);
}
