
document.querySelector("form").addEventListener("submit",formFun);

function formFun(event){
    event.preventDefault();

    let obj = {
        Fname: document.querySelector("#Fname").value ,
        Lname: document.querySelector("#Lname").value ,
        email: document.querySelector("#email").value ,
        password: document.querySelector("#password").value ,
        mbl: document.querySelector("#mbl").value ,
    }

    localStorage.setItem("info",JSON.stringify(obj));
    window.location.href= "signup.html";

    form.reset();

    
}