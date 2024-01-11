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
