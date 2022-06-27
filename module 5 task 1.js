let vvod = +prompt("Введите число");
if(typeof vvod === "number" && !Number.isNaN(vvod)) {
  if ( vvod%2 === 0) {
    console.log("Число четное.");
  }  else {
   console.log("Число нечетное."); } 
}
else  {
  console.log ("Упс, кажется, вы ошиблись!");
}