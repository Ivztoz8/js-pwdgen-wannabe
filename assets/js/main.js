/* Variable declaration */
var yourName;
var yourSurname;
var yourFavColor;
var passwFake;

function enterNameF() {
  yourName = prompt("Enter your Nome ");
  document.getElementById("name").innerHTML =
  "Your name is " + yourName;
  }

  function enterSurNameF() {
  yourSurname = prompt("Enter your Surname ");
  document.getElementById("surname").innerHTML =
  "Your Surame is " + yourSurname;
  }

  function enterFavColorF() {
  yourFavColor = prompt("Enter your favorite color ");
  document.getElementById("favcol").innerHTML =
  "Your Favorite color is " + yourFavColor;  
  }

  function dispPassF() {
    document.getElementById("passw").innerHTML =
    "Your Password is: " + yourName + yourSurname + yourFavColor;  

  }
  