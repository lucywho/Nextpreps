import prisma from "lib/prisma";

export default async function handler(req, res) {
    if (req.method === "GET") {
        if (req.query.gen != "a" && req.query.gen != "d") {
            return res.status(400).json({ message: "Bad Request" });
        }

        const caseQuestions = await prisma.question.findMany({
            where: {
                gender: req.query.gen,
            },
        });

        // let total = caseQuestions.length;
        // let numbers = [];

        // for (let i = 0; i <= total; i++) {
        //     if (numbers.length < i) {
        //         let num = Math.floor(Math.random() * total + 1);
        //         numbers.push(num);
        //     }
        // }

        // let uniqueNumbers = new Set(numbers);
        // numbers = Array.from(uniqueNumbers);

        // let ids = numbers.slice([0], [10]);

        // let casequestions = [];

        // ids.map((num) => {
        //     let newQuestion = caseQuestions.filter((question) => {
        //         return question.id == num;
        //     });

        //     casequestions.push(newQuestion[0]);
        // });
        console.log("caseqs:", caseQuestions);
        res.status(200).json(caseQuestions);
    } else {
        res.status(405)
            .json({
                message: "Method Not Allowed",
            })
            .send();
        return;
    }
}
