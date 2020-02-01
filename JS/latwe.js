var stopienTrudnosci = 10;
var liczbazyc = 5;
var punktyzdobyte = 0;
var lvl =1;
var daneLosowe1 = 0;
var daneLosowe2 = 0;

function losuj() {
  var wartosc = Math.floor(Math.random() * stopienTrudnosci) + 1;
  return wartosc;
}

function dwieLosoweLiczby(){
  daneLosowe1 = losuj();
  daneLosowe2 = losuj();
  document.getElementById("skladnik1").textContent = daneLosowe1;
  document.getElementById("skladnik2").textContent = daneLosowe2;
}

function main() {
  var suma = parseInt(daneLosowe1) + parseInt(daneLosowe2);

  var punkty = document.getElementById("punkty");
  var ilosczyc = document.getElementById("ilosczyc");

  if (document.getElementById("wynik").value == suma) 
  {
    punktyzdobyte++;
    punkty.textContent = punktyzdobyte;
    document.getElementById("info").textContent="dobrze !"
  } 
  else 
  {
    liczbazyc--;
    ilosczyc.textContent = liczbazyc;
  }
  document.getElementById("wynik").value="";
  dwieLosoweLiczby();
}

Element.onclick = main;
