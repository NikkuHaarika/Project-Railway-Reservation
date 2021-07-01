
function Book(){
  document.getElementById("bookTrain").style.display="flex";
  var to=document.getElementById("to");
  var from=document.getElementById("from");
 var msg=document.getElementById("displaytrains");

 
const options = {
    method: 'POST',
    url: 'https://trains.p.rapidapi.com/',
    headers: {
      'content-type': 'application/json',
      'x-rapidapi-key': '9a18a12726msh79b7f272d40023fp1615afjsn0a5ce3c5adaf',
      'x-rapidapi-host': 'trains.p.rapidapi.com'
    },
    data: {search: 'Rajdhani'}
  };
  
  axios.request(options).then(function (response) {
      
      let data1=response.data;
      console.log(data1);
      
      var ptrain='<h2>Lists of Trains available</h2>';
                    data1.forEach(function(user) {
                     ptrain+=
                    `<div class="ptrain">
                      <div class="strength">Train num : ${user.train_num}</div>
                      <div>Train   : ${user.name}</div>
                      <div>From   : ${user.train_from}</div>
                      <div>To : ${user.train_to}</div>
                      <div><button class="train" onclick="cnfrm()" style="background-color:rgb(98, 98, 211)">Book now</button></div>
                     </div>`
        msg.innerHTML=ptrain;
   var train1=document.querySelectorAll(".train")
   for(var i=0;i<train1.length;i++){
    train1[i].addEventListener('click',()=>{
      console.log(30);
    })
   }
  })

}).catch(function (error) {
      console.error(error);
  });

}

function cnfrm(){

  var quant=document.getElementById("quantity").value;
  var doj1=document.getElementById("doj").value;
  document.getElementById("confirm").style.display="flex";
  document.getElementById("qnum").innerHTML=quant;
  document.getElementById("depart").innerHTML="Departure:"+" "+doj1+" at 4:45pm";
  const arr = [765,800,675, 625,832, 823];
const random = Math.floor(Math.random() * arr.length);
document.getElementById("price").innerHTML="Price:"+arr[random]*quant;
}

function closeAll(){
  document.getElementById("done").style.display="flex";
}

function close_all(){
  window.location='meal.html';
}

function Cancel(){
  document.getElementById("bookTrain").style.display="none";
}

function ordernow(){
  document.getElementById("final").style.display = "flex";
}

function meal_close(){
 document.getElementById("final").style.display = "none";
}

 function meal_order(){
  document.getElementById("meal_ordered").style.display = "flex";
}

function meal_closeAll(){
  window.location='meal.html';
}

function contact_open() {
  document.getElementById("contact").style.display = "flex";
}

function contact_close(){
  document.getElementById("contact").style.display = "none";
}
function sigin(){
   var firstname=document.getElementById("firstname").value;
   var lastname=document.getElementById("lastname").value;
   var email=document.getElementById("email").value;
  var contact=document.getElementById("contact").value;
  var pwd=document.getElementById("pd").value;
  var cpwd=document.getElementById("cpd").value;
   var items=[];
   var item={
     fstname:firstname,
     lstname:lastname,
     mail:email,
     num:contact,
     pass:pwd,
     cpass:cpwd
   }
   if(JSON.parse(localStorage.getItem("name"))==null){
     items.push(item);
     localStorage.setItem("name",JSON.stringify(items))
    alert("Signed in successfully");
    window.location='index.html';
   }
   else{
     var local=JSON.parse(localStorage.getItem("name"));
     local.map(data=>{
      
        if(item.pass==data.cpass){
         alert("logged in successfully");
         window.location='rail.html';
       }
       else{
         items.push(data);
    
       }
       items.push(item);
       window.location='rail.html';
       localStorage.setItem("name",JSON.stringify(items));
     })
   }

}

function signup(){
  document.getElementById("signup1").style.display="flex";
  document.getElementById("contain").style.display="none";
}

function logout(){
  document.getElementById("logout1").style.display="flex";
}

function logout1(){
  localStorage.clear("name");
  window.location='index.html';
  alert("Signed out");
}

function emerge(){
  document.getElementById("emer").style.display="flex";
}

function close_eme(){
  document.getElementById("emer").style.display="none";
}



