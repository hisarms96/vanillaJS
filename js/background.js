const images = [
  "0.jpg"
  , "1.jpg"
  , "2.jpg"
];

let chosenImage = images[Math.floor(Math.random()*images.length)];
console.log( chosenImage );

function repickBackground()
{
  chosenImage = images[Math.floor(Math.random()*images.length)];
  console.log( 'repick=',chosenImage );
}

function drawBackground()
{
  var divbg = document.querySelector("div.bg");
  divbg.style.backgroundImage =  "url('/img/" + chosenImage + "')";
}