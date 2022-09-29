/* Lab:exp_6_Establishment of the Relationship between Kata Cooling Power and Air Velocity
	 File name: mainexp6.js
   Author:Prakriti Dhang
*/
var obcount;
var count = 0;

var countanbtnclk; /* count stopwatch button click */

var countw = 0;

var countanbtnclkw; /* calculate wkcp */

var imgobj1=null;
var imgobj2=null;
var imgobj3=null;
var imgobj4=null;
var imgod=null;
/*function pgload(){
    
}*/

function showpanel(){
    document.getElementById('btninst').disabled=false;
    
    document.getElementById('yesbtn').disabled=true;
   document.getElementById('stopwatchd').style.display="block";
   document.getElementById('button-start').disabled=false;
   document.getElementById('button-stop').disabled=true;
    
   
    
    //$("#btninst").fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
   
   
}


function startwatch(){
  document.getElementById('button-stop').disabled=false;
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    let centerXd = 0, centerYd = 50;
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(centerXd, centerYd); /*  0-130*/
    ctx.lineTo(0, 180);
    ctx.stroke();


  var c = document.getElementById("myCanvas2");
  var ctx = c.getContext("2d");
  let centerX = 0, centerY = 0;
  ctx.strokeStyle = 'grey';
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(centerX, centerY);   
  ctx.lineTo(0, 180);
  ctx.stroke();
  
  document.getElementById('button-start').disabled=true;
}






function moveplate1(){  /* move 1st  throtling plate to the required position*/

  var iplate1 = document.getElementById("contldevice1");   
  var orgtop = 400; /* initial position */
  clearInterval(imgobj1);
  imgobj1 = setInterval(frame, 5); /* frame is 5 denotes the speed of the movement*/
  function frame() {
    if (orgtop == 109) { /* moves to 100 top positon*/
      clearInterval(imgobj1); /* stops to 100 postion*/
      document.getElementById('button-start').disabled=false;
      

    } else {
      orgtop--; 
      iplate1.style.top = orgtop + 'px'; 
       
    }
  }

  
  
  
}


function moveplate2(){  /* move 1st  throtling plate to the required position*/

  var iplate2 = document.getElementById("contldevice2");   
  var orgtop2 = 400; /* initial position */
  clearInterval(imgobj2);
  imgobj2 = setInterval(frame, 5); /* frame is 5 denotes the speed of the movement*/
  function frame() {
    if (orgtop2 == 109) { /* moves to 100 top positon*/
      clearInterval(imgobj2); /* stops to 100 postion*/
      document.getElementById('button-start').disabled=false;
    } else {
      orgtop2--; 
      iplate2.style.top = orgtop2 + 'px'; 
       
    }
  }

  
  
  
}

function moveplate3(){  /* move 1st  throtling plate to the required position*/

var iplate3 = document.getElementById("contldevice3");   
var orgtop3 = 400; /* initial position */
clearInterval(imgobj3);
imgobj3 = setInterval(frame, 5); /* frame is 5 denotes the speed of the movement*/
function frame() {
  if (orgtop3 == 109) { /* moves to 100 top positon*/
    clearInterval(imgobj3); /* stops to 100 postion*/
    document.getElementById('button-start').disabled=false;
  } else {
    orgtop3--; 
    iplate3.style.top = orgtop3 + 'px'; 
     
  }
}




}


     var airvelv, twv, wkcpv;
function stopwatch() {
  document.getElementById("measure").style.display="block";
    document.getElementById('obbtn').disabled=false; /* add observation btn */
    count++;
    countanbtnclk =count;
    document.getElementById('calwkcp').disabled=false;
    document.getElementById('button-start').disabled=true;
    document.getElementById('button-stop').disabled=true;
    if(countanbtnclk ==1){
    
      document.getElementById('timev').value;
      airvelv=3.24;
      document.getElementById('airvel').value=airvelv;
      twv=32;
      document.getElementById('temptw').value=twv;
      document.getElementById('obbtn').disabled=true; 
    
   }

   if(countanbtnclk ==2){
    document.getElementById('timev').value;
    airvelv=5.46;
      document.getElementById('airvel').value=airvelv;
      
      twv=33;
      document.getElementById('temptw').value=twv;
      document.getElementById('obbtn').disabled=true; 
   }

   if(countanbtnclk ==3){
    document.getElementById('timev').value;
    airvelv=2.15;
    document.getElementById('airvel').value=airvelv;
    
    twv=32;
    document.getElementById('temptw').value=twv;
    document.getElementById('obbtn').disabled=true; 
   
   }
   if(countanbtnclk ==4){
    document.getElementById('timev').value;
    airvelv=4.49;
    document.getElementById('airvel').value=airvelv;
    
    twv=34;
    document.getElementById('temptw').value=twv;
    document.getElementById('obbtn').disabled=true; 
   
   }

  }

 function calculatewkcp(){
  countw++;
  countanbtnclkw =countw;
  document.getElementById('obbtn').disabled=false; 
  if(countanbtnclkw ==1){
    wkcpv=310.83;
    document.getElementById('wkcp').value=wkcpv;
    document.getElementById('calwkcp').disabled=true;
   
 }
 if(countanbtnclkw ==2){
  wkcpv=288.00;
      document.getElementById('wkcp').value=wkcpv;
      document.getElementById('calwkcp').disabled=true;

}
if(countanbtnclkw ==3){
  wkcpv=271.65;
    document.getElementById('wkcp').value=wkcpv;
    document.getElementById('calwkcp').disabled=true;
}
if(countanbtnclkw ==4){
  wkcpv=194.12;
  document.getElementById('wkcp').value=wkcpv;
  document.getElementById('calwkcp').disabled=true;
}
}


  