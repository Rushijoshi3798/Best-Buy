

// Very Imp first page cart division (Recommanded for you-section) created.dataForGoPro.dataForGoPro. ufff!! 

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

// let finaldataArr = [];

let dataDiv = document.querySelector("#picUnderRecommand")
GoProDivs(dataDiv,dataForGoPro);



function GoProDivs(dataDiv,dataForGoPro){

    for (let i=0; i<dataForGoPro.length; i++){
        let obj ={}
        let finaldataArr = [];
        let division = document.createElement("div");
        dataDiv.append(division);

        let img = document.createElement("img");
        img.src = dataForGoPro[i]["picurl"];
        obj["image"] = img.src;

        let name = document.createElement("a");
        name.innerText = dataForGoPro[i]["pname"];
        obj["name"] = name.innerText;

        let h3tag = document.createElement("h3");
        h3tag.innerText = "$"+ +(dataForGoPro[i]["pprice"]);
        obj["h3tag"] = h3tag.innerText;

        finaldataArr.push(obj)

        let buttonel = document.createElement("button");
        buttonel.innerText = "Add To Cart";
        buttonel.setAttribute("class","AddCart")
        buttonel.addEventListener("click",function(finaldataArr){
            console.log(finaldataArr[obj.name]);
        })

        
        division.append(img, name, h3tag, buttonel);
        
    }
};

// document.querySelector(".AddCart").addEventListener("click",function(el){
//     let camaraproduct = el.parentNode
//     console.log(camaraproduct)
// })

// console.log(finaldataArr)

// Document.querySelector("#cart").addEventListner("click",cartFun);
