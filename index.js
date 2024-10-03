const heroName = "Percy Jackson";
let heroXP = "10001";

const printMessage = (name, level) =>
  `O Herói de nome **${name}** está no nível de **${level}**`;

if (heroXP < 1000) {
  // Se XP for menor do que 1.000 = Ferro
  console.log(printMessage(heroName, "Ferro"));

} else if (heroXP >= 1001 && heroXP <= 2000) {
  // Se XP for entre 1.001 e 2.000 = Bronze
  console.log(printMessage(heroName, "Bronze"));

} else if (heroXP >= 2001 && heroXP <= 5000) {
  // Se XP for entre 2.001 e 5.000 = Prata
  console.log(printMessage(heroName, "Patra"));

} else if (heroXP >= 5001 && heroXP <= 7000) {
  // Se XP for entre 5.001 e 7.000 = Ouro
  console.log(printMessage(heroName, "Ouro"));

} else if (heroXP >= 7001 && heroXP <= 8000) {
  // Se XP for entre 7.001 e 8.000 = Platina
  console.log(printMessage(heroName, "Platina"));

} else if (heroXP >= 8001 && heroXP <= 9000) {
  // Se XP for entre 8.001 e 9.000 = Ascendente
  console.log(printMessage(heroName, "Ascendente"));

} else if (heroXP >= 9001 && heroXP <= 10000) {
  // Se XP for entre 9.001 e 10.000= Imortal
  console.log(printMessage(heroName, "Imortal"));

} else if (heroXP >= 10001) {
  // Se XP for maior ou igual a 10.001 = Radiante
  console.log(printMessage(heroName, "Radiante"));

}








