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

function getArrOfAnimalsWithTInName(array) {
    const filtered = array.filter(item => {
        if (item.name.includes('t'))
            return item
    })
    console.log(filtered)
}
getArrOfAnimalsWithTInName(animals)