

function add_to_cart(pid,pname,pprice){
    let cart = localstorage.getItem("cart");
    if (cart == null){

        // No cart yet...
        let products = [];
        let product = {
            productid : pid,
            productname : pname,
            productprice : pprice
        } 
        products.push(product);
        localStorage.setItem("cart",JSON.stringify(products));
    } 
    else {
        // cart is already present..
    }
}

