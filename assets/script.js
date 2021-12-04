let quantity=1
let plusBtn=document.querySelector('#quantity-up')
let totalquantity=Document.querysel('.total-quantity')
console.log(quantity)
plusBtn.addEventListener('click', function()
{ 
    quantity=quantity+1 
    console.log(quantity)

})