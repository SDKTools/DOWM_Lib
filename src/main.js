function zip(arr1, arr2) {
    return arr1.map((item, index) => [item, arr2[index]]);
}

class DOWM {
    constructor(entryNum, weights) {
        this.entryNum = entryNum;
        this.weights = weights;
    }

    run(inputs) {
        if (inputs.length == this.entryNum) {
            let result = 0;
            for (let pair of zip(inputs, weights)) {
                result += pair[0] * pair[1];
            }
            result = result / this.entryNum;
            return result;
        } else {
            console.error("Overinput");
            return null;
        }
    }
}

module.exports = {
    DOWM
};