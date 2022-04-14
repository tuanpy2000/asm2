const array = [1, 2, 3, 4];

function sumArrWithEvenNumMulTwo(array) {
    const result = array.reduce((previousValue, currentValue, currentIndex, array) => {
        if (currentValue % 2 === 0) {
            currentValue *= 2
        }
        return previousValue += currentValue
    })
    console.log(result)
}
sumArrWithEvenNumMulTwo(array)