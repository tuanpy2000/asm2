const array = [1, 2, 3, 4];

function sumArrWithOddNumMulTwoEvenNumDivideTwo(array) {
    const result = array.reduce((previousValue, currentValue, currentIndex, array) => {
        if (currentValue % 2 === 0) {
            currentValue /= 2
        } else {
            currentValue *= 2
        }
        return previousValue += currentValue
    }, 0)
    console.log(result)
}
sumArrWithOddNumMulTwoEvenNumDivideTwo(array)