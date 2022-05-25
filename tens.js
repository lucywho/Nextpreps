export default function createTens(dbQuestions) {
    let questions = [];
    let randArray = [];

    let idResult = dbQuestions.map((index) => index.id);
    let maxIndex = idResult.length - 1;

    while (randArray.length < 10) {
        //generates random number between 0 and maxIndex
        let randIndex = Math.floor(Math.random() * maxIndex) + 1;

        //checks random number exists in idResult
        if (idResult.indexOf(randIndex)) {
            //checks that number is not already in randArray before adding
            if (!randArray.includes(randIndex)) {
                randArray.push(randIndex);
            }
        }
    }

    randArray.map((num) => {
        questions.push(dbQuestions[num]);
    });

    return questions;
}
