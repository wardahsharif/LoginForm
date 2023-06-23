function LoginForm(form) {
    if( form.userName.value =="username") {
        if (form.passWord.value =="password")
     {
    location=="home.html"
    }
    else {
        alert ("incorrect username or password")
    }
}

}


function formBox(form) {
  let username = document.querySelector('input[name="username"]');
  let password = document.querySelector('input[name="password"]');
  username.value = "welcome to the homepage";
}

let button = document.querySelector("button[type='submit']"); // Get the submit button by type
button.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent form from submitting and page reloading
  formBox();
});




function formBox(form) {
  let username = document.querySelector('input[name="username"]');
  let password = document.querySelector('input[name="password"]');
  username.value = "welcome to the homepage";
}

let button = document.querySelector("button[type='submit']");
button.addEventListener("click", function (event) {
  event.preventDefault(); 
  formBox();
});
