/* Lab:exp_8_Determination of Frictional Co-efficient of Mine Airways
	 File name: mainexp8.js
   Author:Prakriti Dhang
*/
var obcount;
var count = 0;
//var canvasc=7; /* inclned canvas count  */
var countanbtnclk; /* count stopanemometer button click */

var imgobj1=null;
var imgobj2=null;
var imgobj3=null;
var imgobj4=null;
/*function pgload(){
    
}*/

function showpanel(){
    document.getElementById('btninst').disabled=false;
    document.getElementById('mduct').style.display="block";
    document.getElementById('yesbtn').disabled=true;
    document.getElementById('wd').readOnly= false;
     document.getElementById('hd').readOnly= false;
     document.getElementById('ld').readOnly= false;
     document.getElementById('rd').readOnly= false;
     document.getElementById('wd').readOnly= true;
     document.getElementById('hd').readOnly= true;
     document.getElementById('ld').readOnly= true;
     document.getElementById('rd').readOnly= true;
    
    //$("#btninst").fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
   
   
}



function moveplate1(){  /* move 1st  throtling plate to the required position*/

  var iplate1 = document.getElementById("contldevice1");   
  var orgtop = 400; /* initial position */
  clearInterval(imgobj1);
  imgobj1 = setInterval(frame, 5); /* frame is 5 denotes the speed of the movement*/
  function frame() {
    if (orgtop == 100) { /* moves to 100 top positon*/
      clearInterval(imgobj1); /* stops to 100 postion*/
      document.getElementById('anmbtn').disabled=false;
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
    if (orgtop2 == 100) { /* moves to 100 top positon*/
      clearInterval(imgobj2); /* stops to 100 postion*/
      document.getElementById('anmbtn').disabled=false;
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
  if (orgtop3 == 100) { /* moves to 100 top positon*/
    clearInterval(imgobj3); /* stops to 100 postion*/
    document.getElementById('anmbtn').disabled=false;
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
  if (orgtop4 == 100) { /* moves to 100 top positon*/
    clearInterval(imgobj4); /* stops to 100 postion*/
    document.getElementById('anmbtn').disabled=false;
  } else {
    orgtop4--; 
    iplate4.style.top = orgtop4 + 'px'; 
     
  }
}




}

function anmeasure(){  /* anemometer traversing button*/
   document.getElementById('measure').style.display="block";
   document.getElementById('yesbtn').disabled=true;
   document.getElementById('user').style.display="block";
   document.getElementById('anemometerr').style.display="block";
   document.getElementById('anmbtn').disabled=true;
   document.getElementById('msbtn').disabled=false;
   document.getElementById('obbtn').disabled=true;
  
   

    moveanemometer();
   

   
}
/* moves the anemometer to left- right and top-bottom direction */

var bottom = 300; /* initial positon */
var left = 595; /*initial position */
var temp = bottom;
var temp1 = left;
var goUp = true;
var goDown = false;
var goLeft = true;
var goRight = false;
var moveanemometerstick;

function moveanemometer(){

    moveanemometerstick= setInterval(moveanmetr, 90); /* setInterval (function, frames) */
       
 }
       
       
       function moveanmetr(){ 
        

        if(goUp) {
          temp--;
          if(temp == 280) {
              goUp =false;
              goDown = true;
              
          }
      } else if(goDown) {
          temp++;
          if(temp == 320) {
              goDown =false;
              goUp = true;
              
          }
      }
      $("#anemometerr").css("bottom",temp);
         
         if(goRight) {
             temp1++;
             if(temp1 == 597) { /* move right*/
                 goRight = false;
                 goLeft = true;
             }
         } else if(goLeft) {
             temp1--;
             if(temp1 == 593) { /* move left */
                 goLeft = false;
                 goRight = true;
             }
         }
         $("#anemometerr").css("left",temp1);
 
       
 
     }



     var avgvel, prdiff, qflow, frictprd;
function clckstopanm() {
    
    document.getElementById('obbtn').disabled=false; /* add observation btn */
    count++;
    countanbtnclk =count;

    if(countanbtnclk ==1){
    velread1 = (2 + ((2.15 - 2) * Math.random())).toFixed(2);
    document.getElementById('velr1').value=velread1;
    velread2 = (2 + ((2.55 - 2) * Math.random())).toFixed(2);
    document.getElementById('velr2').value=velread2;
    velread3 = (2 + ((2.75 - 2) * Math.random())).toFixed(2);
    document.getElementById('velr3').value=velread3;
    clearInterval(moveanemometerstick);
   
    /* Inclined manometer reading*/
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    let centerX = 2, centerY = 235;
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 5;
    ctx.beginPath();
    
    ctx.moveTo(centerX, 228);   //centerY-canvasc = 235-7
    
    
    ctx.lineTo(2, 240);
    ctx.stroke();
    document.getElementById('msbtn').disabled=true; /* stop anemometer button disables */
    prdiff=4.18;
    document.getElementById('pdi').value=prdiff;
    avgvel =(((parseFloat(velread1)) + (parseFloat(velread2))+ (parseFloat(velread3)))/3).toFixed(2);
    document.getElementById('avi').value=avgvel;
    qflow=0.13;
    document.getElementById('qfi').value=qflow;
    frictprd=0.14;
    document.getElementById('fpdi').value=frictprd;
   }

   if(countanbtnclk ==2){
    velread1 = (5 + ((5.15 - 5) * Math.random())).toFixed(2);
    document.getElementById('velr1').value=velread1;
    velread2 = (5 + ((5.55 -5) * Math.random())).toFixed(2);
    document.getElementById('velr2').value=velread2;
    velread3 = (5 + ((5.75 - 5) * Math.random())).toFixed(2);
    document.getElementById('velr3').value=velread3;
    clearInterval(moveanemometerstick);
   
    /* Inclined manometer reading*/
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    let centerX = 2, centerY = 235;
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 5;
    ctx.beginPath();
    
    ctx.moveTo(centerX, 220);   //centerY-canvasc = 235-7
    
    
    ctx.lineTo(2, 240);
    ctx.stroke();
    document.getElementById('msbtn').disabled=true;
    avgvel =(((parseFloat(velread1)) + (parseFloat(velread2))+ (parseFloat(velread3)))/3).toFixed(2);
    document.getElementById('avi').value=avgvel;
    prdiff=15.38;
    document.getElementById('pdi').value=prdiff;
    qflow=0.13;
    document.getElementById('qfi').value=qflow;
    frictprd=0.11;
    document.getElementById('fpdi').value=frictprd;
   }
   if(countanbtnclk ==3){
    velread1 = (7 + ((7.15 - 7) * Math.random())).toFixed(2);
    document.getElementById('velr1').value=velread1;
    velread2 = (7 + ((7.55 -7) * Math.random())).toFixed(2);
    document.getElementById('velr2').value=velread2;
    velread3 = (7 + ((7.75 - 7) * Math.random())).toFixed(2);
    document.getElementById('velr3').value=velread3;
    clearInterval(moveanemometerstick);
   
    /* Inclined manometer reading*/
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    let centerX = 2, centerY = 235;
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 5;
    ctx.beginPath();
    
    ctx.moveTo(centerX, 210);   //centerY-canvasc = 235-7
    
    
    ctx.lineTo(2, 240);
    ctx.stroke();
    document.getElementById('msbtn').disabled=true;
    prdiff=28.25;
    document.getElementById('pdi').value=prdiff;
    avgvel =(((parseFloat(velread1)) + (parseFloat(velread2))+ (parseFloat(velread3)))/3).toFixed(2);
    document.getElementById('avi').value=avgvel;
    qflow=0.13;
    document.getElementById('qfi').value=qflow;
    frictprd=0.12;
    document.getElementById('fpdi').value=frictprd;
   }


   if(countanbtnclk ==4){
    velread1 = (9 + ((9.15 -9) * Math.random())).toFixed(2);
    document.getElementById('velr1').value=velread1;
    velread2 = (9 + ((9.55 - 9) * Math.random())).toFixed(2);
    document.getElementById('velr2').value=velread2;
    velread3 = (9 + ((9.75 - 9) * Math.random())).toFixed(2);
    document.getElementById('velr3').value=velread3;
    clearInterval(moveanemometerstick);
   
    /* Inclined manometer reading*/
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    let centerX = 2, centerY = 235;
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 5;
    ctx.beginPath();
    
    ctx.moveTo(centerX, 200);   //centerY-canvasc = 235-7
    
    
    ctx.lineTo(2, 240);
    ctx.stroke();
    document.getElementById('msbtn').disabled=true;
    prdiff=34.18;
    document.getElementById('pdi').value=prdiff;
    avgvel =(((parseFloat(velread1)) + (parseFloat(velread2))+ (parseFloat(velread3)))/3).toFixed(2);
    document.getElementById('avi').value=avgvel;
    qflow=0.13;
    document.getElementById('qfi').value=qflow;
    frictprd=0.13;
    document.getElementById('fpdi').value=frictprd;
   }

  }

 

  function showformula(){
   
    document.getElementById("formulacard").style.display="block";
    document.getElementById("exitinfo").style.display="block";
    document.getElementById("info").style.display="none"; 
   
 }
 
 function hideformula(){
    document.getElementById("formulacard").style.display="none";
    document.getElementById("info").style.display="block";
    document.getElementById("exitinfo").style.display="none";
 }