let json = new XMLHttpRequest();
json.open("GET", "./2.json", true);
json.onload = function () {
    let eredmeny = JSON.parse(json.responseText);
    let jegyek = eredmeny.jegyek;
    let atlag = szamolAtlag(jegyek);
    let elegtelenNelkul = szamolElegtelenNelkul(jegyek);
    let erdemjegy = szamolVegeredmeny(atlag);
    console.log("Atlaga:", atlag);
    console.log("Es eredmenye elegtelen nelkul:", elegtelenNelkul);
    console.log("Vegso eredmenye:", erdemjegy);
    document.getElementById("jegyek").innerHTML = `Grades: ${jegyek}`;
    document.getElementById("atlag").innerHTML = `Average: ${atlag}`;
    document.getElementById("elegtelenNelkul").innerHTML = `Without insufficent grades: ${elegtelenNelkul}`;
    document.getElementById("eredmeny").innerHTML = `Result: ${erdemjegy}`;
};
json.send();

function szamolAtlag(jegyek) {
  let sum = 0;
  for (let i = 0; i < jegyek.length; i++) {
    sum += jegyek[i];
  };
  return sum / jegyek.length;
};

function szamolElegtelenNelkul(jegyek) {
  let sum = 0;
  let db = 0;
  for (let i = 0; i < jegyek.length; i++) {
    if (jegyek[i] >= 2.0) {
      sum += jegyek[i];
      db++;
    };
  };
  return sum / db;
};

function szamolVegeredmeny(atlag) {
  if (atlag<2.0) {
    return 1;
  } else if (atlag<2.5) {
    return 2;
  } else if (atlag<3.5) {
    return 3;
  } else if (atlag<4.5) {
    return 4;
  } else {
    return 5;
  };
};