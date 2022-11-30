/* Lab:exp_4_Calibration of orifice plates
	 File name: addinptotable.js
   Author:Prakriti Dhang
*/

var  otable;
var arr=[];
var tabrowindex=0;
var nofob ;
var rows,x;
var mvelr, aqr, dm, aration, pdiff,equ1,airflow,coeff;

function addresult(){
    document.getElementById('obvtable').style.display="block";
  mvelr= document.getElementById('mvelr').value;
 aqr =document.getElementById('aqr').value;
  dm= document.getElementById('dm').value;
 aration= document.getElementById('aration').value;
 pdiff= document.getElementById('pdiff').value;
 airflow= document.getElementById('airflow').value;
coeff=  document.getElementById('coeff').value;
      
 otable= document.getElementById('obtable')
 arr[0]=obsnt;
 arr[1] =mvelr;
 arr[2] =pdiff;
 arr[3]=equ1;
 arr[4]=airflow;
 arr[5]=coeff;

 tabrowindex + 1;

var row = otable.insertRow(++tabrowindex); // Row increment
    for (var q = 0; q < 6; q++) {

        var cell = row.insertCell(q);
        cell.innerHTML = arr[q];
        //
    }
 
  document.getElementById('anotherread').style.display="block";
  
   document.getElementById('measurebtn').disabled="true";
    
    document.getElementById('btnobv').disabled ="true";
 

    /*  Scroll down and after 3000 ms scroll up  */
    document.body.scrollBy(0,500);
    document.documentElement.scrollBy(0,500);
    setTimeout(function(){
        document.body.scrollTop = 50;
        document.documentElement.scrollTop =50;
    }, 3000);

   

    }

    




    

       
       
     
