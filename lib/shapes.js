class circle {
    constructor(shapeColourInput, textInput, textColourInput) {
        this.specs = `<circle cx='50' cy='50' r="50"  fill="${shapeColourInput}"/>`;
        this.text = `<text font-size='30px' text-anchor="middle" x='50' y='60' fill='${textColourInput}'>${textInput}</text>`;
    }
};

class triangle {
    constructor(shapeColourInput, textInput, textColourInput) {
        this.specs = `<polygon points='0,100 50,0 100,100' fill='${shapeColourInput}'/>`;
        this.text = `<text font-size='30px' text-anchor="middle" x='50' y='60' fill='${textColourInput}'>${textInput}</text>`;
    }
};

class square {
    constructor(shapeColourInput, textInput, textColourInput) {
        this.specs = `<circle cx='50' cy='50' r="50"  fill="${shapeColourInput}"/>`;
        this.text = `<text font-size='30px' text-anchor="middle" x='50' y='60' fill='${textColourInput}'>${textInput}</text>`;
    }
};

module.exports = {circle, triangle, square}