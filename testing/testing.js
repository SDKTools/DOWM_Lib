const { DOWM } = require("dowm_lib");

let dowmIA = new DOWM(3, [0.67, 0.70, 0.94]); // Brilho, Saturação, Liso(em medida)

let result = dowmIA.run([0.64, 0.57, 0.68]);

if (result >= 0.5) {
    console.log("maçã");
} else if (result < 0.5) {
    console.log("laranja");
}