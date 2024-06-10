function SumF(arr) {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

function WeightedSum(values, weights) {
    let result = 0;
    for (let i = 0; i < values.length; i++) {
        result += values[i] * weights[i];
    }
    return result;
}

function DoMedium(sum, weights, entryNum, mediumType) { // If the medium type is simple, put anything that you want on weights, and if is weighted, put anything that you want in the entryNum
    if (mediumType == "simple") {
        return sum / entryNum;
    } else if (mediumType == "weighted") {
        let weightSum = SumF(weights);
        return sum / weightSum;
    }
}

class DOWM {
    constructor(entryNum, weights) {
        this.entryNum = entryNum;
        this.weights = weights;
        this.mediumType = "simple";
        this.learningRate = 0.01;
        this.errorTolerance = 1e-6;
    }

    setMediumType(mediumType) {
        if (mediumType == "simple" || mediumType == "weighted") {
            this.mediumType = mediumType;
        } else {
            console.error("Medium type needs to be simple or weighted, the type was not setted");
        }
    }

    setErrorTolerance(errorTolerance) {
        this.errorTolerance = errorTolerance
    }

    setLearningRate(learningRate) { // Is 0.01 by default
        if (learningRate > 0) {
            this.learningRate = learningRate;
        } else {
            console.error("Learning Rate must be positive");
        }
    }

    train(test) {
        for (let pair of test) {
            let inputs = pair[0];
            let target = pair[1];
            let learning = true;
            while (learning) {
                let result = this.run(inputs);
                let error = target - result;

                console.log(`Inputs: ${inputs}, Target: ${target}, Result: ${result}, Error: ${error}`);

                if (Math.abs(error) < this.errorTolerance) {  // Check if the error is within the tolerance
                    learning = false;
                } else {
                    for (let i = 0; i < this.weights.length; i++) {
                        this.weights[i] += this.learningRate * error * inputs[i];
                        console.log(`Updated weights[${i}]: ${this.weights[i]}`);
                    }
                }
            }
        }
    }

    run(inputs) {
        if (inputs.length == this.entryNum) {
            let weightedSum = WeightedSum(inputs, this.weights);
            let result = DoMedium(weightedSum, this.weights, this.entryNum, this.mediumType);
            console.log(`WeightedSum: ${weightedSum}, Result: ${result}`);
            return result;
        } else {
            console.error("Overinput or Underinput");
            return null;
        }
    }
}

module.exports = {
    DOWM,
    WeightedSum,
    DoMedium
};