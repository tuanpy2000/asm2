//1. Input a = [1,2,3,4] ; Output: [1,4,3,8] (Gợi ý: số chẵn nhân 2)
const array = [1, 2, 3, 4];

function multiplyTwoAnEvenNumInArr(array) {
    const result = array.map(num => {
        if (num % 2 === 0) {
            return num *= 2
        } else
            return num
    });
    console.log(result)
}
multiplyTwoAnEvenNumInArr(array);