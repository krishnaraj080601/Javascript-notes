const p =new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve("promise resolved")
},10000)
})
//async function getdata(){
  //  return p;
//}
//const data =getdata();
//console.log(data);
//data.then((res)=>console.log(res))
async function handlepromise(){
 const val= await p;
 console.log(val);
 console.log("krishna")
}
handlepromise1()
function handlepromise1(){
    p.then((res)=>console.log(res))
    console.log("krishna")
   }
   //handlepromise()