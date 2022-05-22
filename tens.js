export default function createTens(idResult) {
    let questions;
    let maxIndex = idResult.length;
    let randArray = [];

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

    return randArray;
}
