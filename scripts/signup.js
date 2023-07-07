let info = JSON.parse(localStorage.getItem("info"));

document.querySelector("form").addEventListener("submit",formFun);

function formFun(event){
    event.preventDefault();

    
        let email= document.querySelector("#email").value;
        let password= document.querySelector("#password").value;
        let mbl = document.querySelector("#mbl").value ;
        
        let info = JSON.parse(localStorage.getItem("info"));

    if (email === info.email && password === info.password || mbl === info.mbl && password === info.password){
        alert("Hurry! Login SuccessFul")
        window.location.href="navbarHome.html"
    } else {
        alert ("Incorrect Credetials");
    }
    
}

// logo onclick
document.querySelector("#logo_image").addEventListener("click", () => {
    let LoggedInOrNot = localStorage.getItem("info");
    if(LoggedInOrNot){
        window.location.href="./navbarHome.html"
    }else {
        alert("kindly Login First...!")
    }
})