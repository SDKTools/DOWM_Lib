const { DOWM } = require("dowm_lib");

let dowmIA = new DOWM(3, [0.76, 0.89, -0.94]); // Brilho, Saturação, Rugosidade(em medida)

let result = dowmIA.run([0.89, 0.90, 0.90]);

if (result >= 0.5) {
    console.log("maçã");
} else if (result < 0.5) {
    console.log("laranja");
}