

// Very Imp first page cart division (Recommanded for you-section) created.dataForGoPro.dataForGoPro.

dataForGoPro = [
    {
    picurl : "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6474/6474501_rd.jpg;maxHeight=160;maxWidth=260",
    pname : "GoPro HERO-10 Black Action Camara..",
    pprice : 499.99,
    pbutton : "Add to cart"
    },
{
    picurl : "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6485/6485762cv11d.jpg;maxHeight=160;maxWidth=260",
    pname : "GoPro HERO-12 Action Camara..",
    pprice : 399.99,
    pbutton : "Add to cart"
},
{
    picurl : "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6427/6427120_rd.jpg;maxHeight=160;maxWidth=260",
    pname : "GoPro HERO-10 Black Action Camara..",
    pprice : 549.99,
    pbutton : "Add to cart"
},
{
    picurl : "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6514/6514926_rd.jpg;maxHeight=160;maxWidth=260",
    pname : "GoPro DUSKY Night-light Camara...",
    pprice : 599.99,
    pbutton : "Add to cart",
}]

let finaldataArr = JSON.parse(localStorage.getItem("Arrdata")) || [];

let dataDiv = document.querySelector("#picUnderRecommand")
GoProDivs(dataDiv,dataForGoPro);



function GoProDivs(dataDiv,dataForGoPro){


    for (let i=0; i<dataForGoPro.length; i++){
        let obj ={}
      
        let division = document.createElement("div");
        dataDiv.append(division);

        let img = document.createElement("img");
        img.src = dataForGoPro[i]["picurl"];
        obj["image"] = img.src;

        let name = document.createElement("a");
        name.innerText = dataForGoPro[i]["pname"];
        obj["name"] = name.innerText;

        let h3tag = document.createElement("h3");
        let spantag = document.createElement("span");
        spantag.innerText = +(dataForGoPro[i]["pprice"]);

        obj["spantag"] = +(spantag.innerText);
        h3tag.innerText = `$ ${+dataForGoPro[i]["pprice"]}`;
        obj["h3tag"] = h3tag.innerText;

        let buttonel = document.createElement("button");
        buttonel.innerText = "Add To Cart";
        buttonel.setAttribute("class","AddCart")
        buttonel.addEventListener("click",function(){
            DoAddCart(obj);
        })
        
        division.append(img, name, h3tag, buttonel);
        
    }
};

function DoAddCart(obj){
    //console.log(obj);
    finaldataArr.push(obj);
    localStorage.setItem("Arrdata",JSON.stringify(finaldataArr))

    let cart_items = document.querySelector("#cart>span");
    cart_items.style.backgroundColor="yellow";
    cart_items.style.margin = "5px";
    cart_items.style.marginRight = "0px";
    cart_items.style.marginTop = "0px";

    //console.log(typeof cart_items)
    cart_items.innerText = finaldataArr.length || 0;

}


// adding functionality to Cart button on navbar


document.querySelector("#cart").addEventListener("click",function(){
    window.location.href="cart.html";
})