// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import prisma from "lib/prisma";

export default async function handler(req, res) {
    if (req.method !== "GET") {
        res.status(405).json({
            message: "Method Not Allowed",
        });
        return;
    }

    const allQuestions = await prisma.question.findMany();

    let total = allQuestions.length;
    let numbers = [];

    for (let i = 0; i <= total; i++) {
        if (numbers.length < i) {
            let num = Math.floor(Math.random() * total + 1);
            numbers.push(num);
        }
    }

    let uniqueNumbers = new Set(numbers);
    numbers = Array.from(uniqueNumbers);

    let ids = numbers.slice([0], [10]);

    let questions = [];

    ids.map((num) => {
        let newQuestion = allQuestions.filter((question) => {
            return question.id == num;
        });

        questions.push(newQuestion[0]);
    });

    res.status(200).json(questions);
}
