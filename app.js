function forPlusMinusBtn(product, isIncreasing, price){
    const getProductCount = document.getElementById(product + '-count')
    let productCount = getProductCount.value;
    if(isIncreasing == true){
        productCount = parseInt(productCount) + 1;
    }
    else if(productCount > 0){
        productCount = parseInt(productCount) - 1;
    }
    getProductCount.value = productCount;

    //update total price
    const priceTotal = document.getElementById(product + '-price')
    priceTotal.innerText = productCount * price;
    //calculate total
    totalProductPrice();
}

document.getElementById('phone-plus').addEventListener
('click', function(){
   forPlusMinusBtn('phone', true, 1250)
})

document.getElementById('phone-minus').addEventListener
('click', function(){
    forPlusMinusBtn('phone', false, 1250)
})

document.getElementById('case-plus').addEventListener
('click', function(){
   forPlusMinusBtn('case', true, 59)
})

document.getElementById('case-minus').addEventListener
('click', function(){
    forPlusMinusBtn('case', false, 59)
})

function getProductQuantity(product){
    const productQuantity = document.getElementById(product +'-count').value
    const productQuantityint = parseInt(productQuantity)
    return productQuantityint;
}

function totalProductPrice(){
    const phoneTotal = 1250 * getProductQuantity('phone');
    const caseTotal = 59 * getProductQuantity('case');
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal * (5/100);
    const total = subTotal + tax ;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('total').innerText = total;
}