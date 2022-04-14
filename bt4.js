const animals = [{
        name: "cat",
        size: "small",
        weight: 5
    },
    {
        name: "dog",
        size: "medium",
        weight: 10
    },
    {
        name: "elephant",
        size: "big",
        weight: 5000
    }
]

function getArrOfAnimalsWithTInNameToString(array) {
    const result = array.filter(item => {
        if (item.name.includes('t')) {
            return item
        }
    }).map(item => {
        return ("name: " + item.name + " - " + "size: " + item.size + " - " + "weight: " + item.weight + "kg");
    })
    console.log(result)
}
getArrOfAnimalsWithTInNameToString(animals)