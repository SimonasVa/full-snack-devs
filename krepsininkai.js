let krepsininkai = [23, 9, 11, 57, 69];
let ugiai = [211, 195, 199, 215, 191];
let dvitaskiai = [15, 20, 98, 14, 48];
let tritaskiai = [2, 5, 6, 1, 2];

const vidutinisUgis = ugiai.reduce((sum, ugis) => sum + ugis, 0) / ugiai.length;
console.log(` Vidutinis krepšininkų ūgis: ${vidutinisUgis.toFixed(1)}`);

const didesnis = ugiai.filter(ugis => ugis > vidutinisUgis).length;
console.log(` Krepšininkų, kurie yra didesnių už vidutinį ūgį, skaičius: ${didesnis}`);

const auksciausias = ugiai.indexOf(Math.max(...ugiai));
const auksciausioDu = dvitaskiai[auksciausias];
console.log(` Aukščiausio krepšininko dvitaškių skaičius: ${auksciausioDu}`);

const zemiausias = ugiai.indexOf(Math.min(...ugiai));
const zemiausioTrys = tritaskiai[zemiausias];
const zemiausioNr = krepsininkai[zemiausias];
console.log(` Žemiausio krepšininko tritaškių skaičius: ${zemiausioTrys} ir marškinėlių nr.: ${zemiausioNr}`);
