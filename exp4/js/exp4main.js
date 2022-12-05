/* Lab:exp_4_Calibration of orifice plates
	 File name: exp4main.js
   Author:Prakriti Dhang
*/
var imgobj1 = null;
var imgobj2 = null;
var imgobj3 = null;
var imgobj4 = null;
var imgobj5 = null;
var imgobja=null;

function startexp(){ /* click the start button*/
    document.getElementById('instbtn').disabled=false;
   document.getElementById('plate1').style.display="block";
   document.getElementById('obsanem').style.display="block"; /* display card flow control  */
   document.getElementById('anmbtn').disabled=true; /* anemometer traversing button*/
   document.getElementById('strtbtn').disabled=true;
   document.getElementById('utnanometer').style.display="block";
   document.getElementById('utnanometer1').style.display="none";
  document.getElementById('utnanometer2').style.display="none";
  document.getElementById('utnanometer3').style.display="none";
  document.getElementById('utnanometer4').style.display="none";
  document.getElementById('utnanometer5').style.display="none";
 
}
/*function instbtnd(){
   document.getElementById('instdisp').style.display="block";
}
function instbtnnd(){
   document.getElementById('instdisp').style.display="none";
}*/
/*function instbtndisp(){
   document.getElementById('instdisp').style.display="block";
}
function instbtndispn(){
   document.getElementById('instdisp').style.display="none";
}*/


/*function instbd(){
   document.getElementById('instdisp').style.display="block";
}*/


/* moving all the plates from bottom =10 to bottom =167 */
function moveplate1(){  /* move 1st  throtling plate to the required position*/

  var iplate1 = document.getElementById("plate1");   
  var orgbtm = -130; /* initial position */
  clearInterval(imgobj1);
  imgobj1 = setInterval(frame, 5); /* frame is 5 denotes the speed of the movement*/
  function frame() {
    if (orgbtm == 0) { /* moves to 167 bottom positon*/
      clearInterval(imgobj1); /* stops to 167 postion*/
      document.getElementById('utnanometer').style.display="none";
  document.getElementById('utnanometer1').style.display="block";
  document.getElementById('utnanometer2').style.display="none";
  document.getElementById('utnanometer3').style.display="none";
  document.getElementById('utnanometer4').style.display="none";
  document.getElementById('utnanometer5').style.display="none";
  document.getElementById('anmbtn').disabled=false;
    } else {
      orgbtm++; 
      iplate1.style.bottom = orgbtm + '%'; 
       
    }
  }

 
  
  
}


function moveplate2(){ /* move 2nd throtling plate to the required position*/
   var iplate2 = document.getElementById("plate2");   
  var orgbtm2 = -130;
  clearInterval(imgobj2);
  imgobj2 = setInterval(frame, 5);
  function frame() {
    if (orgbtm2 == 0) {
      clearInterval(imgobj2);
      document.getElementById('utnanometer2').style.display="block";
      document.getElementById('utnanometer1').style.display="none";
      document.getElementById('utnanometer3').style.display="none";
      document.getElementById('utnanometer4').style.display="none";
      document.getElementById('utnanometer5').style.display="none";
      document.getElementById('utnanometer').style.display="none";
      document.getElementById('anmbtn').disabled=false;
    } else {
      orgbtm2++; 
      iplate2.style.bottom = orgbtm2 + '%'; 
       
    }
  }
 
 
  
  }

  function moveplate3(){ /* move 3rd throtling plate to the required position*/
   var iplate3 = document.getElementById("plate3");   
   var orgbtm3 = -130;
   clearInterval(imgobj3);
   imgobj3 = setInterval(frame, 5);
   function frame() {
     if (orgbtm3 == 0) {
       clearInterval(imgobj3);
       document.getElementById('utnanometer1').style.display="none";
       document.getElementById('utnanometer2').style.display="none";
       document.getElementById('utnanometer3').style.display="block";
       document.getElementById('utnanometer4').style.display="none";
       document.getElementById('utnanometer5').style.display="none";
       document.getElementById('utnanometer').style.display="none";
       document.getElementById('anmbtn').disabled=false;
     } else {
       orgbtm3++; 
       iplate3.style.bottom = orgbtm3 + '%'; 
        
     }
   }
   
  
  }
  function moveplate4(){ /* move 4th throtling plate to the required position*/
   var iplate4 = document.getElementById("plate4");   
   var orgbtm4 = -130;
   clearInterval(imgobj4);
   imgobj4 = setInterval(frame, 5);
   function frame() {
     if (orgbtm4 == 0) {
       clearInterval(imgobj4);
       document.getElementById('utnanometer1').style.display="none";
  document.getElementById('utnanometer2').style.display="none";
  document.getElementById('utnanometer3').style.display="none";
  document.getElementById('utnanometer4').style.display="block";
  document.getElementById('utnanometer5').style.display="none";
  document.getElementById('utnanometer').style.display="none";
  document.getElementById('anmbtn').disabled=false;
     } else {
       orgbtm4++; 
       iplate4.style.bottom = orgbtm4 + '%'; 
        
     }
   }
   
  
  }

  function moveplate5(){ /* move 5th throtling plate to the required position*/
   var iplate5 = document.getElementById("plate5");   
   var orgbtm5 = -130;
   clearInterval(imgobj5);
   imgobj5 = setInterval(frame, 5);
   function frame() {
     if (orgbtm5 == 0) {
       clearInterval(imgobj5);
       document.getElementById('utnanometer1').style.display="none";
  document.getElementById('utnanometer2').style.display="none";
  document.getElementById('utnanometer3').style.display="none";
  document.getElementById('utnanometer4').style.display="none";
  document.getElementById('utnanometer5').style.display="block";
  document.getElementById('utnanometer').style.display="none";
  document.getElementById('anmbtn').disabled=false;
     } else {
       orgbtm5++; 
       iplate5.style.bottom = orgbtm5 + '%'; 
        
     }
   }
   
   
  }

function anmeasure(){  /* anemometer traversing button*/
   document.getElementById('measure').style.display="block";
   document.getElementById('anotherread').style.display="none";
   document.getElementById('strtbtn').disabled=true;
   document.getElementById('measurebtn').disabled=true;
   document.getElementById('datam').style.display="none";
   document.getElementById('user').style.display="block";
   document.getElementById('anemometerr').style.display="block";
   document.getElementById('btnobv').disabled=true;
   document.getElementById('anmbtn').disabled=true;
   document.getElementById('velread').innerHTML='1st Velocity Reading';
    moveanemometer();
   
  

   
}


  // document.getElementById('plate2').style.display="block";
   var count = 0;
   var btn = document.getElementById("yesbtn");
   var disp ;
 
   function yesread(){ /* Yes button to get another throtlling device*/
      document.getElementById('anmbtn').disabled=true;
       count++; /* increase click count  */
       disp= count;
      // alert(disp);
      document.getElementById('btnobv').disabled=true;
      
      document.getElementById('velr1').value='';
  document.getElementById('velr2').value='';
  document.getElementById('velr3').value='';

  document.getElementById('mvelr').value='';
  document.getElementById('aqr').value='';
  document.getElementById('dm').value='';
  document.getElementById('aration').value='';
  document.getElementById('pdiff').value='';
  document.getElementById('airflow').value='';
  document.getElementById('coeff').value='';
  
  document.getElementById('velread').innerHTML='1st Velocity Reading';
      if(disp==1){ /* 1st click*/
         document.getElementById('plate2').style.display="block";
         document.getElementById('plate1').style.display="none";
         document.getElementById('measure').style.display="none";
         document.getElementById('velread').disabled=false;
         document.getElementById('anotherread').style.display="none";
         document.getElementById('datam').style.display="none";
        document.getElementById('pltbtn').display="none";

      }
      else if(disp==2){ /*2nd click*/
         document.getElementById('plate3').style.display="block";
         document.getElementById('plate2').style.display="none";
         document.getElementById('measure').style.display="none";
         document.getElementById('velread').disabled=false;
         document.getElementById('anotherread').style.display="none";
         document.getElementById('datam').style.display="none";
         document.getElementById('pltbtn').display="none";
         //document.getElementById('anemometerr').style.left="390px";
        // document.getElementById('anemometerr').style.bottom="120px";
        
      }
      else if(disp==3){ /*3rd click*/
         document.getElementById('plate4').style.display="block";
         document.getElementById('plate3').style.display="none";
         document.getElementById('measure').style.display="none";
         document.getElementById('velread').disabled=false;
         document.getElementById('anotherread').style.display="none";
         document.getElementById('datam').style.display="none";
         document.getElementById('pltbtn').display="none";
      }
      else if (disp==4){ /* 4th click*/
         document.getElementById('plate5').style.display="block";
         document.getElementById('plate4').style.display="none";
         document.getElementById('measure').style.display="none";
         document.getElementById('velread').disabled=false;
         document.getElementById('anotherread').style.display="none";
         document.getElementById('datam').style.display="none";
         document.getElementById('pltbtn').display="none";
        
         //document.getElementById('yesbtn').innerHTML='Plot';

      }
      else {
        
         document.getElementById('noplatesModal').modal="show";
         document.getElementById("noplatesModal").classList.add("show");
         /*document.getElementById('anotherread').style.display="block"
         document.getElementById('pltbtn').style.display="block";
         document.getElementById('yesbtn').style.display="none";*/
         
      }
        
         //document.getElementById('pltbtn').style.display="block";
         //document.getElementById('graphd').style.display="block";
         //showplotgraph();
         //document.getElementById('noplatesModal').modal="show";
               // $('#noplatesModal').modal("show");
         //document.getElementById("noplatesModal").style.display = "block";
         //document.getElementById("noplatesModal").classList.add("show");
        //document.getElementById("noplatesModal").classList.remove("show")
        //alert("No more plates. Click Plot to view the canvas.");
         /*document.getElementById('anotherread').style.display="block";
         document.getElementById('anmbtn').disabled=true;
         document.getElementById('nobtn').style.display="block";*/
      //}

     


      
}

function noplate(){ /* display plot button */
   document.getElementById('anotherread').style.display="block";
         document.getElementById('anmbtn').disabled=true;
         document.getElementById('pltbtn').style.display="block";
         document.getElementById('yesbtn').style.display="none";
         document.getElementById("noplatesModal").style.display = "none";
     document.getElementById("noplatesModal").classList.remove("show");
     document.getElementById("yesbtn").disabled=true;

}

function closemodal(){  /*Close modal  */
   document.getElementById("noplatesModal").style.display = "none";
   document.getElementById("noplatesModal").classList.remove("show");
}

// Get the modal
var closemodalp = document.getElementById('noplatesModal');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == closemodalp) {
    closemodal()
  }
}

function showplotgraph(){ /* no button to stop taking anothe sets of reading*/
  /*let text="Press OK, if you want to proceed for graph plot.  \n Press cancel to exit from plotting";
  
   if (confirm(text) == true) {*/
      document.getElementById('graphd').style.display="block";
   document.getElementById('anotherread').style.display="none";
   document.getElementById('pltbtn').style.display="block";
   document.getElementById('pltbtn').disabled=false;
  document.getElementById('yesbtn').disabled=true;
   document.getElementById('velr1').value='';
  document.getElementById('velr2').value='';
  document.getElementById('velr3').value='';

  document.getElementById('mvelr').value='';
  document.getElementById('aqr').value='';
  document.getElementById('dm').value='';
  document.getElementById('aration').value='';
  document.getElementById('pdiff').value='';
  document.getElementById('airflow').value='';
  document.getElementById('coeff').value='';
  document.getElementById('btnobv').disabled=true;
  document.getElementById('measure').style.display="none";
  document.getElementById('datam').style.display="none";
  document.getElementById('obvtable').style.display="block";
  document.getElementById('controlpanelv').style.display="none";
  document.getElementById('cardr').style.display="none";
  document.getElementById('anmbtn').disabled=true;
  document.getElementById('obsanem').style.display="none";
 
  //document.getElementById('plotModal').style.display="none";
  //$('#plotModal').modal('hide');

} 
 //else {}

 function cancelgrph(){
   document.getElementById('anotherread').style.display="block";
   document.getElementById('graphd').style.display="none";
 }
 
 


var countv = 0;
   var btnv = document.getElementById("velread");
   var dispv ;
   var velread1, velread2, velread3;
   var velread12, velread22, velread32;
   var velread13, velread23, velread33;
   var velread14, velread24, velread34;
   var velread15, velread25, velread35;
function veloread(){  /* get the velocity reading*/
   document.getElementById('btnobv').disabled=true;
   //document.getElementById('anemometerr').style.animationPlayState = 'paused';

   //$("#anemometerr").css("bottom", "paused");

   countv++;
       dispv= countv;

       /*  1st plate velocity readings */
   if(dispv==1){ /* velocity reading 1*/
      velread1 = (2 + ((2.95 - 2) * Math.random())).toFixed(2);
      document.getElementById('velr1').value=velread1;
      document.getElementById('measurebtn').disabled=true; /*button for click to measure is disabled*/
      document.getElementById('velread').innerHTML='2nd Velocity Reading';
   }
   else if(dispv==2){ /* velocity reading 2*/
       velread2 = (3 + ((3.95 - 3) * Math.random())).toFixed(2);
      document.getElementById('velr2').value=velread2;
      document.getElementById('measurebtn').disabled=true;/*button for click to measure is disabled*/
      document.getElementById('velread').innerHTML='3rd Velocity Reading';
   }
   else if(dispv==3){ /* velocity reading 2*/
       velread3 = (4 + ((4.95 - 4) * Math.random())).toFixed(2);
      document.getElementById('velr3').value=velread3;
      document.getElementById('measurebtn').disabled=false;/*button for click to measure is enabled*/
      document.getElementById("velread").disabled=true;/*button for velread is disabled*/
      document.getElementById('velread').innerHTML='3rd Velocity Reading';
      
      document.getElementById('user').style.display="block";
      document.getElementById('anemometerr').style.display="block";/* display anemometer*/
      clearInterval(moveanemometerstick);
      
      
   
     
   }
/*  2nd plate velocity readings */
   else if(dispv==4){ /* velocity reading 1*/
      velread12 = (2.25 + ((2.75 - 2.25) * Math.random())).toFixed(2);
      document.getElementById('velr1').value=velread12;
      document.getElementById('measurebtn').disabled=true;/*button for click to measure is disabled*/
      document.getElementById('velread').innerHTML='2nd Velocity Reading';
   }
   else if(dispv==5){ /* velocity reading 2*/
      velread22 = (3.25 + ((3.75 - 3.25) * Math.random())).toFixed(2);
      document.getElementById('velr2').value=velread22;
      document.getElementById('measurebtn').disabled=true;/*button for click to measure is disabled*/
      document.getElementById('velread').innerHTML='3rd Velocity Reading';
   }
   else if(dispv==6){ /* velocity reading 3*/
      velread32 = (4.25 + ((4.75 - 4.25) * Math.random())).toFixed(2);
      document.getElementById('velr3').value=velread32;
      document.getElementById('measurebtn').disabled=false;/*button for click to measure is enabled*/
      document.getElementById("velread").disabled=true;/*button for velread is disabled*/
      document.getElementById('velread').innerHTML='3rd Velocity Reading';
      document.getElementById('user').style.display="block";
      document.getElementById('anemometerr').style.display="block";/* display anemometer*/
      clearInterval(moveanemometerstick);
   }
   /*  3rd plate velocity readings */
   else if(dispv==7){ /* velocity reading 1*/
      velread13 = (2.6 + ((2.92 - 2.6) * Math.random())).toFixed(2);
      document.getElementById('velr1').value=velread13;
      document.getElementById('measurebtn').disabled=true;/*button for click to measure is disabled*/
      document.getElementById('velread').innerHTML='2nd Velocity Reading';
   }
   else if(dispv==8){ /* velocity reading 2*/
      velread23 = (3.6 + ((3.92 - 3.6) * Math.random())).toFixed(2);
      document.getElementById('velr2').value=velread23;
      document.getElementById('measurebtn').disabled=true;/*button for click to measure is disabled*/
      document.getElementById('velread').innerHTML='3rd Velocity Reading';
   }
   else if(dispv==9){ /* velocity reading 3*/
      velread33 = (4.6 + ((4.92 - 4.6) * Math.random())).toFixed(2);
      document.getElementById('velr3').value=velread33;
      document.getElementById('measurebtn').disabled=false;/*button for click to measure is enabled*/
      document.getElementById("velread").disabled=true; /*button for velread is disabled*/
      document.getElementById('velread').innerHTML='3rd Velocity Reading';
      document.getElementById('user').style.display="block";
      document.getElementById('anemometerr').style.display="block";/* display anemometer*/
      clearInterval(moveanemometerstick);
   }
/*  4th plate velocity readings */
   else if(dispv==10){ /* velocity reading 1*/
      velread14 = (2.75 + ((2.95 - 2.75) * Math.random())).toFixed(2);
      document.getElementById('velr1').value=velread14;
      document.getElementById('measurebtn').disabled=true;/*button for click to measure is disabled*/
      document.getElementById('velread').innerHTML='2nd Velocity Reading';
   }
   else if(dispv==11){ /* velocity reading 2*/
      velread24 = (3.65 + ((3.65 - 3.65) * Math.random())).toFixed(2);
      document.getElementById('velr2').value=velread24;
      document.getElementById('measurebtn').disabled=true;/*button for click to measure is disabled*/
      document.getElementById('velread').innerHTML='3rd Velocity Reading';
   }
   else if(dispv==12){ /* velocity reading 3*/
      velread34 = (4.75 + ((4.95 - 4.75) * Math.random())).toFixed(2);
      document.getElementById('velr3').value=velread34;
      document.getElementById('measurebtn').disabled=false;/*button for click to measure is enabled*/
      document.getElementById("velread").disabled=true; /*button for velread is disabled*/
      document.getElementById('velread').innerHTML='3rd Velocity Reading';
      document.getElementById('user').style.display="block";
      document.getElementById('anemometerr').style.display="block";/* display anemometer*/
      clearInterval(moveanemometerstick);
   }
/*  5th plate velocity readings */
   else if(dispv==13){ /* velocity reading 1*/
      velread15 = (3.75 + ((3.95 - 3.75) * Math.random())).toFixed(2);
      document.getElementById('velr1').value=velread15;
      document.getElementById('measurebtn').disabled=true;/*button for click to measure is disabled*/
      document.getElementById('velread').innerHTML='2nd Velocity Reading';
   }
   else if(dispv==14){ /* velocity reading 2*/
      velread25 = (4.65 + ((4.65 - 4.65) * Math.random())).toFixed(2);
      document.getElementById('velr2').value=velread25;
      document.getElementById('measurebtn').disabled=true;/*button for click to measure is disabled*/
      document.getElementById('velread').innerHTML='3rd Velocity Reading';
   }
   else if(dispv==15){ /* velocity reading 3*/
      velread35 = (5.75 + ((7.75 - 7.75) * Math.random())).toFixed(2);
      document.getElementById('velr3').value=velread35; /* 3rd vel read adding to 3rd textbox*/
      document.getElementById('measurebtn').disabled=false; /*button for click to measure is enabled */
      document.getElementById("velread").disabled=true; /*button for velread is disabled */
      document.getElementById('velread').innerHTML='3rd Velocity Reading'; /* change button text to 3rd vel reading */
      document.getElementById('user').style.display="block";
      document.getElementById('anemometerr').style.display="block"; /* display anemometer */
      clearInterval(moveanemometerstick); /* pause the movement of anemometer */
   }
}
 /*  Click to measure button (Measures mean velocity, area of cross section, 
   density of medium, cross section area ration, pressure difference, air flow quantity, coefficent discharge)  */
var countm = 0;
   var btnm = document.getElementById("velread");
   var dispm ;
   var meanv, a2reacs, densitym, maresection, prdiff, qairflow, coeffd;
   var obsnt, equ1;
function caloutput(){
   document.getElementById('datam').style.display="block"; /* card body to display calculated values after click btn click to measure*/
   document.getElementById('btnobv').disabled ="false"; /* button for add obs to the table is enabled */
   countm++;
       dispm= countm; 
       if(dispm ==1){
      obsnt = '1';
         meanv =(((parseFloat(velread1)) + (parseFloat(velread2))+ (parseFloat(velread3)))/3).toFixed(2);
         //alert(meanv);
   document.getElementById('mvelr').value=meanv; /* mean velocity */
  document.getElementById('aqr').value='0.1963';  /*A2 = Area of cross-section of the opening of the orifice plate  = dimension of orifaceplate/2 */
  document.getElementById('dm').value='1'; /*ρ =density of medium*/
  document.getElementById('aration').value='0.5000'; /* m= Cross section area ration (A2/A1)*/
  document.getElementById('pdiff').value='0.02689';  /* pressure difference = p2-p1 = (hgρ) =h x 9.81 x 1 */
   equ1='0.0524';  /*\({A2\sqrt{\frac{2(ΔP)}{ρ-(1-m^2)}}}\)*/
  document.getElementById('airflow').value='0.0315'; /* air flow quantity Q */
  document.getElementById('coeff').value='0.60'; /* α = coefficent discharge */
  document.getElementById('btnobv').disabled= false; /* button for add obs to the table is enabled */
  document.getElementById('measurebtn').disabled=true; /* button for click to measure is diabled */
  //$("#btnobv").fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
  
       }
      else if(dispm==2){
         obsnt = '2';
         meanv = (((parseFloat(velread12)) + (parseFloat(velread22))+ (parseFloat(velread32)))/3).toFixed(2);
         document.getElementById('mvelr').value=meanv; /* mean velocity */
         document.getElementById('aqr').value='0.1963'; /*A2 = Area of cross-section of the opening of the orifice plate  = dimension of orifaceplate/2 */
         document.getElementById('dm').value='1'; /*ρ =density of medium*/
         document.getElementById('aration').value='0.5000';
         document.getElementById('pdiff').value='0.03689';
         equ1='0.0614'; /*\({A2\sqrt{\frac{2(ΔP)}{ρ-(1-m^2)}}}\)*/
         document.getElementById('airflow').value='0.0380';
         document.getElementById('coeff').value='0.62';
         document.getElementById('btnobv').disabled= false; /* button for add obs to the table is enabled */
         document.getElementById('measurebtn').disabled=true; /* button for click to measure is diabled */
         //$("#btnobv").fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
       }
       else if(dispm==3){
         obsnt = '3';
         meanv = (((parseFloat(velread13)) + (parseFloat(velread23))+ (parseFloat(velread33)))/3).toFixed(2);
         document.getElementById('mvelr').value=meanv; /* mean velocity */
         document.getElementById('aqr').value='0.1963'; /*A2 = Area of cross-section of the opening of the orifice plate  = dimension of orifaceplate/2 */
         document.getElementById('dm').value='1'; /*ρ =density of medium*/
         document.getElementById('aration').value='0.5000';
         document.getElementById('pdiff').value='0.04789';
         equ1='0.0699'; /*\({A2\sqrt{\frac{2(ΔP)}{ρ-(1-m^2)}}}\)*/
         document.getElementById('airflow').value='0.0469';
         document.getElementById('coeff').value='0.68';
         document.getElementById('btnobv').disabled= false; /* button for add obs to the table is enabled */
         document.getElementById('measurebtn').disabled=true; /* button for click to measure is diabled */
        // $("#btnobv").fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
       }
       else if(dispm==4){
         obsnt = '4';
         meanv = (((parseFloat(velread14)) + (parseFloat(velread24))+ (parseFloat(velread34)))/3).toFixed(2);
         document.getElementById('mvelr').value=meanv; /* mean velocity */
         document.getElementById('aqr').value='0.1963'; /*A2 = Area of cross-section of the opening of the orifice plate  = dimension of orifaceplate/2 */
         document.getElementById('dm').value='1'; /*ρ =density of medium*/
         document.getElementById('aration').value='0.5000';
         document.getElementById('pdiff').value='0.05689';
         equ1='0.0763'; /*\({A2\sqrt{\frac{2(ΔP)}{ρ-(1-m^2)}}}\)*/
         document.getElementById('airflow').value='0.0532';
         document.getElementById('coeff').value='0.69';
         document.getElementById('btnobv').disabled= false; /* button for add obs to the table is enabled */
         document.getElementById('measurebtn').disabled=true; /* button for click to measure is diabled */
        // $("#btnobv").fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
       }

       else if(dispm==5){
         obsnt = '5';
         meanv = (((parseFloat(velread15)) + (parseFloat(velread25))+ (parseFloat(velread35)))/3).toFixed(2);
         document.getElementById('mvelr').value=meanv; /* mean velocity */
         document.getElementById('aqr').value='0.1963'; /*A2 = Area of cross-section of the opening of the orifice plate  = dimension of orifaceplate/2 */
         document.getElementById('dm').value='1'; /*ρ =density of medium*/
         document.getElementById('aration').value='0.5000';
         document.getElementById('pdiff').value='0.06889';
         equ1='0.0840'; /*\({A2\sqrt{\frac{2(ΔP)}{ρ-(1-m^2)}}}\)*/
         document.getElementById('airflow').value='0.0630';
         document.getElementById('coeff').value='0.75';
         document.getElementById('btnobv').disabled= false; /* button for add obs to the table is enabled */
         document.getElementById('measurebtn').disabled=true; /* button for click to measure is diabled */
        // $("#btnobv").fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
       }
       /* scroll down */
       document.body.scrollBy(0,500);
    document.documentElement.scrollBy(0,500);

}

 /* moves the anemometer to left- right and top-bottom direction */

   var bottom = -60; /* initial positon */
	var left = 100; /*initial position */
	var temp = bottom;
	var temp1 = left;
	var goUp = true;
	var goDown = false;
	var goLeft = false;
	var goRight = true;
   var moveanemometerstick;
function moveanemometer(){

   moveanemometerstick= setInterval(moveanmetr, 90); /* setInterval (function, frames) */
      
}
      
      
      function moveanmetr(){ 
		
		/*if(goRight) {
			temp1++;
			if(temp1 == 99) { /* move right*/
				//goRight = false;
				//goLeft = true;
			//}
		//} else if(goLeft) {
			//temp1--;
			//if(temp1 == 102) { /* move left */
			//	goLeft = false;
			//	goRight = true;
			//}
      //}
		//$("#anemometerr").css("left",temp1);

      if(goUp) {
			temp++;
			if(temp == -20) {
				goUp = false;
				goDown = true;
			}
		} else if(goDown) {
			temp--;
			if(temp == -60) {
				goDown = false;
				goUp = true;
			}
		}
		$("#anemometerr").css("bottom",temp);

	}

 /* Button to display formula */

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



 


/*function hideformula(){
   var btn = document.getElementById("hidebtn");
   if(btn.innerText=="Hide"){
      btn.innerText="Show";
      document.getElementById("formulacard").style.display="none";
     }
   else{
     btn.innerText="Hide";
     document.getElementById("formulacard").style.display="block";
     }
  
}*/

/* blinking button */
/*function show()
{
	if (document.getElementById)
	document.getElementById("btnobv").style.display = "block";
}

function hide()
{
	if (document.getElementById)
	document.getElementById("btnobv").style.display = "none";
}

for(var i=900; i < 4500; i=i+900)
{
	setTimeout("hide()",i);
	setTimeout("show()",i+450);
}*/



