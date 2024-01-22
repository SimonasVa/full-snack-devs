//Maršrutų informacija sudedama į masyvą
const marsrutai = [
    {
        marsrutas: "Vilnius - Talinas",
        isvykimoData: "2024-02-22",
        isvykimoLaikas: "13:45",
        trukme: "12:25"
    },
    {
        marsrutas: "Vilnius - Helsinkis",
        isvykimoData: "2024-02-23",
        isvykimoLaikas: "09:30",
        trukme: "15:15"
    },
    {
        marsrutas: "Vilnius - Rokiškis",
        isvykimoData: "2024-02-23",
        isvykimoLaikas: "14:30",
        trukme: "3:15"
    },
    {
        marsrutas: "Vilnius - Jonava",
        isvykimoData: "2024-02-24",
        isvykimoLaikas: "18:30",
        trukme: "4:55"
    },
    {
        marsrutas: "Vilnius - Palanga",
        isvykimoData: "2024-02-25",
        isvykimoLaikas: "04:30",
        trukme: "10:15"
    }];
// Surandam trumpiausią kelionę ir ją atspausdinam
function trumpaiausiasMarsrutas() {
    let trumpiausiasMarsrutas = marsrutai[0];
    marsrutai.forEach(marsrutas => {
        const trukme = convertDurationToMinutes(marsrutas.trukme);
        const trumpiausiaTrukme = convertDurationToMinutes(trumpiausiasMarsrutas.trumpiausiaTrukme);
        if (trukme < trumpiausiaTrukme) {
            trumpiausiasMarsrutas = marsrutas;
        }
    });
    console.log("Trumpiausias maršrutas:");
    print(trumpiausiasMarsrutas); // turėtų atprintint trumpiausią maršrutą
}
//  Randam ilgiausią kelionę ir ją atspausdinam
function ilgiausiasMarsrutas() {
    let ilgiausiasMarsrutas = marsrutai[0];
    marsrutai.forEach(marsrutas => {
        const trukme = convertDurationToMinutes(marsrutas.trukme);
        const ilgiausiaTrukme = convertDurationToMinutes(ilgiausiasMarsrutas.ilgiausiaTrukme);
        if (trukme > ilgiausiaTrukme) {
            ilgiausiasMarsrutas = marsrutas;
        }
    });
    console.log("Ilgiausias maršrutas:");
    print(ilgiausiasMarsrutas); //turėtų atprintint ilgiausią maršrutą
}
//  Randam visą informaciją apie keliones, kurios trūko ilgiau nei parą
function marsrutasIlgesnisNeiPara() {
    marsrutai.forEach(marsrutas => {
        let trukme = convertDurationToMinutes(marsrutai.trukme);
        for (trukme > 1440 ) {
            console.log("Marsrutai trunkantys ilgiau nei para:");
            print(marsrutas); // "turėtų" atprintint visą info
        }
    });
}