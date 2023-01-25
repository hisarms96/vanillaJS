const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greetings = document.querySelector("#id_greetings");
const loginButton = document.querySelector("#login-form button");

const HIDDEN_CLASS_NAME = "hide";

loginButton.addEventListener("click", function()
{
  loginForm.submit();
});



function onLoginSubmit(event)
{
  event.preventDefault();

  let input_name = loginInput.value;
  if(input_name == '')
  {
    alert('Please enter your name to login.');
    loginInput.focus();
    return false;
  }
  
  loginForm.classList.add(HIDDEN_CLASS_NAME);

  localStorage.setItem('username', input_name );
  paintGreetings(inpt_name);
}



function paintGreeting(username)
{
  greetings.classList.remove(HIDDEN_CLASS_NAME);
  greetings.innerText = `Hello~ ${username}`;
}



function onLoad()
{
  let username = localStorage.getItem("username");

  loginForm.classList.add(HIDDEN_CLASS_NAME);
  greetings.classList.add(HIDDEN_CLASS_NAME);

  console.log(`username onload= ${username}`);

  if(username===null)
  {
    // login required
    console.log('login required');

    loginForm.classList.remove(HIDDEN_CLASS_NAME);
    loginForm.addEventListener("submit", onLoginSubmit);

  } else {
    // username found!
    console.log(`welcome ${username}`);
    paintGreeting(username);
  }


  const quoteDiv = document.getElementById('id_quote');
  quoteDiv.innerHTML = `${chosenQuote.quote} <br/>- by ${chosenQuote.author}`;

  // create background image
  //const bgImg = document.createElement('img');
  //bgImg.src = `/img/${chosenImage}`;

  //document.body.prepend(bgImg);

  drawBackground();

}


window.addEventListener("load", onLoad);

const btn_bgchange = document.querySelector('#id_btn_change_bg');

btn_bgchange.addEventListener('click',
function(){
  repickBackground();
  drawBackground();
});

