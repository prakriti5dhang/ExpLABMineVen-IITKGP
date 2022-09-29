/* Lab:exp_6_Establishment of the Relationship between Kata Cooling Power and Air Velocity
	 File name: addinptotable6.js
   Author:Prakriti Dhang
*/

var timevt, airvelvt, twvt, wkcpvt;
var arr=[];

var nofob ;
var rows,x;
var countaddbtnclk;
var countatbtn=0;

function addresult(){
  countatbtn++;
    countaddbtnclk =countatbtn;
  
    if(countaddbtnclk==1){
    document.getElementById('contldevice1').style.display="block";
    
    document.getElementById('obvtable6').style.display="block";
    timevt = document.getElementById('timev').value;
     
    airvelvt=document.getElementById('airvel').value;
     twvt=document.getElementById('temptw').value;
     wkcpvt=document.getElementById('wkcp').value;
    


      var tabrowindex=0;
 otable= document.getElementById('obtable6');

 arr[0] =timevt;
 arr[1] =airvelvt;
 arr[2]=twvt;
 arr[3]=wkcpvt;
    

 tabrowindex + 1;

var row = otable.insertRow(++tabrowindex); // Row increment
    for (var q = 0; q < 4; q++) {

        var cell = row.insertCell(q);
        cell.innerHTML = arr[q];
        //
    }
 /* clear the input area of all the readings; */
    document.getElementById('timev').value='';
    document.getElementById('airvel').value='';
    document.getElementById('temptw').value='';
    document.getElementById('wkcp').value='';
   
    
        
   
   document.getElementById('obbtn').disabled=true; /*observation button disabled */


   /*  Scroll down and after 3000 ms scroll up  */
   document.body.scrollBy(0,500);
   document.documentElement.scrollBy(0,500);
   setTimeout(function(){
       document.body.scrollTop = 50;
       document.documentElement.scrollTop =50;
   }, 3000);

    }


    if(countaddbtnclk==2){

      document.getElementById('contldevice2').style.display="block";
      document.getElementById('contldevice1').style.display="none";
      document.getElementById('obvtable6').style.display="block";
      timevt = document.getElementById('timev').value;
       
      airvelvt=document.getElementById('airvel').value;
       twvt=document.getElementById('temptw').value;
       wkcpvt=document.getElementById('wkcp').value;
      
  
  
        var tabrowindex=1;
   otable= document.getElementById('obtable6');
  
   arr[0] =timevt;
   arr[1] =airvelvt;
   arr[2]=twvt;
 arr[3]=wkcpvt;

 tabrowindex + 1;

var row = otable.insertRow(++tabrowindex); // Row increment
    for (var q = 0; q < 4; q++) {

        var cell = row.insertCell(q);
        cell.innerHTML = arr[q];
        //
    }
 /* clear the input area of all the readings; */
 document.getElementById('timev').value='';
 document.getElementById('airvel').value='';
 document.getElementById('temptw').value='';
 document.getElementById('wkcp').value='';
    
        
   
   document.getElementById('obbtn').disabled=true; /*observation button disables */
   /*  Scroll down and after 3000 ms scroll up  */
    document.body.scrollBy(0,500);
    document.documentElement.scrollBy(0,500);
    setTimeout(function(){
        document.body.scrollTop = 50;
        document.documentElement.scrollTop =50;
    }, 3000);
      }


      if(countaddbtnclk==3){
        document.getElementById('contldevice3').style.display="block";
        document.getElementById('contldevice2').style.display="none";

        document.getElementById('obvtable6').style.display="block";
    timevt = document.getElementById('timev').value;
     
    airvelvt=document.getElementById('airvel').value;
     twvt=document.getElementById('temptw').value;
     wkcpvt=document.getElementById('wkcp').value;
    


      var tabrowindex=2;
 otable= document.getElementById('obtable6');

 arr[0] =timevt;
 arr[1] =airvelvt;
 arr[2]=twvt;
 arr[3]=wkcpvt;

 tabrowindex + 1;

var row = otable.insertRow(++tabrowindex); // Row increment
    for (var q = 0; q < 4; q++) {

        var cell = row.insertCell(q);
        cell.innerHTML = arr[q];
        //
    }
 /* clear the input area of all the readings; */
 document.getElementById('timev').value='';
 document.getElementById('airvel').value='';
 document.getElementById('temptw').value='';
 document.getElementById('wkcp').value='';
        
   
   document.getElementById('obbtn').disabled=true; /*observation button disables */
     /*  Scroll down and after 3000 ms scroll up  */
    document.body.scrollBy(0,500);
    document.documentElement.scrollBy(0,500);
    setTimeout(function(){
        document.body.scrollTop = 50;
        document.documentElement.scrollTop =50;
    }, 3000);
        }
 
 
  
        if(countaddbtnclk==4){
          document.getElementById('contldevice3').style.display="block";
          

          document.getElementById('obvtable6').style.display="block";
    timevt = document.getElementById('timev').value;
     
    airvelvt=document.getElementById('airvel').value;
     twvt=document.getElementById('temptw').value;
     wkcpvt=document.getElementById('wkcp').value;
    


      var tabrowindex=3;
 otable= document.getElementById('obtable6');

 arr[0] =timevt;
 arr[1] =airvelvt;
 arr[2]=twvt;
 arr[3]=wkcpvt;
  
   tabrowindex + 1;
  
  var row = otable.insertRow(++tabrowindex); // Row increment
      for (var q = 0; q < 4; q++) {
  
          var cell = row.insertCell(q);
          cell.innerHTML = arr[q];
          //
      }
   /* clear the input area of all the readings; */
   document.getElementById('timev').value='';
   document.getElementById('airvel').value='';
   document.getElementById('temptw').value='';
   document.getElementById('wkcp').value='';
      
      document.getElementById('graphd').style.display="block";
     
     document.getElementById('obbtn').disabled=true; /*observation button disabled */
     document.body.scrollBy(0,500);
    document.documentElement.scrollBy(0,500);
    setTimeout(function(){
        document.body.scrollTop = 50;
        document.documentElement.scrollTop =50;
    }, 3000);
          }
        }
  
          

    
  

    

       
       
       
      

