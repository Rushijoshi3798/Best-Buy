let AllData = JSON.parse(localStorage.getItem("Arrdata")) || [];

displaydata(AllData);

function displaydata(data) {
  let count = 0;
  let totalcartvalue = 0;
  document.querySelector("tbody").innerHTML = null;
  data.forEach(function (el, index) {
    let tr = document.createElement("tr");
    tr.setAttribute("class", "trclass");

    let td1 = document.createElement("td");
    td1.innerText = el.name;
    td1.setAttribute("class", "tdclass");

    let td2 = document.createElement("td");
    td2.innerText = 1;
    count = +count + +td2.innerText;
    td2.setAttribute("class", "tdclass");

    totalcartvalue += el.spantag;

    let td3 = document.createElement("td");
    td3.innerText = el.h3tag;
    td3.setAttribute("class", "tdclass");
    td3.setAttribute("id", "productprice");

    var deleteElement = document.createElement("td");
    deleteElement.innerText = "Delete";
    deleteElement.style.color = "red";
    deleteElement.style.padding = "10px";
    deleteElement.style.textAlign = "center";
    deleteElement.style.backgroundColor = "white";
    deleteElement.style.cursor = "pointer";
    deleteElement.addEventListener("click", function (event) {
      event.target.parentNode.remove();
      productRemoved(index)
    });
    tr.append(td1, td2, td3, deleteElement);
    document.querySelector("#body").append(tr);
  });

  document.querySelector("#cart>span").innerText = count;

  document.querySelector("#totalvalue").innerText =
    "$" + totalcartvalue.toFixed(2);

  let estimatedTax = totalcartvalue * 0.05;

  document.querySelector("#tax").innerText = "$" + estimatedTax.toFixed(2);

  document.querySelector("#mrp").innerText =
    "$" + +(totalcartvalue + estimatedTax).toFixed(2);

  let discountprice = (totalcartvalue + estimatedTax) * 0.1;

  document.querySelector("#discount").innerText =
    "$" + discountprice.toFixed(2);

  let finalprice = totalcartvalue + estimatedTax - discountprice;

  document.querySelector("#finalvalueOfcart").innerText =
    "$" + finalprice.toFixed(2);
}

document.querySelector("#checkout").addEventListener("click", checkFun);

function checkFun() {
  window.location.href = "checkout.html";
}

document.querySelector(".logo_image").addEventListener("click",  () => {
  window.location.href = "navbarHome.html";
});

// remove product from local storage
function productRemoved(index){
    let data = JSON.parse(localStorage.getItem("Arrdata"))

    let newData = [];
    for(let i=0; i<data.length; i++){
        if(i!==index){
            newData.push(data[i])
        }
    }
    AllData = newData;
    localStorage.setItem("Arrdata", JSON.stringify(AllData))
    displaydata(AllData);
}
