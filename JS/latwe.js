var stopienTrudnosci = 5;
var liczbazyc = 5;
var punktyzdobyte = 0;
var lvl = 1;
var daneLosowe1 = 0;
var daneLosowe2 = 0;

function losuj() {
  var wartosc = Math.floor(Math.random() * stopienTrudnosci) + 1;
  return wartosc;
}

function dwieLosoweLiczby() {

  daneLosowe1 = losuj();
  daneLosowe2 = losuj();
  document.getElementById("skladnik1").textContent = daneLosowe1;
  document.getElementById("skladnik2").textContent = daneLosowe2;
}

function main() {
  var suma = parseInt(daneLosowe1) + parseInt(daneLosowe2);

  var punkty = document.getElementById("punkty");
  var ilosczyc = document.getElementById("ilosczyc");

  if (document.getElementById("wynik").value == suma) {
    punktyzdobyte++;
    punkty.textContent = punktyzdobyte;
    document.getElementById("info").style.color = "seagreen";
    document.getElementById("info").textContent = "good, u are right !";
    document.getElementById("progressbar").value += 10;
    if (
      document.getElementById("progressbar").value >=
      document.getElementById("progressbar").max
    ) {
      lvl++;
      document.getElementById("lvl").textContent = lvl;
      document.getElementById("progressbar").value = 0;
      document.getElementById("progressbar").max *= 1.4;
      stopienTrudnosci += 10;
    }
  } else {
    liczbazyc--;
    ilosczyc.textContent = liczbazyc;
    document.getElementById("info").style.color = "red";
    document.getElementById("info").textContent = "wrong answer, result = "  + suma;
    if (liczbazyc == 0) {
      alert
      alert("Porażka");
      zrobLink();
    }
  }
  document.getElementById("wynik").value = "";
  dwieLosoweLiczby();
}

Element.onclick = main;
function zrobLink() {
  var a = document.createElement("a");
  var link = document.createTextNode("Przejdź do menu");
  a.appendChild(link);
  a.title = "Przejdź do menu";
  a.href = "index.html";
  document.getElementById("sprawdz").textContent = "";
  document.getElementById("sprawdz").prepend(a);
}
