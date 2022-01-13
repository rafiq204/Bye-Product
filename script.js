
function handleProductChange(product ,isIncrease){
       const productInput = document.getElementById(product +'-count');
       const productCount = parseInt(productInput.value) ;
       let productNewCount =  productCount ; 

       if(isIncrease == true){
              productNewCount =  productCount + 1 ; 
       }
       if(isIncrease == false &&  productCount >0){
              productNewCount =  productCount - 1 ; 
       }
       productInput.value = productNewCount ; 
       let productTotal = 0 ;
       if(product == 'phone'){
              productTotal = productNewCount * 1200 ;
       }
       if(product == 'case'){
              productTotal = productNewCount * 60 ; 
       }
       document.getElementById(product +'-total').innerText ='$' + productTotal ; 
       calculateTotal();
}


function calculateTotal(){
       const phoneCount = getInputValue('phone');
       const caseCount = getInputValue('case');

       const totalPrice = phoneCount * 1200 + caseCount * 60 ; 
       document.getElementById('total-price').innerText = '$' + totalPrice ; 

       const taxAmount = Math.round(totalPrice * 0.10);
       document.getElementById('tax-amount').innerText = taxAmount;
       const grandPrice = totalPrice + taxAmount ; 
       document.getElementById('grand-total').innerText = grandPrice ; 

}


function getInputValue(product){
       const productInput = document.getElementById(product +'-count');
       const productCount = parseInt(productInput.value);
       return productCount ; 
}

