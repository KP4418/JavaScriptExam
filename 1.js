function szamol() {
    let szam1 = Number(document.getElementById("szam1").value);
    let szam2 = Number(document.getElementById("szam2").value);
    document.getElementById("result-sum").innerHTML = "Add: " + sum(szam1, szam2);
    document.getElementById("result-sub").innerHTML = "Substract: " + sub(szam1, szam2);
    document.getElementById("result-mul").innerHTML = "Cavil: " + mul(szam1, szam2);
    document.getElementById("result-div").innerHTML = "Division: " + div(szam1, szam2);
    };

function sum(szam1, szam2) {
        return szam1 + szam2;
      };
  
function sub(szam1, szam2) {
        return szam1 - szam2;
      };
  
function mul(szam1, szam2) {
        return szam1 * szam2;
      };
  
function div(szam1, szam2) {
        return szam1 / szam2;
      };