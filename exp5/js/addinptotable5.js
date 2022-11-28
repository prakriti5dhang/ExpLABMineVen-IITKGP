/* Lab:exp_5_Theory of Fan Rating Test
	 File name: addinptotable5.js
   Author:Prakriti Dhang
*/

var avgv, stpr, vpr, frl, strg, tpr, qnt, aopt, effid;
var arr=[];

var nofob ;
var rows,x;

 var counttbl=0;
 var dispcnttbl;

function addresult(){
 
counttbl++;
dispcnttbl=counttbl;

 if(dispcnttbl==1){
    document.getElementById("obvtable5").style.display="block";
      var tabrowindex=0;
 otable= document.getElementById('obtable5');
 
 arr[0] =avgv;
 arr[1] =stpr;
 arr[2]=vpr;
 arr[3] =frl;
 arr[4] =strg;
 arr[5]= tpr;
 arr[6] =qnt;
 arr[7] = aopt;
 arr[8]= effid;
 
 tabrowindex + 1;

var row = otable.insertRow(++tabrowindex); // Row increment
    for (var q = 0; q <9; q++) {

        var cell = row.insertCell(q);
        cell.innerHTML = arr[q];
        //
    }

    /* clear the input area of all the readings; */
    document.getElementById('velr1').value="";
    document.getElementById('velr2').value="";
    document.getElementById('velr3').value="";
     document.getElementById('avgvi').value="";
    document.getElementById('stpi').value="";
     document.getElementById('velpi').value="";
     document.getElementById('fli').value="";
     document.getElementById('stri').value="";
    document.getElementById('tpi').value="";
     document.getElementById('qti').value="";
     document.getElementById('aropi').value="";
    document.getElementById('effc').value="";

    document.getElementById("flwdevice").style.display="block";
    document.getElementById('obbtn').disabled=true; /*observation button disabled */
    document.getElementById('yfldb').disabled=false;
}


else if(dispcnttbl==2){
    document.getElementById("obvtable5").style.display="block";
      var tabrowindex=1;
 otable= document.getElementById('obtable5');
 
 arr[0] =avgv;
 arr[1] =stpr;
 arr[2]=vpr;
 arr[3] =frl;
 arr[4] =strg;
 arr[5]= tpr;
 arr[6] =qnt;
 arr[7] = aopt;
 arr[8]= effid;
 
 tabrowindex + 1;

var row = otable.insertRow(++tabrowindex); // Row increment
    for (var q = 0; q <9; q++) {

        var cell = row.insertCell(q);
        cell.innerHTML = arr[q];
        //
    }

    /* clear the input area of all the readings; */
    document.getElementById('velr1').value="";
    document.getElementById('velr2').value="";
    document.getElementById('velr3').value="";
     document.getElementById('avgvi').value="";
    document.getElementById('stpi').value="";
     document.getElementById('velpi').value="";
     document.getElementById('fli').value="";
     document.getElementById('stri').value="";
    document.getElementById('tpi').value="";
     document.getElementById('qti').value="";
     document.getElementById('aropi').value="";
    document.getElementById('effc').value="";

    document.getElementById("flwdevice").style.display="block";
    document.getElementById('obbtn').disabled=true; /*observation button disabled */
    document.getElementById('yfldb').disabled=false;
}


else if(dispcnttbl==3){
    document.getElementById("obvtable5").style.display="block";
      var tabrowindex=2;
 otable= document.getElementById('obtable5');
 
 arr[0] =avgv;
 arr[1] =stpr;
 arr[2]=vpr;
 arr[3] =frl;
 arr[4] =strg;
 arr[5]= tpr;
 arr[6] =qnt;
 arr[7] = aopt;
 arr[8]= effid;
 
 tabrowindex + 1;

var row = otable.insertRow(++tabrowindex); // Row increment
    for (var q = 0; q <9; q++) {

        var cell = row.insertCell(q);
        cell.innerHTML = arr[q];
        //
    }

    /* clear the input area of all the readings; */
    document.getElementById('velr1').value="";
    document.getElementById('velr2').value="";
    document.getElementById('velr3').value="";
     document.getElementById('avgvi').value="";
    document.getElementById('stpi').value="";
     document.getElementById('velpi').value="";
     document.getElementById('fli').value="";
     document.getElementById('stri').value="";
    document.getElementById('tpi').value="";
     document.getElementById('qti').value="";
     document.getElementById('aropi').value="";
    document.getElementById('effc').value="";

    document.getElementById("flwdevice").style.display="block";
    document.getElementById('obbtn').disabled=true; /*observation button disabled */
    document.getElementById('yfldb').disabled=false;
}
 
else if(dispcnttbl==4){
    document.getElementById("obvtable5").style.display="block";
      var tabrowindex=3;
 otable= document.getElementById('obtable5');
 
 arr[0] =avgv;
 arr[1] =stpr;
 arr[2]=vpr;
 arr[3] =frl;
 arr[4] =strg;
 arr[5]= tpr;
 arr[6] =qnt;
 arr[7] = aopt;
 arr[8]= effid;
 
 tabrowindex + 1;

var row = otable.insertRow(++tabrowindex); // Row increment
    for (var q = 0; q <9; q++) {

        var cell = row.insertCell(q);
        cell.innerHTML = arr[q];
        //
    }

    /* clear the input area of all the readings; */
    document.getElementById('velr1').value="";
    document.getElementById('velr2').value="";
    document.getElementById('velr3').value="";
     document.getElementById('avgvi').value="";
    document.getElementById('stpi').value="";
     document.getElementById('velpi').value="";
     document.getElementById('fli').value="";
     document.getElementById('stri').value="";
    document.getElementById('tpi').value="";
     document.getElementById('qti').value="";
     document.getElementById('aropi').value="";
    document.getElementById('effc').value="";

    document.getElementById("flwdevice").style.display="block";
    document.getElementById('obbtn').disabled=true; /*observation button disabled */
    document.getElementById('yfldb').disabled=false;
}
   
else if(dispcnttbl==5){
    document.getElementById("obvtable5").style.display="block";
      var tabrowindex=4;
 otable= document.getElementById('obtable5');
 
 arr[0] =avgv;
 arr[1] =stpr;
 arr[2]=vpr;
 arr[3] =frl;
 arr[4] =strg;
 arr[5]= tpr;
 arr[6] =qnt;
 arr[7] = aopt;
 arr[8]= effid;
 
 tabrowindex + 1;

var row = otable.insertRow(++tabrowindex); // Row increment
    for (var q = 0; q <9; q++) {

        var cell = row.insertCell(q);
        cell.innerHTML = arr[q];
        //
    }

    /* clear the input area of all the readings; */
    document.getElementById('velr1').value="";
    document.getElementById('velr2').value="";
    document.getElementById('velr3').value="";
     document.getElementById('avgvi').value="";
    document.getElementById('stpi').value="";
     document.getElementById('velpi').value="";
     document.getElementById('fli').value="";
     document.getElementById('stri').value="";
    document.getElementById('tpi').value="";
     document.getElementById('qti').value="";
     document.getElementById('aropi').value="";
    document.getElementById('effc').value="";

    document.getElementById("flwdevice").style.display="none";
    document.getElementById('obbtn').disabled=true; /*observation button disabled */
    document.getElementById('yfldb').disabled=false;
    document.getElementById("graphd").style.display="block";
    document.getElementById("velread").style.display="none";
    document.getElementById("measureddata").style.display="none";
    document.getElementById("effdatad").style.display="none";
    document.getElementById("obsanem").style.display="none";
   

}

   /*  Scroll down and after 3000 ms scroll up  */
   document.body.scrollBy(0,500);
   document.documentElement.scrollBy(0,500);
   setTimeout(function(){
       document.body.scrollTop = 180;
       document.documentElement.scrollTop =180;
   }, 3000);

    }


    


      
  
          

    
  

    

       
       
       
      

