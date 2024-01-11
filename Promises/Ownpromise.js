const cart=["kurtha","pants","shirts"];
createorder(cart)
.then(function(orderid){
  
  return orderid;
})
.then(function(orderid){
   return  proceedtopayment(orderid)
})
.then(function(paymentinfo){
    console.log(paymentinfo)
})
.catch(function (err){
console.log(err.message)
})
function createorder(cart){
    const pr=new Promise(function(resolve,reject){
         if(!validatecart(cart)){
             const error=new Error("cart is not valid");
             reject(error)
 
         }
         const orderid="1234";
         if(orderid){
            setTimeout(function(){
                 resolve(orderid);
             },5000)
            
         }
     })
     return pr;
 }
 
 function validatecart(cart){
     return true;
 }    
 function proceedtopayment(orderid){
     return new Promise(function(resolve,reject){
   resolve("payment successfull");
    })
 }
 
 
 
 
 
 