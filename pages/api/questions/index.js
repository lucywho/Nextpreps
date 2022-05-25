// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import prisma from "lib/prisma";
import createTens from "tens";

export default async function handler(req, res) {
    const questions = [];
    if (req.method !== "GET") {
        res.status(405).json({
            message: "Method Not Allowed",
        });
        return;
    }

    const allQuestions = await prisma.question.findMany();

    let idResult = allQuestions.map((index) => index.id);

    const randArray = createTens(idResult); //returns randArray

    randArray.map((num) => {
        questions.push(allQuestions[num]);
    });

    console.log("allquestions: ", questions);

    res.status(200).json(questions);
}
