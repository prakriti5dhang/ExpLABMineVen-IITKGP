/* Lab:exp_5_Theory of Fan Rating Test
	 File name: mainexp5.js
   Author:Prakriti Dhang
*/
var obcount;
var countv = 0;
var dispv;

var countm=0;
var dispm;

var counteff=0;
var dispeff;

var countfld=0;
var dispfld;

var imgobj1=null;
var imgobj2=null;
var imgobj3=null;
var imgobj4=null;
var imgobj5=null;
var imgod=null;
var moveanemometerstick;

var bottom = 60; /* initial positon */
var temp = bottom;
var goUp = true;
var goDown = false;
var moveanemometerstick;

var cancelani, cancelani1, cancelani2, cancelani3;
var canvas, canvas1, canvas2, canvas3;
var ctx, ctx1, ctx2, ctx3;

function pgload(){
  document.getElementById("on").style.visibility="hidden";
  document.getElementById("off").style.visibility="hidden"; 
 
}

function showpanel(){
    document.getElementById('btninst').disabled=false;
   document.getElementById('yesbtn').disabled=true;
   document.getElementById('measure').style.display="block";
  document.getElementById("on").style.visibility="hidden";
  document.getElementById("off").style.visibility="hidden";
    
   
    
    //$("#btninst").fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
  
}


function clickon(){
  const rotated = document.getElementById('fan');
  rotated.style.webkitAnimationPlayState = "running";
  document.getElementById("off").style.visibility="hidden";
  document.getElementById("on").style.visibility="hidden";
  document.getElementById('antvb').disabled=false;

pitottubeflow();
pitottubeflowdown();

}

function clickoff(){
  const rotated = document.getElementById('fan');
  rotated.style.webkitAnimationPlayState = "paused";
  document.getElementById("off").style.visibility="hidden";
  document.getElementById("on").style.visibility="hidden";
  document.getElementById('mdatab').disabled=false;
  document.getElementById("fanoff").style.visibility="hidden";
  
}



function antrv(){
 
  document.getElementById('yesbtn').disabled=true;
  document.getElementById('user').style.display="block";
  document.getElementById('anemoter').style.display="block";
  document.getElementById('antvb').disabled=true;
  document.getElementById('velrb').disabled=false;
  document.getElementById('obbtn').disabled=true;
  document.getElementById('velread').style.display="block";
  

   moveanemometer();
  

}


function moveanemometer(){
  document.getElementById('measure').style.display='block';
    moveanemometerstick= setInterval(moveanmetr, 40); /* setInterval (function, frames) */
       
 }
 function moveanmetr(){ 
        

  if(goUp) {
    temp--;
    if(temp == 50) {
        goUp =false;
        goDown = true;
        
    }
} else if(goDown) {
    temp++;
    if(temp == 150) {
        goDown =false;
        goUp = true;
        
    }
}
$("#anemoter").css("bottom",temp);
   
}
   var velread1, velread2, velread3;
   var velread12, velread22, velread32;
   var velread13, velread23, velread33;
   var velread14, velread24, velread34;
   var velread15, velread25, velread35;

function velr(){
  countv++;
  dispv= countv;
  document.getElementById("mdatab").disabled=true;
/* 1st vel reading for 1st flow control device */
if(dispv==1){ /* velocity reading 1*/
      velread1 = (2 + ((2.95 - 2) * Math.random())).toFixed(2);
      document.getElementById('velr1').value=velread1;
      document.getElementById('velrb').innerHTML='2nd Velocity Reading';
   }
   else if(dispv==2){ /* velocity reading 2*/
       velread2 = (3 + ((3.95 - 3) * Math.random())).toFixed(2);
      document.getElementById('velr2').value=velread2;
      document.getElementById('velrb').innerHTML='3rd Velocity Reading';
   }
   else if(dispv==3){ /* velocity reading 3*/
       velread3 = (4 + ((4.95 - 4) * Math.random())).toFixed(2);
      document.getElementById('velr3').value=velread3;
      document.getElementById("velrb").disabled=true;/*button for velread is disabled*/
      document.getElementById('velrb').innerHTML='3rd Velocity Reading';
      
      //document.getElementById('user').style.display="none";
      document.getElementById('anemoter').style.display="block";/* display anemometer*/
      clearInterval(moveanemometerstick);
      document.getElementById("off").style.visibility="visible";
      document.getElementById("mdatab").disabled=true;
      document.getElementById("fanoff").style.visibility="visible";
}


/*  2nd flow control device, 1st vel reading  */
else if(dispv==4){ /* velocity reading 1*/
      velread12 = (2.25 + ((2.75 - 2.25) * Math.random())).toFixed(2);
      document.getElementById('velr1').value=velread12;
      document.getElementById('velrb').innerHTML='2nd Velocity Reading';
   }
   else if(dispv==5){ /* velocity reading 2*/
      velread22 = (3.25 + ((3.75 - 3.25) * Math.random())).toFixed(2);
      document.getElementById('velr2').value=velread22;
      document.getElementById('velrb').innerHTML='3rd Velocity Reading';
   }
   else if(dispv==6){ /* velocity reading 3*/
      velread32 = (4.25 + ((4.75 - 4.25) * Math.random())).toFixed(2);
      document.getElementById('velr3').value=velread32;
      document.getElementById("velrb").disabled=true;/*button for velread is disabled*/
      document.getElementById('velrb').innerHTML='3rd Velocity Reading';
      document.getElementById('anemoter').style.display="block";/* display anemometer*/
      clearInterval(moveanemometerstick);
      document.getElementById("off").style.visibility="visible";
      document.getElementById("mdatab").disabled=true;
      document.getElementById("fanoff").style.visibility="visible";
   }

/*  3rd flow control device, 1st vel reading  */
else if(dispv==7){ /* velocity reading 1*/
      velread13 = (2.6 + ((2.92 - 2.6) * Math.random())).toFixed(2);
      document.getElementById('velr1').value=velread12;
      document.getElementById('velrb').innerHTML='2nd Velocity Reading';
   }
   else if(dispv==8){ /* velocity reading 2*/
      velread23 = (3.6 + ((3.92 - 3.6) * Math.random())).toFixed(2);
      document.getElementById('velr2').value=velread22;
      document.getElementById('velrb').innerHTML='3rd Velocity Reading';
   }
   else if(dispv==9){ /* velocity reading 3*/
      velread33 = (4.6 + ((4.92 - 4.6) * Math.random())).toFixed(2);
      document.getElementById('velr3').value=velread32;
      document.getElementById("velrb").disabled=true;/*button for velread is disabled*/
      document.getElementById('velrb').innerHTML='3rd Velocity Reading';
      document.getElementById('anemoter').style.display="block";/* display anemometer*/
      clearInterval(moveanemometerstick);
      document.getElementById("off").style.visibility="visible";
      document.getElementById("mdatab").disabled=true;
      document.getElementById("fanoff").style.visibility="visible";
   }


/*  4th flow control device, 1st vel reading  */
else if(dispv==10){ /* velocity reading 1*/
      velread15 = (2.75 + ((2.95 - 2.75) * Math.random())).toFixed(2);
      document.getElementById('velr1').value=velread12;
      document.getElementById('velrb').innerHTML='2nd Velocity Reading';
   }
   else if(dispv==11){ /* velocity reading 2*/
      velread25 = (3.65 + ((3.65 - 3.65) * Math.random())).toFixed(2);
      document.getElementById('velr2').value=velread22;
      document.getElementById('velrb').innerHTML='3rd Velocity Reading';
   }
   else if(dispv==12){ /* velocity reading 3*/
      velread35 = (4.75 + ((4.95 - 4.75) * Math.random())).toFixed(2);
      document.getElementById('velr3').value=velread32;
      document.getElementById("velrb").disabled=true;/*button for velread is disabled*/
      document.getElementById('velrb').innerHTML='3rd Velocity Reading';
      document.getElementById('anemoter').style.display="block";/* display anemometer*/
      clearInterval(moveanemometerstick);
      document.getElementById("off").style.visibility="visible";
      document.getElementById("mdatab").disabled=true;
      document.getElementById("fanoff").style.visibility="visible";
   }

/*  5th flow control device, 1st vel reading  */
else if(dispv==13){ /* velocity reading 1*/
      velread12 = (3.75 + ((3.95 - 3.75) * Math.random())).toFixed(2);
      document.getElementById('velr1').value=velread12;
      document.getElementById('velrb').innerHTML='2nd Velocity Reading';
   }
   else if(dispv==14){ /* velocity reading 2*/
      velread22 = (4.65 + ((4.65 - 4.65) * Math.random())).toFixed(2);
      document.getElementById('velr2').value=velread22;
      document.getElementById('velrb').innerHTML='3rd Velocity Reading';
   }
   else if(dispv==15){ /* velocity reading 3*/
      velread32 = (5.75 + ((7.75 - 7.75) * Math.random())).toFixed(2);
      document.getElementById('velr3').value=velread32;
      document.getElementById("velrb").disabled=true;/*button for velread is disabled*/
      document.getElementById('velrb').innerHTML='3rd Velocity Reading';
      document.getElementById('anemoter').style.display="block";/* display anemometer*/
      clearInterval(moveanemometerstick);
      document.getElementById("off").style.visibility="visible";
      document.getElementById("mdatab").disabled=true;
      document.getElementById("fanoff").style.visibility="visible";
   }


}






function moveplate1(){  /* move 1st  throtling plate to the required position*/

  var iplate1 = document.getElementById("contldevice1");   
  var orgtop = 400; /* initial position */
  clearInterval(imgobj1);
  imgobj1 = setInterval(frame, 5); /* frame is 5 denotes the speed of the movement*/
  function frame() {
    if (orgtop == 195) { /* moves to 100 top positon*/
      clearInterval(imgobj1); /* stops to 100 postion*/
      document.getElementById('yesbtn').disabled=true;
      document.getElementById("on").style.visibility="visible";
      document.getElementById('inpp').value='0.34';
     

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
    if (orgtop2 == 195) { /* moves to 100 top positon*/
      clearInterval(imgobj2); /* stops to 100 postion*/
      document.getElementById('yesbtn').disabled=true;
      document.getElementById("on").style.visibility="visible";
     
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
  if (orgtop3 == 195) { /* moves to 100 top positon*/
    clearInterval(imgobj3); /* stops to 100 postion*/
    document.getElementById('yesbtn').disabled=true;
    document.getElementById("on").style.visibility="visible";
   
  } else {
    orgtop3--; 
    iplate3.style.top = orgtop3 + 'px'; 
     
  }
}




}


    
   
function moveplate4(){  /* move 1st  throtling plate to the required position*/

var iplate4 = document.getElementById("contldevice4");   
var orgtop4 = 400; /* initial position */
clearInterval(imgobj4);
imgobj4 = setInterval(frame, 5); /* frame is 5 denotes the speed of the movement*/
function frame() {
  if (orgtop4 == 195) { /* moves to 100 top positon*/
    clearInterval(imgobj4); /* stops to 100 postion*/
    document.getElementById('yesbtn').disabled=true;
    document.getElementById("on").style.visibility="visible";
   
  } else {
    orgtop4--; 
    iplate4.style.top = orgtop4 + 'px'; 
     
  }
}


}

function moveplate5(){  /* move 1st  throtling plate to the required position*/

var iplate5 = document.getElementById("contldevice5");   
var orgtop5 = 400; /* initial position */
clearInterval(imgobj3);
imgobj5 = setInterval(frame, 5); /* frame is 5 denotes the speed of the movement*/
function frame() {
  if (orgtop5 == 195) { /* moves to 100 top positon*/
    clearInterval(imgobj5); /* stops to 100 postion*/
    document.getElementById('yesbtn').disabled=true;
    document.getElementById("on").style.visibility="visible";
   
  } else {
    orgtop5--; 
    iplate5.style.top = orgtop5 + 'px'; 
     
  }
}


}

var avgv, stpr, vpr, frl, strg, tpr, qnt, aopt;
function msdata(){
  countm++;
  dispm=countm;
  if(dispm==1){

    avgv= document.getElementById('avgvi').value="4.16";
    stpr= document.getElementById('stpi').value="1.76";
    vpr= document.getElementById('velpi').value="9.71";
    frl= document.getElementById('fli').value="1.59";
    strg= document.getElementById('stri').value="0.78";
    tpr= document.getElementById('tpi').value="13.83";
    qnt= document.getElementById('qti').value="0.85";
    aopt= document.getElementById('aropi').value="11.76";

    document.getElementById('effb').style.display="block";
    document.getElementById('measureddata').style.display="block";
    document.getElementById("effb").disabled=false;
    document.getElementById("mdatab").disabled=true;
  }
/* 2nd reading */
  else if (dispm==2){
    avgv= document.getElementById('avgvi').value="3.66";
    stpr= document.getElementById('stpi').value="9.41";
    vpr= document.getElementById('velpi').value="7.50";
    frl= document.getElementById('fli').value="1.06";
    strg= document.getElementById('stri').value="0.60";
    tpr= document.getElementById('tpi').value="18.56";
    qnt= document.getElementById('qti').value="0.75";
    aopt= document.getElementById('aropi').value="13.87";

    document.getElementById('effb').style.display="block";
    document.getElementById('measureddata').style.display="block";
    document.getElementById("effb").disabled=false;
    document.getElementById("mdatab").disabled=true; 
  }

/* 3rd reading */
else if (dispm==3){
  avgv= document.getElementById('avgvi').value="3.36";
  stpr= document.getElementById('stpi').value="21.68";
  vpr= document.getElementById('velpi').value="6.31";
  frl= document.getElementById('fli').value="0.82";
  strg= document.getElementById('stri').value="0.50";
  tpr= document.getElementById('tpi').value="29.32";
  qnt= document.getElementById('qti').value="0.69";
  aopt= document.getElementById('aropi').value="20.10";

  document.getElementById('effb').style.display="block";
  document.getElementById('measureddata').style.display="block";
  document.getElementById("effb").disabled=false;
  document.getElementById("mdatab").disabled=true; 
}
/* 4th reading */
else if (dispm==4){
  avgv= document.getElementById('avgvi').value="3.20";
  stpr= document.getElementById('stpi').value="34.41";
  vpr= document.getElementById('velpi').value="5.73";
  frl= document.getElementById('fli').value="0.73";
  strg= document.getElementById('stri').value="0.46";
  tpr= document.getElementById('tpi').value="41.34";
  qnt= document.getElementById('qti').value="0.65";
  aopt= document.getElementById('aropi').value="27.01";

  document.getElementById('effb').style.display="block";
  document.getElementById('measureddata').style.display="block";
  document.getElementById("effb").disabled=false;
  document.getElementById("mdatab").disabled=true; 
}
  /* 5th reading */
  else if (dispm==5){
    avgv= document.getElementById('avgvi').value="3.05";
    stpr= document.getElementById('stpi').value="35.04";
    vpr= document.getElementById('velpi').value="5.20";
    frl= document.getElementById('fli').value="0.63";
    strg= document.getElementById('stri').value="0.42";
    tpr= document.getElementById('tpi').value="41.28";
    qnt= document.getElementById('qti').value="0.62";
    aopt= document.getElementById('aropi').value="25.68";

    document.getElementById('effb').style.display="block";
    document.getElementById('measureddata').style.display="block";
    document.getElementById("effb").disabled=false;
    document.getElementById("mdatab").disabled=true; 
  }
    
  }
  

var effid;
  function effdata(){
    counteff++;
    dispeff=counteff;
    /* 1st reading */
    if(dispeff==1){
      effid=document.getElementById('effc').value="31.78";
    document.getElementById("effdatad").style.display="block";
    document.getElementById("efficiency").style.display="block";
    document.getElementById('obbtn').disabled=false;
    document.getElementById("effb").disabled=true;
    }
/* 2nd reading */
    else if(dispeff==2){
      effid=document.getElementById('effc').value="37.49";
    document.getElementById("effdatad").style.display="block";
    document.getElementById("efficiency").style.display="block";
    document.getElementById('obbtn').disabled=false;
    document.getElementById("effb").disabled=true;
}
/* 3rd reading */
else if(dispeff==3){
  effid=document.getElementById('effc').value="54.32";
document.getElementById("effdatad").style.display="block";
document.getElementById("efficiency").style.display="block";
document.getElementById('obbtn').disabled=false;
document.getElementById("effb").disabled=true;
}
/* 4th reading */
else if(dispeff==4){
  effid=document.getElementById('effc').value="73.00";
document.getElementById("effdatad").style.display="block";
document.getElementById("efficiency").style.display="block";
document.getElementById('obbtn').disabled=false;
document.getElementById("effb").disabled=true;
}
/* 5th reading */
else if(dispeff==5){
  effid=document.getElementById('effc').value="69.41";
document.getElementById("effdatad").style.display="block";
document.getElementById("efficiency").style.display="block";
document.getElementById('obbtn').disabled=false;
document.getElementById("effb").disabled=true;
}
  }

/* flow control devices */
  function yesflwdevice(){
    
    countfld++;
    dispfld=countfld;
    if(dispfld==1){
    document.getElementById('velrb').innerHTML='1st Velocity Reading';
    document.getElementById("contldevice2").style.display="block";
    document.getElementById("contldevice1").style.display="none";
    document.getElementById('yfldb').disabled=true;
    document.getElementById("velread").style.display="none";
    document.getElementById("measureddata").style.display="none";
    document.getElementById("effdatad").style.display="none";
    document.getElementById("flwdevice").style.display="none";
    

    }

    else if(dispfld==2){
      document.getElementById('velrb').innerHTML='1st Velocity Reading';
    document.getElementById("contldevice3").style.display="block";
    document.getElementById("contldevice2").style.display="none";
    document.getElementById('yfldb').disabled=true;
    document.getElementById("velread").style.display="none";
    document.getElementById("measureddata").style.display="none";
    document.getElementById("effdatad").style.display="none";
    document.getElementById("flwdevice").style.display="none";
    }

    else if(dispfld==3){
      document.getElementById('velrb').innerHTML='1st Velocity Reading';
    document.getElementById("contldevice4").style.display="block";
    document.getElementById("contldevice3").style.display="none";
    document.getElementById('yfldb').disabled=true;
    document.getElementById("velread").style.display="none";
    document.getElementById("measureddata").style.display="none";
    document.getElementById("effdatad").style.display="none";
    document.getElementById("flwdevice").style.display="none";
    }
    else if(dispfld==4){
      document.getElementById('velrb').innerHTML='1st Velocity Reading';
    document.getElementById("contldevice5").style.display="block";
    document.getElementById("contldevice4").style.display="none";
    document.getElementById('yfldb').disabled=true;
    document.getElementById("velread").style.display="none";
    document.getElementById("measureddata").style.display="none";
    document.getElementById("effdatad").style.display="none";
    document.getElementById("flwdevice").style.display="none";
    }

  }

function pitottubeflow(){
 
 
  //for(){
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    var posY =38 ;
    var speed=0.05;

    function drawLine(){
    
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 16;
    ctx.beginPath();
    ctx.moveTo(0, posY); 
    ctx.lineTo(0, 40);
    ctx.stroke();
}

function moveLine () {
	posY += speed;
  
  if (posY < 0 || posY > canvas.height) {
	  speed = speed * -1;
  }
}

function loop() {
	// clear old frame;
 // ctx.clearRect(0,0,canvas.width, canvas.height);
  moveLine();
  drawLine();
cancelani=  requestAnimationFrame(loop);
}
requestAnimationFrame(loop);


/*  Canvas 2 */
canvas1 = document.getElementById("myCanvas1");
ctx1 = canvas1.getContext("2d");
var posY1 =38 ;
var speed1=0.05;

function drawLine1(){

ctx1.strokeStyle = 'red';
ctx1.lineWidth = 16;
ctx1.beginPath();
ctx1.moveTo(0, posY1); 
ctx1.lineTo(0, 40);
ctx1.stroke();
}

function moveLine1 () {
posY1 += speed1;

if (posY1 < 0 || posY1 > canvas1.height) {
speed1 = speed1 * -1;
}
}

function loop1() {
// clear old frame;
// ctx.clearRect(0,0,canvas.width, canvas.height);
moveLine1();
drawLine1();
cancelani1=  requestAnimationFrame(loop1);
}
requestAnimationFrame(loop1);
}

function pitottubeflowdown(){

/* Canvas3*/

canvas2 = document.getElementById("myCanvas2");
ctx2 = canvas2.getContext("2d");
var posY2 =18 ;
var speed2=0.03;

function drawLine2(){

ctx2.strokeStyle = 'white';
ctx2.lineWidth = 16;
ctx2.beginPath();
ctx2.moveTo(0, posY2); 
ctx2.lineTo(0, 20);
ctx2.stroke();
}

function moveLine2 () {
posY2 += speed2;

if (posY2 < 0 || posY2 > canvas2.height) {
speed2 = speed2 * -1;
}
}

function loop2() {
// clear old frame;
// ctx.clearRect(0,0,canvas.width, canvas.height);
moveLine2();
drawLine2();
cancelani2=  requestAnimationFrame(loop2);
}
requestAnimationFrame(loop2);

/* Canvas3 */
canvas3 = document.getElementById("myCanvas3");
ctx3 = canvas3.getContext("2d");
var posY3 =18 ;
var speed3=0.03;

function drawLine3(){

ctx3.strokeStyle = 'white';
ctx3.lineWidth = 16;
ctx3.beginPath();
ctx3.moveTo(0, posY3); 
ctx3.lineTo(0, 20);
ctx3.stroke();
}

function moveLine3 () {
posY3 += speed3;

if (posY3 < 0 || posY3 > canvas3.height) {
speed3 = speed3 * -1;
}
}

function loop3() {
// clear old frame;
// ctx.clearRect(0,0,canvas.width, canvas.height);
moveLine3();
drawLine3();
cancelani3=  requestAnimationFrame(loop3);
}
requestAnimationFrame(loop3);








}