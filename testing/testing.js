const { DOWM } = require("dowm_lib");

// An Example

let dowmIA = new DOWM(3, [0.8, 0.9, 0.7]); // how gold is, how black is, how white is

dowmIA.train([
    [[0.72, 0.87, 0.2], 0.98],
    [[0.0, 0.2, 0.9], 0.25],
    [[0.61, 0.86, 0.14], 0.82],
    [[0.0, 0.4, 0.9], 0.19]
]);

let result = dowmIA.run([0.5, 0.9, 0.2]);

if (result >= 0.5) {
    console.log("Yorkshire");
} else {
    console.log("Shih-tzu");
}