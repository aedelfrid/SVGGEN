class circle {
    constructor(colour, textInput) {
        shape = `<circle cx='50' cy='50' r="50"  fill="${colour}"/>`
        text = `<text font-size='30px' text-anchor="middle" x='50' y='60' fill='white'>${textInput}</text>`
    }
};

class triangle {
    constructor(colour, textInput) {
        shape = `<polygon points='0,100 50,0 100,100' fill='${colour}'/>`
        text = `<text font-size='30px' text-anchor="middle" x='50' y='60' fill='white'>${textInput}</text>`
    }
};

class square {
    constructor(colour, textInput) {
        shape = `<circle cx='50' cy='50' r="50"  fill="${colour}"/>`
        text = `<text font-size='30px' text-anchor="middle" x='50' y='60' fill='white'>${textInput}</text>`
    }
};

module.exports = circle, triangle, square