function WeightedSum(values, weights) {
    let result = 0;
    for (let i = 0; i < values.length; i++) {
        result += values[i] * weights[i];
    }
    return result;
}

class DOWM {
    constructor(entryNum, weights) {
        this.entryNum = entryNum;
        this.weights = weights;
    }

    run(inputs) {
        if (inputs.length == this.entryNum) {
            let result = WeightedSum(inputs, this.weights) / this.entryNum;
            return result;
        } else {
            console.error("Overinput or Underinput");
            return null;
        }
    }
}

module.exports = {
    DOWM,
    WeightedSum
};