
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

// logo onclick
document.querySelector("#logo_image").addEventListener("click", () => {
    let LoggedInOrNot = localStorage.getItem("info");
    if(LoggedInOrNot){
        window.location.href="./navbarHome.html"
    }else {
        window.location.href='./signup.html';
        alert("kindly Login First...!")
    }
})